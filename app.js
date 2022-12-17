const container=document.querySelector('.seatlist');
const seatts=document.querySelectorAll('.row .seats:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movie=document.getElementById('pick');
let tickprice=+movie.value;
function updatecount(){
    const seleseats=document.querySelectorAll('.row .seats.selected');
    const seatsIndex=[...seleseats].map(function (seats){
        return[...seatts].indexOf(seats);
    });
    const tcount=seleseats.length;
    count.innerText=tcount;
    total.innerText=tcount*tickprice;
}

movie.addEventListener('change', (e)=>{
    tickprice = +e.target.value;
    updatecount();
});

container.addEventListener('click',(e) => {
    if(e.target.classList.contains('seats') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }
    updatecount();
});