// script.js

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload on form submission

    // Collect form data
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const depart = document.getElementById('depart').value;
    const returnDate = document.getElementById('return').value;
    const passengers = document.getElementById('passengers').value;

    // Display form data in the console (replace with API calls as needed)
    console.log(`Searching for trips:
        From: ${from}
        To: ${to}
        Departure: ${depart}
        Return: ${returnDate}
        Passengers: ${passengers}`);
});
