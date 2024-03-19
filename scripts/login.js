const d = document;


$buttonLogin= d.querySelector("#login")

$buttonLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const $inputUser = d.querySelector("#user").value
    const $inputpass = d.querySelector("#pass").value

    console.log("usuario: " + $inputUser, "clave: " + $inputpass)
})