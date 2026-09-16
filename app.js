/**
 * sb SKIN LAB - Interactive Application Logic (Cabina Facial Tepatitlán)
 * Especialistas en Cuidado Facial Clínico y Sensorial
 * Teléfono / WhatsApp: 3781030541
 */

// Catálogo exclusivo de 7 tratamientos faciales en cabina con precios actualizados
const CATALOG_DATA = [
  {
    id: "f-limpieza-hidra",
    category: "limpiezas",
    categoryLabel: "Facial en Cabina",
    title: "Limpieza Facial con Hidratación",
    price: 400,
    tagline: "El cuidado esencial para desintoxicar, refrescar y devolver la vitalidad a tu rostro.",
    ribbon: "Básico Indispensable",
    highlight: false,
    includes: [
      "Aromaterapia sensorial de bienvenida",
      "Doble limpieza con drenaje linfático facial",
      "Exfoliación suave de células muertas",
      "Mascarilla hidratante nutritiva",
      "Suero y gel hidratante dérmico",
      "Contorno de ojos y SPF 50+",
      "Masaje relajante descontracturante de cuello y hombros"
    ],
    duration: "60 minutos",
    description: "Tratamiento facial integral diseñado para purificar suavemente, reequilibrar el manto hidrolipídico y desinflamar mediante drenaje linfático manual. Finaliza con nutrición celular y masaje relajante.",
    recommendation: "Ideal para mantenimiento mensual, pieles apagadas, deshidratadas o como primer acercamiento a cabina."
  },
  {
    id: "f-limpieza-profunda",
    category: "limpiezas",
    categoryLabel: "Facial en Cabina",
    title: "Limpieza Profunda",
    price: 449,
    tagline: "Purificación minuciosa de poros, extracción manual y desinfección con altafrecuencia.",
    ribbon: "Más Pedido",
    highlight: true,
    includes: [
      "Aromaterapia sensorial de bienvenida",
      "Doble limpieza con drenaje linfático facial",
      "Exfoliación profunda enzimática",
      "Extracción manual y minuciosa de puntos negros e impurezas",
      "Altafrecuencia bactericida, oxigenante y calmante",
      "Mascarilla purificante y equilibrante de sebo",
      "Suero activo, gel hidratante, contorno de ojos y SPF 50+",
      "Masaje relajante descontracturante de cuello y hombros"
    ],
    duration: "75 minutos",
    description: "El facial insignia para descongestionar a fondo los poros. Abre el folículo con vapor o lociones emolientes, extrae comedones con técnica no invasiva y sella con altafrecuencia para prevenir brotes futuros.",
    recommendation: "Recomendado para cutis mixto, graso, con tendencia a puntos negros, poros dilatados o brotes."
  },
  {
    id: "f-hidra-profunda",
    category: "hidratacion",
    categoryLabel: "Facial en Cabina",
    title: "Hidratación Profunda",
    price: 525,
    tagline: "Nutrición celular multicapa con ampolleta, ultrasonido y sellado con martillo frío.",
    ribbon: "Efecto Seda",
    highlight: false,
    includes: [
      "Aromaterapia sensorial de bienvenida",
      "Doble limpieza con drenaje linfático facial",
      "Exfoliación renovadora",
      "Doble mascarilla hidratante intensiva",
      "Ampolleta concentrada de activos puros",
      "Martillo frío criogénico (descongestiona y cierra poros)",
      "Ultrasonido estético para permeabilidad dérmica",
      "Suero activo, gel hidratante, contorno de ojos y SPF 50+",
      "Masaje relajante descontracturante de cuello y hombros"
    ],
    duration: "80 minutos",
    description: "Una experiencia de nutrición intensa donde las ondas de ultrasonido permiten que la ampolleta concentrada penetre hasta capas dérmicas profundas. El martillo frío fija los activos y desinflama.",
    recommendation: "Perfecto para pieles secas, desvitalizadas, acartonadas, post-viaje/sol o previo a un evento social."
  },
  {
    id: "f-reafirmante",
    category: "hidratacion",
    categoryLabel: "Facial en Cabina",
    title: "Facial Reafirmante",
    price: 590,
    tagline: "Efecto lifting no invasivo: bioestimulación de colágeno con radiofrecuencia y ultrasonido.",
    ribbon: "Lifting & Firmeza",
    highlight: true,
    includes: [
      "Aromaterapia sensorial de bienvenida",
      "Doble limpieza con drenaje linfático facial",
      "Exfoliación preparatoria",
      "Radiofrecuencia para tensado cutáneo y síntesis de colágeno",
      "Ultrasonido y ampolleta tensora",
      "Martillo frío tonificante",
      "Mascarilla reafirmante",
      "Suero de péptidos, gel hidratante, contorno de ojos y SPF 50+",
      "Masaje relajante descontracturante de cuello y hombros"
    ],
    duration: "85 minutos",
    description: "Tratamiento de alta aparatología estética que genera un calor profundo controlado para compactar las fibras de elastina y estimular la generación de colágeno nuevo. Redefine el óvalo facial.",
    recommendation: "Para pieles maduras, líneas de expresión marcadas, flacidez en pómulos, mandíbula o cuello."
  },
  {
    id: "f-dermapen",
    category: "avanzados",
    categoryLabel: "Facial en Cabina",
    title: "Dermapen (Microneedling)",
    price: 499,
    tagline: "Microinducción dérmica de colágeno para regenerar textura, poros y líneas finas.",
    ribbon: "Regeneración Celular",
    highlight: false,
    includes: [
      "Aromaterapia sensorial de bienvenida",
      "Doble limpieza con drenaje linfático facial",
      "Terapia con Dermapen calibrado a tu tolerancia y zona facial",
      "Mascarilla descongestiva oclusiva",
      "Martillo frío criogénico para calmar el eritema",
      "Suero regenerador concentrado y gel hidratante",
      "Contorno de ojos y SPF 50+",
      "Masaje relajante descontracturante de cuello y hombros"
    ],
    duration: "70 minutos",
    description: "Procedimiento de micropunciones microscópicas controladas que activa el mecanismo natural de autorreparación de la piel, detonando nueva elastina y alisando la superficie dérmica.",
    recommendation: "Excelente para texturas irregulares, marcas post-acné superficiales, poros dilatados y líneas iniciales."
  },
  {
    id: "f-dermapen-ampolleta",
    category: "avanzados",
    categoryLabel: "Facial en Cabina",
    title: "Dermapen + Ampolleta",
    price: 629,
    tagline: "Máxima infusión transdérmica de activos de grado médico combinados con micropunción.",
    ribbon: "Tratamiento Premium",
    highlight: true,
    includes: [
      "Aromaterapia sensorial de bienvenida",
      "Doble limpieza con drenaje linfático facial",
      "Dermapen con infusión directa de ampolleta concentrada médica",
      "Mascarilla oclusiva calmante e hidratante",
      "Martillo frío criogénico (alivio inmediato)",
      "Suero de ácido hialurónico de peso molecular múltiple",
      "Gel hidratante sellador, contorno de ojos y SPF 50+",
      "Masaje relajante descontracturante de cuello y hombros"
    ],
    duration: "80 minutos",
    description: "El protocolo más potente de regeneración. Los microcanales generados por el Dermapen multiplican por diez la absorción de los principios activos de la ampolleta, rejuveneciendo la piel de adentro hacia afuera.",
    recommendation: "El facial de choque recomendado para cicatrices visibles de acné, manchas leves y rejuvenecimiento profundo."
  },
  {
    id: "f-dermaplaning",
    category: "avanzados",
    categoryLabel: "Facial en Cabina",
    title: "Dermaplaning",
    price: 520,
    tagline: "Exfoliación física de grado clínico con bisturí: rostro ultrasuave y efecto piel de porcelana.",
    ribbon: "Piel de Porcelana",
    highlight: true,
    includes: [
      "Aromaterapia sensorial de bienvenida",
      "Doble limpieza con drenaje linfático facial",
      "Exfoliación física de precisión con hoja quirúrgica estéril",
      "Retiro de células muertas y vello facial fino (peach fuzz)",
      "Mascarilla emoliente calmante",
      "Martillo frío criogénico descongestivo",
      "Suero antioxidante, gel hidratante, contorno de ojos y SPF 50+",
      "Masaje relajante descontracturante de cuello y hombros"
    ],
    duration: "70 minutos",
    description: "Técnica que retira de forma indolora y segura las capas superficiales de estrato córneo acumulado y el vello fino. La piel queda reflectiva, limpia como un cristal y lista para un maquillaje impecable.",
    recommendation: "Indispensable antes de bodas, graduaciones, sesiones de fotos o para quienes aman una piel reflectiva y ultrasuave."
  }
];

