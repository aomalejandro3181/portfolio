import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Homey App",
      description: "APP to provide cleaning services in offices or houses, Backend with Node.js and Express, Frontend backoffice in Nuxt.js and the app in Flutter.",
      image: "/images/homey-app.png",
      technologies: ["Flutter", "TypeScript", "Node.js", "Express", "PostgreSQL", "Nuxt.js", "Tailwind", "Shadcn"],
      liveUrl: "#",
      githubUrl: "https://github.com/aomalejandro3181/homey",
      featured: true
    },
    {
      title: "Chatbot Whatsapp",
      description: "Chatbot that can interact with users through whatsapp, can answer questions, search information and generate sales, sales are saved in a google sheet.",
      image: "/images/chatbots-whatsapp.png",
      technologies: ["Node.js", "Express", "TypeScript", "bot-whatsapp", "Gemini AI"],
      liveUrl: "#",
      githubUrl: "https://github.com/aomalejandro3181/chat-bot-whatsapp",
      featured: true
    },
    {
        title: "Store Website",
        description: "Online store with shopping cart system using Next.js and Context API.",
        image: "/api/placeholder/600/400",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/aomalejandro3181/react-store",
        featured: false
      },
    {
        title: "Portfolio Website",
        description: "Portfolio website responsive with smooth animations and complete SEO optimization.",
        image: "",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
        liveUrl: "#",
        githubUrl: "https://github.com/aomalejandro3181/portfolio",
        featured: false
      },
    {
      title: "Analytics Dashboard",
      description: "Interactive dashboard for data analysis and visualization with real-time charts and customizable reports.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather App",
      description: "Weather application with geolocation, detailed forecasts and personalized notifications.",
      image: "",
      technologies: ["React Native", "TypeScript", "Weather API", "AsyncStorage"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A selection of my most recent and significant works
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-foreground/5 rounded-2xl overflow-hidden border border-foreground/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destacado
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full flex items-center justify-center text-foreground/40">
                  { project?.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-foreground/40">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                    
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full text-sm font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      More Details
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-foreground/20 text-foreground rounded-full font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="bg-foreground/5 rounded-xl p-6 border border-foreground/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h4>
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-foreground/10 rounded text-xs font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-foreground/60">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      More Details
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
