// ---Q1---

// class Stopwatch {
//     constructor() {
//         this.time = 0;
//         this.intervalId = null;
//         this.startBtn = document.getElementById("startBtn");
//         this.stopBtn = document.getElementById("stopBtn");
//         this.screen = document.getElementById("screen");
//         this.startBtn.addEventListener("click", () => this.start());
//         this.stopBtn.addEventListener("click", () => this.stop());
//     }
//     start() {
//         if (!this.intervalId) {
//             this.intervalId = setInterval(() => {
//                 this.time++;
//                 this.screen.innerHTML = this.time;
//             }, 1000);
//         }
//     }
//     stop() {
//         clearInterval(this.intervalId);
//         this.intervalId = null;
//     }
// }
// let stopwatch = new Stopwatch();


// ---Q2---

// let googleServer = [{
//     userName: 'Yaron',
//     ID: 1
// },
//     {
//         userName: 'Idan',
//         ID: 2
//     },
//     {
//         userName: 'Elad',
//         ID: 3
//     }
// ]
//
// function callGoogleUsers(userIdInput, onSuccess, onFailure) {
//     let found = false;
//     for (let i = 0; i < googleServer.length; i++) {
//         if (googleServer[i].ID == userIdInput) {
//             found = true;
//             onSuccess(googleServer[i].ID, googleServer[i].userName);
//         }
//     }
//     if (found==false) {
//         onFailure();
//     }
// }
//
// function onSuccess(userID, userName) {
//     console.log('The user ' + userName + ' and his ID : ' + userID + ' Has been found');
// }
//
// function onFailure() {
//     console.log('Failure');
// }
//
// callGoogleUsers(1, onSuccess, onFailure);


// ---Q3---

import {HTML} from "./creator.js";
import {FormReader} from "./reader.js";

let btn = document.getElementById('newBTN');
btn.addEventListener("click", ()=>{
    let a = new FormReader();
    let b = new HTML(a.getTagName,a.getPropName,a.getPropValue,a.getContect);
});


