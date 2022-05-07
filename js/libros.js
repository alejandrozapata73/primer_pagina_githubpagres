var miPedido = [];

var cargaPedido;

localStorage.setItem('datos', JSON.stringify(miPedido));

var elPrincipito = new Object();
elPrincipito.name = 'El Principito';
elPrincipito.ISBN = 9789876376471;

function sumarPrincipito() {
    window.alert("Se sumo al pedido " + elPrincipito.name);

    cargaPedido = localStorage.getItem('datos');

    miPedido = JSON.parse(cargaPedido);

    miPedido.push(elPrincipito.name);

    localStorage.setItem('datos', JSON.stringify(miPedido));
}

var arte = new Object();
arte.name = 'El Arte de La Guerra';
arte.ISBN = 9789875748026;

function sumarArte() {
    window.alert("Se sumo al pedido " + arte.name);

    cargaPedido = localStorage.getItem('datos');

    miPedido = JSON.parse(cargaPedido);

    miPedido.push(arte.name);

    localStorage.setItem('datos', JSON.stringify(miPedido));
}

var bonelli = new Object();
bonelli.name = 'La tia Cosima';
bonelli.ISBN = 9789877391480;

function sumarBonelli() {
    window.alert("Se sumo al pedido " + bonelli.name);

    cargaPedido = localStorage.getItem('datos');

    miPedido = JSON.parse(cargaPedido);

    miPedido.push(bonelli.name);

    localStorage.setItem('datos', JSON.stringify(miPedido));
}

var enigma = new Object();
enigma.name = 'El Enigma de la Habitacion 622';
enigma.ISBN = 9789877387278;

function sumarEnigma() {
    window.alert("Se sumo al pedido " + enigma.name);

    cargaPedido = localStorage.getItem('datos');

    miPedido = JSON.parse(cargaPedido);

    miPedido.push(enigma.name);

    localStorage.setItem('datos', JSON.stringify(miPedido));
}

var filosofia = new Object();
filosofia.name = 'Filosofia a Martillazos';
filosofia.ISBN = 9789501299304;

function sumarFilosofia() {
    window.alert("Se sumo al pedido " + filosofia.name);

    cargaPedido = localStorage.getItem('datos');

    miPedido = JSON.parse(cargaPedido);

    miPedido.push(filosofia.name);

    localStorage.setItem('datos', JSON.stringify(miPedido));
}

var potter = new Object();
potter.name = 'Harry Potter y la Piedra Filosofal';
potter.ISBN = 9789878000107;

function sumarPotter() {
    window.alert("Se sumo al pedido " + potter.name);

    cargaPedido = localStorage.getItem('datos');

    miPedido = JSON.parse(cargaPedido);

    miPedido.push(potter.name);

    localStorage.setItem('datos', JSON.stringify(miPedido));
}

var king = new Object();
king.name = 'La Sangre Manda';
king.ISBN = 9789506445386;

function sumarKing() {
    window.alert("Se sumo al pedido " + king.name);

    cargaPedido = localStorage.getItem('datos');

    miPedido = JSON.parse(cargaPedido);

    miPedido.push(king.name);

    localStorage.setItem('datos', JSON.stringify(miPedido));
}

var sarasa = new Object();
sarasa.name = 'Horoscopo Chino 2021';
sarasa.ISBN = 9789877801576;

function sumarSarasa() {
    window.alert("Se sumo al pedido " + sarasa.name);

    cargaPedido = localStorage.getItem('datos');

    miPedido = JSON.parse(cargaPedido);

    miPedido.push(sarasa.name);

    localStorage.setItem('datos', JSON.stringify(miPedido));
}

var ken = new Object();
ken.name = 'Las Tinieblas y el Alba';
ken.ISBN = 9789506445393;

function sumarKen() {
    window.alert("Se sumo al pedido " + ken.name);

    cargaPedido = localStorage.getItem('datos');

    miPedido = JSON.parse(cargaPedido);

    miPedido.push(ken.name);

    localStorage.setItem('datos', JSON.stringify(miPedido));
}