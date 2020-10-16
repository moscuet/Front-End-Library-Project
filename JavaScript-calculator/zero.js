const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multifly = document.getElementById('multifly');
const divide = document.getElementById('divide');
const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
const display = document.getElementById('display');
const result = document.getElementById('result');
//const  = document.getElementById()
let text = '0';
display.textContent = text;
function clickFunc(code) {
    if (code === '=') {
        try {
            eval(text);
            let res = `${text} =\n${eval(text)}`;
            display.textContent = res;
            text = `${eval(text)}`;
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                display.textContent = 'Error';
                text = '0';
            }
        }
    }
    else {
        text = text + code;
        display.textContent = text;
    }
}
function clearFunc() {
    text = '0';
    display.textContent = text;

}
