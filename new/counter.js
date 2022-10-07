let countDownDate = new Date("May 31, 2023 8:00:00").getTime();


let counter= setInterval(() => {

  let date = new Date().getTime();
  let differnce=countDownDate-date;

  let month=Math.floor(differnce/(1000*60*60*24*30));
  let days=Math.floor(differnce%(1000*60*60*24*30)/(1000*60*60*24));
  let hours=Math.floor(differnce%(1000*60*60*24)/(1000*60*60));
  let min=Math.floor(differnce%(1000*60*60)/(1000*60));
  let sec=Math.floor(differnce%(1000*60)/(1000));
  /*console.log(month);
  console.log(days);
  console.log(hours);
  console.log(min);
  console.log(sec);*/
  document.querySelector(".month").innerHTML =month;
  document.querySelector('.days').innerHTML =days ;
  document.querySelector('.hours').innerHTML =hours ;
  document.querySelector('.min').innerHTML =min ;
  document.querySelector('.sec').innerHTML =sec ;
  if(differnce<0){
    clearInterval(counter)
  }
},1000);