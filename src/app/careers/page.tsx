import Footer from "@/components/Footer";
import JobBoard from "@/components/JobBoard";
import CareersHero from "@/components/CareersHero";
import { getJobs } from "@/lib/jobs";

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <>
      <main style={{ background: "#01060f", minHeight: "100vh", paddingTop: "clamp(6rem, 12vw, 10rem)" }}>
        <section
          className="px-4 sm:px-6 md:px-8"
          style={{ padding: "clamp(3rem, 6vw, 6rem) 0", background: "radial-gradient(circle at 80% 30%, rgba(168,85,247,0.15), transparent 50%)" }}
        >
          <div className="container mx-auto max-w-7xl">
            <CareersHero />
            <JobBoard jobs={jobs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
