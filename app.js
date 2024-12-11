document.getElementById("usuarioForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Evita que el formulario se envíe de forma tradicional

  const usuario = document.getElementById("name").value;  // Obtiene el valor del campo nombre
  const email = document.getElementById("email").value;   // Obtiene el valor del campo email

  // Realiza la solicitud fetch al backend para autenticación
  fetch('http://135.237.224.116:3000/auth', {  // Asegúrate de que esta URL es la correcta
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  // Asegura que los datos sean enviados en formato JSON
    },
    body: JSON.stringify({ usuario, email })  // Convierte los datos a formato JSON
  })
  .then(response => response.json())  // Convierte la respuesta a JSON
  .then(data => {
    if (data.message === 'Autenticación exitosa') {  // Si la autenticación es exitosa
      window.location.href = 'pagina_exitoso.html';  // Redirige a la página de éxito
    } else {
      alert('Usuario o correo incorrectos');  // Si no es exitoso, muestra un mensaje de error
    }
  })
  .catch(error => console.error('Error:', error));  // Si ocurre un error, lo muestra en consola
});
