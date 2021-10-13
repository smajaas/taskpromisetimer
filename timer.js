const timers = new Promise((resolve,reject)) => {
let count = 11;
if (count>=1) {
    
    setTimeout(()=> {
    document.querySelector('.countdown').innerText=count;
})