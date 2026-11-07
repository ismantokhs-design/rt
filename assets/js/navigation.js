// assets/js/navigation.js

export function renderNavigation(activeMenu = 'home', isSubFolder = false, userRole = 'warga') {
    const prefix = isSubFolder ? '../' : '';
    const isWarga = (userRole.toLowerCase() === 'warga');

    const getMenuClass = (menuName, baseColorClass, activeColorClass) => {
        return activeMenu === menuName 
            ? `${activeColorClass} font-bold scale-105` 
            : `${baseColorClass} hover:opacity-100 opacity-75`;
    };

    // Jika Warga, tetap tampilkan menu normal + Kas RT
    if (isWarga) {
        return `
            <div class="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-700 py-2 px-3 flex justify-around items-center shadow-lg shrink-0 z-30">
                <a href="${prefix}layout.html?page=home" class="${getMenuClass('home', 'text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400', 'text-emerald-600 dark:text-emerald-400 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                    <div class="w-8 h-8 rounded-full ${activeMenu === 'home' ? 'bg-emerald-50 dark:bg-emerald-950/50 shadow-sm border border-emerald-200 dark:border-emerald-800' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                        <i class="fa-solid fa-house text-sm ${activeMenu === 'home' ? 'text-emerald-600 dark:text-emerald-400' : 'text-emerald-500'}"></i>
                    </div>
                    <span>Home</span>
                </a>
                <a href="${prefix}layout.html?page=profil-view" class="${getMenuClass('profil', 'text-slate-400 hover:text-blue-600 dark:hover:text-blue-400', 'text-blue-600 dark:text-blue-400 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                    <div class="w-8 h-8 rounded-full ${activeMenu === 'profil' ? 'bg-blue-50 dark:bg-blue-950/50 shadow-sm border border-blue-200 dark:border-blue-800' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                        <i class="fa-solid fa-id-card text-sm ${activeMenu === 'profil' ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500'}"></i>
                    </div>
                    <span>Profil</span>
                </a>
                <a href="${prefix}layout.html?page=galeri" class="${getMenuClass('galeri', 'text-slate-400 hover:text-purple-600 dark:hover:text-purple-400', 'text-purple-600 dark:text-purple-400 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                    <div class="w-8 h-8 rounded-full ${activeMenu === 'galeri' ? 'bg-purple-50 dark:bg-purple-950/50 shadow-sm border border-purple-200 dark:border-purple-800' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                        <i class="fa-solid fa-images text-sm ${activeMenu === 'galeri' ? 'text-purple-600 dark:text-purple-400' : 'text-purple-500'}"></i>
                    </div>
                    <span>Galeri</span>
                </a>
                <a href="${prefix}layout.html?page=umkm" class="${getMenuClass('umkm', 'text-slate-400 hover:text-amber-600 dark:hover:text-amber-400', 'text-amber-600 dark:text-amber-400 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                    <div class="w-8 h-8 rounded-full ${activeMenu === 'umkm' ? 'bg-amber-50 dark:bg-amber-950/50 shadow-sm border border-amber-200 dark:border-amber-800' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                        <i class="fa-solid fa-store text-sm ${activeMenu === 'umkm' ? 'text-amber-600 dark:text-amber-400' : 'text-amber-500'}"></i>
                    </div>
                    <span>UMKM</span>
                </a>
                <a href="${prefix}layout.html?page=kas" class="${getMenuClass('keuangan', 'text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400', 'text-cyan-600 dark:text-cyan-400 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                    <div class="w-8 h-8 rounded-full ${activeMenu === 'keuangan' ? 'bg-cyan-50 dark:bg-cyan-950/50 shadow-sm border border-cyan-200 dark:border-cyan-800' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                        <i class="fa-solid fa-wallet text-sm ${activeMenu === 'keuangan' ? 'text-cyan-600 dark:text-cyan-400' : 'text-cyan-500'}"></i>
                    </div>
                    <span>Kas RT</span>
                </a>
            </div>
        `;
    }

    // Jika mode Admin/Pengurus dan tombol More diklik (atau activeMenu === 'more')
    if (activeMenu === 'more') {
        return `
            <div class="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-700 py-3 px-3 shadow-2xl shrink-0 z-30 max-h-[75vh] overflow-y-auto">
                <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200 dark:border-slate-700">
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wide">Menu Pengurus & Admin</span>
                    <a href="${prefix}layout.html?page=home" class="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs hover:bg-slate-200 transition-colors">
                        <i class="fa-solid fa-xmark"></i>
                    </a>
                </div>

                <!-- ADMINISTRATOR -->
                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 mt-1">Administrator</div>
                <div class="grid grid-cols-4 gap-1.5 mb-3">
                    <a href="${prefix}layout.html?page=admin-profil" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-user-gear text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Setting Profil</span>
                    </a>
                    <a href="${prefix}layout.html?page=hak-akses" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-shield-halved text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Hak Akses</span>
                    </a>
                    <a href="${prefix}layout.html?page=setting-user" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-users-gear text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Setting User</span>
                    </a>
                    <a href="${prefix}layout.html?page=data-warga" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-address-book text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Manajemen</span>
                    </a>
                </div>

                <!-- PENGURUS -->
                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pengurus</div>
                <div class="grid grid-cols-4 gap-1.5">
                    <a href="${prefix}layout.html?page=rapat" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-handshake text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Rapat</span>
                    </a>
                    <a href="${prefix}layout.html?page=keuangan" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-wallet text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Keuangan</span>
                    </a>
                    <a href="${prefix}layout.html?page=inventaris" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-boxes-stacked text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Aset</span>
                    </a>
                    <a href="${prefix}layout.html?page=event" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-calendar-days text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Event</span>
                    </a>
                    <a href="${prefix}layout.html?page=galeri-input" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-file-image text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Galeri Input</span>
                    </a>
                    <a href="${prefix}layout.html?page=banner" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-panorama text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Banner</span>
                    </a>
                    <a href="${prefix}layout.html?page=running-text" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-bullhorn text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">Running Text</span>
                    </a>
                    <a href="${prefix}layout.html?page=admin-qr" class="flex flex-col items-center justify-center text-center p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <i class="fa-solid fa-qrcode text-emerald-600 dark:text-emerald-400 text-sm mb-1"></i>
                        <span class="text-[9px] font-medium leading-tight truncate w-full">QR Code</span>
                    </a>
                </div>
            </div>
        `;
    }

    // Tampilan Default Navigasi Bawah (Home, Profil, Galeri, UMKM, More) untuk Admin/Pengurus
    return `
        <div class="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-700 py-2 px-3 flex justify-around items-center shadow-lg shrink-0 z-30">
            <a href="${prefix}layout.html?page=home" class="${getMenuClass('home', 'text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400', 'text-emerald-600 dark:text-emerald-400 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                <div class="w-8 h-8 rounded-full ${activeMenu === 'home' ? 'bg-emerald-50 dark:bg-emerald-950/50 shadow-sm border border-emerald-200 dark:border-emerald-800' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                    <i class="fa-solid fa-house text-sm ${activeMenu === 'home' ? 'text-emerald-600 dark:text-emerald-400' : 'text-emerald-500'}"></i>
                </div>
                <span>Home</span>
            </a>
            <a href="${prefix}layout.html?page=profil-view" class="${getMenuClass('profil', 'text-slate-400 hover:text-blue-600 dark:hover:text-blue-400', 'text-blue-600 dark:text-blue-400 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                <div class="w-8 h-8 rounded-full ${activeMenu === 'profil' ? 'bg-blue-50 dark:bg-blue-950/50 shadow-sm border border-blue-200 dark:border-blue-800' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                    <i class="fa-solid fa-id-card text-sm ${activeMenu === 'profil' ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500'}"></i>
                </div>
                <span>Profil</span>
            </a>
            <a href="${prefix}layout.html?page=galeri" class="${getMenuClass('galeri', 'text-slate-400 hover:text-purple-600 dark:hover:text-purple-400', 'text-purple-600 dark:text-purple-400 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                <div class="w-8 h-8 rounded-full ${activeMenu === 'galeri' ? 'bg-purple-50 dark:bg-purple-950/50 shadow-sm border border-purple-200 dark:border-purple-800' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                    <i class="fa-solid fa-images text-sm ${activeMenu === 'galeri' ? 'text-purple-600 dark:text-purple-400' : 'text-purple-500'}"></i>
                </div>
                <span>Galeri</span>
            </a>
            <a href="${prefix}layout.html?page=umkm" class="${getMenuClass('umkm', 'text-slate-400 hover:text-amber-600 dark:hover:text-amber-400', 'text-amber-600 dark:text-amber-400 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                <div class="w-8 h-8 rounded-full ${activeMenu === 'umkm' ? 'bg-amber-50 dark:bg-amber-950/50 shadow-sm border border-amber-200 dark:border-amber-800' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                    <i class="fa-solid fa-store text-sm ${activeMenu === 'umkm' ? 'text-amber-600 dark:text-amber-400' : 'text-amber-500'}"></i>
                </div>
                <span>UMKM</span>
            </a>
            <a href="${prefix}layout.html?page=more" class="${getMenuClass('more', 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200', 'text-slate-800 dark:text-slate-100 font-bold')} flex flex-col items-center text-[10px] transition-all duration-300">
                <div class="w-8 h-8 rounded-full ${activeMenu === 'more' ? 'bg-slate-100 dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600' : 'bg-transparent'} flex items-center justify-center mb-0.5 transition-all">
                    <i class="fa-solid fa-bars text-sm ${activeMenu === 'more' ? 'text-slate-800 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'}"></i>
                </div>
                <span>More</span>
            </a>
        </div>
    `;
}