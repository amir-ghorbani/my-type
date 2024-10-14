// Automatically resize the textarea to fit the content
const descriptionTextarea = document.getElementById('description');

descriptionTextarea.addEventListener('input', function() {
    this.style.height = 'auto'; // Reset height to calculate the new height
    this.style.height = this.scrollHeight + 'px'; // Set the new height based on the content
});

// Grab the input fields and the text box
const bgInput = document.getElementById('bg-colour');
const fontInput = document.getElementById('font-colour');
const textBox = document.getElementById('text-box');
const textBoxText = textBox.querySelector('h1'); // Select the h1 inside the text box

// Grab the font buttons
const interFontBtn = document.getElementById('inter-font-btn');
const baskervilleFontBtn = document.getElementById('baskerville-font-btn');

// Function to set the active font button
function setActiveFontButton(activeButton) {
    // Remove "active" class from both buttons
    interFontBtn.classList.remove('active');
    baskervilleFontBtn.classList.remove('active');
    // Add "active" class to the selected button
    activeButton.classList.add('active');
}

// Set the font to "Inter" when the button is clicked
interFontBtn.addEventListener('click', function() {
    textBoxText.style.fontFamily = 'Inter, sans-serif';
    setActiveFontButton(interFontBtn); // Mark the Inter button as active
});

// Set the font to "Libre Baskerville" when the button is clicked
baskervilleFontBtn.addEventListener('click', function() {
    textBoxText.style.fontFamily = 'Libre Baskerville, serif';
    setActiveFontButton(baskervilleFontBtn); // Mark the Libre Baskerville button as active
});

// Function to change the background color
bgInput.addEventListener('input', function() {
    const bgColor = bgInput.value;
    textBox.style.backgroundColor = bgColor;
});

// Function to change the font color
fontInput.addEventListener('input', function() {
    const fontColor = fontInput.value;
    textBoxText.style.color = fontColor;
});
