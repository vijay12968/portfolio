import React from 'react';

const skillsData = [
  {
    category: 'Languages & Core',
    skills: ['Python', 'SQL', 'Scala', 'Java', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Data Tools & Frameworks',
    skills: ['Apache Spark', 'Pandas', 'ETL Pipelines', 'FastAPI', 'Streamlit', 'NumPy']
  },
  {
    category: 'Databases & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Linux']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Skills & Technologies
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Core competencies in data engineering, cloud infrastructure, and software development
        </p>

        {/* Skills Grid - Three Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6">
              {/* Category Title */}
              <h3 className="text-xl font-bold text-black mb-4 pb-3 border-b border-gray-200">
                {category.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-black mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
