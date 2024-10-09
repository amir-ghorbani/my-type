// Grab the input fields and the text box
const bgInput = document.getElementById('bg-colour');
const fontInput = document.getElementById('font-colour');
const textBox = document.getElementById('text-box');
const textBoxText = textBox.querySelector('h1'); // Select the h1 inside the text box

// Function to change the background color
bgInput.addEventListener('input', function() {
    const bgColor = bgInput.value;
    // Update the background color of the text box
    textBox.style.backgroundColor = bgColor;
});

// Function to change the font color
fontInput.addEventListener('input', function() {
    const fontColor = fontInput.value;
    // Update the font color of the text inside the text box
    textBoxText.style.color = fontColor;
});
