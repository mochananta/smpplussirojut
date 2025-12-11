import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="navbar">
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
          <a href="/" className="nav-link">Beranda</a>

          {/* Dropdown Tentang */}
          <div
            className="dropdown"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <a className="nav-link dropdown-btn">
              Tentang <ChevronDown size={16} className="dropdown-icon" />
            </a>

            <div className={`dropdown-menu ${openDropdown ? "show" : ""}`}>
              <Link to="/profil" className="dropdown-item">Profil Sekolah</Link>
              <Link to="/struktur" className="dropdown-item">Struktur Organisasi</Link>
            </div>
          </div>

          <a href="#program" className="nav-link">Program</a>
          <a href="#fasilitas" className="nav-link">Fasilitas</a>
          <a href="#berita" className="nav-link">Berita</a>
          <a href="#kontak" className="nav-link">Kontak</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <nav className="mobile-nav">
          <a onClick={handleLinkClick} href="#beranda" className="mobile-nav-link">Beranda</a>

          {/* Dropdown untuk mobile (opsional) */}
          <details className="mobile-dropdown">
            <summary className="mobile-nav-link">Tentang</summary>
            <a href="#profil" className="mobile-sub-link">Profil Sekolah</a>
            <a href="#visi-misi" className="mobile-sub-link">Visi & Misi</a>
            <a href="#struktur" className="mobile-sub-link">Struktur Organisasi</a>
          </details>

          <a onClick={handleLinkClick} href="#program" className="mobile-nav-link">Program</a>
          <a onClick={handleLinkClick} href="#fasilitas" className="mobile-nav-link">Fasilitas</a>
          <a onClick={handleLinkClick} href="#berita" className="mobile-nav-link">Berita</a>
          <a onClick={handleLinkClick} href="#kontak" className="mobile-nav-link">Kontak</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
