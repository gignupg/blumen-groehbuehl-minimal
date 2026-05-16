import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sections, getSection, business } from '@/lib/content';
import { photo } from '@/lib/paths';

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export default function MinimalSection({ params }: { params: { slug: string } }) {
  const section = getSection(params.slug);
  if (!section) notFound();

  const idx = sections.findIndex((s) => s.slug === section.slug);
  const prev = idx > 0 ? sections[idx - 1] : null;
  const next = idx < sections.length - 1 ? sections[idx + 1] : null;

  return (
    <article className="pb-16 lg:pb-24">
      <header className="bg-[#eef0e6] border-b border-[#5b6f54]/15">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 pt-14 lg:pt-24 pb-14 lg:pb-20">
          {section.groupLabel && (
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#5b6f54] mb-4">
              {section.groupLabel}
            </div>
          )}
          <h1 className="font-newsreader text-[clamp(48px,9vw,128px)] leading-[0.92] tracking-[-0.02em] text-[#2a2a26]">
            {section.title}
            <span className="text-[#94a888]">.</span>
          </h1>
          {section.kicker && (
            <div className="mt-5 font-newsreader italic text-[20px] lg:text-[26px] text-[#5b6f54]">
              {section.kicker}
            </div>
          )}
          {section.intro && (
            <p className="mt-7 max-w-3xl text-[18px] lg:text-[20px] leading-[1.55] text-[#2a2a26]/80">
              {section.intro}
            </p>
          )}
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 pt-12 lg:pt-20">
        {section.bullets && section.bullets.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12 lg:mb-20">
            {section.bullets.map((b, i) => (
              <li key={i} className="bg-[#eef0e6] rounded-2xl px-5 py-4 flex items-baseline gap-4">
                <span className="font-newsreader text-[16px] text-[#5b6f54] tabular-nums shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] leading-[1.5] text-[#2a2a26]/90">{b}</span>
              </li>
            ))}
          </ul>
        )}

        {section.paragraphs && section.paragraphs.length > 0 && section.slug !== 'impressum' && (
          <div className="text-[17px] leading-[1.7] text-[#2a2a26]/85 space-y-5 max-w-3xl mb-12 lg:mb-20">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {section.slug === 'impressum' && section.paragraphs && (
          <dl className="max-w-2xl divide-y divide-[#2a2a26]/10 mb-12 lg:mb-20">
            {section.paragraphs.map((p, i) => {
              const m = p.match(/^([^:]+):\s*(.*)$/);
              if (!m) {
                return (
                  <p key={i} className="py-4 text-[14px] text-[#2a2a26]/65">
                    {p}
                  </p>
                );
              }
              return (
                <div key={i} className="py-4 grid grid-cols-3 gap-4">
                  <dt className="text-[12px] tracking-[0.15em] uppercase text-[#5b6f54] pt-1">
                    {m[1]}
                  </dt>
                  <dd className="col-span-2 text-[15px] text-[#2a2a26]/90">{m[2]}</dd>
                </div>
              );
            })}
          </dl>
        )}

        {section.photos.length > 0 && (
          <div
            className={
              section.photos.length === 1
                ? 'max-w-md mb-12 lg:mb-20'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mb-12 lg:mb-20'
            }
          >
            {section.photos.map((p, i) => (
              <figure key={p} className="bg-[#eef0e6] rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center bg-[#e0e6d3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo(p)}
                    alt={section.photoCaption ? section.photoCaption(i) : section.title}
                    className="max-w-full max-h-full pixel-img"
                  />
                </div>
                <figcaption className="px-5 py-3 text-[13px] text-[#2a2a26]/65">
                  {section.photoCaption ? section.photoCaption(i) : section.title}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {section.slug === 'adresse' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20">
            <div className="bg-[#eef0e6] rounded-2xl p-6 lg:p-8 space-y-5">
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#5b6f54] mb-1">
                  Adresse
                </div>
                <div className="text-[18px] leading-relaxed">
                  {business.name}<br />
                  {business.street}<br />
                  D-{business.postal} {business.city}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#5b6f54] mb-1">
                  Telefon
                </div>
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="font-newsreader text-[22px] text-[#2a2a26]">
                  {business.phoneDisplay}
                </a>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#5b6f54] mb-1">
                  E-Mail
                </div>
                <a href={`mailto:${business.email}`} className="text-[16px] underline decoration-[#5b6f54] underline-offset-4">
                  {business.email}
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <div className="rounded-2xl overflow-hidden bg-[#eef0e6]">
                <iframe
                  title="Karte"
                  src="https://maps.google.com/maps?q=Blumen+Gr%C3%B6hb%C3%BChl%2C+Weingartener+Stra%C3%9Fe+27%2C+76646+Bruchsal&output=embed"
                  className="w-full aspect-[5/4] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/jnsBKqTRD29CBzGw6"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-[13px] text-[#5b6f54] hover:text-[#2a2a26]"
              >
                In Google Maps öffnen →
              </a>
            </div>
          </div>
        )}

        <nav className="border-t border-[#2a2a26]/10 pt-8 flex flex-wrap items-baseline justify-between gap-4">
          {prev ? (
            <Link href={`/${prev.slug}/`} className="group">
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#2a2a26]/55 mb-1">
                ← Vorher
              </div>
              <div className="font-newsreader text-[22px] group-hover:text-[#5b6f54] transition-colors">
                {prev.title}
              </div>
            </Link>
          ) : (
            <Link href="/" className="group">
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#2a2a26]/55 mb-1">← Start</div>
              <div className="font-newsreader text-[22px] group-hover:text-[#5b6f54] transition-colors">
                Startseite
              </div>
            </Link>
          )}
          {next && (
            <Link href={`/${next.slug}/`} className="group text-right">
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#2a2a26]/55 mb-1">Weiter →</div>
              <div className="font-newsreader text-[22px] group-hover:text-[#5b6f54] transition-colors">
                {next.title}
              </div>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
