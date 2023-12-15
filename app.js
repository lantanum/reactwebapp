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

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            filterInput.value = ''; // Clear filter input on 'Escape' key press
            Array.from(table.rows).forEach(row => row.style.display = '');
        }
    });

    table.addEventListener('mouseover', function (event) {
        const target = event.target;

        if (target.tagName === 'TD') {
            target.style.backgroundColor = 'lightgray';
        }
    });

    table.addEventListener('mouseout', function (event) {
        const target = event.target;

        if (target.tagName === 'TD') {
            target.style.backgroundColor = '';
        }
    });
});