// ==========================================================================
// TEST DE PIEL PROFESIONAL (10 PREGUNTAS CLÍNICAS Y COSMETOLÓGICAS)
// ==========================================================================
const QUIZ_QUESTIONS = [
  {
    step: 1,
    categoryTag: "Biotipo Cutáneo",
    title: "¿Cómo se comporta tu rostro unas horas después de lavarlo sin aplicar producto?",
    desc: "Evaluación de la producción sebácea basal de tu piel:",
    options: [
      {
        id: "q1-grasa",
        label: "Grasa en todo el rostro",
        sub: "Brillo evidente en frente, nariz y mejillas; sensación oleosa al tacto.",
        icon: "🫧",
        key: "biotipo",
        val: "grasa"
      },
      {
        id: "q1-mixta",
        label: "Mixta (Zona T grasa, mejillas normales)",
        sub: "Brillo en frente, nariz y barbilla; mejillas normales o con tirantez.",
        icon: "✨",
        key: "biotipo",
        val: "mixta"
      },
      {
        id: "q1-seca",
        label: "Seca o Deshidratada",
        sub: "Sensación de tirantez, textura mate o acartonada, falta de luminosidad.",
        icon: "💧",
        key: "biotipo",
        val: "seca"
      },
      {
        id: "q1-sensible",
        label: "Sensible o Reactiva",
        sub: "Se enrojece con facilidad, arde con cambios de temperatura o fricción.",
        icon: "🌸",
        key: "biotipo",
        val: "sensible"
      }
    ]
  },
  {
    step: 2,
    categoryTag: "Textura & Poros",
    title: "Al observarte en el espejo con buena luz, ¿cómo percibes tus poros?",
    desc: "Diagnóstico de la dilatación del poro y relieve cutáneo:",
    options: [
      {
        id: "q2-dilatados",
        label: "Poros abiertos y visibles en gran parte del rostro",
        sub: "Textura irregular con acumulación visible de sebo o impurezas.",
        icon: "🔬",
        key: "poros",
        val: "dilatados"
      },
      {
        id: "q2-zona-t",
        label: "Poros dilatados solo en Zona T (nariz/barbilla)",
        sub: "Mejillas lisas, pero el centro del rostro presenta poros tapados.",
        icon: "🔍",
        key: "poros",
        val: "zona_t"
      },
      {
        id: "q2-cicatrices",
        label: "Poros acompañados de marcas o cicatrices post-acné",
        sub: "Textura con relieve en picahielo o pequeñas hendiduras.",
        icon: "💉",
        key: "poros",
        val: "marcas"
      },
      {
        id: "q2-finos",
        label: "Poros finos o casi imperceptibles",
        sub: "No sufro de poros abiertos, pero busco suavidad extrema y brillo.",
        icon: "🪞",
        key: "poros",
        val: "finos"
      }
    ]
  },
  {
    step: 3,
    categoryTag: "Pureza dérmica",
    title: "¿Con qué frecuencia presentas puntos negros, comedones o brotes?",
    desc: "Nivel de congestión e impurezas folículares:",
    options: [
      {
        id: "q3-frecuente",
        label: "Constantes puntos negros e impurezas atrapadas",
        sub: "Siento los poros obstruidos y necesito una extracción profesional profunda.",
        icon: "🫧",
        key: "impurezas",
        val: "frecuente"
      },
      {
        id: "q3-brotes",
        label: "Brotes ocasionales hormonales o por estrés",
        sub: "Espinillas puntuales que dejan marcas o inflamación localizada.",
        icon: "🩹",
        key: "impurezas",
        val: "brotes"
      },
      {
        id: "q3-leve",
        label: "Solo puntos negros leves en la nariz",
        sub: "Congestión mínima, fácilmente controlable.",
        icon: "🌿",
        key: "impurezas",
        val: "leve"
      },
      {
        id: "q3-sin-impurezas",
        label: "Casi nunca tengo puntos negros ni brotes",
        sub: "Mi prioridad no es la extracción, sino hidratar y consentir mi piel.",
        icon: "💎",
        key: "impurezas",
        val: "ninguna"
      }
    ]
  },
  {
    step: 4,
    categoryTag: "Agua celular",
    title: "¿Cómo describirías la luminosidad y nivel de hidratación de tu cutis?",
    desc: "Evaluación del balance hídrico dérmico:",
    options: [
      {
        id: "q4-opaca",
        label: "Piel apagada, opaca y sin brillo saludable",
        sub: "Luce cansada y sin vida; deseo un efecto 'glow' radiante inmediato.",
        icon: "✨",
        key: "hidratacion",
        val: "opaca"
      },
      {
        id: "q4-tirante",
        label: "Sensación de tirantez constante (piel 'sedienta')",
        sub: "Absorbe cualquier crema en segundos y sigue sintiéndose áspera.",
        icon: "💧",
        key: "hidratacion",
        val: "tirante"
      },
      {
        id: "q4-deshidratada-grasa",
        label: "Brilla por fuera pero la siento seca por dentro",
        sub: "Cutis asfixiado que produce grasa para compensar la falta de agua.",
        icon: "🧴",
        key: "hidratacion",
        val: "deshidrata_grasa"
      },
      {
        id: "q4-buena",
        label: "Buen nivel de hidratación",
        sub: "Busco mantenerla humectada y prevenir líneas prematuras.",
        icon: "🌸",
        key: "hidratacion",
        val: "buena"
      }
    ]
  },
  {
    step: 5,
    categoryTag: "Barrera cutánea",
    title: "¿Tu piel tiende a enrojecerse o irritarse con facilidad?",
    desc: "Sensibilidad y tolerancia dérmica a activos cosméticos:",
    options: [
      {
        id: "q5-muy-reactiva",
        label: "Muy reactiva y se enrojece con facilidad",
        sub: "Reacciona con calor, viento, roces o productos astringentes.",
        icon: "🌸",
        key: "sensibilidad",
        val: "alta"
      },
      {
        id: "q5-moderada",
        label: "Sensibilidad moderada solo en mejillas o nariz",
        sub: "Ligeras rojeces ocasionales, pero tolera la mayoría de los faciales.",
        icon: "🌿",
        key: "sensibilidad",
        val: "moderada"
      },
      {
        id: "q5-resistente",
        label: "Piel resistente que tolera bien aparatología y exfoliación",
        sub: "No suele irritarse ni presentar alergias fácilmente.",
        icon: "🛡️",
        key: "sensibilidad",
        val: "resistente"
      }
    ]
  },
  {
    step: 6,
    categoryTag: "Firmeza & Juventud",
    title: "¿Qué importancia tienen para ti la firmeza dérmica y las líneas de expresión?",
    desc: "Valoración de síntesis de colágeno y tonicidad muscular facial:",
    options: [
      {
        id: "q6-flacidez",
        label: "Noto flacidez o pérdida de definición en el óvalo facial",
        sub: "Quiero tensar mandíbula, pómulos y cuello con aparatología lifting.",
        icon: "👑",
        key: "firmeza",
        val: "flacidez"
      },
      {
        id: "q6-lineas",
        label: "Líneas finas de expresión (frente, entrecejo o boca)",
        sub: "Deseo bioestimular colágeno para atenuar arrugas tempranas.",
        icon: "💎",
        key: "firmeza",
        val: "lineas"
      },
      {
        id: "q6-prevencion",
        label: "Cuidado preventivo para mantener la piel firme",
        sub: "Aún no tengo líneas marcadas, pero quiero retrasar su aparición.",
        icon: "✨",
        key: "firmeza",
        val: "prevencion"
      },
      {
        id: "q6-no-prioridad",
        label: "No es mi prioridad en este momento",
        sub: "Me enfoco al 100% en limpieza, textura suave o hidratación.",
        icon: "🌱",
        key: "firmeza",
        val: "ninguna"
      }
    ]
  },
  {
    step: 7,
    categoryTag: "Textura & Maquillaje",
    title: "¿Te gustaría retirar el vello facial fino ('peach fuzz') y células muertas?",
    desc: "Evaluación para protocolo de Dermaplaning clínico:",
    options: [
      {
        id: "q7-si-dermaplaning",
        label: "Sí, me encantaría retirar vello fino y células muertas",
        sub: "Quiero el acabado ultrasuave y reflectivo tipo piel de porcelana.",
        icon: "🪞",
        key: "vello",
        val: "si"
      },
      {
        id: "q7-maquillaje-asienta-mal",
        label: "Siento que el maquillaje no asienta liso o se cuartea",
        sub: "Busco una base completamente tersa para que mis productos luzcan perfectos.",
        icon: "💄",
        key: "vello",
        val: "maquillaje"
      },
      {
        id: "q7-no-vello",
        label: "Prefiero no retirar el vello facial fino",
        sub: "Prefiero enfocarme en exfoliación enzimática, sueros o aparatología.",
        icon: "🧴",
        key: "vello",
        val: "no"
      }
    ]
  },
  {
    step: 8,
    categoryTag: "Regeneración dérmica",
    title: "¿Presentas marcas oscuras de acné previo o textura dispareja?",
    desc: "Evaluación para micropunción regenerativa (Dermapen):",
    options: [
      {
        id: "q8-marcas-acne",
        label: "Sí, tengo marcas oscuras o cicatrices superficiales de acné",
        sub: "Quiero una terapia regenerativa para renovar la capa epidérmica.",
        icon: "💉",
        key: "marcas",
        val: "si_marcas"
      },
      {
        id: "q8-manchas-sol",
        label: "Tengo tono disparejo o manchas sutiles de sol",
        sub: "Quiero unificar el tono y aportar luminosidad homogénea.",
        icon: "☀️",
        key: "marcas",
        val: "si_manchas"
      },
      {
        id: "q8-sin-marcas",
        label: "Tono uniforme y sin cicatrices de acné",
        sub: "No requiero micropunción para marcas, busco limpieza o hidratación.",
        icon: "🌸",
        key: "marcas",
        val: "no"
      }
    ]
  },
  {
    step: 9,
    categoryTag: "Tiempos & Eventos",
    title: "¿Tienes algún evento importante o fecha especial en los próximos 1–4 días?",
    desc: "Determinación de tiempo de recuperación y efecto flash:",
    options: [
      {
        id: "q9-evento-proximo",
        label: "Sí, tengo un evento en 1 a 4 días",
        sub: "Necesito salir radiante al instante, sin rojez visible ni tiempo de reposo.",
        icon: "🎉",
        key: "evento",
        val: "evento_proximo"
      },
      {
        id: "q9-sin-prisa",
        label: "No tengo eventos próximos",
        sub: "Puedo tener un leve enrojecimiento de 24h si el tratamiento regenera más a fondo.",
        icon: "🗓️",
        key: "evento",
        val: "sin_prisa"
      },
      {
        id: "q9-rutina-normal",
        label: "Es mi cita de mantenimiento y relajación habitual",
        sub: "Deseo consentirme en cabina y seguir con mis actividades normales.",
        icon: "🧘",
        key: "evento",
        val: "rutina"
      }
    ]
  },
  {
    step: 10,
    categoryTag: "Objetivo Principal",
    title: "Si pudieras lograr un solo resultado prioritario hoy en cabina, ¿cuál sería?",
    desc: "Tu expectativa principal para la cita en sb SKIN LAB:",
    options: [
      {
        id: "q10-extraccion",
        label: "Poros ultra limpios, sin puntos negros ni brillo excesivo",
        sub: "Descongestión profunda y desinfección con altafrecuencia.",
        icon: "🫧",
        key: "meta",
        val: "extraccion"
      },
      {
        id: "q10-porcelana",
        label: "Piel de porcelana ultrasuave (sin vello fino ni células muertas)",
        sub: "Efecto filtro de cristal, máxima suavidad y maquillaje perfecto.",
        icon: "🪞",
        key: "meta",
        val: "porcelana"
      },
      {
        id: "q10-hidratacion",
        label: "Hidratación celular intensa y efecto seda (Glow)",
        sub: "Nutrición con ampolleta y ultrasonido para piel jugosa y descansada.",
        icon: "💧",
        key: "meta",
        val: "hidratacion"
      },
      {
        id: "q10-dermapen",
        label: "Renovación celular profunda para marcas, poros y colágeno",
        sub: "Micropunción para alisar textura y regenerar la piel a fondo.",
        icon: "💉",
        key: "meta",
        val: "dermapen"
      },
      {
        id: "q10-lifting",
        label: "Efecto lifting reafirmante con radiofrecuencia",
        sub: "Tensado cutáneo y redefinición del óvalo facial.",
        icon: "👑",
        key: "meta",
        val: "lifting"
      }
    ]
  }
];

