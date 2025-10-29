document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.getElementById('sendBtn');
  const userInput = document.getElementById('userInput');
  const chatMessages = document.getElementById('chatMessages');
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');

  function addMessage(content, sender) {
    const container = document.createElement('div');
    container.className = sender === 'user' ? 'user-container' : 'ia-message-container';
    const bubble = document.createElement('div');
    bubble.className = sender === 'user' ? 'user' : 'ia';
    bubble.textContent = content;
    container.appendChild(bubble);
    chatMessages.appendChild(container);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function send() {
    const text = userInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    userInput.value = '';
    setTimeout(() => {
      addMessage('Demo: respuesta de prueba.', 'ia');
    }, 400);
  }

  sendBtn.addEventListener('click', send);
  userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });
  }
});