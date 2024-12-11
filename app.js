document.getElementById("usuarioForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const usuario = document.getElementById("name").value;  // Usuario del input
  const email = document.getElementById("email").value;    // Correo del input

  // Imprimir los valores enviados al backend
  console.log(`Enviando usuario: ${usuario}, email: ${email}`);

  fetch('http://localhost:3000/auth', {  // Cambiar URL si el servidor está desplegado en otro lugar
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ usuario, email })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta del servidor:', data);  // Verifica la respuesta del backend
    if (data.message === 'Autenticación exitosa') {
      // Si la autenticación es exitosa, redirigir a otra página
      window.location.href = 'pagina_exitoso.html';  // Cambia la página de destino si es necesario
    } else {
      alert('Usuario o correo incorrectos');
    }
  })
  .catch(error => console.error('Error:', error));
});
', error));
});