// Respuestas del usuario en el test
let quizAnswers = {
  biotipo: "mixta",
  poros: "zona_t",
  impurezas: "frecuente",
  hidratacion: "opaca",
  sensibilidad: "moderada",
  firmeza: "prevencion",
  vello: "no",
  marcas: "no",
  evento: "rutina",
  meta: "extraccion"
};

let currentQuizStep = 1;
let selectedCalculatorItems = new Set();

// ==========================================================================
// INICIALIZACIÓN AL CARGAR PÁGINA
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog("todos");
  setupTabFilters();
  initCalculator();
  initQuiz();
  setupFAQ();
  setupMobileNav();
  setupNavbarScroll();
  setupModal();
});

// ==========================================================================
// RENDERIZADO DEL CATÁLOGO DE FACIALES
// ==========================================================================
function renderCatalog(filter) {
  const container = document.getElementById("catalog-grid");
  if (!container) return;

  container.innerHTML = "";

  const filtered = CATALOG_DATA.filter(item => {
    if (filter === "todos") return true;
    return item.category === filter;
  });

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = `service-card ${item.highlight ? "highlighted" : ""}`;
    card.dataset.id = item.id;

    const inclusionsHtml = item.includes.slice(0, 4).map(inc => `
      <li><i class="bi bi-check2-circle"></i> <span>${inc}</span></li>
    `).join("");

    const waText = encodeURIComponent(`Hola sb SKIN LAB, me interesa agendar en cabina el tratamiento facial: "${item.title}" ($${item.price} MXN). ¿Qué horarios tienen disponibles en Tepatitlán?`);
    const waUrl = `https://wa.me/523781030541?text=${waText}`;

    card.innerHTML = `
      <div>
        <span class="card-ribbon">${item.ribbon}</span>
        <div class="service-header">
          <span class="service-category">${item.categoryLabel}</span>
          <h3 class="service-title">${item.title}</h3>
        </div>

        <div class="service-price-box">
          <div class="price-current">$${item.price} MXN</div>
          <div class="price-meta">
            <span style="font-size: 0.78rem; color: var(--accent-taupe-dark); font-weight: 600;">Incluye Masaje Cuello/Hombros</span>
          </div>
        </div>

        <p class="service-card-tagline">${item.tagline}</p>

        <div class="service-inclusions">
          <div class="inclusions-title"><i class="bi bi-stars"></i> Lo que incluye tu sesión:</div>
          <ul class="inclusions-list">
            ${inclusionsHtml}
          </ul>
        </div>
      </div>

      <div class="service-actions">
        <a href="${waUrl}" target="_blank" rel="noopener" class="btn-book-service">
          <i class="bi bi-whatsapp"></i> Agendar este Facial
        </a>
        <button type="button" class="btn-detail-modal" onclick="openDetailModal('${item.id}')">
          Ver protocolo completo & aparatología
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// ==========================================================================
// FILTROS DEL CATÁLOGO
// ==========================================================================
function setupTabFilters() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      renderCatalog(filter);
    });
  });
}

// ==========================================================================
// ASISTENTE VIRTUAL DE PIEL (DIAGNÓSTICO EN FORMATO CELULAR - 10 PREGUNTAS)
// ==========================================================================
function initQuiz() {
  renderQuizStep(1);

  const prevBtn = document.getElementById("quiz-prev-btn");
  const nextBtn = document.getElementById("quiz-next-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentQuizStep > 1) {
        currentQuizStep--;
        renderQuizStep(currentQuizStep);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentQuizStep < QUIZ_QUESTIONS.length) {
        currentQuizStep++;
        renderQuizStep(currentQuizStep);
      } else {
        showQuizResult();
      }
    });
  }
}

function renderQuizStep(stepNumber) {
  const container = document.getElementById("quiz-step-container");
  const stepTagEl = document.getElementById("quiz-mobile-step-tag");
  const progressFill = document.getElementById("quiz-mobile-progress-fill");
  const prevBtn = document.getElementById("quiz-prev-btn");
  const nextBtn = document.getElementById("quiz-next-btn");

  if (!container) return;

  const currentQ = QUIZ_QUESTIONS.find(q => q.step === stepNumber);
  if (!currentQ) return;

  // Actualizar indicadores del formato celular
  const pct = (stepNumber / QUIZ_QUESTIONS.length) * 100;
  if (progressFill) progressFill.style.width = `${pct}%`;
  if (stepTagEl) stepTagEl.textContent = `Pregunta ${stepNumber} de 10 • ${currentQ.categoryTag}`;

  if (prevBtn) {
    prevBtn.style.visibility = stepNumber === 1 ? "hidden" : "visible";
  }

  if (nextBtn) {
    nextBtn.innerHTML = stepNumber === QUIZ_QUESTIONS.length 
      ? 'Generar Diagnóstico <i class="bi bi-patch-check"></i>' 
      : 'Siguiente <i class="bi bi-arrow-right-short"></i>';
  }

  const optionsHtml = currentQ.options.map(opt => {
    const isSelected = quizAnswers[opt.key] === opt.val ? "selected" : "";
    return `
      <div class="quiz-mobile-opt ${isSelected}" onclick="selectQuizOption('${opt.key}', '${opt.val}')">
        <div class="quiz-opt-bullet">
          <i class="bi bi-check-lg"></i>
        </div>
        <div class="quiz-opt-details">
          <div class="quiz-opt-title-wrap">
            <span class="quiz-opt-emoji">${opt.icon}</span>
            <h5 class="quiz-opt-title">${opt.label}</h5>
          </div>
          <p class="quiz-opt-desc">${opt.sub}</p>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="quiz-mobile-question-box">
      <h3 class="quiz-mobile-question-title">${currentQ.title}</h3>
      <p class="quiz-mobile-question-sub">${currentQ.desc}</p>
      <div class="quiz-mobile-options-list">
        ${optionsHtml}
      </div>
    </div>
  `;
}

function selectQuizOption(key, val) {
  quizAnswers[key] = val;
  renderQuizStep(currentQuizStep);
}

// LÓGICA DE RECOMENDACIÓN PRECISA BASADA EN LAS 10 PREGUNTAS
function showQuizResult() {
  const container = document.getElementById("quiz-step-container");
  const navBtns = document.getElementById("quiz-mobile-nav");
  const progressFill = document.getElementById("quiz-mobile-progress-fill");
  const stepTagEl = document.getElementById("quiz-mobile-step-tag");

  if (progressFill) progressFill.style.width = "100%";
  if (stepTagEl) stepTagEl.textContent = "Diagnóstico Completado";
  if (navBtns) navBtns.style.display = "none";

  // Determinación del facial clínico óptimo
  let recommendedId = "f-limpieza-profunda";
  let clinicalRationale = "";

  const { biotipo, poros, impurezas, hidratacion, sensibilidad, firmeza, vello, marcas, evento, meta } = quizAnswers;

  // Prioridad 1: Meta declarada y necesidad específica
  if (meta === "porcelana" || vello === "si" || vello === "maquillaje" || (evento === "evento_proximo" && impurezas !== "frecuente")) {
    recommendedId = "f-dermaplaning";
    clinicalRationale = "Tu piel se beneficiará enormemente de la exfoliación con bisturí quirúrgico para eliminar vello fino ('peach fuzz') y células muertas. Aportará luminosidad inmediata sin tiempo de recuperación, dejando un acabado de cristal perfecto para maquillaje.";
  } else if (meta === "lifting" || firmeza === "flacidez") {
    recommendedId = "f-reafirmante";
    clinicalRationale = "Detectamos una necesidad prioritaria de tensado dérmico. La combinación de radiofrecuencia con ultrasonido compactará las fibras de elastina y estimulará colágeno nuevo para redefinir el óvalo facial y devolver firmeza.";
  } else if (meta === "dermapen" || marcas === "si_marcas" || poros === "marcas") {
    if (marcas === "si_marcas" || biotipo === "madura") {
      recommendedId = "f-dermapen-ampolleta";
      clinicalRationale = "Para atenuar marcas, cicatrices de acné o poros abiertos, la bioestimulación de Dermapen con infusión de ampolleta concentrada médica es el estándar de oro. Genera microcanales para una absorción celular profunda y renovación total de la textura.";
    } else {
      recommendedId = "f-dermapen";
      clinicalRationale = "El microneedling controlado detonará la autorreparación de tu piel, estimulando elastina y cerrando poros dilatados para alisar la superficie del rostro de manera progresiva.";
    }
  } else if (meta === "hidratacion" || hidratacion === "tirante" || biotipo === "seca" || hidratacion === "deshidrata_grasa") {
    recommendedId = "f-hidra-profunda";
    clinicalRationale = "Tu cutis presenta signos evidentes de deshidratación dérmica. El ultrasonido estético junto con la ampolleta y el sello criogénico del martillo frío restaurarán el agua celular perdida, devolviendo la elasticidad y jugosidad al rostro.";
  } else if (sensibilidad === "alta" && impurezas === "ninguna") {
    recommendedId = "f-limpieza-hidra";
    clinicalRationale = "Al ser una piel reactiva, requiere un protocolo emoliente y suave. La doble limpieza con drenaje linfático desinflamará los tejidos y la mascarilla restaurará la barrera cutánea sin agresiones.";
  } else {
    // Caso estándar de impurezas / poros / cutis graso o mixto
    recommendedId = "f-limpieza-profunda";
    clinicalRationale = "Tu piel requiere una purificación profunda para retirar comedones e impurezas acumuladas. La extracción manual minuciosa junto con la altafrecuencia bactericida calmará la piel, cerrará los poros y evitará la aparición de nuevos brotes.";
  }

  const item = CATALOG_DATA.find(i => i.id === recommendedId) || CATALOG_DATA[1];

  // Mensaje de WhatsApp profesional pre-armado con el diagnóstico de 10 puntos
  const waMsg = `¡Hola sb SKIN LAB! Completé el Diagnóstico Facial en su página web:\n\n` +
    `📋 PERFIL DÉRMICO:\n` +
    `• Biotipo: ${biotipo.toUpperCase()}\n` +
    `• Estado de poros: ${poros}\n` +
    `• Nivel de impurezas: ${impurezas}\n` +
    `• Hidratación: ${hidratacion}\n` +
    `• Sensibilidad: ${sensibilidad}\n` +
    `• Meta principal: ${meta.toUpperCase()}\n\n` +
    `✨ TRATAMIENTO RECOMENDADO:\n` +
    `👉 ${item.title} ($${item.price} MXN)\n\n` +
    `¿Me podrían brindar disponibilidad de citas en su cabina de Tepatitlán para mi valoración? ¡Gracias!`;

  const waUrl = `https://wa.me/523781030541?text=${encodeURIComponent(waMsg)}`;

  container.innerHTML = `
    <div class="quiz-result-mobile-card">
      <div class="quiz-result-header">
        <span class="quiz-result-pill"><i class="bi bi-clipboard2-pulse"></i> Ficha Cosmetológica</span>
        <h4 class="quiz-result-rec-title">${item.title}</h4>
        <div class="quiz-result-price-tag">$${item.price} MXN</div>
        <p class="quiz-result-signature-note">
          <i class="bi bi-check2-all"></i> Incluye aromaterapia, doble limpieza con drenaje linfático y masaje de cuello y hombros.
        </p>
      </div>

      <div class="quiz-result-diagnosis-box">
        <h5><i class="bi bi-activity"></i> Diagnóstico para tu Piel:</h5>
        <p>${clinicalRationale}</p>
      </div>

      <div class="quiz-result-details-box">
        <h5>Lo que incluye tu cita:</h5>
        <ul class="quiz-result-list">
          ${item.includes.map(inc => `<li><i class="bi bi-check-circle-fill"></i> <span>${inc}</span></li>`).join("")}
        </ul>
      </div>

      <div class="quiz-result-actions">
        <a href="${waUrl}" target="_blank" rel="noopener" class="btn-primary btn-whatsapp" style="width: 100%; justify-content: center; padding: 14px;">
          <i class="bi bi-whatsapp"></i> Agendar Cita con este Diagnóstico
        </a>
        <button type="button" class="btn-outline" onclick="resetQuiz()" style="width: 100%; justify-content: center; padding: 12px; margin-top: 10px;">
          <i class="bi bi-arrow-counterclockwise"></i> Repetir Test de Piel
        </button>
      </div>
    </div>
  `;
}

