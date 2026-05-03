let display = document.querySelector("input");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "AC") {
            display.value = "";
        }
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});