import { UserPlus, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = ["/bg1.png", "/2.png", "/2.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="beranda">
      <div className="container hero-grid">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <span className="hero-badge">
            <span className="badge-dot"></span>
            Pendaftaran Tahun Ajaran 2024/2025 Dibuka
          </span>

          <h1>
            Membentuk Generasi{" "}
            <span className="text-gradient">Berilmu & Berakhlak</span>{" "}
            Mulia
          </h1>

          <p>
            SMP Plus Sirojut Tholibien mengintegrasikan kurikulum nasional dengan pendidikan pesantren modern.
          </p>

          <div className="hero-buttons">
            <a href="#kontak" className="btn-gold"><UserPlus size={18} /> Daftar Sekarang</a>
            <a href="#tentang" className="btn-outline"><PlayCircle size={18} /> Pelajari Lebih Lanjut</a>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="hero-image">
          <div className="slider">
            <div
              className="slides"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "0.6s ease"
              }}
            >
              {images.map((src, i) => (
                <img key={i} src={src} alt={`Slide ${i}`} />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={i === currentSlide ? "active" : ""}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
