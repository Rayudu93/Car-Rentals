// document.addEventListener('DOMContentLoaded', function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const name = urlParams.get('name');
//     const price = parseFloat(urlParams.get('price'));
//     const image = urlParams.get('image');
//     const hanfee = 0.0 * price;
//     const total = parseInt(price + hanfee);
//     const currentDate = new Date();

//     const formattedToday = currentDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

//     const tomorrow = new Date(currentDate);
//     tomorrow.setDate(currentDate.getDate() + 1);

//     const formattedTomorrow = tomorrow.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });


//     document.querySelector('.car-image').src = image;
//     document.querySelector('.car-name').innerText = name;
//     document.querySelector('.car-price').innerText = `₹${price.toFixed(2)}`;
//     document.querySelector('.car-price1-1').innerText = `₹${price.toFixed(2)}`;
//     document.querySelector('.car-price1').innerText = `₹${hanfee.toFixed(2)}`;
//     document.querySelector('.car-price2').innerText = `₹${total.toFixed(2)}`;
//     document.querySelector('.car-date').innerText = `Take : ${formattedToday}`;
//     document.querySelector('.car-date1').innerText = `Return : ${formattedTomorrow}`;
//     const total1 = total;
//     const mylink = document.getElementById('mylink');
//     mylink.href = `BookingDetails.html?price=${total1}&name=${name}&from=${formattedPresentDate}&to=${formattedFutureDate}`;
// });


//     function calculateDate() {
//         const urlParams = new URLSearchParams(window.location.search);
//         const price = parseFloat(urlParams.get('price'));
//         const hanfee = 0.0 * price;
//         const total = parseInt(price + hanfee);
//         const daysInput = document.getElementById('daysInput').value;
//         const numberOfDays = parseInt(daysInput);
//         const name = urlParams.get('name');

//         if (!isNaN(numberOfDays)) {
//             const currentDate = new Date();
//             const formattedPresentDate = currentDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

//             const futureDate = new Date(currentDate);
//             futureDate.setDate(currentDate.getDate() + numberOfDays);
//             const formattedFutureDate = futureDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

//             document.getElementById('result1').innerText = `Take : ${formattedPresentDate}`;
//             document.getElementById('result').innerText = `Return : ${formattedFutureDate}`;
//             document.getElementById('car-price1').innerText = `₹${(numberOfDays * price).toFixed(2)}`;
//             document.getElementById('car-price1-1').innerText = `₹${(numberOfDays * price).toFixed(2)}`;
//             document.getElementById('car-price2').innerText = `₹${(numberOfDays * hanfee).toFixed(2)}`;
//             document.getElementById('car-price3').innerText = `₹${(numberOfDays * total).toFixed(2)}`;
//             const total1 = total*numberOfDays.toFixed(2);
//             const mylink = document.getElementById('mylink');
//             mylink.href = `BookingDetails.html?price=${total1}&name=${name}&from=${formattedPresentDate}&to=${formattedFutureDate}`;
//         }
//     }

//     function incrementValue() {
//     var input = document.getElementById('daysInput');
//     var value = parseInt(input.value, 10);
//     if (value < 10) {
//         input.value = value + 1;
//         calculateDate();
//     }
//     }

//     function decrementValue() {
//     var input = document.getElementById('daysInput');
//     var value = parseInt(input.value, 10);
//     if (value > 1) {
//         input.value = value - 1;
//         calculateDate();
//     }
//     }


document.addEventListener('DOMContentLoaded', function() {
    // Extract URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const price = parseFloat(urlParams.get('price'));
    const image = urlParams.get('image');

    // Calculate handling fee and total price
    const handlingFee = 0.0 * price;
    const total = parseInt(price + handlingFee);

    // Get current date and format it
    const currentDate = new Date();
    const formattedToday = currentDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Calculate and format tomorrow's date
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);
    const formattedTomorrow = tomorrow.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Update HTML elements with car details
    document.querySelector('.car-image').src = image;
    document.querySelector('.car-name').innerText = name;
    document.querySelector('.car-price').innerText = `₹${price.toFixed(2)}`;
    document.querySelector('.car-price1-1').innerText = `₹${price.toFixed(2)}`;
    document.querySelector('.car-price1').innerText = `₹${handlingFee.toFixed(2)}`;
    document.querySelector('.car-price2').innerText = `₹${total.toFixed(2)}`;
    document.querySelector('.car-date').innerText = `Take : ${formattedToday}`;
    document.querySelector('.car-date1').innerText = `Return : ${formattedTomorrow}`;

    // Update link for booking details page
    const total1 = total;
    const mylink = document.getElementById('mylink');
    mylink.href = `BookingDetails.html?price=${total1}&name=${name}&from=${formattedToday}&to=${formattedTomorrow}`;
});




function calculateDate() {
    const urlParams = new URLSearchParams(window.location.search);
    const price = parseFloat(urlParams.get('price'));
    const handlingFee = 0.0 * price;
    const total = parseInt(price + handlingFee);
    const daysInput = document.getElementById('daysInput').value;
    const numberOfDays = parseInt(daysInput);
    const name = urlParams.get('name');

    if (!isNaN(numberOfDays)) {
        const currentDate = new Date();
        const formattedPresentDate = currentDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        const futureDate = new Date(currentDate);
        futureDate.setDate(currentDate.getDate() + numberOfDays);
        const formattedFutureDate = futureDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        document.getElementById('result1').innerText = `Take : ${formattedPresentDate}`;
        document.getElementById('result').innerText = `Return : ${formattedFutureDate}`;
        document.getElementById('car-price1').innerText = `₹${(numberOfDays * price).toFixed(2)}`;
        document.getElementById('car-price1-1').innerText = `₹${(numberOfDays * price).toFixed(2)}`;
        document.getElementById('car-price2').innerText = `₹${(numberOfDays * handlingFee).toFixed(2)}`;
        document.getElementById('car-price3').innerText = `₹${(numberOfDays * total).toFixed(2)}`;

        const total1 = total * numberOfDays.toFixed(2);
        const mylink = document.getElementById('mylink');
        mylink.href = `BookingDetails.html?price=${total1}&name=${name}&from=${formattedPresentDate}&to=${formattedFutureDate}`;
    }
}



function incrementValue() {
    var input = document.getElementById('daysInput');
    var value = parseInt(input.value, 10);
    if (value < 10) {
        input.value = value + 1;
        calculateDate();
    }
}

function decrementValue() {
    var input = document.getElementById('daysInput');
    var value = parseInt(input.value, 10);
    if (value > 1) {
        input.value = value - 1;
        calculateDate();
    }
}
