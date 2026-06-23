import { getDictionary, Locale } from "../[lang]/dictionaries";


export default async function ProjectPlaceholder({ lang }: { lang: Locale }) {
    
    const dict = await getDictionary(lang);
    return (
        <article id="project-placeholder" className="w-full mb-10">
            <div className="min-h-[350px] bg-white border-3 border-dashed border-main shadow-neo-xl relative flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-pink text-xl font-bold text-white">
                    +
                </div>
                <h2 className="text-3xl font-bold mb-3 text-foreground">{dict.placeholderProject.title}</h2>
                <p className="mb-4 font-medium text-foreground/80">{dict.placeholderProject.subtitle}</p>
                <p className="text-sm text-foreground/70 max-w-sm">{dict.placeholderProject.note}</p>
            </div>
        </article>
    );
}