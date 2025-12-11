import {
  Building,
  School,
  Landmark,
  Home,
  Library,
  Computer,
  Trophy,
} from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: <School size={28} />,
      title: "Ruang Kelas Nyaman",
      desc: "Dilengkapi media pembelajaran modern dan tata ruang ergonomis.",
    },
    {
      icon: <Landmark size={28} />,
      title: "Tempat Ibadah",
      desc: "Masjid atau mushola yang digunakan untuk kegiatan ibadah dan kajian.",
    },
    {
      icon: <Home size={28} />,
      title: "Asrama Pondok",
      desc: "Gedung asrama terpisah putra-putri dengan pengawasan dan fasilitas lengkap.",
    },
    {
      icon: <Library size={28} />,
      title: "Perpustakaan",
      desc: "Koleksi buku islami, akademik, dan literatur umum sebagai sumber belajar.",
    },
    {
      icon: <Computer size={28} />,
      title: "Laboratorium Komputer",
      desc: "Fasilitas pembelajaran teknologi, coding, dan literasi digital.",
    },
    {
      icon: <Trophy size={28} />,
      title: "Lapangan Olahraga",
      desc: "Sarana olahraga untuk kegiatan fisik, ekstrakurikuler, dan kompetisi.",
    },
  ];

  return (
    <section className="facilities section" id="fasilitas">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <Building size={18} />
            Fasilitas
          </span>
          <h2 className="section-title">
            Fasilitas <span className="text-gradient">Modern & Lengkap</span>
          </h2>
          <p className="section-description">
            Sarana pendukung lengkap untuk menciptakan lingkungan belajar yang nyaman,
            aman, dan produktif.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((item, i) => (
            <div className="facility-card animate-on-scroll" key={i}>
              <div className="facility-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
