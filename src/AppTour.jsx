import React, { useRef, useEffect, useState } from 'react';
import './home.css';

const steps = [
  {
    icon: '📝',
    title: 'Create Your Account',
    desc: 'Sign up in seconds to unlock secure, cloud-based paste management.'
  },
  {
    icon: '📋',
    title: 'Organize & Save',
    desc: 'Add, edit, and categorize your notes or code snippets.'
  },
  {
    icon: '🤝',
    title: 'Share & Collaborate',
    desc: 'Share your pastes instantly and collaborate in real time.'
  }
];

const AppTour = () => {
  const stepsRef = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.9, // Change threshold for better detection
    };

    const observerCallback = (entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute('data-idx'));
          setActiveIdx(idx);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
      <div className="w-full max-w-5xl flex flex-col items-center px-6 overflow-x-hidden relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center tracking-tight">
          App Tour
        </h2>
        <p className="text-lg text-blue-200 text-center mb-10 max-w-2xl">
          Discover how to get the most out of Paste App in just a few easy steps.
        </p>
        <div className="relative w-full overflow-x-hidden p-6 rounded-2xl stepCon   py-[3rem]">
          <div className="flex flex-col md:flex-row w-full gap-8 md:grid md:grid-cols-3 grid-cols-1">
            {steps.map((step, index) => (
              <div
                key={index}
                data-idx={index}
                ref={(el) => {stepsRef.current[index] = el
                  
                }}
                className={`relative bg-white/10 border border-blue-500 shadow-lg rounded-2xl p-8 flex flex-col items-center transition-transform duration-500 ${activeIdx === index ? 'scale-110 z-10 border-blue-900 shadow-2xl' : 'scale-100 opacity-80'}`}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold border-4 border-blue-300 shadow">
                  {index + 1}
                </div>
                <div className="text-5xl mb-4 mt-6">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-blue-100 text-center">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <a href="/signup" className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-full text-lg shadow transition duration-200">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppTour;