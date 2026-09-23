// --- 1. DATOS DE LOS VEHÍCULOS (5 AUTOS Y 5 MOTOS) ---
const vehiculos = [
    // AUTOS
    { id: 1, tipo: 'auto', titulo: 'Porsche 911 Carrera S', precio: '$135,000 USD', desc: 'Deportivo icónico con rendimiento superior en pista y carretera.', img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600', km: '12,000 km', combustible: 'Gasolina', trans: 'Automática PDK', motor: '3.0L Twin-Turbo 450 CV' },
    { id: 2, tipo: 'auto', titulo: 'BMW M4 Competition', precio: '$98,000 USD', desc: 'Diseño agresivo y dinámica de conducción incomparable.', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600', km: '8,500 km', combustible: 'Gasolina', trans: 'Automática M Steptronic', motor: '3.0L Bi-Turbo 510 CV' },
    { id: 3, tipo: 'auto', titulo: 'Audi RS Q8 4x4', precio: '$120,000 USD', desc: 'La combinación perfecta entre un SUV familiar y un superdeportivo.', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600', km: '15,000 km', combustible: 'Gasolina / Híbrido', trans: 'Automática Tiptronic', motor: '4.0L V8 600 CV' },
    { id: 4, tipo: 'auto', titulo: 'Mercedes-AMG C63 S', precio: '$89,000 USD', desc: 'Elegancia alemana combinada con la fuerza pura V8 AMG.', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600', km: '22,000 km', combustible: 'Gasolina', trans: 'Automática AMG Speedshift', motor: '4.0L V8 Biturbo 510 CV' },
    { id: 5, tipo: 'auto', titulo: 'Ford Mustang Shelby GT500', precio: '$105,000 USD', desc: 'Muscle car legendario con supercargador de alta potencia.', img: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=600', km: '5,000 km', combustible: 'Gasolina', trans: 'Doble Embrague 7 Vel.', motor: '5.2L V8 Supercharged 760 CV' },

    // MOTOS
    { id: 6, tipo: 'moto', titulo: 'Ducati Panigale V4 S', precio: '$28,000 USD', desc: 'Inspirada en Moto GP, diseñada para dominar la pista.', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=600', km: '3,200 km', combustible: 'Gasolina', trans: 'Manual 6 Vel.', motor: '1,103 cc - 214 CV' },
    { id: 7, tipo: 'moto', titulo: 'BMW R 1250 GS Adventure', precio: '$24,500 USD', desc: 'La reina indiscutible de las rutas de larga distancia y todoterreno.', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600', km: '11,000 km', combustible: 'Gasolina', trans: 'Manual 6 Vel.', motor: '1,254 cc - 136 CV' },
    { id: 8, tipo: 'moto', titulo: 'Kawasaki Ninja H2 Carbon', precio: '$34,000 USD', desc: 'Motor sobrealimentado único en su clase con aceleración extrema.', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600', km: '1,800 km', combustible: 'Gasolina', trans: 'Manual Quickshifter', motor: '998 cc Supercharged 231 CV' },
    { id: 9, tipo: 'moto', titulo: 'Yamaha MT-09 SP', precio: '$13,500 USD', desc: 'Hyper Naked con suspensión de alto nivel y torque brutal.', img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=600', km: '6,000 km', combustible: 'Gasolina', trans: 'Manual 6 Vel.', motor: '890 cc - 119 CV' },
    { id: 10, tipo: 'moto', titulo: 'Harley-Davidson Street Glide', precio: '$29,000 USD', desc: 'Estilo Bagger clásico para devorar kilómetros con máximo confort.', img: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=600', km: '8,900 km', combustible: 'Gasolina', trans: 'Manual 6 Vel. Cruise Drive', motor: '1,868 cc Milwaukee-Eight' }
];

// Renderizar Catálogos
function renderCatalogos() {
    const gridAutos = document.getElementById('grid-autos');
    const gridMotos = document.getElementById('grid-motos');

    vehiculos.forEach(v => {
        const cardHTML = `
            <div class="vehicle-card">
                <img src="${v.img}" alt="${v.titulo}">
                <div class="card-body">
                    <span class="badge">${v.tipo.toUpperCase()}</span>
                    <h3>${v.titulo}</h3>
                    <p class="price">${v.precio}</p>
                    <ul class="card-specs-mini">
                        <li><i class="fa-solid fa-gauge"></i> ${v.km}</li>
                        <li><i class="fa-solid fa-gas-pump"></i> ${v.combustible}</li>
                        <li><i class="fa-solid fa-gears"></i> ${v.trans}</li>
                    </ul>
                    <button class="btn-details" onclick="openModal(${v.id})">Ver Especificaciones</button>
                </div>
            </div>
        `;
        if (v.tipo === 'auto') gridAutos.innerHTML += cardHTML;
        else gridMotos.innerHTML += cardHTML;
    });
}

// --- 2. EFECTO CINEMÁTICO DE DESPLAZAMIENTO (3D Parallax Scroll) ---
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const hero = document.getElementById('inicio');
    
    if (scrollPos <= window.innerHeight) {
        const scale = 1 - (scrollPos / window.innerHeight) * 0.15; // Se reduce ligeramente
        const opacity = 1 - (scrollPos / window.innerHeight) * 0.8;  // Se vuelve transparente
        hero.style.transform = `scale(${scale}) translateY(${scrollPos * 0.2}px)`;
        hero.style.opacity = opacity;
    }
});

// --- 3. MODO CLARO / OSCURO ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});

// --- 4. BLOQUEO / DESBLOQUEO DEL MAPA ---
const mapContainer = document.getElementById('map-container');
const toggleMapBtn = document.getElementById('toggle-map-btn');
const mapBtnText = document.getElementById('map-btn-text');

toggleMapBtn.addEventListener('click', () => {
    const isUnlocked = mapContainer.classList.toggle('unlocked');
    if (isUnlocked) {
        toggleMapBtn.innerHTML = '<i class="fa-solid fa-lock-open"></i> Mapa Desbloqueado (Haz clic para Bloquear)';
        toggleMapBtn.style.background = '#ff3e3e';
        toggleMapBtn.style.color = '#fff';
    } else {
        toggleMapBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Mapa Bloqueado (Hacer Clic para Interactuar)';
        toggleMapBtn.style.background = 'var(--bg-card)';
        toggleMapBtn.style.color = 'var(--text-main)';
    }
});

// --- 5. VENTANA MODAL (Especificaciones) ---
const modal = document.getElementById('vehicle-modal');
const closeModal = document.querySelector('.close-modal');

function openModal(id) {
    const v = vehiculos.find(item => item.id === id);
    if (!v) return;

    document.getElementById('modal-image').src = v.img;
    document.getElementById('modal-badge').innerText = v.tipo.toUpperCase();
    document.getElementById('modal-title').innerText = v.titulo;
    document.getElementById('modal-price').innerText = v.precio;
    document.getElementById('modal-desc').innerText = v.desc;

    document.getElementById('modal-specs').innerHTML = `
        <div><strong>Kilometraje:</strong><br>${v.km}</div>
        <div><strong>Combustible:</strong><br>${v.combustible}</div>
        <div><strong>Transmisión:</strong><br>${v.trans}</div>
        <div><strong>Motor / Potencia:</strong><br>${v.motor}</div>
    `;

    document.getElementById('modal-whatsapp').href = `https://wa.me/1234567890?text=Hola,%20estoy%20interesado%20en%20el%20${encodeURIComponent(v.titulo)}`;
    
    modal.style.display = 'flex';
}

closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// Inicializar
document.addEventListener('DOMContentLoaded', renderCatalogos);
