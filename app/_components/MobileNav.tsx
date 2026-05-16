'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface NavSection { slug: string; title: string; }

export default function MinimalMobileNav({ sections }: { sections: NavSection[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const drawer = (
    <div className="fixed inset-x-0 top-16 bottom-0 bg-[#faf7f2] border-t border-[#2a2a26]/10 overflow-y-auto z-[60] lg:hidden">
      <nav className="px-6 py-8 space-y-1">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="block py-2 font-newsreader italic text-[24px] text-[#5b6f54]"
        >
          Startseite
        </Link>
        {sections.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}/`}
            onClick={() => setOpen(false)}
            className="block py-2 text-[20px] text-[#2a2a26]"
          >
            {s.title}
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Menü"
        className="flex flex-col gap-1.5 p-2 relative z-[70]"
      >
        <span className={`block w-6 h-px bg-[#2a2a26] transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`block w-6 h-px bg-[#2a2a26] transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`block w-6 h-px bg-[#2a2a26] transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>
      {mounted && open && createPortal(drawer, document.body)}
    </div>
  );
}
