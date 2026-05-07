let answers = {};

// These functions are called by inline onclick handlers in the HTML.
window.selectOpt = function selectOpt(btn, step) {
  const opts = btn.parentElement.querySelectorAll('.quiz-opt');
  opts.forEach(o => o.classList.remove('selected'));
  btn.classList.add('selected');
  answers[step] = btn.textContent.trim();
};

window.nextStep = function nextStep(n) {
  document.getElementById('step-' + (n - 1)).classList.remove('active');
  document.getElementById('step-' + n).classList.add('active');
  for (let i = 1; i <= n; i++) {
    document.getElementById('dot-' + i).classList.add('done');
  }
};

window.prevStep = function prevStep(n) {
  document.getElementById('step-' + (n + 1)).classList.remove('active');
  document.getElementById('step-' + n).classList.add('active');
};

window.showResult = function showResult() {
  document.getElementById('step-5').classList.remove('active');
  document.querySelectorAll('.quiz-dot').forEach(d => d.classList.add('done'));
  document.getElementById('quiz-result').classList.add('active');
};

document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.querySelector('.btn-submit');
  if (!submitBtn) return;

  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('.result-form input');
    let valid = true;
    inputs.forEach(i => {
      if (!i.value.trim()) {
        i.style.borderColor = '#e05c5c';
        valid = false;
      } else {
        i.style.borderColor = '';
      }
    });

    if (valid) {
      this.textContent = '✓ Recibido — te contactamos pronto';
      this.style.background = '#2d5a3d';
      this.disabled = true;
    }
  });
});

