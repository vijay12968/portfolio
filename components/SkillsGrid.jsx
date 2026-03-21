import React from "react";

const SkillsGrid = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: "Intermediate, progressing to Advanced" },
        { name: "SQL", level: "Intermediate, progressing to Advanced" },
        { name: "JavaScript", level: "Beginner" },
        { name: "Java", level: "Intermediate" },
      ],
    },
    {
      category: "Data and ML",
      skills: [
        { name: "Pandas", level: "Basic, progressing to Intermediate" },
        { name: "Scikit-Learn", level: "Basic, progressing to Intermediate" },
        { name: "TensorFlow", level: "Basic, progressing to Intermediate" },
        { name: "FAISS", level: "Basic, progressing to Intermediate" },
        { name: "Apache Spark", level: "Basic, progressing to Intermediate" },
      ],
    },
    {
      category: "Backend and APIs",
      skills: [
        { name: "FastAPI", level: "Beginner" },
        { name: "Node.js", level: "Beginner" },
        { name: "PostgreSQL", level: "Beginner" },
        { name: "MongoDB", level: "Beginner" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", level: "Beginner" },
        { name: "Next.js", level: "Beginner" },
        { name: "Tailwind CSS", level: "Beginner" },
        { name: "HTML / CSS", level: "Beginner" },
      ],
    },
    {
      category: "DevOps and Infrastructure",
      skills: [
        { name: "Docker", level: "Basic" },
        { name: "Git", level: "Basic" },
        { name: "Vercel", level: "Basic" },
        { name: "Cloud Platforms", level: "Basic" },
      ],
    },
    {
      category: "AI and LLM Integration",
      skills: [
        { name: "Claude API", level: "In Progress" },
        { name: "RAG Systems", level: "In Progress" },
        { name: "NLP", level: "In Progress" },
        { name: "LLM Prompting", level: "In Progress" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6"
      style={{ background: "#fff", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6B7280" }}>
            Capabilities
          </p>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#1F2937", letterSpacing: "-0.02em" }}>
            Technical Skills
          </h2>
          <p style={{ color: "#6B7280" }}>
            3 years of programming experience across data, full-stack, and infrastructure domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6"
              style={{ border: "1px solid #E5E7EB", borderRadius: "8px" }}
            >
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "#6B7280" }}
              >
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx} className="pl-3" style={{ borderLeft: "2px solid #E5E7EB" }}>
                    <p className="text-sm font-medium" style={{ color: "#1F2937" }}>
                      {skill.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>
                      {skill.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10" style={{ borderTop: "1px solid #E5E7EB" }}>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-bold" style={{ color: "#1F2937", letterSpacing: "-0.02em" }}>
                3 years
              </p>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "#6B7280" }}>
                Programming Experience
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#1F2937", letterSpacing: "-0.02em" }}>
                6
              </p>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "#6B7280" }}>
                Skill Categories
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#1F2937", letterSpacing: "-0.02em" }}>
                26
              </p>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "#6B7280" }}>
                Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