function resetQuiz() {
  currentQuizStep = 1;
  const navBtns = document.getElementById("quiz-mobile-nav");
  if (navBtns) navBtns.style.display = "flex";
  renderQuizStep(1);
}

// ==========================================================================
// CALCULADORA DE CITAS (SOLO 7 FACIALES)
// ==========================================================================
function initCalculator() {
  const listContainer = document.getElementById("calc-items-container");
  if (!listContainer) return;

  listContainer.innerHTML = `
    <div class="calc-item-category"><i class="bi bi-stars"></i> Faciales en Cabina (Selecciona tu tratamiento)</div>
    <div class="calc-items-list" id="calc-facials-group"></div>
  `;

  const groupContainer = listContainer.querySelector("#calc-facials-group");

  CATALOG_DATA.forEach(item => {
    const row = document.createElement("div");
    row.className = "calc-item-row";
    row.dataset.id = item.id;
    row.onclick = () => toggleCalculatorItem(item.id);

    row.innerHTML = `
      <div class="calc-item-left">
        <div class="calc-checkbox"><i class="bi bi-check"></i></div>
        <span class="calc-item-name">${item.title}</span>
      </div>
      <span class="calc-item-price">$${item.price} MXN</span>
    `;

    groupContainer.appendChild(row);
  });

  updateCalculatorSummary();

  const sendBtn = document.getElementById("btn-calc-whatsapp");
  if (sendBtn) {
    sendBtn.addEventListener("click", sendCalculatorBooking);
  }
}

