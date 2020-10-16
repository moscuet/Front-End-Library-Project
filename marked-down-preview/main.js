const textArea = document.getElementById('editor')
let text= textArea.value.replace(/\\n/g, '\n');
document.getElementById('preview').innerHTML = marked(text)

function textChange(){
    text= textArea.value.replace(/\\n/g, '\n');
    document.getElementById('preview').innerHTML = marked(text) 
}

textArea.addEventListener('input', textChange)