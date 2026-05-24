const proyectos = {
  muebles:{
    titulo:"Colección Muebles Expositores",
    ano:"2024",
    descripcion:"Durante mi práctica profesional participé en el diseño y producción de muebles expositores para la empresa Bruja Impresiones. El proyecto buscó desarrollar estructuras resistentes y fáciles de montar, capaces de adaptarse a distintos formatos expositivos dentro del espacio propuesto por el cliente.",
    tags:"Diseño Industrial — Producción — Mobiliario — Rhinoceros 7",
    fotos:[
      "assets/industrial/mueble3.png",
      "assets/industrial/mueble4.png",
      "assets/industrial/mueble2.png"
    ]
  },
  portaprecios:{
    titulo:"Portaprecios",
    ano:"2024",
    descripcion:"Durante mi práctica profesional participé en el diseño y producción de un portaprecios para la empresa Bruja Impresiones. El proyecto buscó desarrollar una estructura resistente y fácil de montar, capaz de adaptarse a distintos formatos de tarros de comida de gatos.",
    tags:"Diseño Industrial — Producción — Fabricación — Rhinoceros 7",
    fotos:[
      "assets/industrial/portaprecio.png"
    ]
  },
  packagings:{
    titulo:"Colección de Packagings",
    ano:"2024",
    descripcion:"Colección de packagings diseñados para productos de distintas marcas, enfocándose en la funcionalidad y estética del empaque para mejorar la experiencia del usuario y destacar en el mercado.",
    tags:"Packaging — Identidad — Producción — Rhinoceros 7",
    fotos:[
      "assets/industrial/packaging01.png",
      "assets/industrial/packaging2.png"
    ]
  },
  flanjes:{
    titulo:"Colección Flanjes Expositores",
    ano:"2024",
    descripcion:"Durante mi práctica profesional participé en el diseño y producción de flanjes expositores para la empresa Bruja Impresiones. El proyecto buscó desarrollar estructuras resistentes y fáciles de montar, capaces de adaptarse a distintos formatos expositivos.",
    tags:"Diseño Industrial — Exhibición — Rhinoceros 7",
    fotos:[
      "assets/industrial/flanje1.png",
      "assets/industrial/flanje2.png",
      "assets/industrial/flanje3.png"
    ]
  },
  caddies:{
    titulo:"Colección Caddies Expositores",
    ano:"2024",
    descripcion:"Durante mi práctica profesional participé en el diseño y producción de caddies expositores para la empresa Bruja Impresiones. El proyecto buscó optimizar espacios en los mesones de negocios de barrio.",
    tags:"Diseño Industrial — Exhibición — Rhinoceros 7",
    fotos:[
      "assets/industrial/caddie01.png",
      "assets/industrial/caddie1.png",
      "assets/industrial/caddie02.png",
      "assets/industrial/caddie2.png",
      "assets/industrial/caddie03.png",
      "assets/industrial/caddie3.png"
    ]
  },
  auna:{
    titulo:"AUNA",
    ano:"2025",
    descripcion:"AUNA es un proyecto de diseño y tecnología inspirado en la neuralgia del trigémino. El sistema combina un amuleto portátil con una aplicación móvil para registrar y visualizar experiencias de dolor.",
    tags:"UX — Tecnología — Salud — Interacción — Flutter",
    fotos:[
      "assets/code/auna.png",
      "assets/code/aunaPortada.png"
    ]
  },
  disenoabierto:{
    titulo:"App Diseño Abierto UDP",
    ano:"2023",
    descripcion:"App desarrollada con apoyo del Fondo VRA, destinada a recopilar y organizar entregas de taller para la exposición Diseño Abierto UDP.",
    tags:"App — Desarrollo — Gestión — Flutter",
    fotos:[
      "assets/ux/proyecto1.jpg",
      "assets/ux/pantallas.gif"
    ]
  },
  p5:{
    titulo:"Experimentación p5.js",
    ano:"2024-2025",
    descripcion:"Colección de experimentos visuales desarrollados con p5.js.",
    tags:"Creative Coding — Arte — Interacción — p5.js",
    fotos:[
      "assets/code/animacionP5.gif",
      "assets/code/p5.gif",
      "assets/processing.gif"
    ]
  },
  conectaudp:{
    titulo:"ConectaUDP",
    ano:"2023",
    descripcion:"Propuesta de mejora para la plataforma Conecta UDP. Prototipos realizados en Figma.",
    tags:"UX/UI — Plataforma — Usabilidad — Figma",
    fotos:[
      "assets/ux/bannerUDP.png",
      "assets/ux/udp2.png",
      "assets/ux/udp1.png"
      
    ]
  }
  ,postdata:{
    titulo:"Postdata — Examen DNO3265",
    ano:"2026",
    descripcion:"Postdata es una web para cerrar ciclos, soltar cosas y ayudarte a sacar eso que llevas en el pecho. Proyecto examen DNO3265 — Diseño de Interacción y Experiencia (MADA UC).",
    tags:"UX — Interacción — DNO3265 — MADA UC",
    fotos:[
      "assets/ux/post-data-portada-opt.png",
      "assets/ux/post-data-home-opt.png",
      "assets/ux/post-data-post-opt.png",
      "assets/ux/post-data-publicar-opt.png"
    ]
  }
};

