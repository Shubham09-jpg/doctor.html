let slide =document.querySelectorAll("patientReview");
let card = document.querySelectorAll(".card");
let connectBtn = document.getElementById("closeBtn");
let count =0;

slide.forEach(function(slides, index){
    slides.computedStyleMap.left='${index = 100}%'
    })

    function myfun(){}
    slides.forEach(function(curVal){
    curVal.style.transform='translateX(-${count = 100}%)'
})
setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myfun()
},2000)

card.forEach(function(cards){
    cards.addeventlistener("click", function(){
    console.log(card);
    document.querySelector(".content").innerHTML=''
})
})
closeBtn.addeventlistener("click", function(){
document.querySelector(".detail").style.display="none";
})

connectBtn.addeventlistener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    
    if(email.value =="" && pass.value){
        alert("Enter Details")
    }else{
        alert("You logged IN")
    }
})
