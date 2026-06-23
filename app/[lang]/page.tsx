import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { getDictionary, Locale } from './dictionaries';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="min-h-screen">
      <main>
        <Header dict={dict.header} lang={lang} />
        <Hero dict={dict.hero} />
        <Skills />
        <Projects dict={dict.projects} lang={lang} />
        <Contact dict={dict.contact} />
      </main>
    </div>
  );
}
