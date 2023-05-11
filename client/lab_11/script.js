const form = document.querySelector('form');
const adoptionsTable = document.querySelector('#adoptions-table tbody');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const type = document.querySelector('#type').value;
    const startDate = document.querySelector('#start-date').value;
    const endDate = document.querySelector('#end-date').value;

    const url = new URL('https://data.montgomerycountymd.gov/resource/e54u-qx42.json');
    //url.searchParams.set('$where', `animaltype='${type}' AND intake_date BETWEEN '${startDate}' AND '${endDate}'`);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            adoptionsTable.innerHTML = '';
            data.forEach((adoption) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${adoption.petname}</td>
                    <td>${adoption.animaltype}</td>
                    <td>${adoption.breed}</td>
                    <td>${adoption.color}</td>
                    <td>${adoption.sex}</td>
                    <td>${adoption.petage}</td>
                    <td>${adoption.indate}</td>
                `;
                adoptionsTable.appendChild(row);
            });
        })
        .catch(error => console.error(error));
});
