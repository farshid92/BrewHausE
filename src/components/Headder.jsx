import { useEffect, useState } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#shop', label: 'Shop' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <a href="#hero" className="text-xl font-bold">
          Brew<span className="text-ember">Haus</span>
        </a>
        <ul className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-ink-soft transition-colors hover:text-ember">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-line sm:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      <ul
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line px-6 py-2 sm:hidden"
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-ink-soft transition-colors hover:text-ember"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
