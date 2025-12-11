import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    // lucide icon refresh
    if (window.lucide) window.lucide.createIcons();

    // scroll event
    const handleScroll = () => {
      if (window.scrollY > 60) setScroll(true);
      else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="navbar" className={`navbar ${scroll ? "scrolled" : ""}`}>

      <div className="container navbar-container">

        {/* Logo */}
        <a href="#" className="logo">
          <div className="logo-icon">
            <i data-lucide="graduation-cap"></i>
          </div>
          <div className="logo-text">
            <span className="logo-title">SMP Plus</span>
            <span className="logo-subtitle">Sirojut Tholibien</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="nav-desktop">
          <a href="#beranda" className="nav-link">Beranda</a>
          <a href="#tentang" className="nav-link">Tentang</a>
          <a href="#program" className="nav-link">Program</a>
          <a href="#fasilitas" className="nav-link">Fasilitas</a>
          <a href="#berita" className="nav-link">Berita</a>
          <a href="#kontak" className="nav-link">Kontak</a>
        </nav>

        {/* Toggle */}
        <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
          <i data-lucide={open ? "x" : "menu"}></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {["Beranda","Tentang","Program","Fasilitas","Berita","Kontak"].map((item, i) => (
              <a key={i} className="mobile-nav-link" href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
