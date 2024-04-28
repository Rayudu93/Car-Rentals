document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const price = parseFloat(urlParams.get('price'));
    const name = urlParams.get('name');
    const formattedPresentDate = urlParams.get('from');
    const formattedReturnDate = urlParams.get('to');


    var priceInputField = document.getElementById("priceInput");
    var nameInputField = document.getElementById("nameInput");
    var presentInputField = document.getElementById("presentInput");
    var returnInputField = document.getElementById("returnInput");
    priceInputField.value =  price;
    nameInputField.value = name;
    presentInputField.value = formattedPresentDate;
    returnInputField.value = formattedReturnDate;
});


document.getElementById('payment').addEventListener('change', function() {
    var paymentMethod = this.value;
    if (paymentMethod === 'upi') {
        document.getElementById('upiFields').style.display = 'block';
        document.getElementById('atmFields').style.display = 'none';
    } else if (paymentMethod === 'atm') {
        document.getElementById('atmFields').style.display = 'block';
        document.getElementById('upiFields').style.display = 'none';
    } else {
        document.getElementById('upiFields').style.display = 'none';
        document.getElementById('atmFields').style.display = 'none';
    }
});