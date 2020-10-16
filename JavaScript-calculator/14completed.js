const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const  three = document.getElementById('three')
const four = document.getElementById('four')
const  five= document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const multifly = document.getElementById('multifly')
const  divide= document.getElementById('divide')
const  decimal= document.getElementById('decimal')
const  clear= document.getElementById('clear')
const display = document.getElementById('display')
const formula = document.getElementById('formula')
//const  = document.getElementById()
let solveText=''
let text =''
let displayText =''
display.textContent = '0'
function clickFunc (code) {
        if(displayText.length==1 && displayText== '0' && code==0)return
       if( code== '.' && displayText.includes('.') ) return
        if(code==='=') {            
            try {
                let rawText = text
                cleanText()
                formula.textContent =`${rawText}=${eval(text)}`
                display.textContent =`${eval(text)}`
                text = `${eval(text)}`
                displayText=''
            } catch (e) {
                if (e instanceof SyntaxError) {
                    display.textContent = 'Error'
                   text = '0'
                }
            }           
        }
        else {
            text = text+code;
            formula.textContent =text;
            if(typeof(code)==='number' || code=='.'){
                displayText = displayText+code
                display.textContent=displayText
            }
            else{
                displayText = ''
                display.textContent= code
            }
        }
}

function clearFunc() {
    text =''
    displayText =''
    display.textContent = '0'
    formula.textContent= ''
}
function cleanText(){
    char= '-+*/'
    for(let i=1; i<text.length-1; i++){
         if( char.includes(text[i])){
            if(char.includes(text[i+1])){
                text = text.slice(0,i)+text.slice(i+1)
                console.log(text)
                cleanText()
            }
         }
    }
}