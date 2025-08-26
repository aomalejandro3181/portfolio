'use client';

import Image from 'next/image';
const skills = ['React','Next.js', 'Vue.js', 'Nuxt.js', 'TypeScript', 'Flutter', 'Node.js', 'Express', 'Nest.js', 'PHP', 'Wordpress'];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-foreground/5">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-[200px] h-[200px] mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Image
                  src="/images/me.png"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-20 lg:text-left md:text-center xs:text-center">
          Crafting 
            <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Digital Experiences
            </span>
          </h1>

          <div className='flex justify-end'>
          <p className="text-xl text-right md:text-2xl text-foreground/70 sm:w-full lg:w-1/2 mb-8 sm:text-left md:text-center leading-relaxed">
          I'm  developer passionate about creating innovative and user-centric web applications. With a focus on clean code and efficient solutions, I bring
          ideas to life.
          </p>
          </div>
          {/* Tech Stack Preview */}
          <div className="mt-16">
            <p className="text-foreground/60 mb-6 text-3xl font-semibold">Skills</p>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 bg-foreground/5 border border-foreground/10 rounded-full text-sm font-semibold text-foreground/80 hover:bg-foreground/10 transition-colors hover:text-foreground hover:cursor-pointer hover:bg-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-foreground/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
