document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    const words = ["Perkenalkan Nama Saya,", "Muhammad Zakky Ulil Amry"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const eraseSpeed = 100;
    const newWordDelay = 2000;

    function type() {
        if (wordIndex < words.length) {
            if (charIndex < words[wordIndex].length) {
                typingText.textContent += words[wordIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, newWordDelay);
            }
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, eraseSpeed);
        } else {
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
            setTimeout(type, typingSpeed);
        }
    }
    type();
});