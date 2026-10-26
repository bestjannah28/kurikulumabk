// Inggris Visual — interaktivitas ringan (tanpa suara, umpan balik visual saja)

// 1. Penyusun kalimat: This is a book.
const kataTerpilih = [];
const hasilEl = document.getElementById("kalimat-hasil");
const umpanEl = document.getElementById("umpan-balik");

document.querySelectorAll(".builder-words button").forEach((tombol) => {
  tombol.addEventListener("click", () => {
    kataTerpilih.push(tombol.dataset.word);
    tombol.classList.add("picked");
    tombol.disabled = true;
    hasilEl.textContent = kataTerpilih.join(" ") + ".";
    umpanEl.textContent = "";
  });
});

document.getElementById("cek-kalimat").addEventListener("click", () => {
  const benar = kataTerpilih.join(" ").toLowerCase() === "this is a book";
  umpanEl.textContent = benar
    ? "✅ Benar! This is a book."
    : "❌ Belum tepat, coba susun lagi: This — is — a — book.";
});

document.getElementById("hapus-kalimat").addEventListener("click", () => {
  kataTerpilih.length = 0;
  hasilEl.textContent = "Kalimatmu akan muncul di sini.";
  umpanEl.textContent = "";
  document.querySelectorAll(".builder-words button").forEach((tombol) => {
    tombol.classList.remove("picked");
    tombol.disabled = false;
  });
});

// 2. Kuis cepat: pilih gambar APPLE.
const umpanKuis = document.getElementById("umpan-kuis");
document.querySelectorAll(".quiz-options button").forEach((tombol) => {
  tombol.addEventListener("click", () => {
    document.querySelectorAll(".quiz-options button").forEach((t) => t.classList.remove("picked"));
    tombol.classList.add("picked");
    umpanKuis.textContent =
      tombol.dataset.jawaban === "benar"
        ? "✅ Benar! Itu APPLE."
        : "❌ Bukan itu, coba lagi.";
  });
});

// 3. Filter kamus visual.
const cariEl = document.getElementById("cari-kata");
cariEl.addEventListener("input", () => {
  const kata = cariEl.value.trim().toLowerCase();
  document.querySelectorAll("#daftar-kata li").forEach((item) => {
    item.style.display = !kata || item.dataset.kunci.includes(kata) ? "" : "none";
  });
});
