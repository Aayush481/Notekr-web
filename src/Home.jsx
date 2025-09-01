import React, { useState, useEffect } from 'react';
import './home.css';
import AppTour from './AppTour';
import WhyChoose from './WhyChoose';
import "@fortawesome/fontawesome-free/css/all.min.css";

const typedText = "Never lose a thought again paste, refine, and collaborate!";

const Home = () => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (forward) {
        setDisplayed(typedText.slice(0, i + 1));
        i++;
        if (i === typedText.length) {
          forward = false;
          setTimeout(() => {

          }, 2000); // pause at end
        }
      } else {
        setDisplayed(typedText.slice(0, i - 1));
        i--;
        if (i === 0) {
          forward = true;
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full flex justify-center bg-blue-950 text-white mt-[1.5rem] main flex-col items-center gap-0 bg-blend-color '>
      <div className='w-[90%] p-[3rem] md:pb-[3rem] pb-0 pr-0 pl-7 max-w-7xl flex flex-col md:flex-row  md:justify-between items-center   container   rounded-[10px]'>

        {/* Left part */}
        <div className='md:w-1/2 flex flex-col gap-6 text-start'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 '>
            {displayed}
            <span className="animate-pulse">|</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-200 mb-6 text-start'>
            Easily save, manage, and share your notes or code snippets online. Sign up to create your own paste collection, access them anywhere, and share with a single click!
          </p>
          <div className="flex gap-4  justify-center items-center">
            <a href="/signup" className="bg-blue-900 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded transition duration-200 items-center">
              Get Started
            </a>
            <a href="/pastes" className=" border-3 border-blue-400 hover:text-blue-300 hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded transition duration-200">
              View Pastes
            </a>
          </div>
        </div>
        {/* Right part */}
        <div className='md:w-1/2 flex justify-center items-center  md:mt-0 hero relative mr-0 pr-0 w-[90%] '>
          <img
            src="./src/hero.jpeg"
            alt="Paste App Illustration"
            className="w-[320px] md:w-[400px] rounded-xl  model1 absolute"
            onError={e => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>




      {/* How to Use the App Section */}
      <AppTour />


      {/* why choose us section */}

      <WhyChoose />




      {/* Client Testimonials Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 pb-[10rem]">
        <div className="w-full max-w-7xl flex flex-col items-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-lg text-white text-center mb-12 max-w-2xl">
            Trusted by industry leaders, our solutions deliver unmatched reliability, accuracy, and professionalism.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Testimonial Card 1 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <p className="text-gray-700 mb-4">
                "This solution has significantly enhanced our operational efficiency. The precision and reliability provided by the team are outstanding."
              </p>
              <div className="flex items-center">
                <img src="https://img.freepik.com/premium-photo/black-woman-portrait-smile-arms-crossed-small-business-management-leaning-glass-modern-office-happy-african-american-female-smiling-confidence-corporate-success-workplace_590464-169082.jpg" alt="Client testimonial" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Dr. Emily Carter</p>
                  <p className="text-sm text-gray-500">Chief Technology Officer</p>
                </div>
              </div>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <p className="text-gray-700 mb-4">
                "Reliable, efficient, and accurate—this team has redefined our expectations for corporate solutions. We are thoroughly impressed."
              </p>
              <div className="flex items-center">
                <img src="https://wallpaper.dog/large/20407891.png" alt="Client testimonial" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Mr. Richard Lee</p>
                  <p className="text-sm text-gray-500">Senior IT Manager</p>
                </div>
              </div>
            </div>
            {/* Testimonial Card 3 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <p className="text-gray-700 mb-4">
                "The professionalism displayed in every interaction and the careful attention to detail have consistently exceeded our highest expectations."
              </p>
              <div className="flex items-center">
                <img src="https://img.freepik.com/premium-photo/handsome-businessman-is-working-with-laptop-office_85574-4685.jpg" alt="Client testimonial" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Ms. Sophia Brown</p>
                  <p className="text-sm text-gray-500">Business Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      

      <footer className="w-full bg-gray-900 text-gray-300 py-10">
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: Branding & About */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">Notekr</h3>
            <p className="text-sm text-gray-400">
              Notekr helps you structure your thoughts, so you can focus on what matters.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Features</a></li>
              <li><a href="#" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">Connect With Us</h3>
            <p className="text-sm text-gray-400 mb-4">Stay updated with the latest AI-driven career tools.</p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-red-500 hover:text-red-700 transition">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>© 2025 Notekr. All Rights Reserved.</p>
        </div>
      </footer>




    </div>
  );
}

export default Home;