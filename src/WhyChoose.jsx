import React, { useEffect, useRef, useState } from 'react';
import './whyChoseUs.css';

const features = [
  {
    title: "Secure & Reliable",
    desc: "Your data is encrypted and always available.",
    icon: "🔒"
  },
  {
    title: "Easy Organization",
    desc: "Categorize and search your pastes effortlessly.",
    icon: "🗂️"
  },
  {
    title: "Instant Sharing",
    desc: "Share your notes or code with a single click.",
    icon: "🚀"
  },
  {
    title: "Easy Edit",
    desc: "Quickly update your pastes with our intuitive editor.",
    icon: "✏️"
  },
  {
    title: "Easy View",
    desc: "Access and view your pastes from any device, anytime.",
    icon: "👁️"
  },
  {
    title: "Authentic",
    desc: "Trustworthy platform with verified user accounts.",
    icon: "✅"
  },
  {
    title: "Easy to Use",
    desc: "A clean, user-friendly interface for everyone.",
    icon: "👌"
  }
];

const WhyChoose = () => {
  const stepsRef = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const option = {
      root: null,
      threshold: 0.5,
    };

    const cb = (entries) => {
        console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute('data-idx'));
          setActiveIdx(idx);
        }
      });
    };

    const observer = new IntersectionObserver(cb, option);

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
    <div className='w-full flex justify-center items-center py-16 bg-gradient-to-b from-blue-700 via-blue-900 to-blue-400'>
      <div className='w-[85%] flex  flex-col justify-center items-center relative h-auto gap-10'>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
             <div className='md:w-[80%] w-[100%] flex flex-col h-[300px] md:h-[490px] md:flex-row justify-center items-center relative overflow-hidden gap-2 feature-animate'>
        {/* left part */}
        <div className='w-[100%] md:w-1/2 flex flex-col gap-8 relative'>
      
          <div className="flex flex-col gap-6 gridCon ">
            {features.map((feature, idx) => (
              <div
                key={idx}
                data-idx={idx}
                ref={el => stepsRef.current[idx] = el}
                className={` w-[90%] transition-all duration-500 p-3  text-center overflow-x-visible flex-wrap text-[10px] md:text-[16px] mr-[1rem] md:p6 rounded-xl border border-blue-400 bg-white/10 shadow-lg flex  flex-col md:flex-row items-center gap-2 md:gap-4 
                  ${activeIdx === idx ? 'scale-110 md:ml-7 bg-blue-900/70 border-blue-700 text-white shadow-2xl feature-animate' : 'opacity-70'}
                `}
              >
                <span className="text-4xl">{feature.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-blue-100">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right part */}
        <div className='md:w-[65%] w-[90%] h-full flex justify-center p-0 ml-0 relative  md:opacity-[1] opacity-[0]'>
          <img src="./src/model2.png" alt="Why Choose Us Illustration" className="rounded-xl w-full h-full z-10 md:display-block  display-none" />
          <img src="./src/code-snippets.svg" alt="" className='absolute size-[120px] bottom-0   right-[2rem] md:bottom-[9rem] animate1'/>
          <img src="https://cdn-icons-png.flaticon.com/512/3883/3883680.png" alt="" className='absolute size-[100px]  right-[5rem] top-[5rem] animate2' />
        </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;