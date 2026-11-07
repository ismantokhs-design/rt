// assets/js/sidebar.js

export function renderSidebar(activeMenu = 'home', isSubFolder = false) {
    // Jika isSubFolder true, prefix adalah '../' untuk keluar ke root utama
    const prefix = isSubFolder ? '../' : '';
    
    // Ambil status tersimpan dari localStorage
    const savedState = localStorage.getItem('sidebarState');
    const isCollapsed = savedState === 'collapsed';

    // Tentukan kelas ukuran dan visibilitas teks awal berdasarkan state
    const widthClass = isCollapsed ? 'w-20' : 'w-64';
    const textVisibilityClass = isCollapsed ? 'hidden' : '';

    const getSidebarClass = (menuName) => {
        return activeMenu === menuName 
            ? 'flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-emerald-50 text-emerald-700 font-semibold transition-all cursor-pointer' 
            : 'flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer';
    };

    return `
        <!-- SIDEBAR KIRI DESKTOP -->
        <aside id="desktopSidebar" class="hidden md:flex ${widthClass} bg-white border-r border-slate-200 flex-col justify-between shrink-0 select-none h-screen transition-all duration-300 relative">
            <!-- Header Sidebar -->
            <div class="p-5 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center space-x-3 overflow-hidden">
                    <div class="w-9 h-9 bg-emerald-600 text-white flex items-center justify-center font-bold rounded-lg shadow-sm shrink-0">
                        <i class="fa-solid fa-house-chimney text-sm"></i>
                    </div>
                    <div class="overflow-hidden sidebar-text ${textVisibilityClass}">
                        <h1 class="font-bold text-slate-800 text-sm tracking-wide truncate">RT-Ku Dashboard</h1>
                        <p class="text-[10px] text-slate-400 truncate">Sistem Administrasi RT</p>
                    </div>
                </div>
                <!-- Tombol Toggle Sidebar -->
                <button type="button" id="sidebarToggleBtn" onclick="toggleDesktopSidebar()" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-all cursor-pointer shrink-0" title="Sembunyikan/Tampilkan Sidebar">
                    <i class="fa-solid fa-bars text-sm"></i>
                </button>
            </div>

            <!-- Menu Navigasi Sidebar -->
            <div class="p-3 flex-1 overflow-y-auto no-scrollbar space-y-1 text-xs max-h-[calc(100vh-140px)]">
                
                <!-- KELOMPOK MENU UTAMA -->
                <div class="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider sidebar-text ${textVisibilityClass}">Menu Utama</div>
                
                <a href="${prefix}home.html" data-menu="home" class="${getSidebarClass('home')} sidebar-link">
                    <i class="fa-solid fa-house w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Beranda</span>
                </a>
                <a href="${prefix}pages/profil-view.html" data-menu="profil" class="${getSidebarClass('profil')} sidebar-link">
                    <i class="fa-solid fa-id-card w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Profil</span>
                </a>
                <a href="${prefix}pages/galeri.html" data-menu="galeri" class="${getSidebarClass('galeri')} sidebar-link">
                    <i class="fa-solid fa-images w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Galeri</span>
                </a>
                <a href="${prefix}pages/umkm.html" data-menu="umkm" class="${getSidebarClass('umkm')} sidebar-link">
                    <i class="fa-solid fa-store w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">UMKM Warga</span>
                </a>
                <a href="${prefix}pages/keuangan.html" data-menu="keuangan" class="${getSidebarClass('keuangan')} sidebar-link">
                    <i class="fa-solid fa-wallet w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Kas RT / Keuangan</span>
                </a>

                <!-- KELOMPOK PENGELOLAAN RT -->
                <div class="pt-4 px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider sidebar-text ${textVisibilityClass}">Pengelolaan RT</div>
                
                <a href="${prefix}pages/manajemen.html" data-menu="manajemen" class="${getSidebarClass('manajemen')} sidebar-link">
                    <i class="fa-solid fa-users-gear w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Manajemen Warga</span>
                </a>
                <a href="${prefix}pages/rapat.html" data-menu="rapat" class="${getSidebarClass('rapat')} sidebar-link">
                    <i class="fa-solid fa-users w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Rapat</span>
                </a>
                <a href="${prefix}pages/aset.html" data-menu="aset" class="${getSidebarClass('aset')} sidebar-link">
                    <i class="fa-solid fa-boxes-stacked w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Aset</span>
                </a>
                <a href="${prefix}pages/manajemen-event.html" data-menu="manajemen-event" class="${getSidebarClass('manajemen-event')} sidebar-link">
                    <i class="fa-solid fa-calendar-days w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Manajemen Event</span>
                </a>
                <a href="${prefix}pages/banner.html" data-menu="banner" class="${getSidebarClass('banner')} sidebar-link">
                    <i class="fa-solid fa-image w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Banner</span>
                </a>
                <a href="${prefix}pages/running-text.html" data-menu="running-text" class="${getSidebarClass('running-text')} sidebar-link">
                    <i class="fa-solid fa-bars-staggered w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Running Text</span>
                </a>
                <a href="${prefix}pages/qr-absensi.html" data-menu="qr-absensi" class="${getSidebarClass('qr-absensi')} sidebar-link">
                    <i class="fa-solid fa-qrcode w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">QR Code Absensi</span>
                </a>

                <!-- KELOMPOK SISTEM -->
                <div class="pt-4 px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider sidebar-text ${textVisibilityClass}">Sistem</div>
                <a href="${prefix}pages/profil.html" data-menu="pengaturan" class="${getSidebarClass('pengaturan')} sidebar-link">
                    <i class="fa-solid fa-gear w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Pengaturan</span>
                </a>
                <a href="${prefix}pages/setting-user.html" data-menu="setting-user" class="${getSidebarClass('setting-user')} sidebar-link">
                    <i class="fa-solid fa-user-gear w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Setting User</span>
                </a>
                <a href="${prefix}pages/hak-akses.html" data-menu="hak-akses" class="${getSidebarClass('hak-akses')} sidebar-link">
                    <i class="fa-solid fa-user-shield w-4 text-center shrink-0"></i>
                    <span class="sidebar-text ${textVisibilityClass}">Hak Akses</span>
                </a>
            </div>

            <!-- Footer Sidebar -->
            <div class="p-4 border-t border-slate-200 bg-slate-50 text-center text-[10px] text-slate-400 sidebar-text ${textVisibilityClass} shrink-0">
                RT-Ku &copy; 2026
            </div>
        </aside>

        <script>
            // Fungsi Toggle Sidebar global
            if (typeof window.toggleDesktopSidebar !== 'function') {
                window.toggleDesktopSidebar = function() {
                    const sidebar = document.getElementById('desktopSidebar');
                    if (sidebar) {
                        const isCurrentlyExpanded = sidebar.classList.contains('w-64') || sidebar.style.width === '16rem' || sidebar.style.width === '';
                        
                        if (isCurrentlyExpanded) {
                            sidebar.style.width = '5rem';
                            sidebar.style.minWidth = '5rem';
                            sidebar.style.maxWidth = '5rem';
                            sidebar.classList.remove('w-64');
                            sidebar.classList.add('w-20');
                            document.querySelectorAll('.sidebar-text').forEach(el => el.classList.add('hidden'));
                            localStorage.setItem('sidebarState', 'collapsed');
                        } else {
                            sidebar.style.width = '16rem';
                            sidebar.style.minWidth = '16rem';
                            sidebar.style.maxWidth = '16rem';
                            sidebar.classList.remove('w-20');
                            sidebar.classList.add('w-64');
                            document.querySelectorAll('.sidebar-text').forEach(el => el.classList.remove('hidden'));
                            localStorage.setItem('sidebarState', 'expanded');
                        }
                    }
                };
            }

            // =======================================================
            // SISTEM GLOBAL SPA ROUTER (AKTIF OTOMATIS DI SEMUA HALAMAN)
            // =======================================================
            if (!window.hasGlobalSpaListener) {
                window.hasGlobalSpaListener = true;

                document.addEventListener('click', async (e) => {
                    const link = e.target.closest('aside#desktopSidebar a');
                    if (!link) return;

                    let targetUrl = link.getAttribute('href');
                    if (!targetUrl || targetUrl === '#' || link.getAttribute('target') === '_blank') return;
                    
                    e.preventDefault();

                    // Tangani path Beranda secara spesifik agar selalu mengarah ke root home.html yang benar
                    if (targetUrl.includes('home.html')) {
                        targetUrl = window.location.pathname.includes('/pages/') ? '../home.html' : 'home.html';
                    }

                    try {
                        const response = await fetch(targetUrl);
                        if (!response.ok) throw new Error("Gagal memuat halaman.");
                        const htmlText = await response.text();

                        const parser = new DOMParser();
                        const docHtml = parser.parseFromString(htmlText, 'text/html');
                        const newMain = docHtml.querySelector('main');
                        const newTitle = docHtml.querySelector('title');

                        const mainContentArea = document.getElementById('mainContentArea');

                        if (newMain && mainContentArea) {
                            // Ganti konten area utama secara mulus
                            mainContentArea.innerHTML = newMain.innerHTML;
                            window.history.pushState({ path: targetUrl }, '', targetUrl);
                            
                            if (newTitle) document.title = newTitle.innerText;
                            
                            // Perbarui status kelas aktif menu pada sidebar secara visual
                            document.querySelectorAll('aside#desktopSidebar a').forEach(el => {
                                el.className = 'flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer';
                            });
                            link.className = 'flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-emerald-50 text-emerald-700 font-semibold transition-all cursor-pointer';

                            window.scrollTo(0, 0);

                            // Panggil otomatis fungsi inisialisasi halaman terkait setelah DOM konten dimuat
                            setTimeout(() => {
                                if (typeof window.initLoadUsers === 'function') {
                                    window.initLoadUsers();
                                }
                                if (typeof window.initHakAksesPage === 'function') {
                                    window.initHakAksesPage();
                                }
                            }, 50);

                        } else {
                            window.location.href = targetUrl;
                        }
                    } catch (err) {
                        console.error("Global SPA Navigation Error:", err);
                        window.location.href = targetUrl;
                    }
                });

                // Tangani navigasi tombol Back/Forward browser secara global
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
                            setTimeout(() => {
                                if (typeof window.initLoadUsers === 'function') window.initLoadUsers();
                                if (typeof window.initHakAksesPage === 'function') window.initHakAksesPage();
                            }, 50);
                        } else {
                            window.location.reload();
                        }
                    } catch (e) {
                        window.location.reload();
                    }
                });
            }
        </script>
    `;
}