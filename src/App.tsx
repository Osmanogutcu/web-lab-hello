function App() {
  return (
    <div lang="tr"> {/* Sayfa dilini belirtmek erişilebilirlik için kritiktir [cite: 628, 678] */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>
      <header>
        <nav aria-label="Ana navigasyon"> {/* Navigasyonu etiketledik [cite: 316, 317] */}
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content"> {/* Sayfada sadece bir tane main olmalı [cite: 83, 153] */}
        <h1>Osman Kerim Ogutcu - Kişisel Portfolyo</h1>
        <section id="hakkimda">
          <h2>Hakkimda</h2> {/* Her section bir başlık ile başlamalı [cite: 86, 152] */}
          <p>Ben Osman Kerim Ogutcu, 230541048 numarali Yazilim Muhendisligi bolumu ogrencisiyim.</p>
         <figure>
  <img src="https://via.placeholder.com/150" alt="Osman Kerim Ogutcu'nun profil fotoğrafi" />
  <figcaption>Osman Kerim Ogutcu</figcaption>
</figure>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article> {/* Bağımsız içerikler için article kullanılır [cite: 88, 89] */}
            <h3>Proje 1</h3>
            <p>Proje açiklamasi buraya gelecek.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <div className="form-group">
  <label htmlFor="subject">Konu: </label>
  <select id="subject" name="subject" required aria-describedby="subject-error">
    <option value="">-- Seciniz --</option>
    <option value="is">Is Teklifi</option>
    <option value="soru">Soru</option>
    <option value="oneri">Oneri</option>
  </select>
  <small id="subject-error" className="error-msg" role="alert"></small>
</div>

<div className="form-group">
  <label htmlFor="message">Mesajiniz:</label>
  <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
  <small id="message-error" className="error-msg" role="alert"></small>
</div>
          
        </section>

      </main>

      <footer>
        <p>&copy; 2026 [Osman Kerim Ogutcu]. Tum haklari saklidir.</p> {/* Alt bilgi alanı [cite: 94, 95] */}
      </footer>
    </div>
  )
}

export default App