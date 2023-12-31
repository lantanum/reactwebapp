document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('example-form');
    const table = document.querySelector('table tbody');
    const filterInput = document.getElementById('filter-input');
    const sortSelect = document.getElementById('sort-select');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const subscribe = document.getElementById('subscribe').checked ? 'Yes' : 'No';
        const country = document.getElementById('country').value;

        const newRow = table.insertRow(table.rows.length);
        const cells = [name, email, gender, subscribe, country];

        cells.forEach((cell, index) => {
            const newCell = newRow.insertCell(index);
            newCell.textContent = cell;
        });

        form.reset();
    });

    table.addEventListener('click', function (event) {
        const target = event.target;

        if (target.tagName === 'TD') {
            alert(`Clicked on cell: ${target.textContent}`);
        }
    });

    filterInput.addEventListener('input', function () {
        const filterValue = filterInput.value.toLowerCase();

        Array.from(table.rows).forEach(row => {
            const textContent = row.textContent.toLowerCase();
            row.style.display = textContent.includes(filterValue) ? '' : 'none';
        });
    });

    sortSelect.addEventListener('change', function () {
        const columnIndex = sortSelect.selectedIndex;

        const rowsArray = Array.from(table.rows);
        const sortedRows = rowsArray.slice(1).sort((a, b) => {
            const aValue = a.cells[columnIndex].textContent.toLowerCase();
            const bValue = b.cells[columnIndex].textContent.toLowerCase();
            return aValue.localeCompare(bValue);
        });

        table.innerHTML = '';
        table.appendChild(rowsArray[0]);
        sortedRows.forEach(row => table.appendChild(row));
    });

    // Example using click and mouseover events
    const button = document.getElementById('example-button');
    button.addEventListener('click', function () {
        alert('Button clicked!');
    });

    const cellHoverHandler = function (event) {
        const target = event.target;

        if (target.tagName === 'TD') {
            target.style.backgroundColor = 'lightgray';
        }
    };

    const cellMouseOutHandler = function (event) {
        const target = event.target;

        if (target.tagName === 'TD') {
            target.style.backgroundColor = '';
        }
    };

    table.addEventListener('mouseover', cellHoverHandler);
    table.addEventListener('mouseout', cellMouseOutHandler);

    // Example using keyboard events
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            alert('Enter key pressed!');
        }
    });
});
