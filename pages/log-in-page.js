//login-in-page.js

//Almacenar datos y pasar de pagina
document.getElementById('form-button').addEventListener('click', function (e) {
    e.preventDefault();
    
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let phone = document.getElementById('phoneInput').value;

    if (name != "" && email != "" && phone != "") {
        let datos = [name, email, phone];
        localStorage.setItem('login', JSON.stringify(datos));
        location.href = "planes-uno-pass.html";
    }
    else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            text: "Por favor, complete los datos solicitados",
            showConfirmButton: false,
            timer: 1500,
            toast: 'true'
          });
    }

});

