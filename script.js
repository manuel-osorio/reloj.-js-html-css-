const tiempo =  ()=>
{
    let contenedor = document.querySelector('h1');
    let date = new Date();
    let hh = date.getHours();
    let min = date.getMinutes();
    let seg =  date.getSeconds();
    hh =  hh < 10 ? `0${hh}`: hh;
    min = min < 10 ? `0${min}`: min;
    seg =  seg < 10 ? `0${seg}`: seg;
    let time =  `${hh}:${min}:${seg}`;
    contenedor.innerHTML =  time 
}
tiempo();
setInterval(tiempo,1000)