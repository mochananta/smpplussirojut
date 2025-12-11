import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Contact({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault(); // cegah reload halaman

    // OPTIONAL: ambil data form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form Submitted:", data);

    // Trigger toast
    onSubmit();

    // Reset form setelah submit
    e.target.reset();
  }

  return (
    <section className="contact section" id="kontak">
      <div className="container">
        
        {/* Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <Mail size={18} /> Hubungi Kami
          </span>
          <h2 className="section-title">
            Hubungi <span className="text-gradient">Kami</span>
          </h2>
          <p className="section-description">
            Punya pertanyaan? Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Contact Info */}
          <div className="contact-info animate-on-scroll">
            <h3>Informasi Kontak</h3>
            <p>
              Kami siap membantu Anda dengan informasi seputar pendaftaran,
              program, dan fasilitas sekolah.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Alamat</h4>
                  <p>
                    Jl. Wijaya Kusuma No.11A, Mojopanggung, Giri, Banyuwangi,
                    Jawa Timur 68425
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Telepon</h4>
                  <p>(021) 1234-5678</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@smpplus-sirojuttholibien.sch.id</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4>Jam Operasional</h4>
                  <p>Senin - Sabtu: 07:00 - 16:00 WIB</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="social-link" aria-label="Youtube">
                <Youtube />
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                <MessageCircle />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-container animate-on-scroll">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Kirim Pesan</h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input type="text" name="name" placeholder="Masukkan nama lengkap" required />
                </div>

                <div className="form-group">
                  <label>Nomor Telepon</label>
                  <input type="tel" name="phone" placeholder="08xx-xxxx-xxxx" required />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="email@example.com" required />
              </div>

              <div className="form-group">
                <label>Subjek</label>
                <select name="subject" required>
                  <option value="">Pilih subjek</option>
                  <option value="pendaftaran">Informasi Pendaftaran</option>
                  <option value="program">Program Pembelajaran</option>
                  <option value="fasilitas">Fasilitas Sekolah</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div className="form-group">
                <label>Pesan</label>
                <textarea name="message" rows="4" placeholder="Tulis pesan Anda..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-full">
                <Send size={18} /> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
