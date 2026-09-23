// Base de Datos de Vehículos (7 Autos y 7 Motos)
const catalogData = {
    autos: [
        { id: 'a1', title: 'Ferrari F8 Tributo', price: '325,000', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80', km: '0 km', fuel: 'Gasolina', trans: 'Automática', power: '720 CV', warranty: '3 Años', desc: 'El tributo definitivo a los motores V8 de la marca del Coche Caballino Rampante.' },
        { id: 'a2', title: 'Porsche 911 GT3 RS', price: '280,000', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80', km: '1,200 km', fuel: 'Gasolina', trans: 'Automática', power: '525 CV', warranty: '2 Años', desc: 'Aerodinámica extrema e ingeniería de circuito homologada para las calles.' },
        { id: 'a3', title: 'Lamborghini Huracán EVO', price: '290,000', img: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80', km: '500 km', fuel: 'Gasolina', trans: 'Automática', power: '640 CV', warranty: '3 Años', desc: 'Diseño agresivo de aristas afiladas potenciado por un motor V10 atmosférico puro.' },
        { id: 'a4', title: 'Aston Martin DB11 V8', price: '215,000', img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80', km: '3,500 km', fuel: 'Gasolina', trans: 'Automática', power: '510 CV', warranty: '2 Años', desc: 'Sofisticación británica refinada combinada con un diseño de Gran Turismo atemporal.' },
        { id: 'a5', title: 'McLaren 720S Spider', price: '310,000', img: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80', km: '800 km', fuel: 'Gasolina', trans: 'Automática', power: '720 CV', warranty: '3 Años', desc: 'Chasis de fibra de carbono ultra-ligero para aceleraciones verdaderamente brutales.' },
        { id: 'a6', title: 'Audi R8 Performance V10', price: '195,000', img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80', km: '4,000 km', fuel: 'Gasolina', trans: 'Automática', power: '620 CV', warranty: '2 Años', desc: 'Dominio de tracción integral Quattro respaldado por un icónico motor central.' },
        { id: 'a7', title: 'BMW M8 Competition', price: '165,000', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80', km: '0 km', fuel: 'Híbrido', trans: 'Automática', power: '625 CV', warranty: '4 Años', desc: 'El pináculo del lujo ejecutivo combinado con prestaciones puras de competición.' }
    ],
    motos: [
        { id: 'm1', title: 'Ducati Panigale V4 S', price: '38,000', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80', km: '0 km', fuel: 'Gasolina', trans: 'Manual', power: '214 CV', warranty: '2 Años', desc: 'La máxima expresión de tecnología, diseño e ingeniería de MotoGP sobre asfalto.' },
        { id: 'm2', title: 'BMW S1000RR', price: '26,500', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80', km: '1,100 km', fuel: 'Gasolina', trans: 'Manual', power: '207 CV', warranty: '3 Años', desc: 'Superbike de precisión alemana diseñada para romper todos los récords de pista.' },
        { id: 'm3', title: 'Kawasaki Ninja H2 Carbon', price: '42,000', img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80', km: '0 km', fuel: 'Gasolina', trans: 'Manual', power: '231 CV', warranty: '2 Años', desc: 'Potencia sobrealimentada por compresor con carenado completo en fibra de carbono.' },
        { id: 'm4', title: 'Yamaha YZF-R1M', price: '29,000', img: 'https://images.unsplash.com/photo-1547549662-774120611250?auto=format&fit=crop&w=800&q=80', km: '2,300 km', fuel: 'Gasolina', trans: 'Manual', power: '200 CV', warranty: '2 Años', desc: 'Suspensiones electrónicas Öhlins Racing y telemetría avanzada de competición.' },
        { id: 'm5', title: 'MV Agusta Brutale 1000 RR', price: '36,000', img: 'https://images.unsplash.com/photo-1571654681830-ef991494a42a?auto=format&fit=crop&w=800&q=80', km: '500 km', fuel: 'Gasolina', trans: 'Manual', power: '208 CV', warranty: '3 Años', desc: 'Arte de ingeniería italiana en formato Hyper-Naked con acabados de colección.' },
        { id: 'm6', title: 'Harley-Davidson CVO Street Glide', price: '48,000', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80', km: '1,500 km', fuel: 'Gasolina', trans: 'Manual', power: '115 CV', warranty: '2 Años', desc: 'La máxima personalización de fábrica para viajes de ultra-lujo a larga distancia.' },
        { id: 'm7', title: 'KTM 1290 Super Duke R', price: '22,000', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80', km: '0 km', fuel: 'Gasolina', trans: 'Manual', power: '180 CV', warranty: '2 Años', desc: 'Apodada "La Bestia": agilidad incomparable impulsada por un torrente de torque V-Twin.' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. ANIMACIÓN 3D PARALLAX BIDIRECCIONAL (SCROLL EFFECT)
    const heroSplit = document.getElementById('inicio');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        if (scrolled <= viewportHeight) {
            const progress = scrolled / viewportHeight;
            const scale = 1 - (progress * 0.15); // Reduce hasta 85%
            const opacity = 1 - (progress * 0.8);  // Reduce opacidad paulatinamente
            const rotateX = progress * 10;         // Inclinación 3D en perspectiva

            heroSplit.style.transform = `scale(${scale}) rotateX(${rotateX}deg)`;
            heroSplit.style.opacity = opacity;
        }
    });

    // RENDERIZAR CATÁLOGOS (7 AUTOS Y 7 MOTOS)
    function renderCatalog(items, containerId, category) {
        const container = document.getElementById(containerId);
        container.innerHTML = items.map(item => `
            <div class="card">
                <img src="${item.img}" alt="${item.title}" class="card-img" loading="lazy">
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <div class="card-price">$${item.price} USD</div>
                    <p class="card-desc">${item.desc}</p>
                    <div class="card-specs-mini">
                        <span><i class="fa-solid fa-gauge-high"></i> ${item.km}</span>
                        <span><i class="fa-solid fa-gas-pump"></i> ${item.fuel}</span>
                        <span><i class="fa-solid fa-gear"></i> ${item.trans}</span>
                    </div>
                    <button class="btn btn-primary btn-sm btn-details" data-id="${item.id}" data-type="${category}">
                        Ver Especificaciones
                    </button>
                </div>
            </div>
        `).join('');
    }

    renderCatalog(catalogData.autos, 'autos-grid', 'autos');
    renderCatalog(catalogData.motos, 'motos-grid', 'motos');

    // 2. TOGGLE TEMA CLARO Y OSCURO
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeBtn.querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    });

    // 3. CONTADORES NUMÉRICOS ANIMADOS
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    window.addEventListener('scroll', () => {
        const sectionPos = document.getElementById('nosotros').getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos && !animated) {
            animated = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const speed = 200;
                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        }
    });

    // 5. VENTANA MODAL (POP-UP)
    const modal = document.getElementById('modal-details');
    const closeModal = document.querySelector('.close-modal');

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-details')) {
            const id = e.target.getAttribute('data-id');
            const type = e.target.getAttribute('data-type');
            const item = catalogData[type].find(v => v.id === id);

            if (item) {
                document.getElementById('modal-img').src = item.img;
                document.getElementById('modal-category').innerText = type === 'autos' ? 'Auto Exclusivo' : 'Superbike';
                document.getElementById('modal-title').innerText = item.title;
                document.getElementById('modal-price').innerText = `$${item.price} USD`;
                document.getElementById('modal-description').innerText = item.desc;
                document.getElementById('modal-km').innerText = item.km;
                document.getElementById('modal-fuel').innerText = item.fuel;
                document.getElementById('modal-trans').innerText = item.trans;
                document.getElementById('modal-power').innerText = item.power;
                document.getElementById('modal-warranty').innerText = item.warranty;

                // Enlace preconfigurado para WhatsApp
                const phone = "525587654321";
                const message = encodeURIComponent(`Hola VELOCE, estoy interesado en recibir información exclusiva sobre el vehículo: ${item.title}`);
                document.getElementById('modal-whatsapp').href = `https://wa.me/${phone}?text=${message}`;

                modal.style.display = 'flex';
            }
        }
    });

    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    // 6. SISTEMA DE SEGURIDAD PARA MAPA INTERACTIVO (BLOQUEABLE)
    const mapOverlay = document.getElementById('map-overlay');
    const btnToggleMap = document.getElementById('btn-toggle-map');
    let isMapUnlocked = false;

    btnToggleMap.addEventListener('click', () => {
        isMapUnlocked = !isMapUnlocked;
        if (isMapUnlocked) {
            mapOverlay.classList.add('unlocked');
            btnToggleMap.innerHTML = '<i class="fa-solid fa-lock"></i> Bloquear Mapa';
        } else {
            mapOverlay.classList.remove('unlocked');
            btnToggleMap.innerHTML = '<i class="fa-solid fa-lock-open"></i> Desbloquear Mapa';
        }
    });
});
