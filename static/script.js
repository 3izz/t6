document.addEventListener('DOMContentLoaded', function() {
    // Background Music
    const musicToggle = document.getElementById('musicToggle');
    const musicSelect = document.getElementById('musicSelect');
    let audioPlayer = null;

    if (musicToggle && musicSelect) {
        musicToggle.addEventListener('change', function() {
            if (this.checked) {
                const selectedMusic = musicSelect.value;
                const musicUrls = {
                    'calm1': 'https://example.com/calm1.mp3',
                    'calm2': 'https://example.com/calm2.mp3',
                    'nature': 'https://example.com/nature.mp3'
                };
                
                if (audioPlayer) {
                    audioPlayer.pause();
                }
                
                audioPlayer = new Audio(musicUrls[selectedMusic]);
                audioPlayer.loop = true;
                audioPlayer.play();
            } else {
                if (audioPlayer) {
                    audioPlayer.pause();
                }
            }
        });

        musicSelect.addEventListener('change', function() {
            if (musicToggle.checked) {
                musicToggle.dispatchEvent(new Event('change'));
            }
        });
    }

    // Chatbot
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');

    if (chatInput && sendButton && chatMessages) {
        const responses = {
            'hello': 'Hello! How can I help you today?',
            'help': 'I can help you manage your links, play background music, or answer questions about the application.',
            'music': 'You can enable background music using the toggle switch and select different tracks from the dropdown menu.',
            'link': 'To add a link, use the form at the top of your dashboard. The system will automatically check if it\'s safe.',
            'default': 'I\'m not sure I understand. Could you please rephrase your question?'
        };

        function addMessage(message, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
            messageDiv.textContent = message;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function getResponse(message) {
            message = message.toLowerCase();
            for (let key in responses) {
                if (message.includes(key)) {
                    return responses[key];
                }
            }
            return responses.default;
        }

        function handleMessage() {
            const message = chatInput.value.trim();
            if (message) {
                addMessage(message, true);
                setTimeout(() => {
                    addMessage(getResponse(message));
                }, 500);
                chatInput.value = '';
            }
        }

        sendButton.addEventListener('click', handleMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleMessage();
            }
        });
    }
}); 