"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink } from "lucide-react";
import type { Job } from "@/lib/jobs";

const CATEGORIES = ["All", "Blockchain Developer", "NFT & Gaming", "Web3 Marketing", "DeFi Analyst", "Full-Stack Web3", "Research & Education", "AI & Machine Learning"];
const TYPES = ["All", "Full-time", "Part-time", "Contract"];
const LOCATIONS = ["All", "Remote", "On-site"];
const LEVELS = ["All", "Entry", "Mid", "Senior", "Intern"];
const PAGE_SIZE = 10;

const FONT = 'var(--font-press-start-2p), "Courier New", monospace';
const MONO = '"Courier New", monospace';

function timeAgo(dateStr: string) {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "1d ago";
  if (days < 30) return `${days}d ago`;
  if (days < 60) return "1mo ago";
  return `${Math.floor(days / 30)}mo ago`;
}

const filterBtn = (active: boolean, color = "#22d3ee") => ({
  padding: "0.4rem 0.9rem",
  borderRadius: "6px",
  fontFamily: FONT,
  fontSize: "clamp(0.4rem, 0.7vw, 0.55rem)",
  letterSpacing: "0.05em",
  cursor: "pointer",
  border: active ? `1px solid ${color}` : "1px solid rgba(255,255,255,0.12)",
  background: active ? `${color}20` : "rgba(255,255,255,0.04)",
  color: active ? color : "rgba(255,255,255,0.6)",
  transition: "all 0.2s ease",
});

