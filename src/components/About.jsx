import {
  Star,
  BookOpen,
  Scroll,
  Mic,
  Atom,
  Check,
} from "lucide-react";

export default function About() {
  // Data program dirapikan ke object array biar scalable
  const programs = [
    {
      icon: <BookOpen size={28} />,
      badge: "Tahfidz",
      badgeClass: "",
      title: "Program Tahfidz Al-Qur'an",
      desc: "Program intensif hafalan Al-Qur'an bertahap dan terstruktur.",
      features: ["Target Juz Bertingkat", "Muraja'ah Harian", "Ujian Tahfidz Berkala"],
    },
    {
      icon: <Scroll size={28} />,
      badge: "Bahasa",
      badgeClass: "badge-secondary",
      title: "Bahasa Arab & Kitab Kuning",
      desc: "Pembelajaran bahasa Arab dan pemahaman literatur klasik.",
      features: ["Nahwu & Sharaf", "Kajian Kitab Turats", "Praktik Percakapan"],
    },
    {
      icon: <Mic size={28} />,
      badge: "Bilingual",
      badgeClass: "badge-tertiary",
      title: "Speaking English Program",
      desc: "Pembiasaan komunikasi bahasa Inggris dalam kehidupan sekolah.",
      features: [
        "English Speaking Day",
        "Public Speaking & Debat",
        "English Club",
      ],
    },
    {
      icon: <Atom size={28} />,
      badge: "STEM",
      badgeClass: "badge-quaternary",
      title: "Sains, Teknologi & Matematika",
      desc: "Pembelajaran STEM modern melalui eksperimen dan digital learning.",
      features: [
        "Laboratorium Sains & Komputer",
        "Coding & Robotika",
        "Kelas Olimpiade Matematika",
      ],
    },
  ];

  return (
    <>
      {/* ===== ABOUT MAIN SECTION ===== */}
      <section className="about section" id="tentang">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-badge">
              <Star size={18} />
              Kenapa Memilih Kami?
            </span>

            <h2 className="section-title">
              Alasan Orang Tua Memilih{" "}
              <span className="text-gradient">SMP Plus Sirojut Tholibien</span>
            </h2>

            <p className="section-description">
              Sekolah ini bukan hanya tempat belajar—namun lingkungan terbaik untuk
              menumbuhkan akhlak, kecerdasan, disiplin, dan kemampuan hidup yang relevan
              dengan perkembangan zaman.
            </p>
          </div>

          {/* Programs */}
          <div className="programs-grid">
            {programs.map((item, i) => (
              <div className="program-card animate-on-scroll" key={i}>
                <div className="program-icon">{item.icon}</div>

                <span className={`program-badge ${item.badgeClass}`}>
                  {item.badge}
                </span>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <ul className="program-features">
                  {item.features.map((feature, index) => (
                    <li key={index}>
                      <Check size={16} /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HEADMASTER SECTION ===== */}
      <div className="headmaster-wrapper animate-on-scroll">
        <div className="headmaster-photo-box">
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800"
            alt="Kepala Sekolah"
            className="headmaster-photo-2"
          />
        </div>

        <div className="headmaster-info">
          <span className="badge-headmaster">Kepala Sekolah</span>

          <h3 className="headmaster-title">Ust. Drs. Ahmad Fauzi</h3>

          <p className="headmaster-text">
            Dengan pengalaman lebih dari <strong>15 tahun</strong> dalam pendidikan Islam modern,
            beliau membawa visi untuk mencetak generasi yang unggul dalam{" "}
            <strong>akhlak, sains, dan teknologi</strong> tanpa meninggalkan nilai Qur’ani.
          </p>

          <p className="headmaster-quote-2">
            “Sekolah adalah tempat memupuk iman, menanam ilmu, dan memanen masa depan.”
          </p>

          <a href="#" className="btn-headmaster">
            Lihat Biodata Lengkap
          </a>
        </div>
      </div>
    </>
  );
}
