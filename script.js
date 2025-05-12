document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // 1. CREACIÓN DE NUBES
    // ======================
    const cloudsContainer = document.getElementById('clouds-container');
    const cloudCount = 15; // Cantidad de nubes
    
    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        let size, height, duration;
        
        // Asignar tamaño y duración según el tipo de nube
        if (i % 3 === 0) {
            // Nubes grandes
            size = 180 + Math.random() * 40;
            height = size * 0.4;
            duration = 40 + Math.random() * 20;
            cloud.className = 'cloud cloud-large';
        } else if (i % 2 === 0) {
            // Nubes medianas
            size = 120 + Math.random() * 30;
            height = size * 0.4;
            duration = 30 + Math.random() * 15;
            cloud.className = 'cloud cloud-medium';
        } else {
            // Nubes pequeñas
            size = 80 + Math.random() * 20;
            height = size * 0.4;
            duration = 20 + Math.random() * 10;
            cloud.className = 'cloud cloud-small';
        }

        // Estilos dinámicos
        cloud.style.width = `${size}px`;
        cloud.style.height = `${height}px`;
        cloud.style.left = `${Math.random() * -200}px`;
        cloud.style.top = `${10 + Math.random() * 80}vh`;
        cloud.style.animationDuration = `${duration}s`;
        cloud.style.opacity = 0.7 + Math.random() * 0.3;

        cloudsContainer.appendChild(cloud);
    }

    // ======================
    // 2. CORAZONES FLOTANTES
    // ======================
    const heartsContainer = document.getElementById('hearts-container');
    const heartCount = 25; // Cantidad de corazones
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-floating';
        
        // Tamaño y color aleatorio
        const size = 10 + Math.random() * 15;
        const hue = 330 + Math.random() * 30; // Tonos rosados/rojos
        
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.bottom = `-50px`;
        heart.style.background = `hsl(${hue}, 90%, 70%)`;
        
        // Animación con parámetros aleatorios
        heart.style.animationDelay = `${Math.random() * 15}s`;
        heart.style.animationDuration = `${10 + Math.random() * 15}s`;
        
        heartsContainer.appendChild(heart);
    }

    // ======================
    // 3. INTERACCIÓN TARJETA
    // ======================
    const card = document.getElementById('card');
    let isOpen = false;
    
    card.addEventListener('click', function() {
        isOpen = !isOpen;
        this.classList.toggle('open');
        
        // Efecto adicional al abrir/cerrar
        if (isOpen) {
            this.style.transform = 'translateX(160px) rotateY(-180deg)';
        } else {
            this.style.transform = 'translateX(0) rotateY(0)';
        }
    });

    // ======================
    // 4. EFECTO DE SONIDO (OPCIONAL)
    // ======================
    card.addEventListener('click', function() {
        // Solo funciona si agregas un archivo de sonido
        const sound = new Audio('click-sound.mp3');
        sound.volume = 0.3;
        sound.play().catch(e => console.log("No se pudo reproducir sonido"));
    });

    // ======================
    // 5. AJUSTE PARA DISPOSITIVOS MÓVILES
    // ======================
    function adjustForMobile() {
        if (window.innerWidth < 768) {
            card.style.transformOrigin = 'center';
            document.querySelector('.card.open').style.transform = 'rotateY(-180deg)';
        }
    }
    
    window.addEventListener('resize', adjustForMobile);
    adjustForMobile();
});