
  function play(e) {
    const audio = document.getElementById(e);
   const dispaly = document.getElementById('display');
   display.textContent = e
    audio.play();
}

function playKey(e) {
let key = ` ${e.code}`;
key = key[4]
if('QWEASDZXCqweasdzxc'.includes(key)){
const audio = document.getElementById(key);
    audio.play(); 
}
}
document.addEventListener('keypress', playKey);

//https://forum.freecodecamp.org/t/drum-kit-with-testable-user-stories-guinea-pigs-needed/66354