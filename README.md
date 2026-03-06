# Cyber-Safety-Bot

## Cyber Safety Bot

### Project Overview

Cyber Safety Bot is a simple web-based chatbot that helps users understand common cyber scams and basic online safety practices. The bot shows scam examples, provides safety tips, and allows users to check suspicious messages.

The project is built using HTML, CSS, and JavaScript and runs directly in a web browser.

### Technologies Used

- HTML
- CSS
- JavaScript
- 
### index.html

bash
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Cyber Safety Bot</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="chatbox">
<h2>Cyber Safety Bot</h2>

<div id="chat">
<p class="bot">Hi! I help you stay safe online. Choose an option.</p>
</div>

<div class="buttons">
<button onclick="showScams()">Scam Examples</button>
<button onclick="checkMessage()">Check a Message</button>
<button onclick="showTips()">Safety Tips</button>
</div>
```
###script.js
bash
```
</div>
<script src="script.js"></script>
</body>
</html>
script.js
const chat = document.getElementById("chat");
function addBotMessage(text) {
    chat.innerHTML += "<p class='bot'>" + text + "</p>";
}
function addUserMessage(text) {
    chat.innerHTML += "<p class='user'>" + text + "</p>";
}
function showScams() {
    addUserMessage("Scams");
    addBotMessage("• Messages asking for OTP");
    addBotMessage("• Fake job messages");
    addBotMessage("• Message saying account blocked");
    addBotMessage("• Unknown links");
}
function showTips() {
    addUserMessage("Tips");
    addBotMessage("• Do not share OTP");
    addBotMessage("• Do not share password");
    addBotMessage("• Do not click unknown links");
    addBotMessage("• Be careful online");
}
function checkMessage() {
    let msg = prompt("Paste message here:");
    if (msg === null || msg === "") {
        return;
    }

    addUserMessage(msg);

    msg = msg.toLowerCase();
    const keywords = ["otp", "click", "urgent", "verify", "blocked", "win"];

    for (let i = 0; i < keywords.length; i++) {
        if (msg.includes(keywords[i])) {
            addBotMessage("This looks unsafe.");
            addBotMessage("Do not click or reply.");
            return;
        }
    }

    addBotMessage("This looks safe.");
}
```
###style.css
bash
```
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
}

.chatbox {
    width: 400px;
    margin: 50px auto;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
}

h2 {
    text-align: center;
}

#chat {
    min-height: 200px;
    margin-bottom: 10px;
}

.bot {
    background-color: #e1f5fe;
    padding: 8px;
    border-radius: 5px;
    margin: 5px 0;
}

.user {
    background-color: #c8e6c9;
    padding: 8px;
    border-radius: 5px;
    margin: 5px 0;
    text-align: right;
}

.buttons {
    text-align: center;
}

button {
    margin: 5px;
    padding: 8px 12px;
    cursor: pointer;
}
```
