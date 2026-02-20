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
            addBotMessage("⚠ This looks unsafe.");
            addBotMessage("Do not click or reply.");
            return;
        }
    }

    addBotMessage(" This looks safe.");
}
