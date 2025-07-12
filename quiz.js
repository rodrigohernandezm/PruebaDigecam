// quiz.js
const bancoPreguntas = [
  // aquí va un único array con todas las preguntas (sin duplicados)
  // { question: "...", options: [...], answer: 0, articulo: "Artículo X" },
  // ...
];

// Fisher–Yates
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
    this.formEl       = document.getElementById('quiz-form');
    this.submitBtn    = document.getElementById('submit');
    this.resultsDiv   = document.getElementById('results');
    this.restartBtn   = document.getElementById('restart');
    this.progressBar  = document.getElementById('progress');
    this.tabs         = document.querySelectorAll('[role="tab"]');
    this.panels       = document.querySelectorAll('[role="tabpanel"]');
    this.currentQs    = [];
    this.total        = 25;
  }

  init() {
    this._bindTabs();
    this.submitBtn.addEventListener('click', ()=> this.grade());
    this.restartBtn.addEventListener('click', ()=> this.load());
    this.load();
  }

  _bindTabs() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        this.panels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        document.getElementById(tab.getAttribute('aria-controls'))
                .classList.add('active');
      });
    });
  }

  load() {
    this.formEl.innerHTML   = '';
    this.resultsDiv.innerHTML = '';
    this.submitBtn.style.display  = 'inline-block';
    this.restartBtn.style.display = 'none';
    this.progressBar.setAttribute('aria-valuenow', '0');
    this._updateProgress(0);

    this.currentQs = shuffle([...bancoPreguntas]).slice(0, this.total);
    const frag = document.createDocumentFragment();

    this.currentQs.forEach((q, idx) => {
      const qDiv = document.createElement('div');
      qDiv.className = 'question';

      const p = document.createElement('p');
      p.textContent = `${idx+1}. ${q.question}`;
      qDiv.appendChild(p);

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
        qDiv.appendChild(label);
        qDiv.appendChild(document.createElement('br'));
      });

      frag.appendChild(qDiv);
    });

    this.formEl.appendChild(frag);
  }

  _updateProgress(n) {
    const pct = (n / this.total) * 100;
    this.progressBar.style.setProperty('--progress', `${pct}%`);
    this.progressBar.setAttribute('aria-valuenow', n.toString());
    this.progressBar.querySelector('::after').style.width = `${pct}%`;
  }

  grade() {
    const answers = Array.from(this.formEl.elements)
                         .filter(el => el.checked)
                         .map(el => ({ name: el.name, val: +el.value }));
    if (answers.length < this.total) {
      const firstUn = Array.from(this.formEl.querySelectorAll('.question'))
                           .find(qd => !qd.querySelector('input:checked'));
      firstUn.scrollIntoView({ behavior: 'smooth' });
      firstUn.querySelector('label').focus();
      return;
    }

    let score = 0, wrongArts = [];
    let html = '<h2>Resultados</h2>';

    this.currentQs.forEach((q, idx) => {
      const sel = answers.find(a => a.name === `q${idx}`).val;
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
