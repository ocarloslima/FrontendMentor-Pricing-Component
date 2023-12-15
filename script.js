let $price = document.querySelectorAll('.price');
let $switch = document.querySelector('label');

let [$basic, $profissional, $master] = $price;

let i = 0;

function dolarSign(element, priceValue) {
    let dolar = document.createElement('span');
    element.textContent = priceValue;
    dolar.textContent = '$';
    element.insertAdjacentElement('afterbegin', dolar);
}

$switch.addEventListener('click', () => {
    i = +!i;
    if(i === 1) {
        dolarSign($basic, '19.99');
        dolarSign($profissional, '24.99');
        dolarSign($master, '39.99');
    } else {
        dolarSign($basic, '199.99');
        dolarSign($profissional, '249.99');
        dolarSign($master, '399.99');
    }
})