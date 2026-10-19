function openWindow(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeWindow(id) {
    document.getElementById(id).style.display = 'none';
}

function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();