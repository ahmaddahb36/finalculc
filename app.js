// app.js

function check_mark(data) {
    // Implement the check_mark function if needed
}

function checkMed(data) {
    // Implement the checkMed function if needed
}

function run_js(code) {
    eval(code);
}

document.addEventListener('DOMContentLoaded', function () {
    const appContainer = document.getElementById('app');

    appContainer.innerHTML = `
        <div>
            <!-- Your PyWebIO UI elements go here -->
        </div>
    `;

    // Implement your PyWebIO logic here

    const goBackButton = document.createElement('button');
    goBackButton.textContent = 'Go Back';
    goBackButton.addEventListener('click', function () {
        run_js('location.reload()');
    });

    appContainer.appendChild(goBackButton);
});
