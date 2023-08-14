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


// 

function updateWorkerList(filteredWorkers = workers) {
    const workerList = document.getElementById('workerList');
    workerList.innerHTML = '';

    filteredWorkers.forEach((worker, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${worker.name}</td>
            <td>${worker.foodItems}</td>
            <td>${worker.amount}</td>
            <td>
                <button onclick="editWorker(${index})">Edit</button>
                <button onclick="deleteWorker(${index})">Delete</button>
            </td>
        `;
        workerList.appendChild(row);
    });
}

function editWorker(index) {
    const worker = workers[index];
    const newName = prompt('Enter new name:', worker.name);
    const newFoodItems = prompt('Enter new food items:', worker.foodItems);
    const newAmount = prompt('Enter new amount:', worker.amount);

    if (newName && newFoodItems && newAmount !== null) {
        worker.name = newName;
        worker.foodItems = newFoodItems;
        worker.amount = newAmount;
        updateWorkerList();
    }
}

function deleteWorker(index) {
    const confirmDelete = confirm('Are you sure you want to delete this worker?');

    if (confirmDelete) {
        workers.splice(index, 1);
        updateWorkerList();
    }
}