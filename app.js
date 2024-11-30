document.getElementById("dataForm").addEventListener("submit", function(event){
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Envía los datos al servidor de backend (esto se explica más abajo)
  fetch('https://your-app.azurewebsites.net/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email })
  })
  .then(response => response.json())
  .then(data => console.log('Datos guardados correctamente', data))
  .catch(error => console.error('Error:', error));
});
