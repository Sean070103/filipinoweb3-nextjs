import customJobs from "@/data/custom-jobs.json";

const SHEETS_CSV_URL = process.env.JOBS_SHEET_CSV_URL ?? "";
const EXPIRY_DAYS = 60;

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  level: string;
  url: string;
  postedAt: string;
  category: string;
  color: string;
  source: string;
  philippinesFriendly: boolean;
  description?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Blockchain Developer": "#22d3ee",
  "NFT & Gaming": "#a855f7",
  "Web3 Marketing": "#f97316",
  "DeFi Analyst": "#22d3ee",
  "Full-Stack Web3": "#a855f7",
  "Research & Education": "#f97316",
  "AI & Machine Learning": "#a855f7",
};

function parseDate(raw: string): number {
  if (!raw) return Date.now();
  const mdyMatch = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (mdyMatch) {
    const [, m, d, y] = mdyMatch;
    return new Date(`${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`).getTime();
  }
  return new Date(raw).getTime();
}

function isExpired(postedAt: string): boolean {
  return Date.now() - parseDate(postedAt) > EXPIRY_DAYS * 86400000;
}

function normalizeCategory(raw: string): string {
  const r = raw.toLowerCase();
  if (r.includes("blockchain") || r.includes("smart contract") || r.includes("solidity")) return "Blockchain Developer";
  if (r.includes("nft") || r.includes("gaming") || r.includes("gamefi")) return "NFT & Gaming";
  if (r.includes("marketing") || r.includes("community") || r.includes("growth")) return "Web3 Marketing";
  if (r.includes("defi") || r.includes("analyst")) return "DeFi Analyst";
  if (r.includes("ai") || r.includes("machine learning") || r.includes("ml")) return "AI & Machine Learning";
  if (r.includes("research") || r.includes("education")) return "Research & Education";
  if (r.includes("full") || r.includes("stack") || r.includes("web3")) return "Full-Stack Web3";
  return raw || "Full-Stack Web3";
}

function normalizeType(raw: string): string {
  const r = raw.toLowerCase();
  if (r.includes("full")) return "Full-time";
  if (r.includes("part")) return "Part-time";
  if (r.includes("contract") || r.includes("freelance")) return "Contract";
  if (r.includes("intern")) return "Internship";
  return raw || "Full-time";
}

function parseCSV(csv: string): Job[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""));

  return lines.slice(1).flatMap((line) => {
    const cols: string[] = [];
    let current = "";
    let inQuotes = false;
    for (const ch of line) {
      if (ch === '"') { inQuotes = !inQuotes; continue; }
      if (ch === "," && !inQuotes) { cols.push(current.trim()); current = ""; continue; }
      current += ch;
    }
    cols.push(current.trim());

    const row: Record<string, string> = {};
    headers.forEach((h, i) => { row[h] = cols[i] ?? ""; });

    const rawDate = row["Posted Date"] || row["postedAt"] || row["Timestamp"] || "";
    if (rawDate && isExpired(rawDate)) return [];

    const postedAt = rawDate ? new Date(parseDate(rawDate)).toISOString() : new Date().toISOString();

    const rawCategory = row["Category"] || row["category"] || "";
    const category = normalizeCategory(rawCategory);
    const rawType = row["Type"] || row["type"] || "";
    const type = normalizeType(rawType);

    return [{
      id: `sheet-${row["id"] || Math.random().toString(36).slice(2)}`,
      title: row["Job Title"] || row["title"] || "",
      company: row["Company"] || row["company"] || "",
      location: row["Location"] || row["location"] || "Remote",
      type: type,
      level: row["Level"] || row["level"] || "Mid",
      url: row["Apply URL"] || row["url"] || "#",
      postedAt,
      category,
      color: CATEGORY_COLORS[category] ?? "#22d3ee",
      source: "Sheet",
      philippinesFriendly: true,
      description: row["Description"] || row["description"] || "",
    }];
  });
}

export async function getJobs(): Promise<Job[]> {
  try {
  const [sheetJobs, localJobs] = await Promise.all([
    SHEETS_CSV_URL
      ? fetch(SHEETS_CSV_URL, { cache: "no-store", redirect: "follow" })
          .then((r) => r.text())
          .then(parseCSV)
          .catch(() => [] as Job[])
      : Promise.resolve([] as Job[]),
    Promise.resolve(
      (customJobs as Job[])
        .filter((j) => !isExpired(j.postedAt))
        .map((j) => ({ ...j, philippinesFriendly: true }))
    ),
  ]);

  return [...localJobs, ...sheetJobs].sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  );
  } catch {
    return (customJobs as Job[]).map((j) => ({ ...j, philippinesFriendly: true }));
  }
}
