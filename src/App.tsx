// Updated for Vite + React + TypeScript + Tailwind with background enhancements and animations

import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <div className="font-sans min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center p-10 bg-purple-600 dark:bg-purple-800 text-white overflow-hidden"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-40 z-0"></div>
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Daniel</h1>
          <p className="text-lg md:text-2xl mb-6">I build beautiful, fast websites and web apps.</p>
          <a href="#projects" className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition">View My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section className="p-10 max-w-3xl mx-auto text-center animate-slide-up">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I'm a web developer passionate about building excellent software that improves the lives of those around me. I specialize in creating modern, responsive websites and web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 bg-gray-100 dark:bg-gray-800 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:-translate-y-1 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-2">Restaurant Demo App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A full-stack web app for managing restaurant menus, tracking orders, and generating reports. Contact me for a user and password if you are interested</p>
              <a href="https://restaurant-demo-dann-app.netlify.app/" target='_blank' className="text-purple-600 font-semibold hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-10 max-w-3xl mx-auto text-center animate-slide-up">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Have a project in mind? Let's build something together!</p>
        <a href="mailto:dann.santlar@gmail.com.com" className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">Email Me</a>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Daniel Santiago. All rights reserved.
      </footer>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1.2s ease-in-out both;
          }
          .animate-slide-up {
            animation: slideUp 0.8s ease-in-out both;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
