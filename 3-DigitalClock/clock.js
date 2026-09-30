const clock = document.getElementById('clock')
// document.querySelector('#clock') another way


setInterval(function(){
    let date = new Date()
clock.innerHTML = date.toLocaleTimeString();
}, 1000) //1000 time is in miliseconds