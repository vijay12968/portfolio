import React from 'react';

export default function Testimonial() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Photo */}
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

          {/* Right: Quote/Bio */}
          <div>
            <div className="text-4xl text-gray-300 mb-4">"</div>
            <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6 leading-relaxed">
              I'm passionate about building robust data systems that transform raw data into actionable insights.
              My focus is on creating scalable pipelines and infrastructure that power data-driven decision making.
            </p>
            <p className="text-gray-700 mb-4">
              With hands-on experience in Apache Spark, Python, and cloud technologies, I approach every project
              with a focus on scalability, performance, and reliability. Whether it's building ETL pipelines,
              optimizing database queries, or deploying machine learning models, I believe in engineering solutions
              that stand the test of scale.
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="font-bold text-black">Veeraj Thota</p>
              <p className="text-gray-600">Data Engineer | B.Tech CSE Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
