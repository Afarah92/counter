const counter = document.querySelector ('#counter');
const Addcount = document.querySelector ('#addcountbtn');
const Lowercount = document.querySelector ('#lowercountbtn');


var count = 0;

Addcount.addEventListener ('click', Upcounter);

Lowercount.addEventListener('click',Lowercounter);

function  Upcounter () {
  
  count++;
  counter.innerHTML = count;
  if(counter.innerHTML>'0') {
    counter.style.color = '#4caf50';
  }
  else if (counter.innerHTML ===  '0') {
    counter.style.color = "white";
  }
  counter.animate([{opacity:'0.2'}, {opacity:'1.0'}], {duration:500,fill:'forwards'});
};

function  Lowercounter () {
  
    count--;
    counter.innerHTML = count;
   if(counter.innerHTML<'0') {
    counter.style.color = 'red';
  }
  else if (counter.innerHTML ===  '0') {
    counter.style.color = "white";
  }
    
    counter.animate([{opacity:'0.2'}, {opacity:'1.0'}], {duration:1000,fill:'forwards'});
  };
  