import React, { useState } from "react";

const CareerTimeline = () => {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      id: 1,
      title: "Building Core Data Skills",
      timeline: "2025 – 2026",
      status: "current",
      description: "Developing cross-functional expertise in data engineering, science, and analytics.",
      highlights: [
        "Refactoring Adobe Hackathon project with focus on production-grade data systems",
        "Building core data engineering project with ETL pipelines and ML integration",
        "Demonstrating versatility across multiple data career paths",
      ],
    },
    {
      id: 2,
      title: "FinTech Data Role Internship",
      timeline: "2026 – 2027",
      status: "upcoming",
      description: "Seeking internship opportunities in data engineering, science, or analytics at FinTech firms.",
      highlights: [
        "Summer 2026: Primary internship period",
        "Winter 2026–27: Fallback internship opportunity",
        "Focus on production data systems and real-world problem solving",
      ],
    },
    {
      id: 3,
      title: "MBA and Strategic Transition",
      timeline: "2027 – 2030",
      status: "planned",
      description: "Building strategic thinking and leadership capabilities in finance and business.",
      highlights: [
        "Focus on Finance, Risk Management, and Business Strategy",
        "Transition from individual contributor to strategic thinker",
        "Build industry network and mentorship relationships",
      ],
    },
    {
      id: 4,
      title: "Leadership in FinTech",
      timeline: "2030+",
      status: "planned",
      description: "Leading data-driven initiatives and teams in FinTech organizations.",
      highlights: [
        "VP/Director of Data, Head of Risk and Analytics, or CPO roles",
        "Apply combined expertise in data, finance, and technology",
        "Option to found own FinTech venture",
      ],
    },
  ];

  const getStatusLabel = (status) => {
    switch (status) {
      case "current": return "Current";
      case "upcoming": return "Upcoming";
      case "planned": return "Planned";
      default: return "";
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "current": return { background: "#1F2937", color: "#fff" };
      case "upcoming": return { background: "#E5E7EB", color: "#1F2937" };
      case "planned": return { background: "#F9FAFB", color: "#6B7280", border: "1px solid #E5E7EB" };
      default: return {};
    }
  };

  return (
    <section
      id="career-timeline"
      className="py-20 px-6"
      style={{ background: "#F9FAFB", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6B7280" }}>
            Path Forward
          </p>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#1F2937", letterSpacing: "-0.02em" }}>
            Career Trajectory
          </h2>
          <p style={{ color: "#6B7280" }}>
            Progression from data specialist to strategic leadership in FinTech.
          </p>
        </div>

        <div className="space-y-3">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="overflow-hidden transition-colors"
              style={{ border: "1px solid #E5E7EB", borderRadius: "8px", background: "#fff" }}
            >
              <button
                onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                className="w-full px-6 py-5 text-left transition-colors flex items-start justify-between"
                style={{ background: expandedPhase === phase.id ? "#F9FAFB" : "#fff" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F9FAFB"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = expandedPhase === phase.id ? "#F9FAFB" : "#fff"; }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-base font-semibold" style={{ color: "#1F2937" }}>
                      {phase.title}
                    </h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded"
                      style={getStatusStyle(phase.status)}
                    >
                      {getStatusLabel(phase.status)}
                    </span>
                  </div>
                  <p className="text-xs mb-2" style={{ color: "#6B7280" }}>{phase.timeline}</p>
                  <p className="text-sm" style={{ color: "#374151" }}>{phase.description}</p>
                </div>
                <span className="ml-6 text-xl font-light flex-shrink-0" style={{ color: "#9CA3AF" }}>
                  {expandedPhase === phase.id ? "−" : "+"}
                </span>
              </button>

              {expandedPhase === phase.id && (
                <div className="px-6 py-4" style={{ borderTop: "1px solid #E5E7EB", background: "#F9FAFB" }}>
                  <ul className="space-y-2.5">
                    {phase.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm flex gap-3" style={{ color: "#374151" }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: "#9CA3AF" }}>—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
