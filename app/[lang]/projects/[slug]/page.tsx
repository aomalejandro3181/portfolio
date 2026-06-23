import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '../../../data/projects';
import { ArrowDown, Bell, Database, Globe, Layout, Lock, Server, ShieldAlert } from 'lucide-react';
import Header from '../../../components/Header';
import ProjectCarousel from '../../../components/ProjectCarousel';
import Contact from '../../../components/Contact';
import { getDictionary, Locale } from '../../dictionaries';
import IconStar from '@/app/components/icons/Star';

interface PageProps {
    params: Promise<{ slug: string; lang: Locale }>;
}

export async function generateStaticParams() {
    // Generate all combinations of slugs and locales
    const locales: Locale[] = ['en', 'es'];
    const paths = [];
    
    for (const lang of locales) {
        const projects = getProjects(lang);
        for (const project of projects) {
            paths.push({ slug: project.slug, lang });
        }
    }
    
    return paths;
}

export default async function ProjectDetail({ params }: PageProps) {
    const { slug, lang } = await params;
    const dict = await getDictionary(lang);
    const projects = getProjects(lang);
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Header dict={dict.header} lang={lang} />
            <section className="lg:w-10/12 mx-auto min-h-screen pt-20">
                <div className="bg-grid-neobrutal bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    <div className="p-8 ">
                        <div className='w-full border-3 border-main shadow-neo-xl'>
                            <Image src={project.image} alt={project.title} width={800} height={900} className="w-full h-full object-cover" />
                        </div>
                        <div className='w-full text-center mt-8'>
                            <h1 className="text-4xl font-bold uppercase bg-white mb-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-2">{project.title}</h1>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center my-4 font-mono">
                            <span className="px-3 py-1 flex items-center bg-white border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                💼 Rol: {project.role}
                            </span>
                            <span className="px-3 py-1 flex items-center bg-white border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                📅 Año: {project.year}
                            </span>
                            <span className="px-3 py-2 flex items-center bg-white border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                🚀 Tipo: {project.type}
                            </span>
                        </div>
                        <div className='flex flex-col lg:flex-row w-full gap-4 justify-center items-center'>
                        <div className='lg:w-6/12 w-full'>
                        <p className='text-2xl font-bold text-white uppercase bg-accent-pink mb-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-2'>{dict.projectDetail.theProblem}</p>
                            <p className={`text-lg mb-6 bg-white border-main border-3 shadow-neo p-2 ${project.problem && 'min-h-[220px] flex items-center'}`}>{project.problem}</p>
                            
                        </div>
                        <div className='lg:w-6/12 w-full'>
                            <p className='text-2xl font-bold text-white uppercase bg-accent-blue mb-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-2'>{dict.projectDetail.theSolution}</p>
                            <p className={`text-lg mb-6 bg-white border-main border-3 shadow-neo p-2 ${project.solution && 'min-h-[220px] flex items-center'}`}>{project.solution}</p>
                        </div>
                        </div>
                        <div className='text-2xl font-bold  uppercase  mb-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-2 mt-8 bg-white'>{dict.projectDetail.architecture}</div>
                        <div className="w-full font-mono bg-white border-4 border-black p-6 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        {project.diagram && (
                        <><h3 className="text-2xl font-black uppercase mb-8 bg-amber-300 border-2 border-black p-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    {dict.projectDetail.architectureFlow}
                                </h3><div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto">
                                        {/* Capa 1: Cliente / DNS */}
                                        <div className="w-full bg-cyan-200 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                            <div className="flex items-center gap-2 font-black text-lg mb-1">
                                                <Globe className="w-6 h-6 stroke-3" />
                                                <span>{dict.projectDetail.layer1Title}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">
                                                {dict.projectDetail.layer1Desc}
                                            </p>
                                        </div>
                                        <ArrowDown className="w-8 h-8 stroke-4 text-black my-1 animate-bounce" />
                                        {/* Capa 2: Frontend */}
                                        <div className="w-full bg-pink-200 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-2">
                                            <div className="flex items-center gap-2 font-black text-lg mb-1">
                                                <Layout className="w-6 h-6 stroke-3" />
                                                <span>{dict.projectDetail.layer2Title}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">
                                                {dict.projectDetail.layer2Desc}
                                            </p>
                                        </div>
                                        <ArrowDown className="w-8 h-8 stroke-4 text-black my-1" />

                                        {/* Capa 3: Backend */}
                                        <div className="w-full bg-yellow-200 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-2">
                                            <div className="flex items-center gap-2 font-black text-lg mb-1">
                                                <Server className="w-6 h-6 stroke-3" />
                                                <span>{dict.projectDetail.layer3Title}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">
                                                {dict.projectDetail.layer3Desc}
                                            </p>
                                        </div>

                                        <ArrowDown className="w-8 h-8 stroke-4 text-black my-1" />

                                        {/* Capa 4: Base de Datos */}
                                        <div className="w-full bg-emerald-200 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                            <div className="flex items-center gap-2 font-black text-lg mb-1">
                                                <Database className="w-6 h-6 stroke-3" />
                                                <span>{dict.projectDetail.layer4Title}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">
                                                {dict.projectDetail.layer4Desc}
                                            </p>
                                        </div>
                                    </div></>
                             )}
                            <div className={`mb-4 ${project.diagram && 'mt-8'}`}>
                            <p className='text-2xl font-bold uppercase '>{dict.projectDetail.monorepoArchitecture}</p>
                            <div className='mt-6 text-lg'>{dict.projectDetail.separation}
                                <ul className='mt-6 lg:pl-10 lg:list-disc'>
                                    <li className='pb-2'><b>{dict.projectDetail.frontend} </b>{project.architecture?.frontend}</li>
                                    <li className='pb-2'><b>{dict.projectDetail.backend} </b>{project.architecture?.backend}</li>
                                </ul>
                            </div>
                            <div className="flex flex-row flex-wrap gap-2 mt-4 mx-auto w-fit inset-ring-emerald-50">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="bg-accent text-xs border-2 border-main px-2 py-1 text-sm font-bold uppercase inline-block">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        </div>
                        <div className='text-2xl font-bold  uppercase  mb-4 border-4 border-black shadow-neo p-2 mt-8 bg-white'>{dict.projectDetail.technicalChallenges}</div>
                        {project.technicalChallenges?.map((challenge, index) => (
                        <div key={index} className={`bg-white my-10 border-4 border-black shadow-neo p-2 w-full lg:w-1/2 mx-auto ${index % 2 === 0 ? 'lg:ml-[10%]' : 'lg:ml-[40%]'}`}>
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    {challenge.icon === 'ShieldAlert' && <ShieldAlert className="w-6 h-6 stroke-3" />}
                                    {challenge.icon === 'Globe' && <Globe className="w-6 h-6 stroke-3" />}
                                    {challenge.icon === 'Lock' && <Lock className="w-6 h-6 stroke-3" />}
                                    {challenge.icon === 'Bell' && <Bell className="w-6 h-6 stroke-3" />}
                                    <h3 className="text-xl font-bold uppercase">{challenge.title}</h3>
                                </div>
                                <div className="space-y-2 p-2">
                                    {Array.isArray(challenge.description) ? (
                                        challenge.description.map((item, index) => (
                                            <div key={index} className="space-y-2">
                                                {item.challenger && (
                                                    <p className="text-gray-800 font-semibold"><b className='underline font-bold'>{dict.projectDetail.challenge}</b> {item.challenger}</p>
                                                )}
                                                {item.solution && (
                                                    <p className="text-gray-800 font-semibold"><b className='underline font-bold'>{dict.projectDetail.solution}</b> {item.solution}</p>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-800 font-semibold">{challenge.description}</p>
                                    )}
                                </div>
                            </div>
                        
                        </div>
                        ))}
                    </div>
                    <div className='w-full flex justify-end pr-6 -mt-8'>
                        <IconStar className="w-20 h-20"/>
                    </div>
                    <div className='w-1/2 h-85 flex flex-col mx-auto'>
                        <ProjectCarousel images={project.setImages} title={project.title} dict={dict.carousel} />
                    </div>
                    <div className="mt-8 text-center pb-8">
                        <Link
                            href={`/${lang}/#projects`}
                            className="bg-accent-pink text-white border-3 border-main px-4 py-2 font-bold shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                        >
                            {dict.projectDetail.backToProjects}
                        </Link>
                    </div>
                </div>
            </section>
            <Contact dict={dict.contact} />
        </>
    );
}