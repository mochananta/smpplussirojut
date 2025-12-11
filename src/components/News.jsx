import { Newspaper, Calendar, ArrowRight } from "lucide-react";

export default function News() {
  const newsData = [
    {
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
      category: "Prestasi",
      date: "15 November 2024",
      title: "Wisuda Tahfidz: 25 Santri Berhasil Hafal 5 Juz",
      desc: "Alhamdulillah, SMP Plus Sirojut Tholibien kembali menggelar wisuda tahfidz dengan 25 santri yang berhasil menyelesaikan hafalan 5 juz Al-Quran.",
      featured: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400",
      category: "Akademik",
      date: "10 November 2024",
      title: "Juara 1 Olimpiade Sains Tingkat Kabupaten",
      desc: "Siswa kami meraih juara 1 dalam Olimpiade Sains tingkat kabupaten.",
      featured: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400",
      category: "Pengumuman",
      date: "1 November 2024",
      title: "Pendaftaran Siswa Baru 2024/2025 Dibuka",
      desc: "Pendaftaran siswa baru tahun ajaran 2024/2025 resmi dibuka.",
      featured: false,
    },
  ];

  return (
    <section className="news section section-alt" id="berita">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <Newspaper size={18} /> Berita & Kegiatan
          </span>
          <h2 className="section-title">
            Berita <span className="text-gradient">Terbaru</span>
          </h2>
          <p className="section-description">
            Ikuti perkembangan terbaru dan kegiatan di SMP Plus Sirojut Tholibien.
          </p>
        </div>

        <div className="news-grid">
          {newsData.map((item, i) => (
            <article
              className={`news-card ${item.featured ? "news-featured" : ""} animate-on-scroll`}
              key={i}
            >
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="news-category">{item.category}</span>
              </div>

              <div className="news-content">
                <time className="news-date">
                  <Calendar size={16} /> {item.date}
                </time>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#" className="news-link">
                  Baca selengkapnya <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
