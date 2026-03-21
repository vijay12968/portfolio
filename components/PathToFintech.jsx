import React, { useState } from "react";
import TimelineComponent from "./TimelineComponent";

const PathToFintech = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Adobe Hackathon → Data System Optimization",
      status: "⏳ Refactoring",
      timeline: "Next 2-3 weeks",
      rolesApplicable: "Data Engineer • Data Scientist • Data Analyst",
      original:
        "PDF Intelligence system with TF-IDF, semantic search, multilingual support",
      refactoringFor:
        "Data perspective—demonstrating expertise across multiple data career paths",
      focusAreas: [
        "ETL workflow design & data pipeline architecture (Data Engineer focus)",
        "Feature engineering & ML model optimization (Data Scientist focus)",
        "Analytics queries & insights generation (Data Analyst focus)",
        "Performance optimization & scalability",
        "Monitoring, logging, and data quality checks",
      ],
      why: "Shows you can architect data systems, build ML features, AND derive insights—flexible across all data roles",
      achievement: "Adobe Hackathon finalist (4000+ teams)",
    },
    {
      id: 2,
      title: "Data Role Ready: Core Skills Project",
      status: "🔨 In Progress",
      timeline: "Parallel to Adobe refactor",
      rolesApplicable: "Data Engineer • Data Scientist • Data Analyst",
      original: "Building from scratch to demonstrate data competency",
      refactoringFor:
        "Showcase core data skills needed for ANY data role in FinTech",
      focusAreas: [
        "Data ingestion & transformation (Engineer skill)",
        "Statistical analysis & modeling (Scientist skill)",
        "Business analytics & storytelling (Analyst skill)",
        "SQL optimization & query patterns",
        "Data visualization & reporting",
      ],
      why: "Demonstrates versatility—you can fit into Data Engineer, Data Scientist, or Data Analyst roles depending on company needs",
      achievement: "Breadth across entire data stack",
    },
  ];

  const milestones = [
    {
      month: "March 2026",
      action: "Refactor Adobe project for multiple data perspectives",
      why: "Show you fit Engineer, Scientist, and Analyst roles",
      status: "current",
    },
    {
      month: "April 2026",
      action: "Complete Project 2: Core data skills demo",
      why: "Prove versatility across data career paths",
      status: "current",
    },
    {
      month: "May 2026",
      action: "Apply to Data roles (any level: Engineer/Scientist/Analyst)",
      why: "Flexible internship hunting across data space",
      status: "upcoming",
    },
    {
      month: "June-July 2026",
      action: "First Internship (Target)",
      why: "Real experience in any data role at FinTech",
      status: "upcoming",
    },
    {
      month: "Aug-Nov 2026",
      action: "Apply for winter internship opportunities",
      why: "Backup internship if summer doesn't work",
      status: "planned",
    },
    {
      month: "Dec-Jan 2026-27",
      action: "Second Internship (Fallback)",
      why: "Lock in data experience before MBA",
      status: "planned",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "current":
        return "border-green-500 bg-green-50";
      case "upcoming":
        return "border-blue-500 bg-blue-50";
      case "planned":
        return "border-gray-400 bg-gray-50";
      default:
        return "border-gray-400 bg-gray-50";
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case "current":
        return "bg-green-500";
      case "upcoming":
        return "bg-blue-500";
      case "planned":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="space-y-16">
      <section id="path-to-fintech" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">My Path in Data</h2>
            <p className="text-lg text-gray-600 mb-8">
              Building expertise across data engineering, science, and analytics to be ready for any data role
            </p>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-100 border-2 border-indigo-500 rounded-lg p-6">
              <h3 className="font-bold text-indigo-900 mb-3">
                Current Status: Data-Ready → Internship Ready
              </h3>
              <p className="text-sm text-indigo-800 mb-3">
                Ready for <strong>Data Engineer</strong>, <strong>Data Scientist</strong>, or <strong>Data Analyst</strong> roles
              </p>
              <div className="text-sm text-indigo-800 space-y-2">
                <p>
                  <strong>Phase 1:</strong> Build Cross-Functional Data Skills (2025-2026) ← YOU ARE HERE
                </p>
                <p className="text-gray-600">↓</p>
                <p>
                  <strong>Phase 2:</strong> Data Role Internship at FinTech (Summer/Winter 2026-27)
                </p>
                <p className="text-gray-600">↓</p>
                <p>
                  <strong>Phase 3:</strong> MBA & Strategic Transition (2027-2030)
                </p>
                <p className="text-gray-600">↓</p>
                <p>
                  <strong>Phase 4:</strong> Leadership Role in FinTech (2030+)
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Data Roles You&apos;re Ready For</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
                <h4 className="font-bold text-blue-900 mb-3">📊 Data Engineer</h4>
                <p className="text-sm text-blue-800 mb-3">
                  Building ETL pipelines, data warehouses, streaming systems
                </p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>✓ SQL optimization</li>
                  <li>✓ Pipeline design</li>
                  <li>✓ Docker & deployment</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-5">
                <h4 className="font-bold text-purple-900 mb-3">🧪 Data Scientist</h4>
                <p className="text-sm text-purple-800 mb-3">
                  Building ML models, statistical analysis, predictive systems
                </p>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>✓ ML models</li>
                  <li>✓ Feature engineering</li>
                  <li>✓ Statistical analysis</li>
                </ul>
              </div>

              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-5">
                <h4 className="font-bold text-amber-900 mb-3">📈 Data Analyst</h4>
                <p className="text-sm text-amber-800 mb-3">
                  Exploratory analysis, dashboards, business insights, reporting
                </p>
                <ul className="text-xs text-amber-700 space-y-1">
                  <li>✓ SQL queries</li>
                  <li>✓ Visualization</li>
                  <li>✓ Business insights</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">What I&apos;m Building Right Now</h3>

            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border-2 rounded-lg p-6 cursor-pointer transition-all hover:shadow-md border-green-500 bg-green-50"
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h4 className="text-lg font-bold">{project.title}</h4>
                        <span className="text-sm px-3 py-1 bg-gray-200 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs text-indigo-600 font-semibold mb-2">
                        {project.rolesApplicable}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">{project.timeline}</p>
                    </div>
                    <span className="text-2xl font-light text-gray-400 ml-4">
                      {expandedProject === project.id ? "−" : "+"}
                    </span>
                  </div>

                  {expandedProject === project.id && (
                    <div className="mt-6 pt-6 border-t-2 border-gray-300 space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Originally Built:</p>
                        <p className="text-sm text-gray-600">{project.original}</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Focusing On:</p>
                        <p className="text-sm text-gray-600">{project.refactoringFor}</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Focus Areas:</p>
                        <ul className="space-y-2">
                          {project.focusAreas.map((area, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex gap-2">
                              <span className="text-indigo-500 flex-shrink-0">✓</span>
                              {area}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Why:</p>
                        <p className="text-sm text-gray-600">{project.why}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700">
                      <strong>Achievement:</strong> {project.achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              The Goal: Land Data Role Internship at FinTech (Summer/Winter 2026)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-2">Summer 2026</h4>
                <p className="text-sm text-blue-800 mb-3">May - July</p>
                <p className="text-sm text-blue-700">
                  First internship attempt in any data role (Engineer/Scientist/Analyst). FinTech companies have active hiring cycles.
                </p>
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
                <h4 className="font-bold text-purple-900 mb-2">Winter 2026-27</h4>
                <p className="text-sm text-purple-800 mb-3">Dec - Jan</p>
                <p className="text-sm text-purple-700">
                  Second opportunity (fallback). Ensures locked-in FinTech data experience before MBA.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 border-l-4 border-gray-400 p-6 rounded">
              <p className="text-sm text-gray-700 mb-3">
                <strong>Why Flexible Across All Data Roles?</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ You have full-stack data skills (pipeline to ML to analysis)</li>
                <li>✓ Increases chances of landing internship</li>
                <li>✓ You can choose specialization AFTER internship experience</li>
                <li>✓ FinTech values versatile data professionals</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">My Positioning for Recruiters</h3>

            <div className="space-y-4">
              <div className="bg-white border-l-4 border-green-500 p-4 rounded">
                <p className="text-sm font-semibold text-green-700 mb-2">Right Now (2025-2026):</p>
                <p className="text-sm text-gray-700">
                  &quot;I build full-stack data systems: pipelines, ML models, and analytics&quot; — ready for Engineer/Scientist/Analyst roles
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm font-semibold text-blue-700 mb-2">Post-Adobe Refactor (April 2026):</p>
                <p className="text-sm text-gray-700">
                  &quot;I can architect data systems AND build ML features AND derive insights&quot; with proven scalability thinking
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-500 p-4 rounded">
                <p className="text-sm font-semibold text-purple-700 mb-2">Internship Pitch (Summer 2026):</p>
                <p className="text-sm text-gray-700">
                  &quot;I&apos;ve built 2 production data projects, understand FinTech challenges, and I&apos;m ready to contribute immediately in whichever data role you need&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Timeline: Next 6 Months</h3>

            <div className="space-y-3">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`border-2 rounded-lg p-4 flex items-start gap-4 ${getStatusColor(milestone.status)}`}
                >
                  <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${getStatusDot(milestone.status)}`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="font-semibold text-gray-900">{milestone.month}</p>
                      <p className="text-sm font-medium text-gray-700">{milestone.action}</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{milestone.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-indigo-900">The Promise</h3>

            <div className="space-y-6">
              <div>
                <p className="font-bold text-indigo-900 mb-2">By Summer 2026:</p>
                <ul className="space-y-2 text-sm text-indigo-800">
                  <li>✅ 2 strong data projects (pipeline, ML, analytics components)</li>
                  <li>✅ Adobe Hackathon finalist achievement</li>
                  <li>✅ Proven versatility across Data Engineer/Scientist/Analyst domains</li>
                  <li>✅ Ready to contribute day 1 in ANY data role at FinTech</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-indigo-900 mb-2">By End of 2026:</p>
                <ul className="space-y-2 text-sm text-indigo-800">
                  <li>✅ Real FinTech data experience (Engineer/Scientist/Analyst focused)</li>
                  <li>✅ Production system contributions in chosen data specialization</li>
                  <li>✅ Industry network in FinTech data space</li>
                  <li>✅ Clear trajectory toward MBA and leadership</li>
                </ul>
              </div>

              <p className="text-sm text-indigo-700 font-semibold border-t border-indigo-300 pt-6">
                This is my plan to build <strong>cross-functional data expertise for ANY data role in FinTech</strong>. Then specialize after experience. 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      <TimelineComponent />
    </div>
  );
};

export default PathToFintech;
