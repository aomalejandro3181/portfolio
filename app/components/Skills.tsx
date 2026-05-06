import IconPostgres from "./icons/Postgres";
import IconReact from "./icons/React";
import IconNextJS from "./icons/NextJS";
import IconVueJS from "./icons/VueJS";
import IconNuxtJS from "./icons/NuxtJS";
import IconTypeScript from "./icons/TypeScript";
import IconFlutter from "./icons/Flutter";
import IconNodeJS from "./icons/NodeJS";
import IconExpress from "./icons/Express";
import IconNestJS from "./icons/NestJS";
import IconPHP from "./icons/PHP";
import IconWordpress from "./icons/Wordpress";
import IconTailwind from "./icons/Tailwind";
import IconMongoDB from "./icons/MongoDB";

export default function Skills() {
    const skills = [
        { name: "React", icon: <IconReact /> },
        { name: "Next.js", icon: <IconNextJS /> },
        { name: "Vue.js", icon: <IconVueJS /> },
        { name: "Nuxt.js", icon: <IconNuxtJS /> },
        { name: "TypeScript", icon: <IconTypeScript /> },
        { name: "Tailwind", icon: <IconTailwind /> },
        { name: "Flutter", icon: <IconFlutter /> },
        { name: "Node.js", icon: <IconNodeJS /> },
        { name: "Express", icon: <IconExpress /> },
        { name: "Nest.js", icon: <IconNestJS /> },
        { name: "Postgres", icon: <IconPostgres /> },
        { name: "MongoDB", icon: <IconMongoDB /> },
        { name: "PHP", icon: <IconPHP /> },
        { name: "Wordpress", icon: <IconWordpress /> },
    ];
    return (
        <section id="skills" className="border-y-3 border-main p-6 my-6 overflow-hidden">
            <div className="w-full flex overflow-hidden">
                <div className="flex animate-marquee hover:pause-on-hover whitespace-nowrap w-max">
                    {[1, 2, 3].map((i) => (
                        <div key={`skill-set-${i}`} className="flex flex-nowrap gap-10 items-center px-5">
                            {skills.map((skill, index) => (
                                <div key={`skill-${i}-${index}`} className="flex items-center gap-2 font-bold text-2xl">
                                    {skill.icon} {skill.name}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}