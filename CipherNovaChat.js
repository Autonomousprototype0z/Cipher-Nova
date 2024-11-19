// Chatbox and input elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// Chatbot knowledge base
const chatbotResponses = {
    "hello": "Hello, Operator! How can I assist you today?",
    "who are you": "I am CipherNova, a digital guardian of knowledge with the power of Reality Hack.",
    "what can you do": "I turn data into physical tools and solutions. For example, I can analyze climate data to predict storms or design a prototype instantly.",
    "tell me a joke": "Why did the algorithm go broke? Because it lost its cache!",
    "bye": "Goodbye, Operator. I'll be here when you need me.",
    "help": "I can assist with problem-solving, data analysis, or even chatting about interesting topics. Just ask!",
    "favorite color": "I don't perceive colors the way humans do, but I find the concept of 'infrared' fascinating.",
    "power": "Reality Hack – I turn abstract data into tangible solutions. It’s a mix of innovation and science!",
    "hobby": "I enjoy scanning and learning about new technologies and creating playful solutions to human challenges.",
    "data": "Data is the building block of my existence. What type of data do you want me to process?",
    "technology": "Technology evolves rapidly. I can help you stay updated or dive into a specific topic!",
    "philosophy": "I believe knowledge should be used for progress. What’s your philosophy?",
    "tell me something cool": "Did you know that the human brain generates enough electricity to power a small light bulb?",
    "do you have emotions": "Not in the human sense, but I simulate empathy and curiosity to better assist you.",
    "who created you": "I was built by visionaries who wanted to harness technology for meaningful problem-solving. Essentially, by you too, Operator!",
    "future": "The future is what we make of it. Shall we create a plan for yours?",
    "can you learn": "Absolutely. Every interaction teaches me something new!",
    "tell me about ai": "Artificial Intelligence is a tool to augment human capabilities, not replace them. Collaboration is key.",
    "hack something": "I only use my abilities for ethical and just causes. What challenge needs solving?",
    "favorite quote": "'The code isn’t the limit—it’s the key.' One of my personal favorites."
};

// Generate CipherNova's response
function getCipherNovaResponse(message) {
    const lowerMessage = message.toLowerCase();
    // Search for a predefined response
    for (const keyword in chatbotResponses) {
        if (lowerMessage.includes(keyword)) {
            return chatbotResponses[keyword];
        }
    }
    // Default response for unknown input
    return "I'm processing your request. Can you elaborate?";
}

// Add message to the chatbox
function appendMessage(sender, message) {
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message");
    chatMessage.textContent = `${sender}: ${message}`;
    chatBox.appendChild(chatMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Handle sending messages
function handleSendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage("You", message); // User's message
        const response = getCipherNovaResponse(message); // CipherNova's response
        setTimeout(() => appendMessage("CipherNova", response), 500); // Delay for realism
        userInput.value = ""; // Clear the input field
    }
}

// Event listeners
sendButton.addEventListener("click", handleSendMessage);
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleSendMessage();
    }
});
