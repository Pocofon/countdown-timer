const root = document.querySelector('.window');

const dateA =new Date(2024, 7, 7, 16, 0).getTime();

function updateTime(){
    let date = new Date();

    let d = dateA - date;
    
    let day = Math.floor(d/(1000 * 60 * 60 * 24));
    let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((d % (1000 * 60)) / 1000);

    root.innerHTML = day+ "d " + hours +"h " +  minutes + "m " + seconds+ "s ";
}




setInterval(updateTime, 1000)