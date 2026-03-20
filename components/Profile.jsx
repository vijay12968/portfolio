import React from 'react';

export default function Profile() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          About Me
        </h2>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Data Engineer & Student
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm Veeraj Thota, a 6th semester B.Tech CSE student at GRIET Hyderabad with a strong focus on data engineering and emerging technologies.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Currently working as a Project Intern at BytesEdge (Jan 2026 - Present) and serving as Operations Lead (Aug 2025 - Present). My passion lies in building scalable data systems, working with Python, SQL, and modern cloud infrastructure.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              My technical expertise spans across data engineering tools (Apache Spark, Pandas), databases (PostgreSQL, MongoDB), cloud platforms (AWS, Docker), and programming languages (Python, SQL, Scala, Java).
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm actively seeking opportunities in FinTech companies where I can apply my data engineering skills to build robust, scalable systems that process and analyze data at scale.
            </p>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="/self.jpeg"
                alt="Veeraj Thota"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full aspect-square bg-gray-200 rounded-lg flex items-center justify-center"><span class="text-gray-400">Profile Photo</span></div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