function toggleCalculatorItem(id) {
  const row = document.querySelector(`.calc-item-row[data-id="${id}"]`);
  if (selectedCalculatorItems.has(id)) {
    selectedCalculatorItems.delete(id);
    if (row) row.classList.remove("selected");
  } else {
    selectedCalculatorItems.add(id);
    if (row) row.classList.add("selected");
  }
  updateCalculatorSummary();
}

function updateCalculatorSummary() {
  const selectedContainer = document.getElementById("calc-selected-items");
  const totalValEl = document.getElementById("calc-total-val");

  if (!selectedContainer || !totalValEl) return;

  if (selectedCalculatorItems.size === 0) {
    selectedContainer.innerHTML = `<div class="calc-empty-hint">Selecciona tu facial de la lista para cotizar tu cita en cabina.</div>`;
    totalValEl.textContent = "$0 MXN";
    return;
  }

  let total = 0;
  let html = "";

  selectedCalculatorItems.forEach(id => {
    const item = CATALOG_DATA.find(i => i.id === id);
    if (!item) return;

    total += item.price;
    html += `
      <div class="calc-selected-item">
        <span>${item.title}</span>
        <strong>$${item.price} MXN</strong>
      </div>
    `;
  });

  selectedContainer.innerHTML = html;
  totalValEl.textContent = `$${total.toLocaleString("es-MX")} MXN`;
}

