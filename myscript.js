// Form verisini alma ve kaydetme
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("kullaniciForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const ad = document.getElementById("ad").value;
            const email = document.getElementById("email").value;
            const mesaj = document.getElementById("mesaj").value;

            // Nesne olarak veriyi oluştur
            const veri = {
                ad: ad,
                email: email,
                mesaj: mesaj
            };

            // localStorage'a kaydet
            localStorage.setItem("kullaniciVerisi", JSON.stringify(veri));

            // veriler.html sayfasına yönlendir
            window.location.href = "veriler.html";
        });
    }

    // Veriler sayfasında tabloyu doldurma
    const veriAlani = document.getElementById("veriTablosu");
    if (veriAlani) {
        const veri = JSON.parse(localStorage.getItem("kullaniciVerisi"));
        if (veri) {
            const satir = document.createElement("tr");

            const adTd = document.createElement("td");
            adTd.textContent = veri.ad;

            const emailTd = document.createElement("td");
            emailTd.textContent = veri.email;

            const mesajTd = document.createElement("td");
            mesajTd.textContent = veri.mesaj;

            satir.appendChild(adTd);
            satir.appendChild(emailTd);
            satir.appendChild(mesajTd);

            veriAlani.appendChild(satir);
        }
    }
});
// Ziyaretçiye saatine göre selam verme
document.addEventListener("DOMContentLoaded", function () {
    const selamDiv = document.getElementById("selamlama");
    if (selamDiv) {
        const saat = new Date().getHours();
        let mesaj;
        if (saat < 12) {
            mesaj = "Günaydın! HTML öğrenmeye hazır mısın?";
        } else if (saat < 18) {
            mesaj = "İyi günler! HTML ile neler yapacaksın?";
        } else {
            mesaj = "İyi akşamlar! Kod yazma zamanı geldi.";
        }
        // CSS kart stilini kullanmak için sınıf kart ekledik
        selamDiv.textContent = mesaj;
    }
});
// HTML-CSS-JS entegrasyon örneği
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("stilDegistirBtn");
    const kart = document.getElementById("entegreKart");
    if (btn && kart) {
        btn.addEventListener("click", function () {
            kart.style.backgroundColor = "#e0f7fa";
        });
    }
});
// İletişim formu basit uyarı gösterimi
document.addEventListener("DOMContentLoaded", function () {
    const iletisimForm = document.getElementById("iletisimForm");
    if (iletisimForm) {
        iletisimForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Mesajınız için teşekkürler! En kısa sürede dönüş yapacağız.");
            iletisimForm.reset();
        });
    }
});
// Navbar scroll efekti
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});
