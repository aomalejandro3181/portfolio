import CardProject from "./CardProject";

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
            title: "Si Presto!",
            description: "App in Flutter to keep track of loans to individuals. Generate notifications to the user to remind them of their debts soon to expire. Export reports in PDF.",
            image: "/images/Si-presto.png",
            technologies: ["Flutter", "Firebase auth", "SQLite", "Push notifications"],
            liveUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            title: "Store Website",
            description: "Online store with shopping cart system using Next.js and Context API.",
            image: "/images/ale-shop.png",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "https://github.com/aomalejandro3181/react-store",
            featured: false
        },
        {
            title: "Portfolio Website",
            description: "Portfolio website responsive with smooth animations and complete SEO optimization. Use shadcn ui as design system and neo brutalis as design style.",
            image: "/images/portfolioweb2.png",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn"],
            liveUrl: "#",
            githubUrl: "https://github.com/aomalejandro3181/portfolio",
            featured: false
        },
        // {
        //     title: "Analytics Dashboard",
        //     description: "Interactive dashboard for data analysis and visualization with real-time charts and customizable reports.",
        //     image: "",
        //     technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "MongoDB"],
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     featured: false
        // },
        // {
        //     title: "Weather App",
        //     description: "Weather application with geolocation, detailed forecasts and personalized notifications.",
        //     image: "",
        //     technologies: ["React Native", "TypeScript", "Weather API", "AsyncStorage"],
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     featured: false
        // }
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);
    return (
        <section id="projects" className="min-h-screen">
            <div className="w-10/12 mx-auto px-6 py-10 mb-5 bg-white border-3 border-main shadow-neo-xl bg-grid-neobrutal">
                <h2 className="border-3 border-main bg-white shadow-neo-xl p-2 text-4xl md:text-4xl font-bold text-foreground mb-4 lg:text-left md:text-center xs:text-center">
                    Projects
                </h2>
                <p className="text-xl text-right italic text-foreground/70 mb-5 mt-10">
                    A selection of my most recent and significant works
                </p>
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Featured projects */}
                    {featuredProjects.map((project) => (
                        <CardProject
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            liveUrl={project.liveUrl}
                            githubUrl={project.githubUrl}
                            featured={project.featured}
                        />
                    ))}
                </div>
                <h3 className=" py-2 text-2xl md:text-2xl font-bold text-foreground mb-4 text-center">
                    Other Projects
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Other projects */}
                    {otherProjects.map((project) => (
                        <CardProject
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            liveUrl={project.liveUrl}
                            githubUrl={project.githubUrl}
                            featured={project.featured}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}