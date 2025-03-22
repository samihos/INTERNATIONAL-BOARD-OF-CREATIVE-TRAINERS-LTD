const validCodes = ["20250010", "20250011", "20250013","20250014","20250015" ]
let timeLeft = 20;
let countdownInterval;

function verifyCode() {
    const userInput = document.getElementById("codeInput").value;
    const errorMessage = document.getElementById("error-message");

    if (validCodes.includes(userInput)) {
        document.getElementById("auth-box").style.display = "none";
        document.getElementById("certificate-box").style.display = "block";
        document.getElementById("verified-code").innerHTML = `الكود الذي أدخلته: <span class="text-success">${userInput}</span>`;

        countdownInterval = setInterval(updateCountdown, 1000);
    } else {
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 2000);
    }
}

function updateCountdown() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("countdown").innerText = `سيتم الإغلاق خلال ${timeLeft} ثانية`;
    } else {
        clearInterval(countdownInterval);
        window.close();
    }
}

function togglePassword() {
    const input = document.getElementById("codeInput");
    const icon = document.querySelector(".input-group-text i");
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function copyCode() {
    const codeText = document.getElementById("verified-code").innerText.split(":")[1].trim();
    navigator.clipboard.writeText(codeText);
    alert("✅ تم نسخ الكود: " + codeText);
}