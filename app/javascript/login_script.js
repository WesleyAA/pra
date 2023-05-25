document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
      
        // Obtenha os valores dos campos de entrada
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
      
        // Limpe os campos do formulário
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        var login_data = {
            username: username,
            password: password
          };

        fetch('login_user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers as needed
            },
            body: JSON.stringify(login_data),
          })
    });        
});
