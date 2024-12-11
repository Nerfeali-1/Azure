document.getElementById("usuarioForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const usuario = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Envía los datos al servidor de backend para autenticación
  fetch('http://135.237.224.116:3000/auth', {  // Cambia la URL si es necesario
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ usuario, email })
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === 'Autenticación exitosa') {
      // Si la autenticación es exitosa, redirigir a otra página
      window.location.href = 'pagina_exitoso.html'; // Cambia por la página de destino
    } else {
      alert('Usuario o correo incorrectos');
    }
  })
  .catch(error => console.error('Error:', error));
});