export default function JobBoard({ jobs }: { jobs: Job[] }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");
  const [level, setLevel] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let r = [...jobs];
    if (search) {
      const q = search.toLowerCase();
      r = r.filter((j) =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q)
      );
    }
    if (category !== "All") r = r.filter((j) => j.category === category);
    if (type !== "All") r = r.filter((j) => j.type.toLowerCase().includes(type.toLowerCase()));
    if (level !== "All") r = r.filter((j) => j.level === level);
    if (location !== "All") r = r.filter((j) =>
      location === "Remote"
        ? j.location.toLowerCase().includes("remote")
        : !j.location.toLowerCase().includes("remote")
    );
    r.sort((a, b) => {
      const d = new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
      return sort === "Oldest" ? -d : d;
    });
    return r;
  }, [jobs, search, sort, category, type, level, location]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const resetPage = () => setPage(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ marginTop: "clamp(4rem, 8vw, 6rem)" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        <span style={{ fontFamily: FONT, fontSize: "clamp(0.5rem, 0.9vw, 0.6rem)", letterSpacing: "0.2em", color: "#22d3ee", display: "block", marginBottom: "0.75rem" }}>
          ▶ HIRING NOW
        </span>
        <h2 style={{ fontFamily: FONT, fontSize: "clamp(1rem, 2.5vw, 2rem)", background: "linear-gradient(135deg, #22d3ee, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "0.5rem" }}>
          WEB3 JOB BOARD
        </h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)", lineHeight: 1.7, maxWidth: "560px", margin: 0 }}>
          Curated Web3 roles — updated every 5 minutes.
        </p>
      </div>

      {/* Search + Sort */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "200px", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(34,211,238,0.3)", borderRadius: "8px", padding: "0.7rem 1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Search size={14} style={{ color: "#22d3ee", flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search roles, companies, locations..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); resetPage(); }}
            style={{ background: "transparent", border: "none", outline: "none", width: "100%", color: "#fff", fontFamily: MONO, fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)" }}
          />
        </div>
        <select
          value={sort}
          onChange={(e) => { setSort(e.target.value); resetPage(); }}
          style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(34,211,238,0.3)", borderRadius: "8px", padding: "0.7rem 1rem", color: "#fff", fontFamily: MONO, fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)", cursor: "pointer" }}
        >
          <option style={{ background: "#0a0f1a" }}>Newest</option>
          <option style={{ background: "#0a0f1a" }}>Oldest</option>
        </select>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "clamp(1.5rem, 3vw, 2rem)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {CATEGORIES.map((c) => <button key={c} onClick={() => { setCategory(c); resetPage(); }} style={filterBtn(category === c, "#22d3ee")}>{c}</button>)}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {TYPES.map((t) => <button key={t} onClick={() => { setType(t); resetPage(); }} style={filterBtn(type === t, "#a855f7")}>{t}</button>)}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {LEVELS.map((l) => <button key={l} onClick={() => { setLevel(l); resetPage(); }} style={filterBtn(level === l, "#22d3ee")}>{l}</button>)}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {LOCATIONS.map((l) => <button key={l} onClick={() => { setLocation(l); resetPage(); }} style={filterBtn(location === l, "#f97316")}>{l}</button>)}
        </div>
      </div>

      {/* Count */}
      <p style={{ fontFamily: MONO, fontSize: "clamp(0.65rem, 1vw, 0.8rem)", color: "rgba(255,255,255,0.35)", marginBottom: "1rem" }}>
        {filtered.length} open role{filtered.length !== 1 ? "s" : ""} · updated every 5 mins
      </p>

      {/* Job Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem", color: "rgba(255,255,255,0.4)", fontFamily: FONT, fontSize: "0.6rem", lineHeight: 2 }}>
            NO OPEN ROLES RIGHT NOW<br />
            <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: "rgba(255,255,255,0.25)" }}>Check back soon — new Web3 jobs are posted regularly.</span>
          </div>
        )}
        {paginated.map((job, i) => (
          <motion.a
            key={job.id}
            href={job.url}
            target={job.url.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
            whileHover={{ y: -3 }}
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              gap: "1rem", flexWrap: "wrap",
              background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(15,15,35,0.6))",
              border: `1px solid ${job.color}25`,
              borderRadius: "0.875rem",
              padding: "clamp(0.9rem, 1.8vw, 1.25rem) clamp(1rem, 2vw, 1.75rem)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              textDecoration: "none", cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", gap: "0.9rem", alignItems: "center", minWidth: 0 }}>
              <div style={{
                width: "clamp(38px, 5vw, 48px)", height: "clamp(38px, 5vw, 48px)",
                borderRadius: "8px", flexShrink: 0,
                background: `linear-gradient(135deg, ${job.color}20, ${job.color}08)`,
                border: `1px solid ${job.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: FONT, fontSize: "clamp(0.4rem, 0.7vw, 0.55rem)", color: job.color,
              }}>
                {job.source === "FW3" ? "FW3" : "W3"}
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontFamily: FONT, fontSize: "clamp(0.55rem, 1vw, 0.72rem)", letterSpacing: "0.04em", color: "#fff", marginBottom: "0.3rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {job.title}
                </h3>
                <p style={{ fontFamily: MONO, fontSize: "clamp(0.65rem, 0.95vw, 0.8rem)", color: "rgba(255,255,255,0.45)", margin: 0 }}>
                  {job.company} · {job.location}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
              <div style={{ textAlign: "right" }}>
                <span style={{ display: "inline-block", fontFamily: FONT, fontSize: "clamp(0.4rem, 0.7vw, 0.55rem)", color: job.color, border: `1px solid ${job.color}40`, borderRadius: "4px", padding: "0.2rem 0.5rem", marginBottom: "0.3rem" }}>
                  {job.category}
                </span>
                <p style={{ fontFamily: MONO, fontSize: "clamp(0.6rem, 0.85vw, 0.75rem)", color: "rgba(255,255,255,0.3)", margin: 0 }}>
                  {job.type} · {timeAgo(job.postedAt)}
                </p>
              </div>
              <ExternalLink size={14} style={{ color: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
            style={{ fontFamily: FONT, fontSize: "clamp(0.4rem, 0.65vw, 0.52rem)", padding: "0.5rem 1rem", background: page === 1 ? "rgba(255,255,255,0.04)" : "rgba(34,211,238,0.12)", border: page === 1 ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(34,211,238,0.4)", borderRadius: "6px", color: page === 1 ? "rgba(255,255,255,0.2)" : "#22d3ee", cursor: page === 1 ? "not-allowed" : "pointer" }}>
            ← PREV
          </motion.button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <motion.button key={p} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setPage(p)}
              style={{ fontFamily: FONT, fontSize: "clamp(0.4rem, 0.65vw, 0.52rem)", padding: "0.5rem 0.8rem", background: page === p ? "rgba(34,211,238,0.2)" : "rgba(255,255,255,0.04)", border: page === p ? "1px solid #22d3ee" : "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", color: page === p ? "#22d3ee" : "rgba(255,255,255,0.4)", cursor: "pointer" }}>
              {p}
            </motion.button>
          ))}
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            style={{ fontFamily: FONT, fontSize: "clamp(0.4rem, 0.65vw, 0.52rem)", padding: "0.5rem 1rem", background: page === totalPages ? "rgba(255,255,255,0.04)" : "rgba(34,211,238,0.12)", border: page === totalPages ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(34,211,238,0.4)", borderRadius: "6px", color: page === totalPages ? "rgba(255,255,255,0.2)" : "#22d3ee", cursor: page === totalPages ? "not-allowed" : "pointer" }}>
            NEXT →
          </motion.button>
        </div>
      )}

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          marginTop: "clamp(3rem, 6vw, 5rem)",
          background: "linear-gradient(135deg, rgba(34,211,238,0.05), rgba(168,85,247,0.05))",
          border: "1px solid rgba(34,211,238,0.2)",
          borderRadius: "1.25rem",
          padding: "clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 2.5rem)",
          position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(34,211,238,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(168,85,247,0.07) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: FONT, fontSize: "clamp(0.45rem, 0.8vw, 0.58rem)", letterSpacing: "0.2em", color: "#22d3ee", display: "block", marginBottom: "0.75rem" }}>▶ JOB ALERTS</span>
          <h3 style={{ fontFamily: FONT, fontSize: "clamp(0.8rem, 1.8vw, 1.3rem)", background: "linear-gradient(135deg, #22d3ee, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "0.5rem" }}>
            NEW WEB3 ROLES, IN YOUR INBOX
          </h3>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)", marginBottom: "1.5rem", fontFamily: MONO }}>
            One weekly email with every new role that matches your skills.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <input placeholder="you@email.com" style={{ flex: 1, minWidth: "180px", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(34,211,238,0.3)", borderRadius: "8px", padding: "0.7rem 1rem", color: "#fff", fontFamily: MONO, fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)", outline: "none" }} />
            <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7)", border: "none", borderRadius: "8px", padding: "0.7rem clamp(1rem, 2vw, 1.75rem)", color: "#000", fontFamily: FONT, fontSize: "clamp(0.45rem, 0.8vw, 0.58rem)", letterSpacing: "0.08em", cursor: "pointer", whiteSpace: "nowrap" }}>
              GET ALERTS
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
