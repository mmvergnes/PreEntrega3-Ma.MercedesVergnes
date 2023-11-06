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
        alert('Por favor, complete los datos solicitados');
    }
});

