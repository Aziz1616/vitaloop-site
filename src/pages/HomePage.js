import React from 'react';
// Projenize 'src/assets' klasörü oluşturup bir ekran görüntüsü ekleyin.
// import appScreenshot from '../assets/vitaloop-screenshot.png';

function HomePage() {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <h1>VitaLoop</h1>
          <p>Sağlıklı yaşam ve kalori takibi hedeflerinize ulaşmanın en kolay yolu!</p>
          {/* Google Play ve App Store linklerinizi buraya ekleyin */}
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="store-button">
            Google Play'den Alın
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="store-button">
            App Store'dan İndirin
          </a>
        </div>
        <div className="hero-image">
            {/* <img src={appScreenshot} alt="VitaLoop Uygulama Ekran Görüntüsü" /> */}
            <div className="img-placeholder">Uygulama Ekran Görüntüsü</div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Neden VitaLoop?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Kolay Kalori Takibi</h3>
            <p>Geniş yiyecek veritabanımız ile yediğiniz her şeyin kalorisini saniyeler içinde kaydedin.</p>
          </div>
          <div className="feature-item">
            <h3>Egzersiz Kaydı</h3>
            <p>Yaptığınız spor aktivitelerini ve yaktığınız kalorileri takip ederek motivasyonunuzu artırın.</p>
          </div>
          <div className="feature-item">
            <h3>Kişiselleştirilmiş Raporlar</h3>
            <p>Hedeflerinize ne kadar yaklaştığınızı gösteren haftalık ve aylık raporlarla gelişiminizi izleyin.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
