import React from "react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      icon: "💻",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "SQL", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
      ],
    },
    {
      title: "Data & ML Frameworks",
      icon: "📊",
      skills: [
        { name: "Pandas", level: "Expert" },
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "FAISS", level: "Advanced" },
        { name: "Apache Spark", level: "Intermediate" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      skills: [
        { name: "FastAPI", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
      ],
    },
    {
      title: "Frontend & Full-Stack",
      icon: "🎨",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML/CSS", level: "Expert" },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      icon: "🚀",
      skills: [
        { name: "Docker", level: "Advanced" },
        { name: "Git", level: "Advanced" },
        { name: "Vercel", level: "Advanced" },
        { name: "Cloud Basics", level: "Intermediate" },
      ],
    },
    {
      title: "AI & LLM Integration",
      icon: "🤖",
      skills: [
        { name: "Claude API", level: "Advanced" },
        { name: "RAG Systems", level: "Advanced" },
        { name: "NLP", level: "Intermediate" },
        { name: "LLM Prompting", level: "Advanced" },
      ],
    },
  ];

  const getProficiencyColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-100 text-emerald-800 border border-emerald-300";
      case "Advanced":
        return "bg-blue-100 text-blue-800 border border-blue-300";
      case "Intermediate":
        return "bg-amber-100 text-amber-800 border border-amber-300";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-300";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Proficiency</h2>
          <p className="text-gray-600 text-lg">
            Building expertise through 5+ years of coding and hands-on project experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-blue-200">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx} className="flex items-center justify-between">
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getProficiencyColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 px-6 py-3 text-xs text-gray-600 border-t border-gray-200 text-center">
                {category.skills.length} skills
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
          <h3 className="text-lg font-bold mb-6 text-gray-900">Proficiency Levels</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="px-4 py-2 rounded-lg font-semibold text-sm bg-emerald-100 text-emerald-800 border border-emerald-300 flex-shrink-0">
                Expert
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Mastered</p>
                <p>Used extensively in production projects. Deep understanding and quick execution.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="px-4 py-2 rounded-lg font-semibold text-sm bg-blue-100 text-blue-800 border border-blue-300 flex-shrink-0">
                Advanced
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Proficient</p>
                <p>Strong working knowledge. Can solve complex problems independently.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="px-4 py-2 rounded-lg font-semibold text-sm bg-amber-100 text-amber-800 border border-amber-300 flex-shrink-0">
                Intermediate
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Learning</p>
                <p>Good fundamentals. Can work on projects with guidance when needed.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-emerald-700 mb-2">7</p>
            <p className="text-sm text-emerald-600 font-semibold">Expert Skills</p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-blue-700 mb-2">12</p>
            <p className="text-sm text-blue-600 font-semibold">Advanced Skills</p>
          </div>

          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-amber-700 mb-2">7</p>
            <p className="text-sm text-amber-600 font-semibold">Intermediate Skills</p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-purple-700 mb-2">5+</p>
            <p className="text-sm text-purple-600 font-semibold">Years Coding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
