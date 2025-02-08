const messagesDiv = document.querySelector('.messages');
const sendBtn = document.querySelector('.send-btn');
const messageInput = document.querySelector('.message-input');

const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
    console.log('Connected to the server');
};

ws.onmessage = (event) => {
    if (event.data instanceof Blob) {
        // Convert Blob to string
        const reader = new FileReader();
        reader.onload = function() {
            const text = reader.result;
            displayMessage(text);
        };
        reader.readAsText(event.data);
    } else {
        displayMessage(event.data);
    }
};
function displayMessage(message) {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = `Other user: ${message}`;
    messagesDiv.appendChild(msgDiv);
}

sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() === "") return; // Don't send empty messages

    ws.send(message);
    const msgDiv = document.createElement('div');
    msgDiv.textContent = `You: ${message}`;
    messagesDiv.appendChild(msgDiv);

    messageInput.value = ''; // Clear the input after sending
});