document.querySelectorAll(".item").forEach(item=>{
  item.addEventListener("click",()=>{
    const data = proyectos[item.dataset.id];

    document.getElementById("modalTitulo").textContent = data.titulo;
    document.getElementById("modalAno").textContent = data.ano;
    document.getElementById("modalDescripcion").textContent = data.descripcion;
    document.getElementById("modalTags").textContent = data.tags;

    const fotosContainer = document.getElementById("modalFotos");
    fotosContainer.innerHTML = "";

    if(data.fotos && data.fotos.length > 0){
      // Main image
      const mainWrap = document.createElement("div");
      mainWrap.className = "modal-main";
      const mainImg = document.createElement("img");
      mainImg.className = "modal-main-img";
      mainImg.src = data.fotos[0];
      mainImg.alt = data.titulo + " - imagen principal";
      mainWrap.appendChild(mainImg);

      // navigation arrows
      const nav = document.createElement("div");
      nav.className = "modal-nav";
      const prevBtn = document.createElement("button");
      prevBtn.setAttribute("aria-label","Anterior");
      prevBtn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
      const nextBtn = document.createElement("button");
      nextBtn.setAttribute("aria-label","Siguiente");
      nextBtn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';
      nav.appendChild(prevBtn);
      nav.appendChild(nextBtn);
      mainWrap.appendChild(nav);

      fotosContainer.appendChild(mainWrap);

      // Thumbnails
      const thumbs = document.createElement("div");
      thumbs.className = "modal-thumbs";

      let currentIndex = 0;

      const showImage = (index) => {
        if(index < 0) index = data.fotos.length - 1;
        if(index >= data.fotos.length) index = 0;
        currentIndex = index;
        mainImg.src = data.fotos[currentIndex];
        thumbs.querySelectorAll("img").forEach((i, ii) => {
          i.classList.toggle("active", ii === currentIndex);
        });
      };

      data.fotos.forEach((f, idx) => {
        const t = document.createElement("img");
        t.src = f;
        t.alt = data.titulo + " - miniatura " + (idx+1);
        if(idx === 0) t.classList.add("active");
        t.addEventListener("click", () => {
          showImage(idx);
        });
        thumbs.appendChild(t);
      });

      prevBtn.addEventListener("click", () => { showImage(currentIndex - 1); });
      nextBtn.addEventListener("click", () => { showImage(currentIndex + 1); });

      // keyboard navigation while modal open
      const keyHandler = (e) => {
        if(document.getElementById("modal").style.display !== "flex") return;
        if(e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if(e.key === 'ArrowRight') showImage(currentIndex + 1);
      };
      document.addEventListener('keydown', keyHandler);

      // cleanup listener when modal closes
      const cleanup = () => { document.removeEventListener('keydown', keyHandler); };
      document.getElementById("cerrarModal").addEventListener('click', cleanup);
      document.getElementById("modal").addEventListener('click',(e)=>{ if(e.target === e.currentTarget){ cleanup(); }});

      fotosContainer.appendChild(thumbs);
    }

    document.getElementById("modal").style.display="flex";
  });
});

document.getElementById("cerrarModal").addEventListener("click",()=>{
  document.getElementById("modal").style.display="none";
});

document.getElementById("modal").addEventListener("click",(e)=>{
  if(e.target === e.currentTarget){
    document.getElementById("modal").style.display="none";
  }
});
