// assets/js/navigation.js

export function renderNavigation(activeMenu = 'home', isSubFolder = false) {
    const prefix = isSubFolder ? '../' : '';

    return `
        <div class="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2.5 px-4 flex justify-around items-center shadow-lg shrink-0 z-30">
            <a href="${prefix}index.html" class="${activeMenu === 'home' ? 'text-emerald-600 font-semibold' : 'text-slate-400 hover:text-emerald-600'} flex flex-col items-center text-[10px] transition-all">
                <i class="fa-solid fa-house text-sm mb-0.5"></i>
                <span>Home</span>
            </a>
            <a href="${prefix}pages/absensi.html" class="${activeMenu === 'absensi' ? 'text-emerald-600 font-semibold' : 'text-slate-400 hover:text-emerald-600'} flex flex-col items-center text-[10px] transition-all">
                <i class="fa-solid fa-qrcode text-sm mb-0.5"></i>
                <span>Absen</span>
            </a>
            <a href="${prefix}pages/rapat.html" class="${activeMenu === 'rapat' ? 'text-emerald-600 font-semibold' : 'text-slate-400 hover:text-emerald-600'} flex flex-col items-center text-[10px] transition-all">
                <i class="fa-solid fa-book-open text-sm mb-0.5"></i>
                <span>Rapat</span>
            </a>
            <a href="${prefix}pages/keuangan.html" class="${activeMenu === 'keuangan' ? 'text-emerald-600 font-semibold' : 'text-slate-400 hover:text-emerald-600'} flex flex-col items-center text-[10px] transition-all">
                <i class="fa-solid fa-wallet text-sm mb-0.5"></i>
                <span>Kas</span>
            </a>
            <!-- Tombol More langsung memanggil fungsi global onclick -->
            <button type="button" onclick="openMorePopup()" class="${activeMenu === 'more' ? 'text-emerald-600 font-semibold' : 'text-slate-400 hover:text-emerald-600'} flex flex-col items-center text-[10px] transition-all bg-transparent border-0 cursor-pointer">
                <i class="fa-solid fa-bars text-sm mb-0.5"></i>
                <span>More</span>
            </button>
        </div>
    `;
}