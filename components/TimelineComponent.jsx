import React, { useState } from "react";

const TimelineComponent = () => {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      id: 1,
      title: "Build Data Skills Across All Domains",
      timeline: "Mar - Apr 2026",
      status: "current",
      statusLabel: "Currently Working",
      statusEmoji: "🚀",
      description: "Mastering cross-functional data skills (engineering, science, analysis)",
      items: [
        {
          name: "Project 1: Adobe Hackathon → Data System Optimization",
          status: "⏳ Refactoring",
          timeline: "Next 2-3 weeks",
          details: [
            "Refactoring PDF Intelligence system from AI to data perspective",
            "Focus: ETL workflows, feature engineering, analytics queries",
            "Demonstrates: Pipeline design (Engineer), ML features (Scientist), insights (Analyst)",
            "Shows: Versatility across all data domains",
          ],
        },
        {
          name: "Project 2: Data Role Ready - Core Skills",
          status: "🔨 In Progress",
          timeline: "Parallel to Adobe refactor",
          details: [
            "Building core data project showcasing all three roles",
            "Includes: Data ingestion, ML models, analytics dashboards",
            "Purpose: Prove you can work in Engineer/Scientist/Analyst positions",
            "Outcome: Portfolio shows full data stack capability",
          ],
        },
      ],
      achievements: [
        "✅ 2 cross-functional data projects",
        "✅ Adobe Hackathon finalist",
        "✅ Data engineer/scientist/analyst ready",
      ],
    },
    {
      id: 2,
      title: "Data Role Internship at FinTech",
      timeline: "May 2026 - Jan 2027",
      status: "upcoming",
      statusLabel: "Next Target",
      statusEmoji: "🎯",
      description: "Real-world experience in any data role at FinTech company",
      items: [
        {
          name: "Summer 2026 Internship",
          status: "📅 May - July 2026",
          timeline: "Primary target",
          details: [
            "Apply to FinTech companies (Razorpay, BharatPE, Chime, Wise, Banks)",
            "Open to: Data Engineer, Data Scientist, or Data Analyst position",
            "Goal: Real production data experience in chosen domain",
            "Learn: FinTech-specific data challenges and solutions",
          ],
        },
        {
          name: "Winter 2026-27 Internship",
          status: "📅 Dec 2026 - Jan 2027",
          timeline: "Fallback opportunity",
          details: [
            "Second internship if summer doesn't work out",
            "Ensures: Locked-in FinTech data experience before MBA",
            "Shows: Commitment and persistence in career building",
            "Benefit: Multiple internships strengthen MBA applications",
          ],
        },
      ],
      achievements: [
        "✅ Real FinTech data experience",
        "✅ Production contributions",
        "✅ Industry network built",
      ],
    },
    {
      id: 3,
      title: "MBA & Strategic Transition",
      timeline: "2027 - 2030",
      status: "planned",
      statusLabel: "Planned Phase",
      statusEmoji: "📚",
      description: "Building strategic thinking and leadership capabilities",
      items: [
        {
          name: "MBA Focus Areas",
          status: "🎓 3 Years",
          timeline: "2027-2030",
          details: [
            "Finance & Financial Markets (understand FinTech space)",
            "Risk Management & Analytics (specialize after internship)",
            "Business Strategy & Leadership (prepare for management)",
            "Optional: Entrepreneurship (if planning FinTech startup)",
          ],
        },
        {
          name: "Why MBA After Data Experience?",
          status: "💡 Strategic Transition",
          timeline: "Leadership path",
          details: [
            "Credibility: Speak intelligently about finance AND data",
            "Network: Meet future co-founders and industry leaders",
            "Transition: Move from specialist to strategic thinker",
            "Options: Opens doors to VP, Head, CPO, or founder roles",
          ],
        },
      ],
      achievements: [
        "✅ Business acumen gained",
        "✅ Leadership network built",
        "✅ Career flexibility enabled",
      ],
    },
    {
      id: 4,
      title: "Leadership Role in FinTech",
      timeline: "2030+",
      status: "planned",
      statusLabel: "Long-term Goal",
      statusEmoji: "👑",
      description: "Leading data initiatives and teams in FinTech",
      items: [
        {
          name: "Path A: VP / Director of Data",
          status: "🏢 Leadership",
          timeline: "2030+",
          details: [
            "Lead data strategy for entire organization",
            "Leverage experience: Engineer + Scientist + Analyst background",
            "Manage team of engineers, scientists, analysts",
            "Make strategic decisions on data architecture",
          ],
        },
        {
          name: "Path B: Head of Risk & Analytics",
          status: "📊 Strategic",
          timeline: "2030+",
          details: [
            "Build models protecting company (Data Scientist background)",
            "Analyze customer behavior (Data Analyst skills)",
            "Architect data pipelines (Data Engineer expertise)",
            "Work with CEO/CFO on strategy",
          ],
        },
        {
          name: "Path C: Chief Product Officer (CPO)",
          status: "🎯 Product",
          timeline: "2030+",
          details: [
            "Decide products using data insights",
            "Understand segments and metrics (Analyst skill)",
            "Know what's technically possible (Engineer skill)",
            "Build profitable and user-friendly products",
          ],
        },
        {
          name: "Path D: Founder / CEO",
          status: "🚀 Entrepreneurial",
          timeline: "2030+",
          details: [
            "Start own FinTech company",
            "Apply lessons from data experience at established firm",
            "Deep understanding of tech, finance, and data",
            "Build and scale to billions",
          ],
        },
      ],
      achievements: [
        "✅ Multiple leadership paths available",
        "✅ FinTech + Data + MBA expertise",
        "✅ Ready for C-level or founder role",
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "current":
        return "bg-green-100 border-green-500 text-green-900";
      case "upcoming":
        return "bg-blue-100 border-blue-500 text-blue-900";
      case "planned":
        return "bg-gray-100 border-gray-500 text-gray-900";
      default:
        return "bg-gray-100 border-gray-500 text-gray-900";
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "current":
        return "bg-green-500 text-white";
      case "upcoming":
        return "bg-blue-500 text-white";
      case "planned":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section id="fintech-path" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Career Timeline</h2>
          <p className="text-gray-600 text-lg mb-6">
            Building expertise from data skills to FinTech leadership
          </p>
          <div className="inline-block bg-white border-l-4 border-green-500 px-4 py-3 rounded">
            <p className="text-sm font-semibold text-green-900">
              Current Status: Building Cross-Functional Data Skills → Ready for Any Data Role
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-gray-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`relative pl-20 md:pl-0 ${
                  index % 2 === 0 ? "md:mr-1/2 md:pr-12" : "md:ml-1/2 md:pl-12"
                }`}
              >
                <div
                  className={`absolute left-0 md:left-1/2 top-2 w-12 h-12 rounded-full border-4 transform md:-translate-x-1/2 flex items-center justify-center text-xl font-bold border-white ${getStatusBadgeColor(phase.status)}`}
                >
                  {phase.statusEmoji}
                </div>

                <div
                  onClick={() =>
                    setExpandedPhase(expandedPhase === phase.id ? null : phase.id)
                  }
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-lg ${getStatusColor(
                    phase.status
                  )}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(phase.status)}`}>
                          {phase.statusLabel}
                        </span>
                        <span className="text-sm font-semibold opacity-75">
                          {phase.timeline}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl">
                      {expandedPhase === phase.id ? "−" : "+"}
                    </span>
                  </div>

                  <p className="text-sm mb-4">{phase.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {phase.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-white bg-opacity-50 rounded"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {expandedPhase === phase.id && (
                    <div className="mt-6 pt-6 border-t-2 border-current border-opacity-30 space-y-4">
                      {phase.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white bg-opacity-40 p-4 rounded-lg"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-sm">{item.name}</h4>
                            <span className="text-xs px-2 py-1 bg-white bg-opacity-60 rounded ml-2 flex-shrink-0">
                              {item.status}
                            </span>
                          </div>
                          <p className="text-xs opacity-75 mb-3">{item.timeline}</p>
                          <ul className="space-y-2">
                            {item.details.map((detail, didx) => (
                              <li
                                key={didx}
                                className="text-xs opacity-90 flex gap-2"
                              >
                                <span className="text-xs opacity-70 flex-shrink-0 mt-1">▸</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            This is my plan to build <strong>cross-functional data expertise for FinTech</strong>
          </p>
          <a
            href="#projects"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            See My Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;
