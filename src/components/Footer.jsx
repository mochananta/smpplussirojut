import {
  GraduationCap,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="logo logo-light">
              <div className="logo-icon">
                <GraduationCap size={20} />
              </div>
              <div className="logo-text">
                <span className="logo-title">SMP Plus</span>
                <span className="logo-subtitle">Sirojut Tholibien</span>
              </div>
            </a>

            <p>
              Membentuk generasi Qurani yang berilmu, berakhlak mulia, dan siap
              menghadapi tantangan masa depan.
            </p>

            <div className="social-links">
              <a href="#" className="social-link"><Facebook /></a>
              <a href="#" className="social-link"><Instagram /></a>
              <a href="#" className="social-link"><Youtube /></a>
              <a href="#" className="social-link"><MessageCircle /></a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4>Menu Cepat</h4>
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#program">Program</a></li>
              <li><a href="#fasilitas">Fasilitas</a></li>
              <li><a href="#berita">Berita</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-links">
            <h4>Program Kami</h4>
            <ul>
              <li><a href="#">Program Tahfidz</a></li>
              <li><a href="#">Program Sains</a></li>
              <li><a href="#">Program Bilingual</a></li>
              <li><a href="#">Ekstrakurikuler</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Kontak</h4>

            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>
                Jl. Wijaya Kusuma No.11A, Banyuwangi, Jawa Timur
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <span>(021) 1234-5678</span>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <span>info@smpplus-sirojuttholibien.sch.id</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SMP Plus Sirojut Tholibien. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
