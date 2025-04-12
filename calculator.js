let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = "";

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value === "Ac") {
            string = "";
            display.value = string;
        } else if (value === "Del") {
            string = string.slice(0, -1);
            display.value = string;
        } else if (value === "=") {
            try {
                string = eval(string); // ⚠️ Be careful with `eval` in production
                display.value = string;
            } catch {
                display.value = "Error";
                string = "";
            }
        } else {
            string += value;
            display.value = string;
        }
    });
});
