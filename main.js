

function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  function handleInput(e) {
    if (e.key === 'Enter') {
      const input = document.getElementById('userInput');
      const text = input.value.trim();
      if (text !== '') {
        const chat = document.getElementById('iaChat');
        chat.innerHTML += `<p><strong>Tú:</strong> ${text}</p>`;
        setTimeout(() => {
          chat.innerHTML += `<p><strong>IA:</strong> Gracias por compartir. Recuerda tomar tus medicamentos.</p>`;
        }, 1000);
        input.value = '';
      }
    }
  }