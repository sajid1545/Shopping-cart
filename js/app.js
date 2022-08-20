function updateQuantity(inputId, isIncrease) {
    let inputField = document.getElementById(inputId);
    let previousInputValue = parseInt(inputField.value);
    let newInputValue;
    if (isIncrease === true) {
        newInputValue = previousInputValue + 1;
    } else {
        newInputValue = previousInputValue - 1;
    }
    inputField.value = newInputValue;
    return newInputValue;
}

function updatePrice(newQuantity, singleItemPrice) {
    let newPrice = newQuantity * singleItemPrice;
    return newPrice;
}

function setText(elementId, value) {
    let element = document.getElementById(elementId);
    element.innerText = value;
}

function getTextValueFromElement(elementId) {
    let element = document.getElementById(elementId);
    let elementValue = parseInt(element.innerText);
    return elementValue;
}

function subTotal() {
    let phonePrice = getTextValueFromElement('phone-total');
    let casePrice = getTextValueFromElement('case-total');

    let subTotal = phonePrice + casePrice;
    setText('sub-total', subTotal);

    let tax = parseFloat((subTotal * 0.1).toFixed(2));
    setText('tax-total', tax);

    let total = subTotal + tax;
    setText('total-amount', total);
}

function quantity(isTrue) {
    let previousCount = getTextValueFromElement('total-quantity');
    let newValue;
    if (isTrue == true) {
        newValue = previousCount + 1;
    } else {
        newValue = previousCount - 1;
    }
    setText('total-quantity', newValue);
    return newValue;
}

function inputFieldClear(InputId) {
    let inputField = document.getElementById(InputId);
    inputField.value = '0';
}

// Phone
document.getElementById('phone-btn-plus').addEventListener('click', function () {
    let newQuantity = updateQuantity('phone-field', true);
    let updatePrices = updatePrice(newQuantity, 1219);
    setText('phone-total', updatePrices);
    let quantityTotal = quantity(true);
    subTotal();
});

document.getElementById('phone-btn-minus').addEventListener('click', function () {
    let newQuantity = updateQuantity('phone-field', false);
    let updatePrices = updatePrice(newQuantity, 1219);
    setText('phone-total', updatePrices);
    let quantityTotal = quantity(false);

    subTotal();
});

// case

document.getElementById('case-btn-plus').addEventListener('click', function () {
    let newQuantity = updateQuantity('case-field', true);
    let updatedPrice = updatePrice(newQuantity, 59);
    setText('case-total', updatedPrice);
    let quantityTotal = quantity(true);

    subTotal();
});

document.getElementById('case-btn-minus').addEventListener('click', function () {
    let newQuantity = updateQuantity('case-field', false);
    let updatedPrice = updatePrice(newQuantity, 59);
    setText('case-total', updatedPrice);
    let quantityTotal = quantity(false);

    subTotal();
});

document.getElementById('phone-remove').addEventListener('click', function () {
    let remove = inputFieldClear('phone-field');
    let quantity = document.getElementById('total-quantity');
    quantity.innerText = '0';
});

document.getElementById('remove-case').addEventListener('click', function () {
    let remove = inputFieldClear('case-field');
    let quantity = document.getElementById('total-quantity');
    quantity.innerText = '0';
});
