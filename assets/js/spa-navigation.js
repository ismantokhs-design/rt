// assets/js/spa-navigation.js

document.addEventListener('click', async (e) => {
    // Cari apakah yang diklik adalah link di dalam sidebar desktop
    const link = e.target.closest('aside#desktopSidebar a');
    
    if (link) {
        const targetUrl = link.getAttribute('href');
        
        // Abaikan jika link kosong, '#' atau membuka tab baru/external
        if (!targetUrl || targetUrl === '#' || link.getAttribute('target') === '_blank') return;
        
        // Cegah full page reload default dari browser
        e.preventDefault();

        try {
            // Ambil halaman HTML tujuan secara asinkron di background
            const response = await fetch(targetUrl);
            if (!response.ok) throw new Error("Gagal memuat halaman tujuan.");
            
            const htmlText = await response.text();
            
            // Parsing dokumen HTML hasil fetch
            const parser = new DOMParser();
            const docHtml = parser.parseFromString(htmlText, 'text/html');
            const newMain = docHtml.querySelector('main');
            const newTitle = docHtml.querySelector('title');

            const mainContentArea = document.getElementById('mainContentArea');

            if (newMain && mainContentArea) {
                // Ganti isi konten utama tanpa menyentuh sidebar sama sekali
                mainContentArea.innerHTML = newMain.innerHTML;
                
                // Ubah URL di address bar browser agar tetap sinkron
                window.history.pushState({ path: targetUrl }, '', targetUrl);
                
                // Perbarui Judul Halaman jika ada
                if (newTitle) document.title = newTitle.innerText;

                // Perbarui kelas visual tombol menu aktif pada sidebar
                document.querySelectorAll('aside#desktopSidebar a').forEach(el => {
                    el.className = 'flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer';
                });
                link.className = 'flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-emerald-50 text-emerald-700 font-semibold transition-all cursor-pointer';

                // Eksekusi ulang skrip/inisialisasi spesifik halaman jika diperlukan (opsional)
                window.scrollTo(0, 0);
            } else {
                // Fallback jika elemen <main> tidak ditemukan
                window.location.href = targetUrl;
            }
        } catch (err) {
            console.error("Kesalahan navigasi SPA:", err);
            // Fallback pengaman jika fetch gagal (misal dijalankan langsung via file:// tanpa local server)
            window.location.href = targetUrl;
        }
    }
});

// Tangani tombol Back / Forward pada browser agar konten ikut berganti mulus
window.addEventListener('popstate', async () => {
    try {
        const response = await fetch(window.location.href);
        const htmlText = await response.text();
        const parser = new DOMParser();
        const docHtml = parser.parseFromString(htmlText, 'text/html');
        const newMain = docHtml.querySelector('main');
        const mainContentArea = document.getElementById('mainContentArea');
        
        if (newMain && mainContentArea) {
            mainContentArea.innerHTML = newMain.innerHTML;
        } else {
            window.location.reload();
        }
    } catch (e) {
        window.location.reload();
    }
});