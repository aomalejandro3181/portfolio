'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobeIcon } from 'lucide-react';

export default function Header({ dict, lang }: { dict: Record<string, string>; lang: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: dict.home, href: `/${lang}` },
    { label: dict.skills, href: `/${lang}/#skills` },
    { label: dict.projects, href: `/${lang}/#projects` },
    { label: dict.contact, href: `/${lang}/#contact` },
  ];

  const toggleLanguage = () => {
    if (!pathname) return '/';
    const newLang = lang === 'en' ? 'es' : 'en';
    return pathname.replace(`/${lang}`, `/${newLang}`);
  };

  return (
    <header className="w-[90%] mx-auto mt-3 bg-white text-black border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">
            AOM
          </div>

          <div className="hidden md:flex items-center space-x-8 font-bold">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors capitalize"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={toggleLanguage()}
              className="text-white flex items-center bg-accent-pink border-2 border-black px-3 py-1 text-sm rounded shadow-neo hover:shadow-neo-hover"
            >
              <GlobeIcon className="w-4 h-4 inline-block mr-1" />
              {lang === 'en' ? 'ES' : 'EN'}
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Link
              href={toggleLanguage()}
              className="text-white bg-accent-pink px-2 py-1 text-xs rounded shadow-neo"
            >
              <GlobeIcon className="w-4 h-4 inline-block mr-1" />
              {lang === 'en' ? 'ES' : 'EN'}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label={dict.toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-foreground/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
