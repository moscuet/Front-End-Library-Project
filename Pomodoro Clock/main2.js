const breakDecrement = document.getElementById('break-decrement')
const breakLength= document.getElementById("break-length")
const breakIncrement = document.getElementById('break-increment')
const sessionDecrement = document.getElementById("session-decrement")
const sessionLength = document.getElementById('session-length')
const sessionIncrement = document.getElementById('session-increment')
const timeLeft = document.getElementById('time-left')
const startStop =  document.getElementById('start_stop')
const reset =  document.getElementById('reset')
console.log('connected')
let state = {
  brleangth:5,
  sessLength:1,
  timerTime:1,
  pause: false
}

function startTimer (period){
  let now = new Date().getTime()
  let endtime =period*60*1000+now
  function intervalFunc(){
  if(state.pause){
    let currentTime = new Date().getTime()
     let timerTime = endtime-currentTime
     state.timerTime=timerTime/(60*1000);
     console.log('state',state)
     //console.log('timertime',timerTime)
     //console.log(currentTime,timerTime)
    let min = Math.floor(timerTime/60000)
    let sec = Math.floor((timerTime-min*60*1000)/1000)
    timeLeft.innerText= `${min}:${sec}`
    if (timerTime <0) {
        clearInterval(intervalFunc);
        timeLeft.innerHTML = "EXPIRED";
      }
   }
   else{
     clearInterval(x)
   }
  }
  let x = setInterval(intervalFunc ,1000)
}
startStop.addEventListener('click',()=>{
  state.pause=!state.pause
  startTimer(state.timerTime)
})
reset.addEventListener('click',()=>{
  state.brleangth=5;
  state.sessLength=2;
  state.pause = false;
  console.log(state)
  clearInterval(x);
})



