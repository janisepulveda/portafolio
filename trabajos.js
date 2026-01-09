const proyectos = {
  muebles:{
    titulo:"Colección Muebles Expositores",
    ano:"2024",
    descripcion:"Durante mi práctica profesional participé en el diseño y producción de muebles expositores para la empresa Bruja Impresiones. El proyecto buscó desarrollar estructuras resistentes y fáciles de montar, capaces de adaptarse a distintos formatos expositivos dentro del espacio propuesto por el cliente.",
    tags:"Diseño Industrial — Producción — Mobiliario",
    fotos:[
      "https://via.placeholder.com/800x600?text=Foto+1",
      "https://via.placeholder.com/800x600?text=Foto+2"
    ]
  },
  portaprecios:{
    titulo:"Portaprecios",
    ano:"2024",
    descripcion:"Durante mi práctica profesional participé en el diseño y producción de un portaprecios para la empresa Bruja Impresiones. El proyecto buscó desarrollar una estructura resistente y fácil de montar, capaz de adaptarse a distintos formatos de tarros de comida de gatos.",
    tags:"Diseño Industrial — Producción — Fabricación",
    fotos:[]
  },
  packagings:{
    titulo:"Colección de Packagings",
    ano:"2024",
    descripcion:"Colección de packagings diseñados para productos de distintas marcas, enfocándose en la funcionalidad y estética del empaque para mejorar la experiencia del usuario y destacar en el mercado.",
    tags:"Packaging — Identidad — Producción",
    fotos:[]
  },
  flanjes:{
    titulo:"Colección Flanjes Expositores",
    ano:"2024",
    descripcion:"Durante mi práctica profesional participé en el diseño y producción de flanjes expositores para la empresa Bruja Impresiones. El proyecto buscó desarrollar estructuras resistentes y fáciles de montar, capaces de adaptarse a distintos formatos expositivos.",
    tags:"Diseño Industrial — Exhibición",
    fotos:[]
  },
  caddies:{
    titulo:"Colección Caddies Expositores",
    ano:"2024",
    descripcion:"Durante mi práctica profesional participé en el diseño y producción de caddies expositores para la empresa Bruja Impresiones...",
    tags:"Diseño Industrial — Exhibición",
    fotos:[]
  },
  auna:{
    titulo:"AUNA",
    ano:"2025",
    descripcion:"AUNA es un proyecto de diseño y tecnología inspirado en la neuralgia del trigémino, una enfermedad crónica caracterizada por un dolor intenso pero invisible...",
    tags:"UX — Tecnología — Salud — Interacción",
    fotos:[]
  },
  disenoabierto:{
    titulo:"App Diseño Abierto UDP",
    ano:"2023",
    descripcion:"App desarrollada con apoyo del Fondo VRA, destinada a recopilar y organizar entregas de taller para la exposición Diseño Abierto UDP...",
    tags:"App — Desarrollo — Gestión",
    fotos:[]
  },
  p5:{
    titulo:"Experimentación p5.js",
    ano:"2024-2025",
    descripcion:"Colección de experimentos visuales desarrollados con p5.js...",
    tags:"Creative Coding — Arte — Interacción",
    fotos:[]
  },
  conectaudp:{
    titulo:"ConectaUDP",
    ano:"2023",
    descripcion:"Propuesta de mejora para la plataforma Conecta UDP...",
    tags:"UX/UI — Plataforma — Usabilidad",
    fotos:[]
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
      data.fotos.forEach(f=> {
        const img = document.createElement("img");
        img.src = f;
        fotosContainer.appendChild(img);
      });
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
