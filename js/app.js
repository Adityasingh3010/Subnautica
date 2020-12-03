//Light Mode



// id selectors

const my_form=document.getElementById('addtocart');
const FullNameField=document.getElementById('name');
const logger=document.getElementById('error-log');
let numberofplayer,timeslot,title;


// user-cart selector 
display_game=document.querySelector('.game-name');
cost=document.getElementById('amount');
reciept_btn=document.querySelector('.btn-div');
empty_cart_msg=document.querySelector('.empty-cart');

// generation of reciept
var user,game_name,amount;
let games_bought=[]
let time_slots=[]
let players=[];
let price=[];
reciept=document.querySelector('.user-reciept');



// event listeners


// light-dark mode transition:


// When buy now is triggered:

addEventListener('click',(event)=>{
    if(event.target.classList.contains('btn-link')){
        game_name=event.target.parentNode.childNodes[3].innerHTML;
        amount=event.target.parentNode.childNodes[5].innerHTML;
        document.querySelector('.game-form').style="display:block";
        display_game.innerHTML=game_name;
        cost.innerHTML=amount;
    }
})


// when add to cart is triggered:

my_form.addEventListener('click',(event)=>{
    if(FullNameField.value === '' || FullNameField.value=== null){
        // Error messages
        event.preventDefault();
        logger.style='display:block';
        logger.innerHTML="Enter Your Name"
        console.log(logger.innerHTML);
    }
    else{ 
        logger.style='display:none';  // disable error msg
        empty_cart_msg.style='display:none'; // disable empty cart msg
        reciept_btn.style='display:block'; // enable generate reciept btn

        // details to be added to cart 
        user=FullNameField.value;
        title=document.querySelector('.game-name').innerHTML;
        numberofplayer=document.getElementById('exampleFormControlSelect1').value;
        timeslot=document.getElementById('exampleFormControlSelect2').value;

        // add to cart
        var list = document.createElement("div");
        list.classList.add('list-item');
        const cart=document.getElementsByClassName('user-games');
        var details = document.createTextNode(title+" "+numberofplayer+" "+timeslot);
        list.appendChild(details);
        cart[0].appendChild(list);

        //push details in an auxilary array:
        games_bought.push(document.querySelector('.game-name').innerHTML);
        time_slots.push(timeslot);
        players.push(numberofplayer);
        price.push(cost.innerHTML);
    }
})


//when generate reciept is triggered:


reciept_btn.addEventListener('click',(event)=>{
    reciept.style='display:block';
    for(var i=0;i<games_bought.length;i++){
        var list = document.createElement("li");
        const userbooking=document.getElementsByClassName('bookings');
        console.log(games_bought)
        var details = document.createTextNode(games_bought[i]+" "+numberofplayer+" "+timeslot+" "+price[i]);
        list.appendChild(details);
        userbooking[0].appendChild(list);

    }
    reciept_btn.style='display:none';
    games_bought=[]
    time_slots=[]
    players=[];
    price=[]
})


