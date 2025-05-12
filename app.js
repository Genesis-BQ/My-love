document.addEventListener('DOMContentLoaded', function() {
    // Configuración
    const config = {
        clouds: {
            count: 25,
            sizes: {
                large: { min: 180, max: 220 },
                medium: { min: 120, max: 150 },
                small: { min: 80, max: 100 }
            },
            speeds: {
                fast: { min: 20, max: 30 },
                normal: { min: 30, max: 40 },
                slow: { min: 40, max: 50 }
            }
        },
        hearts: {
            count: 30,
            size: { min: 10, max: 25 },
            colors: { minHue: 330, maxHue: 360 },
            speeds: { min: 10, max: 25 }
        }
    };

    // Crear nubes
    function createClouds() {
        const cloudsContainer = document.getElementById('clouds-container');
        
        for (let i = 0; i < config.clouds.count; i++) {
            const cloud = document.createElement('div');
            let size, speed, cloudType;
            
            if (i % 3 === 0) {
                // Nubes grandes
                size = { width: 180, height: 60 };
                speed = randomBetween(config.clouds.speeds.slow.min, config.clouds.speeds.slow.max);
                cloudType = 'large';
            } else if (i % 2 === 0) {
                // Nubes medianas
                size = { width: 140, height: 50 };
                speed = randomBetween(config.clouds.speeds.normal.min, config.clouds.speeds.normal.max);
                cloudType = 'medium';
            } else {
                // Nubes pequeñas
                size = { width: 100, height: 40 };
                speed = randomBetween(config.clouds.speeds.fast.min, config.clouds.speeds.fast.max);
                cloudType = 'small';
            }
    
            cloud.className = `cloud cloud-${cloudType}`;
            cloud.style.cssText = `
                width: ${size.width}px;
                height: ${size.height}px;
                left: ${Math.random() * -200}px;
                top: ${Math.random() * 100}vh;
                animation-duration: ${speed}s;
                opacity: ${0.7 + Math.random() * 0.3};
                filter: blur(${Math.random() * 2}px);
            `;
    
            cloudsContainer.appendChild(cloud);
        }
    }

    // Crear corazones
    function createHearts() {
        const heartsContainer = document.getElementById('hearts-container');
        
        for (let i = 0; i < config.hearts.count; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-floating';
            
            const size = randomBetween(config.hearts.size.min, config.hearts.size.max);
            const hue = randomBetween(config.hearts.colors.minHue, config.hearts.colors.maxHue);
            const speed = randomBetween(config.hearts.speeds.min, config.hearts.speeds.max);
            
            heart.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}vw;
                bottom: -50px;
                background: hsl(${hue}, 90%, 70%);
                animation-delay: ${Math.random() * 15}s;
                animation-duration: ${speed}s;
                opacity: ${0.6 + Math.random() * 0.4};
            `;
            
            heartsContainer.appendChild(heart);
        }
    }

    // Función utilitaria
    function randomBetween(min, max) {
        return min + Math.random() * (max - min);
    }

    // Interacción del botón - MODIFICADO PARA REDIRECCIONAR
    document.getElementById('cloudBtn').addEventListener('click', function() {
        // Agregar efecto visual antes de redireccionar
        this.style.transform = 'scale(0.9)';
        this.style.opacity = '0.7';
        
        // Redireccionar después de un breve retraso para el efecto
        setTimeout(() => {
            window.location.href = 'tarjeta.html';
        }, 300);
    });

    // Inicialización
    createClouds();
    createHearts();
});