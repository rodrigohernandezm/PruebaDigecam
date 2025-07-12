// quiz.js
const bancoPreguntas = [
  // Artículo 4 (3)
  {
    question: "¿Qué tipo de armas se consideran 'blancas' según el Artículo 4?",
    options: [
      "Ballestas, arcos y cuchillos de trabajo",
      "Armas de fuego automáticas",
      "Explosivos industriales"
    ],
    answer: 0,
    articulo: "Artículo 4"
  },
  {
    question: "¿Qué armas están prohibidas para uso civil según el Artículo 4?",
    options: [
      "Armas químicas y biológicas",
      "Escopetas de 24 pulgadas",
      "Pistolas de aire comprimido"
    ],
    answer: 0,
    articulo: "Artículo 4"
  },
  {
    question: "Las trampas bélicas son de uso exclusivo:",
    options: [
      "De cazadores profesionales",
      "Militar",
      "Empresas de seguridad privada"
    ],
    answer: 1,
    articulo: "Artículo 4"
  },

  // Artículo 5 (3)
  {
    question: "¿Qué armas son de uso exclusivo del Ejército según el Artículo 5?",
    options: [
      "Pistolas semiautomáticas",
      "Armas de guerra y uso colectivo",
      "Escopetas de cacería"
    ],
    answer: 1,
    articulo: "Artículo 5"
  },
  {
    question: "¿Puede el Ejército usar armas prohibidas por tratados internacionales?",
    options: [
      "Sí, en casos de emergencia",
      "No, está expresamente prohibido",
      "Solo con autorización presidencial"
    ],
    answer: 1,
    articulo: "Artículo 5"
  },
  {
    question: "Un fusil de asalto táctico es considerado:",
    options: [
      "Arma deportiva",
      "Arma de uso exclusivo militar",
      "Arma de uso civil"
    ],
    answer: 1,
    articulo: "Artículo 5"
  },

  // Artículo 6 (3)
  {
    question: "¿Qué armas pueden usar las fuerzas de seguridad según el Artículo 6?",
    options: [
      "Solo armas no letales",
      "Subametralladoras y rifles automáticos",
      "Armas nucleares portátiles"
    ],
    answer: 1,
    articulo: "Artículo 6"
  },
  {
    question: "¿Qué arma NO está permitida para las fuerzas de seguridad según este artículo?",
    options: [
      "Pistolas de ráfaga continua",
      "Armas biológicas",
      "Escopetas de orden público"
    ],
    answer: 1,
    articulo: "Artículo 6"
  },
  {
    question: "El uso de armas por las fuerzas de seguridad está restringido a:",
    options: [
      "Defensa personal de los agentes",
      "Cumplimiento de su función institucional",
      "Entrenamientos privados"
    ],
    answer: 1,
    articulo: "Artículo 6"
  },

  // Artículo 9 (3)
  {
    question: "¿Qué tipo de escopetas se consideran de uso civil según el Artículo 9?",
    options: [
      "Escopetas de bombeo, semiautomáticas y de retrocarga con cañón ≤24 pulgadas",
      "Escopetas de caza de cañón largo",
      "Escopetas de 12 calibres automáticas"
    ],
    answer: 0,
    articulo: "Artículo 9"
  },
  {
    question: "Un rifle de acción mecánica se considera un arma de:",
    options: [
      "Arma bélica",
      "Arma de uso civil",
      "Arma experimental"
    ],
    answer: 1,
    articulo: "Artículo 9"
  },
  {
    question: "¿Cuál es la longitud máxima permitida del cañón para escopetas de uso civil?",
    options: [
      "18 pulgadas",
      "24 pulgadas",
      "36 pulgadas"
    ],
    answer: 1,
    articulo: "Artículo 9"
  },

  // Artículo 10 (3)
  {
    question: "¿Qué está prohibido para civiles según el Artículo 10?",
    options: [
      "Fabricar armas automáticas",
      "Usar chalecos antibalas",
      "Portar navajas de bolsillo"
    ],
    answer: 0,
    articulo: "Artículo 10"
  },
  {
    question: "La tenencia de armas bélicas por civiles está:",
    options: [
      "Permitida con licencia especial",
      "Totalmente prohibida",
      "Autorizada para coleccionistas"
    ],
    answer: 1,
    articulo: "Artículo 10"
  },
  {
    question: "¿Quién puede autorizar excepciones a las prohibiciones del Artículo 10?",
    options: [
      "La DIGECAM",
      "Esta Ley",
      "El Ministerio de Gobernación"
    ],
    answer: 1,
    articulo: "Artículo 10"
  },

  // Artículo 12 (3)
  {
    question: "¿Qué requisitos son necesarios para obtener una licencia de portación de armas según el Artículo 12?",
    options: [
      "Certificado de antecedentes penales y examen de salud mental",
      "Pago de una tarifa administrativa",
      "Ser mayor de 30 años"
    ],
    answer: 0,
    articulo: "Artículo 12"
  },
  {
    question: "¿Cuánto tiempo debe durar una licencia de portación de armas?",
    options: [
      "1 año",
      "3 años",
      "5 años"
    ],
    answer: 1,
    articulo: "Artículo 12"
  },
  {
    question: "¿Quién otorga la licencia para portar armas en Guatemala?",
    options: [
      "La DIGECAM",
      "El Ministerio de Defensa",
      "La Policía Nacional Civil"
    ],
    answer: 0,
    articulo: "Artículo 12"
  },

  // Artículo 15 (3)
  {
    question: "¿Qué debe hacer el titular de una licencia de portación de armas cuando vence la licencia según el Artículo 15?",
    options: [
      "Solicitar la renovación de la licencia",
      "Devolver el arma a la autoridad",
      "Dejar de portar el arma inmediatamente"
    ],
    answer: 0,
    articulo: "Artículo 15"
  },
  {
    question: "Si el titular no renueva su licencia, ¿qué ocurre con el arma según el Artículo 15?",
    options: [
      "Debe entregarla a la autoridad correspondiente",
      "Puede seguir portándola por un periodo de gracia",
      "El arma se retira automáticamente por el propietario"
    ],
    answer: 0,
    articulo: "Artículo 15"
  },
  {
    question: "La licencia de portación de armas es válida en todo el territorio de Guatemala, excepto en:",
    options: [
      "Zonas de conflicto",
      "Zonas de seguridad pública",
      "Zonas de alto riesgo"
    ],
    answer: 1,
    articulo: "Artículo 15"
  },

  // Artículo 17 (3)
  {
    question: "¿Qué requisitos son necesarios para vender un arma de fuego en Guatemala según el Artículo 17?",
    options: [
      "Autorización de la DIGECAM",
      "Licencia de importación",
      "Pago de impuestos al Estado"
    ],
    answer: 0,
    articulo: "Artículo 17"
  },
  {
    question: "¿Qué debe hacer el comprador antes de recibir un arma de fuego según el Artículo 17?",
    options: [
      "Presentar su licencia de portación de armas",
      "Realizar un examen psicológico",
      "Demostrar que posee un uso legítimo"
    ],
    answer: 0,
    articulo: "Artículo 17"
  },
  {
    question: "¿Qué tipo de documentación debe tener el vendedor al momento de realizar la venta de un arma?",
    options: [
      "Copia de la licencia de venta",
      "Copia de la licencia de portación del comprador",
      "Comprobante de la factura de compra"
    ],
    answer: 0,
    articulo: "Artículo 17"
  },

  // Artículo 25 (3)
  {
    question: "Según el Artículo 25, ¿quién puede poseer un arma de fuego?",
    options: [
      "Solo los titulares de licencia de portación",
      "Las autoridades militares",
      "Cualquier persona mayor de 18 años"
    ],
    answer: 0,
    articulo: "Artículo 25"
  },
  {
    question: "¿Qué debe hacer una persona que desee obtener un arma de fuego según el Artículo 25?",
    options: [
      "Presentar un examen de salud y antecedentes penales",
      "Solicitar la autorización a la DIGECAM",
      "Realizar un pago por la licencia"
    ],
    answer: 0,
    articulo: "Artículo 25"
  },
  {
    question: "Según el Artículo 25, las personas que deseen poseer armas de fuego deben contar con:",
    options: [
      "Licencia de portación vigente",
      "Un documento oficial que acredite su necesidad",
      "Un justificativo de su actividad profesional"
    ],
    answer: 0,
    articulo: "Artículo 25"
  }
];

