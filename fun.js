let workers = [];

function addWorker() {
    const name = document.getElementById('workerName').value;
    const foodItems = document.getElementById('foodItems').value;
    const amount = document.getElementById('amount').value;

    workers.push({ name, foodItems, amount });

    updateWorkerList();
    clearForm();
}

function updateWorkerList() {
    const workerList = document.getElementById('workerList');
    workerList.innerHTML = '';

    workers.forEach(worker => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${worker.name}</td>
            <td>${worker.foodItems}</td>
            <td>${worker.amount}</td>
        `;
        workerList.appendChild(row);
    });
}

function clearForm() {
    document.getElementById('workerName').value = '';
    document.getElementById('foodItems').value = '';
    document.getElementById('amount').value = '';
}

function searchWorkers() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredWorkers = workers.filter(worker =>
        worker.name.toLowerCase().includes(searchTerm) ||
        worker.foodItems.toLowerCase().includes(searchTerm) ||
        worker.amount.toString().includes(searchTerm)
    );

    updateWorkerList(filteredWorkers);
}