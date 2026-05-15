import type { Metadata } from 'next';
import Link from 'next/link';
import { Familjen_Grotesk, Newsreader } from 'next/font/google';
import { business, sections } from '@/lib/content';
import MinimalMobileNav from './_components/MobileNav';
import './globals.css';

const familjen = Familjen_Grotesk({
  subsets: ['latin'],
  variable: '--font-familjen',
  display: 'swap',
});
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Blumen Gröhbühl — Familienflorist seit 1984',
  description:
    'Blumen Wolfgang Gröhbühl in Bruchsal-Untergrombach. Familienbetrieb seit 1984, saisonal und regional.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const topNav = sections.filter((s) => s.group !== 'kontakt' && s.slug !== 'wir-ueber-uns').slice(0, 7);
  const navList = sections.map((s) => ({ slug: s.slug, title: s.title }));

  return (
    <html lang="de" className={`${familjen.variable} ${newsreader.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen bg-[#faf7f2] text-[#2a2a26] font-familjen">
          <header className="sticky top-0 z-30 bg-[#faf7f2]/85 backdrop-blur-md border-b border-[#2a2a26]/8">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
              <Link href="/" className="flex items-baseline gap-2 group">
                <span className="font-newsreader italic text-[26px] leading-none text-[#5b6f54] group-hover:text-[#2a2a26] transition-colors">
                  Blumen
                </span>
                <span className="font-familjen font-medium text-[20px] leading-none tracking-[-0.01em]">
                  Gröhbühl
                </span>
              </Link>

              <nav className="hidden lg:flex items-center gap-7 text-[14px] text-[#2a2a26]/75">
                <Link href="/wir-ueber-uns/" className="hover:text-[#5b6f54] transition-colors">
                  Über uns
                </Link>
                {topNav.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}/`} className="hover:text-[#5b6f54] transition-colors">
                    {s.title}
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-4">
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="text-[13px] text-[#5b6f54] tracking-tight"
                >
                  {business.phoneDisplay}
                </a>
                <Link
                  href="/adresse/"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#5b6f54] text-[#faf7f2] text-[13px] hover:bg-[#2a2a26] transition-colors"
                >
                  Kontakt
                </Link>
              </div>

              <MinimalMobileNav sections={navList} />
            </div>
          </header>

          <main>{children}</main>

          <footer className="mt-24 lg:mt-32 bg-[#2a2a26] text-[#faf7f2]/85">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="font-newsreader italic text-[#94a888] text-[20px]">Blumen</div>
                <div className="font-familjen font-medium text-[26px] leading-tight">Gröhbühl</div>
                <p className="text-[14px] leading-relaxed mt-3 text-[#faf7f2]/65 max-w-xs">
                  Familienflorist seit 1984 in Bruchsal-Untergrombach.
                  Saisonal, regional, sorgfältig.
                </p>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[#94a888] mb-3">
                  Anschrift
                </div>
                <div className="text-[14px] leading-relaxed">
                  {business.street}<br />
                  {business.postal} {business.city}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[#94a888] mb-3">
                  Kontakt
                </div>
                <div className="text-[14px] leading-relaxed">
                  <div>{business.phoneDisplay}</div>
                  <div>{business.faxDisplay}</div>
                  <a href={`mailto:${business.email}`} className="underline decoration-[#94a888] underline-offset-4">
                    {business.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-[#faf7f2]/10">
              <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-3 text-[12px] text-[#faf7f2]/55">
                <span>© {new Date().getFullYear()} {business.name}</span>
                <div className="flex gap-5">
                  <Link href="/datenschutz/" className="hover:text-[#94a888]">Datenschutz</Link>
                  <Link href="/impressum/" className="hover:text-[#94a888]">Impressum</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
