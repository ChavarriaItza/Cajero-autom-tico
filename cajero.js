const accounts = {
    account1: { name: "Carlos", password: "1234", balance: 200 },
    account2: { name: "Jessica", password: "5678", balance: 290 },
    account3: { name: "Enriqueta", password: "contraseña", balance: 67 }
};

let currentAccount;

function login() {
    const accountId = document.getElementById('accountSelect').value;
    const password = document.getElementById('passwordInput').value;

    if (accounts[accountId] && accounts[accountId].password === password) {
        currentAccount = accounts[accountId];
        document.getElementById('display').innerHTML = `<p>Bienvenido, ${currentAccount.name}.</p>`;
        document.getElementById('options').style.display = 'block';
    } else {
        alert("Contraseña incorrecta");
    }
}

function checkBalance() {
    document.getElementById('display').innerHTML = `<p>Saldo actual: $${currentAccount.balance}</p>`;
}

function deposit() {
    const amount = prompt("Ingresa el monto a depositar:");
    processTransaction(amount, "deposito");
}

function withdraw() {
    const amount = prompt("Ingresa el monto a retirar:");
    processTransaction(amount, "retiro");
}

function processTransaction(amount, type) {
    const parsedAmount = parseFloat(amount);

    if (!isNaN(parsedAmount) && parsedAmount > 0) {
        if (type === "retiro" && (currentAccount.balance - parsedAmount) < 10) {
            alert("El saldo no puede ser menor de $10");
        } else if (type === "deposito" && (currentAccount.balance + parsedAmount) > 990) {
            alert("El saldo no puede ser mayor de $990");
        } else {
            if (type === "deposito") {
                currentAccount.balance += parsedAmount;
            } else if (type === "retiro") {
                currentAccount.balance -= parsedAmount;
            }

            alert(`${type.charAt(0).toUpperCase() + type.slice(1)} exitoso. Monto: $${parsedAmount}. Nuevo saldo: $${currentAccount.balance}`);
            checkBalance();
        }
    } else {
        alert("Ingresa un monto válido.");
    }
}