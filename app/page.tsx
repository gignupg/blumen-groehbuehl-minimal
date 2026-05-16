import Link from 'next/link';
import { business, homePhotos, sections, credentials, gastronomieClients, aktionstage } from '@/lib/content';
import { photo } from '@/lib/paths';

export default function MinimalHome() {
  const featureSections = sections.filter((s) => s.group === 'angebot');
  return (
    <>
      <section className="px-6 lg:px-10 pt-16 lg:pt-28 pb-12 lg:pb-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#5b6f54] mb-6 font-familjen">
              Florist · Untergrombach · seit 1984
            </div>
            <h1 className="font-newsreader text-[clamp(54px,10vw,148px)] leading-[0.94] tracking-[-0.02em] text-[#2a2a26]">
              Blumen,<br />
              <em className="italic text-[#5b6f54]">die bleiben.</em>
            </h1>
            <p className="mt-8 max-w-md text-[18px] leading-[1.55] text-[#2a2a26]/75">
              Wir sind ein Familienbetrieb in Bruchsal-Untergrombach, der seit
              zweiundvierzig Jahren Sträuße bindet, Hochzeiten ausstattet,
              Trauerfeiern begleitet und die Tische der besten Restaurants der
              Region schmückt.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/wir-ueber-uns/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5b6f54] text-[#faf7f2] text-[14px] hover:bg-[#2a2a26] transition-colors"
              >
                Über uns
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/adresse/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2a2a26]/20 text-[14px] hover:border-[#5b6f54] hover:text-[#5b6f54] transition-colors"
              >
                Laden besuchen
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-[#e8e3d5] mx-auto max-w-[667px] shadow-[0_18px_40px_-24px_rgba(42,42,38,0.35)]">
              <div className="grid grid-cols-[351fr_316fr] gap-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo('home_01.gif')} alt="Schaufenster oben links" className="w-full h-auto block pixel-img" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo('home_02.gif')} alt="Schaufenster oben rechts" className="w-full h-auto block pixel-img" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo('home_03.gif')} alt="Schaufenster unten links" className="w-full h-auto block pixel-img" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo('home_04_neu.gif')} alt="Schaufenster unten rechts" className="w-full h-auto block pixel-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef0e6] border-y border-[#5b6f54]/15">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          <div>
            <div className="font-newsreader text-[44px] lg:text-[60px] leading-none text-[#5b6f54]">42</div>
            <div className="mt-2 text-[13px] text-[#2a2a26]/70 leading-snug">
              Jahre Familien-<br/>betrieb · seit 1984
            </div>
          </div>
          <div>
            <div className="font-newsreader text-[44px] lg:text-[60px] leading-none text-[#5b6f54]">3</div>
            <div className="mt-2 text-[13px] text-[#2a2a26]/70 leading-snug">
              Auszeichnungen · IGS Rostock, Kehl
            </div>
          </div>
          <div>
            <div className="font-newsreader text-[44px] lg:text-[60px] leading-none text-[#5b6f54]">5</div>
            <div className="mt-2 text-[13px] text-[#2a2a26]/70 leading-snug">
              Stammkunden in der gehobenen Gastronomie
            </div>
          </div>
          <div>
            <div className="font-newsreader text-[44px] lg:text-[60px] leading-none text-[#5b6f54]">∞</div>
            <div className="mt-2 text-[13px] text-[#2a2a26]/70 leading-snug">
              Sträuße, die wir gerne wieder binden
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-10 lg:mb-14">
          <h2 className="font-newsreader text-[36px] lg:text-[48px] leading-tight tracking-[-0.01em]">
            Unser <em className="italic text-[#5b6f54]">Angebot</em>
          </h2>
          <span className="text-[12px] text-[#2a2a26]/55 tracking-wide">
            Neun Bereiche, alle aus einer Hand
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {featureSections.map((s) => {
            const cover = s.photos[0];
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="group block bg-[#eef0e6] rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="aspect-[5/4] flex items-center justify-center bg-[#e0e6d3] overflow-hidden">
                  {cover ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={photo(cover)}
                      alt=""
                      className="max-w-full max-h-full pixel-img transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-newsreader italic text-[40px] text-[#5b6f54]/40">
                      {s.title.slice(0, 1)}
                    </span>
                  )}
                </div>
                <div className="p-5 lg:p-6">
                  <div className="font-newsreader text-[24px] leading-tight text-[#2a2a26] group-hover:text-[#5b6f54] transition-colors">
                    {s.title}
                  </div>
                  {s.kicker && (
                    <div className="text-[13px] text-[#2a2a26]/60 mt-1">{s.kicker}</div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-[#5b6f54] text-[#faf7f2]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="text-[12px] tracking-[0.25em] uppercase text-[#c6cfb6] mb-5">
            Ein Gedanke
          </div>
          <p className="font-newsreader italic text-[clamp(28px,4.5vw,48px)] leading-[1.2] max-w-3xl">
            „Blumen spenden Trost, Blumen spenden Freude — und manchmal sind sie
            einfach nur ein guter Mittwoch."
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-[#5b6f54] mb-4">
            Auszeichnungen
          </div>
          <h2 className="font-newsreader text-[32px] lg:text-[40px] leading-tight tracking-[-0.01em] mb-8">
            Anerkennung aus<br /><em className="italic text-[#5b6f54]">Rostock & Kehl.</em>
          </h2>
          <ul className="divide-y divide-[#2a2a26]/10">
            {credentials.map((c) => (
              <li key={c.label} className="py-4 flex items-baseline justify-between gap-3">
                <span className="font-newsreader text-[22px] text-[#2a2a26]">{c.label}</span>
                <span className="text-[14px] text-[#2a2a26]/65">{c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-[#5b6f54] mb-4">
            Lieferant
          </div>
          <h2 className="font-newsreader text-[32px] lg:text-[40px] leading-tight tracking-[-0.01em] mb-8">
            <em className="italic text-[#5b6f54]">Stammkunden</em><br />in der Region.
          </h2>
          <ul className="space-y-3">
            {gastronomieClients.map((c) => (
              <li key={c.name} className="bg-[#eef0e6] rounded-xl px-5 py-4 flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <div className="font-newsreader text-[20px] text-[#2a2a26]">{c.name}</div>
                  <div className="text-[12px] text-[#2a2a26]/60">{c.kind}</div>
                </div>
                <div className="text-[12px] tracking-[0.18em] uppercase text-[#5b6f54]">
                  {c.place}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#eef0e6] border-y border-[#5b6f54]/15">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="text-[11px] tracking-[0.25em] uppercase text-[#5b6f54] mb-4">
            Aktionstage im Jahr
          </div>
          <h2 className="font-newsreader text-[32px] lg:text-[40px] leading-tight tracking-[-0.01em] mb-10">
            <em className="italic text-[#5b6f54]">Drei Anlässe</em>, jedes Jahr.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {aktionstage.map((a) => (
              <div key={a.name} className="bg-[#faf7f2] rounded-2xl p-6 lg:p-7">
                <div className="text-[12px] tracking-[0.18em] uppercase text-[#5b6f54]">{a.when}</div>
                <div className="font-newsreader text-[26px] lg:text-[30px] leading-tight mt-2">
                  {a.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="bg-[#2a2a26] text-[#faf7f2] rounded-3xl px-8 lg:px-14 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#94a888] mb-4">
              Besuchen
            </div>
            <h2 className="font-newsreader text-[36px] lg:text-[52px] leading-tight">
              Komm vorbei.<br />
              <em className="italic text-[#94a888]">Wir sind da.</em>
            </h2>
            <p className="mt-6 text-[16px] text-[#faf7f2]/75 max-w-md">
              Der Laden steht an der Weingartener Straße in Untergrombach,
              zwischen Karlsruhe und Heidelberg. Bei besonderen Wünschen
              empfehlen wir eine Vorbestellung von zwei bis drei Tagen.
            </p>
          </div>
          <div className="space-y-5 text-[15px]">
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#94a888] mb-1">Anschrift</div>
              <div className="leading-relaxed">
                {business.street}<br />
                {business.postal} {business.city}
              </div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#94a888] mb-1">Telefon</div>
              <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="text-[20px] font-newsreader">
                {business.phoneDisplay}
              </a>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#94a888] mb-1">E-Mail</div>
              <a href={`mailto:${business.email}`} className="underline decoration-[#94a888] underline-offset-4">
                {business.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
