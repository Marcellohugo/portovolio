'use client';
import React, { useState, useEffect } from 'react';

// Next.js page.tsx combining Hero, About, Home, loading screen, and theme toggle
const Page: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<string>(
    typeof window !== 'undefined' && window.localStorage.getItem('theme')
      ? window.localStorage.getItem('theme')!
      : 'light'
  );

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Apply theme class on <html>
  useEffect(() => {
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
      <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-end">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/path/to/your/hero-image.jpg')` }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Welcome to My Site
        </h1>
      </section>

      {/* About Section overlays Hero with 50% opacity */}
      <section
        id="about"
        className="relative -mt-screen pt-screen bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 z-10 px-8 py-16"
        style={{ marginTop: '-100vh', paddingTop: '100vh' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor eu metus ultricies varius.
          </p>
          <p>
            Fusce in purus at lorem hendrerit aliquet. Vivamus auctor, nisi sit amet luctus imperdiet, urna orci
            fermentum ex, in dictum nunc arcu et lorem.
          </p>
        </div>
      </section>

      {/* Home Section */}
      <section id="home" className="px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Home</h2>
          <p>
            This is the main content area below the About section. Add your custom content here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
