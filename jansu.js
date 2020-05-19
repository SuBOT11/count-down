
const clock = document.querySelector('.timer')

const generateTemplate = (day,hour,minutes,sec)=>{
  const html = `
  <div class="time">${day}<span>days</span></div>
  <div class="time">${hour}<span>hours</span></div>
  <div class="time">${minutes}<span>minutes</span></div>
  <div class="time">${sec}<span>seconds</span></div>
  
  `;
  clock.innerHTML = html
}



const timer = ()=>{
const now = new Date();
const saleDay = new Date ('Tue June 2 2020 0:0:0')
const diff = saleDay -  now


const decDay = (diff/1000/60/60/24);
const days = Math.floor(decDay)
const hoursInDays = decDay-days



const decHours = hoursInDays * 24;
const hours = Math.floor(decHours);
const minInHours = decHours - hours; 

const decMin = minInHours * 60;
const min = Math.floor(decMin)
const secsInMin = decMin - min 

const decSec = secsInMin * 60 ;
const sec = Math.floor(decSec)

generateTemplate(days,hours,min,sec)
}





setInterval(timer, 1000);
















