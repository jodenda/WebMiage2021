// get btn to change color
const btn = document.getElementById("color");
// get inputs to sum
const left = document.getElementById("left");
const right = document.getElementById("right");
// get button sum
const sum = document.getElementById("sum");
// get field to generate number
const generate = document.getElementById("generate");
// get button to generate
const create = document.getElementById("create");
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const title = document.getElementById("title");

// on click event
btn.addEventListener('click', () => {
    title.style.fontSize += 5;
    // generate random colors
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    // apply color on background 
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// on click event
sum.addEventListener('click', () => {
    // if fields not empty
    if (left.value && right.value) {
        let total = parseFloat(left.value) + parseFloat(right.value);
        // if result not NaN
        if (total) {
            // add a new element on the page
            let result = document.createElement("h2");
            result.textContent = "Result : " + total;
            document.body.appendChild(result);
        }
    }
});

// on button to generate word click
create.addEventListener('click', () => {
    // if not empty
    if (generate.value) {
        let number = parseInt(generate.value);
        let word = "";

        for (let i = 0; i < number; i++) {
            let letter = parseInt(Math.random() * ALPHABET.length);
            word += ALPHABET[letter];
        }

        let generatedWord = document.createElement("h3");
        generatedWord.textContent = "Word : " + word;
        document.body.appendChild(generatedWord);
    }
});
