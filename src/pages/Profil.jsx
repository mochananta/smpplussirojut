import {
  Building2,
  Users,
  BookOpen,
  Award,
  School,
  ChevronRight
} from "lucide-react";

export default function ProfilSekolah() {
  return (
    <main className="profil">
      {/* ===== Hero ===== */}
      <section className="profil-hero">
        <div className="container">
          <span className="badge">Profil Sekolah</span>
          <h1>SMP Plus Sirojut Tholibien</h1>
          <p>
            Sekolah berbasis Islami dengan lingkungan belajar modern, berkarakter,
            dan berprestasi.
          </p>
        </div>
      </section>

      {/* ===== Tentang Kami ===== */}
      <section className="profil-about">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Tentang Sekolah</h2>
            <p>
              SMP Plus Sirojut Tholibien merupakan lembaga pendidikan yang
              memadukan ilmu pengetahuan umum dan keagamaan, dengan komitmen
              mencetak generasi berakhlak, berprestasi, dan siap menghadapi masa
              depan.
            </p>

            <p>
              Dengan tenaga pendidik profesional serta fasilitas lengkap, kami
              menciptakan lingkungan belajar yang nyaman, aman, dan modern.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=870&auto=format&fit=crop"
              alt="Profil Sekolah"
            />
          </div>
        </div>
      </section>

      {/* ===== VISI MISI ===== */}
      <section className="visi-misi-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <School size={18} /> Visi & Misi
            </span>
            <h2 className="section-title">
              Visi & <span>Misi Sekolah</span>
            </h2>
          </div>

          <div className="about-grid">
            {/* ===== VISI ===== */}
            <div className="about-card">
              <div className="about-card-icon">
                <Award size={32} />
              </div>
              <h3>Visi Sekolah</h3>
              <p>
                “Mewujudkan generasi yang berakhlakul karimah, unggul dalam
                prestasi, serta siap bersaing di era modern dengan berlandaskan
                nilai-nilai Islami.”
              </p>
            </div>

            {/* ===== MISI ===== */}
            <div className="about-card">
              <div className="about-card-icon">
                <BookOpen size={32} />
              </div>

              <h3>Misi Sekolah</h3>
              <ul>
                <li>Menanamkan akhlak mulia melalui pembiasaan nilai Islami.</li>
                <li>Melaksanakan pembelajaran kreatif, inovatif, dan berkarakter.</li>
                <li>Mengembangkan potensi siswa melalui kegiatan akademik dan non-akademik.</li>
                <li>Menciptakan lingkungan sekolah yang nyaman, bersih, dan disiplin.</li>
                <li>Menjalin kerja sama dengan orang tua dan masyarakat demi tercapainya pendidikan optimal.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