// Fisher–Yates shuffle
function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m]; array[m] = array[i]; array[i] = t;
  }
  return array;
}

class Quiz {
  constructor() {
    this.formEl      = document.getElementById('quiz-form');
    this.submitBtn   = document.getElementById('submit');
    this.resultsDiv  = document.getElementById('results');
    this.restartBtn  = document.getElementById('restart');
    this.progressBar = document.getElementById('progress');
    this.tabs        = document.querySelectorAll('[role="tab"]');
    this.panels      = document.querySelectorAll('[role="tabpanel"]');
    this.total       = 25;
    this.currentQs   = [];
  }

  init() {
    this._bindTabs();
    this.submitBtn.addEventListener('click', () => this.grade());
    this.restartBtn.addEventListener('click', () => this.load());
    this.load();
  }

  _bindTabs() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected','false');
        });
        this.panels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected','true');
        document.getElementById(tab.getAttribute('aria-controls'))
                .classList.add('active');
      });
    });
  }

  load() {
    this.formEl.innerHTML    = '';
    this.resultsDiv.innerHTML= '';
    this.submitBtn.style.display  = 'inline-block';
    this.restartBtn.style.display = 'none';
    this._updateProgress(0);

    this.currentQs = shuffle([...bancoPreguntas]).slice(0, this.total);
    const frag = document.createDocumentFragment();

    this.currentQs.forEach((q, idx) => {
      const div = document.createElement('div');
      div.className = 'question';
      const p = document.createElement('p');
      p.textContent = `${idx+1}. ${q.question}`;
      div.appendChild(p);

      q.options.forEach((opt, i) => {
        const id = `q${idx}-o${i}`;
        const label = document.createElement('label');
        label.setAttribute('for', id);
        const input = document.createElement('input');
        input.type  = 'radio';
        input.name  = `q${idx}`;
        input.id    = id;
        input.value = i;
        input.addEventListener('change', () => {
          const answered = this.formEl.querySelectorAll('input:checked').length;
          this._updateProgress(answered);
        });
        label.append(input, document.createTextNode(` ${opt}`));
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
      });

      frag.appendChild(div);
    });

    this.formEl.appendChild(frag);
  }

  _updateProgress(n) {
    const pct = (n / this.total) * 100 + '%';
    this.progressBar.style.setProperty('--progress', pct);
    this.progressBar.setAttribute('aria-valuenow', n.toString());
  }

  grade() {
    const answeredEls = Array.from(this.formEl.elements)
                             .filter(el => el.checked);
    if (answeredEls.length < this.total) {
      const firstUn = Array.from(this.formEl.querySelectorAll('.question'))
                           .find(q => !q.querySelector('input:checked'));
      firstUn.scrollIntoView({behavior:'smooth'});
      return;
    }

    let score = 0, wrongArts = [];
    let html = '<h2>Resultados</h2>';

    this.currentQs.forEach((q, idx) => {
      const sel = +answeredEls.find(a => a.name===`q${idx}`).value;
      if (sel === q.answer) {
        score++;
        html += `<p>${idx+1}. <span class="correct-answer">Correcto</span></p>`;
      } else {
        html += `<p>${idx+1}. <span class="wrong-answer">Incorrecto</span>`
             + ` Respuesta correcta: <strong>${q.options[q.answer]}</strong></p>`;
        wrongArts.push(q.articulo);
      }
    });

    html += `<h3>Puntaje: ${score} / ${this.total}</h3>`;
    if (wrongArts.length) {
      html += '<h3>Artículos a repasar:</h3><ul>';
      [...new Set(wrongArts)].forEach(a => html += `<li>${a}</li>`);
      html += '</ul>';
    }

    this.resultsDiv.innerHTML = html;
    this.submitBtn.style.display  = 'none';
    this.restartBtn.style.display = 'inline-block';
  }
}

document.addEventListener('DOMContentLoaded', () => new Quiz().init());
