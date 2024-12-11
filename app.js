document.getElementById("usuarioForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const usuario = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch('https://proud-mushroom-0267afb0f.4.azurestaticapps.net', {  // Cambia esto por tu URL de backend en Azure
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ usuario, email })
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === 'Autenticación exitosa') {
      window.location.href = 'pagina_exitoso.html';
    } else {
      alert('Usuario o correo incorrectos');
    }
  })
  .catch(error => console.error('Error:', error));
});
