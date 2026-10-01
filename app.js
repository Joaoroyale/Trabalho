const registros = [];

function render() {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';
  registros.forEach((r) => {
    const c = classificar(r.nivel);
    const li = document.createElement('li');
    li.className = c.classe;
    li.textContent = `${r.local}: ${r.nivel} m - ${c.rotulo}`;
    lista.appendChild(li);
  });
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const local = document.getElementById('local').value;
  const nivel = parseFloat(document.getElementById('nivel').value);
  if (nivel < 0) {
    alert('O nível do rio não pode ser negativo.');
    return;
  }
  registros.push({ local, nivel });
  render();
  e.target.reset();
});