function sendCalculatorBooking() {
  if (selectedCalculatorItems.size === 0) {
    alert("Por favor selecciona un facial de la lista para agendar.");
    return;
  }

  const nameInput = document.getElementById("calc-client-name");
  const dateInput = document.getElementById("calc-client-date");

  const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Cliente";
  const datePref = dateInput && dateInput.value.trim() ? dateInput.value.trim() : "Por coordinar";

  let itemsListText = "";
  let total = 0;

  selectedCalculatorItems.forEach(id => {
    const item = CATALOG_DATA.find(i => i.id === id);
    if (item) {
      itemsListText += `• ${item.title} ($${item.price} MXN)\n`;
      total += item.price;
    }
  });

  const msg = `¡Hola sb SKIN LAB! Quiero reservar mi cita de facial en cabina:\n\n` +
    `👤 Nombre: ${name}\n` +
    `📅 Fecha/Horario sugerido: ${datePref}\n` +
    `📍 Ubicación: Tepatitlán de Morelos\n\n` +
    `✨ Facial(es) seleccionado(s):\n${itemsListText}\n` +
    `💵 Total estimado: $${total.toLocaleString("es-MX")} MXN\n\n` +
    `¿Me podrían indicar qué días u horarios tienen disponibles? ¡Muchas gracias!`;

  const waUrl = `https://wa.me/523781030541?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
}

// ==========================================================================
// MODAL DE DETALLE DE SERVICIO
// ==========================================================================
function setupModal() {
  const overlay = document.getElementById("detail-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("open");
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
      }
    });
  }
}

function openDetailModal(id) {
  const item = CATALOG_DATA.find(i => i.id === id);
  const overlay = document.getElementById("detail-modal");
  if (!item || !overlay) return;

  document.getElementById("modal-cat-tag").textContent = item.categoryLabel;
  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-price").textContent = `$${item.price} MXN`;
  document.getElementById("modal-desc").textContent = item.description;
  document.getElementById("modal-recom").textContent = item.recommendation;

  const listEl = document.getElementById("modal-inclusions");
  listEl.innerHTML = item.includes.map(inc => `
    <li><i class="bi bi-check-circle-fill"></i> <span>${inc}</span></li>
  `).join("");

  const waBtn = document.getElementById("modal-wa-btn");
  if (waBtn) {
    const waText = encodeURIComponent(`Hola sb SKIN LAB, quiero agendar el tratamiento "${item.title}" ($${item.price} MXN) en su cabina de Tepatitlán.`);
    waBtn.href = `https://wa.me/523781030541?text=${waText}`;
  }

  overlay.classList.add("open");
}

// ==========================================================================
// FAQ ACCORDION
// ==========================================================================
function setupFAQ() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      items.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// NAVBAR & MOBILE MENU
// ==========================================================================
function setupMobileNav() {
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".nav-menu");
  const links = document.querySelectorAll(".nav-link");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }
}

function setupNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}
