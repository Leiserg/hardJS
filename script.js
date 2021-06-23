'use strict';

let week = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];

function getWeekDay(date) {
    let days = week;
    return days[date.getDay()];
  }  
let date = new Date();

function days(){
    for (let i = 0; i < week.length; i++) {
        if (week) {
            const div = document.createElement('div');
            div.style.cssText = 'font-size: 50px';
            div.innerHTML = week[i];
            if (week[i] === 'Saturday' || week[i] === 'Sunday'){
                div.style.fontStyle = 'italic';
            }else if (week[i] === getWeekDay(date)){
                div.style.fontWeight = 'bold';
            }
            document.body.appendChild(div);
        }
    }
}

days();






























// function MyWeek(week) {
//         this.week = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];
//         let b = [];
// }



// for (let i = 0; i < week.length; i++){

//         b += week[i] + '\n';
        
// }

// document.getElementById("array").innerHTML = week.join('<br>');
// document.getElementById("array").innerHTML = week.join('<i></i>');
// document.getElementById("array").innerHTML = week[5].bold();
// // console.log(week.slice(-2));

