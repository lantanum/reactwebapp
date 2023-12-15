document.addEventListener('DOMContentLoaded', function () {
    // Form submission handling
    const form = document.getElementById('example-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const subscribe = document.getElementById('subscribe').checked ? 'Yes' : 'No';
        const country = document.getElementById('country').value;

        // Create a new table row and append it to the table
        const table = document.querySelector('table tbody');
        const newRow = table.insertRow(table.rows.length);
        const cells = [name, email, gender, subscribe, country];

        cells.forEach((cell, index) => {
            const newCell = newRow.insertCell(index);
            newCell.textContent = cell;
        });

        // Reset the form
        form.reset();
    });

    // Add event listener for the table rows (you can customize this)
    const table = document.querySelector('table tbody');
    table.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'TD') {
            alert(`Clicked on cell: ${target.textContent}`);
        }
    });
});
