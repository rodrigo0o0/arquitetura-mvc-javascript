var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];
console.log(campos);

var form = document.querySelector(".form");
form.addEventListener("submit", function (event) {

    event.preventDefault();
    var tr = document.createElement("tr");
    campos.forEach(function (campo) {
        var td = document.createElement("td");
        td.textContent = campo.value;
        console.log(campo.value);
        tr.appendChild(td);
    });

    var volume = campos[1].value * campos[2].value;
    var td = document.createElement("td");
    td.textContent = volume;
    tr.appendChild(td);

    console.log(volume);
    console.log(tr);

    var tabelaPrincipal = document.querySelector("#tabela-principal");
    tabelaPrincipal.appendChild(tr);
    
    
    form.reset();
    campos[0].focus();
    
});

