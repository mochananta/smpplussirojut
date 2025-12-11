export default function Struktur() {
  return (
    <main className="struktur-wrapper">
      <section className="struktur-hero">
        <div className="container">
          <span className="badge">Struktur Organisasi</span>
          <h1>Struktur Organisasi SMP Plus Sirojut Tholibien</h1>
          <p>Struktur resmi organisasi sekolah dalam menjalankan tata kelola pendidikan.</p>
        </div>
      </section>

      {/* ===== BAGAN ORGANISASI ===== */}
      <section className="org-section">
        <div className="container">
          <div className="org-tree">

            {/* Kepala Sekolah */}
            <div className="org-level">
              <div className="org-card utama">
                <h3>Kepala Sekolah</h3>
                <p>Nama Kepala Sekolah</p>
              </div>
            </div>

            {/* Line */}
            <div className="line-vertical"></div>

            {/* Wakil Kepala */}
            <div className="org-level">
              <div className="org-card tengah">
                <h3>Wakil Kepala Sekolah</h3>
                <p>Nama Wakil Kepala</p>
              </div>
            </div>

            {/* Line */}
            <div className="line-vertical"></div>

            {/* Koordinator & Bagian Lain */}
            <div className="org-level multi">
              <div className="org-card">
                <h3>Kurikulum</h3>
                <p>Nama Guru</p>
              </div>

              <div className="org-card">
                <h3>Kesiswaan</h3>
                <p>Nama Guru</p>
              </div>

              <div className="org-card">
                <h3>Sarana & Prasarana</h3>
                <p>Nama Staff</p>
              </div>

              <div className="org-card">
                <h3>Humas</h3>
                <p>Nama Staff</p>
              </div>
            </div>

            {/* Horizontal Line */}
            <div className="line-horizontal"></div>

            {/* Guru & TU */}
            <div className="org-level multi">
              <div className="org-card">
                <h3>Guru</h3>
                <p>Seluruh Tenaga Pendidik</p>
              </div>

              <div className="org-card">
                <h3>Tata Usaha</h3>
                <p>Staff Administrasi</p>
              </div>

              <div className="org-card">
                <h3>Perpustakaan</h3>
                <p>Petugas Perpus</p>
              </div>

              <div className="org-card">
                <h3>Kebersihan</h3>
                <p>Petugas Kebersihan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
