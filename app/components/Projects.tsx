import CardProject from "./CardProject";
import { getProjects } from "../data/projects";
import ProjectPlaceholder from "./ProjectPlaceholder";

export default function Projects({ dict, lang }: { dict: Record<string, string>; lang: 'en' | 'es' }) {
    const projectsList = getProjects(lang);
    const featuredProjects = projectsList.filter(project => project.featured);
    const otherProjects = projectsList.filter(project => !project.featured);
    return (
        <section id="projects" className="min-h-screen">
            <div className="w-10/12 mx-auto px-6 py-10 mb-5 border-3 border-main shadow-neo-xl bg-grid-neobrutal bg-white">
                <h2 className="border-3 border-main bg-white shadow-neo-xl p-2 text-4xl md:text-4xl font-bold text-foreground mb-4 lg:text-left md:text-center xs:text-center">
                    {dict.title}
                </h2>
                <p className="text-xl text-right italic text-foreground/70 mb-5 mt-10">
                    {dict.subtitle}
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
                            slug={project.slug}
                            dict={dict}
                            lang={lang}
                        />
                    ))}
                    <ProjectPlaceholder lang={lang}/>
                    <ProjectPlaceholder lang={lang}/>
                </div>
                {otherProjects.length > 0 && (
                <h3 className=" py-2 text-2xl md:text-2xl font-bold text-foreground mb-4 text-center">
                    {dict.otherProjects}
                </h3>
                )}
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
                            slug={project.slug}
                            dict={dict}
                            lang={lang}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}