import Link from "next/link";
import Image from "next/image";

interface CardProjectProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
}

export default function CardProject({ title, description, image, technologies, liveUrl, githubUrl, featured }: CardProjectProps) {
    return (
        <article id="card-project" className="w-full mb-10">
            <div className={`w-full md:w-full mx-auto ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className={`${featured ? 'min-h-[516px]' : 'min-h-[350px]'} bg-white border-3 border-main shadow-neo-xl relative`}>
                    {featured ? (
                        <span className="bg-accent-pink border-2 border-main m-6 absolute top-0 right-0 z-10 px-2 py-1 text-xs font-bold uppercase mb-4 inline-block">
                            Proyecto Destacado
                        </span>
                    ) : null}
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            width={500}
                            height={500}
                            className="w-full h-50 object-cover"
                        />
                    ) : null}
                    <div className="p-4">
                        <h2 className="text-3xl font-bold mb-4">{title}</h2>
                        <p className="mb-6 font-medium">{description}</p>
                        <div className="flex flex-wrap gap-2 mb-4 min-h-[68px]">
                            {technologies.map((tech) => (
                                <span key={tech} className="bg-accent border-2 border-main px-2 py-1 text-xs font-bold uppercase inline-block h-[30px]">{tech}</span>
                            ))}
                        </div>
                        <div className="flex gap-6 justify-end">
                            <Link href={liveUrl} className={`flex items-center gap-2 ${featured ? 'bg-accent-blue text-white text-xs border-3 border-main px-2 py-2 font-bold shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all' : 'text-base text-sm'}`}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> More Details
                            </Link>
                            {githubUrl ? (
                                <Link href={githubUrl} className={`flex items-center gap-2 ${featured ? 'bg-accent-blue text-white text-xs border-3 border-main px-2 py-2 font-bold shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all' : 'text-base text-sm'}`}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg> Code
                                </Link>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}