const card1 = document.querySelector(".card1 .back");
const card2 = document.querySelector(".card2 .back");
const card3 = document.querySelector(".card3 .back");
const card4 = document.querySelector(".card4 .back");
const card5 = document.querySelector(".card5 .back");
const card6 = document.querySelector(".card6 .back");
const card7 = document.querySelector(".card7 .back");
const card8 = document.querySelector(".card8 .back");
const card9 = document.querySelector(".card9 .back");
const card10 = document.querySelector(".card10 .back");
const chance = document.querySelector(".chance");
const result = document.getElementById("result");
const resultclass = document.querySelector(".result");
const resultWin= document.querySelector(".result .winner");
const guessNumber = document.querySelector(".bottom .number");
const guessImage = document.querySelector(".bottom");
const btnYes = document.querySelector(".buttons .yes");
const btnNo = document.querySelector(".buttons .no");
const cards = document.getElementsByClassName("back");
const remainChance = document.querySelector(".remainingChance");

const images = ["Anime/ben1.jpg","Anime/ben2.jpg","Anime/cat1.jpg","Anime/cat2.jpg","Anime/chhota.jpg","Anime/doraemon1.jpg","Anime/doraemon2.jpeg","Anime/ferb1.jpg","Anime/ferb2.jpg","Anime/ninja1.jpg","Anime/perman1.jpg","Anime/perman2.jpg","Anime/perman3.jpg","Anime/pikachu1.jpg","Anime/pikachu2.jpg","Anime/shinchan1.jpeg","Anime/shinchan2.jpg","Anime/shinchan3.jpg","Anime/tom2.jpg","Anime/tom3.jpg"];
let arr =[];
let chanceNum = 3;
for(let i=0; i<=9;){
    let f=0;
    let num = Math.ceil( Math.random()*19);
    for(let j=0; j<=9; j++){
        if(arr[j] == num){
            f=1;
            break;
        }
    }
    if( f==0){
        arr[i] = num;
        i++;
    }
}
card1.style.backgroundImage = `url(${images[arr[0]]})`;
card2.style.backgroundImage = `url(${images[arr[1]]})`;
card3.style.backgroundImage = `url(${images[arr[2]]})`;
card4.style.backgroundImage = `url(${images[arr[3]]})`;
card5.style.backgroundImage = `url(${images[arr[4]]})`;
card6.style.backgroundImage = `url(${images[arr[5]]})`;
card7.style.backgroundImage = `url(${images[arr[6]]})`;
card8.style.backgroundImage = `url(${images[arr[7]]})`;
card9.style.backgroundImage = `url(${images[arr[8]]})`;
card10.style.backgroundImage = `url(${images[arr[9]]})`;
card1.innerText = arr[0];
card2.innerText = arr[1];
card3.innerText = arr[2];
card4.innerText = arr[3];
card5.innerText = arr[4];
card6.innerText = arr[5];
card7.innerText = arr[6];
card8.innerText = arr[7];
card9.innerText = arr[8];
card10.innerText = arr[9];
console.log(arr);
let index = parseInt(Math.random()*10);
console.log(index);
guessNumber.innerText=arr[index];
guessImage.style.backgroundImage = `url(${images[arr[index]]})`;
btnNo.addEventListener("click",()=>{
    window.close();
})
btnYes.addEventListener("click",()=>{
    window.location.reload();
})
function clickedCard(e){
    let cardRefrence = document.querySelector(`.${e}`);
    let numberOfCard = document.querySelector(`.${e} .back`)
    cardRefrence.style.transform="rotateY(180deg)";
    chance.innerText= --chanceNum;
    numberOfCard = numberOfCard.innerText;
    if(chanceNum == 2){
        chance.style.color="yellow";
    }else if(chanceNum == 1){
        chance.style.color="red";
    }
    if( numberOfCard == arr[index]){
        setTimeout(()=>{            
            resultclass.style.backgroundImage=`url("Anime/winner.jpg")`;
            resultWin.innerHTML=`<h1 class="winner">&#128519; You Won the game &#128519;</h1>`;
            result.style.display="block";
        },1000);
        return;
    }
    if(chanceNum == 0){          
        remainChance.innerHTML=`<h2 style="text-align:center">OOP's &#128546; </h2><h2 style="text-align:center">Now You Don't Have Any Chance..</h2>`; 
        for(let i=0; i<=9; i++){
            if(cards[i].innerText == arr[index]){  
                cards[i].parentElement.style.border="10px solid rgb(236, 8, 27)";
            } 
            cards[i].parentElement.style.transform="rotateY(180deg)";  
        } 
        setTimeout(()=>{           
            resultclass.style.backgroundImage=`url("Anime/winLose.jpg")`;   
            resultWin.innerHTML=`
            <h1 class="winner" style="color:red">&#128577; You Loss the game &#128577;</h1>`
            result.style.display="block";
        },2000);
    }
}

// console.log(cards);
// for(let i=0; i<=9; i++){
//     if(cards[i].innerText == arr[index])
//         console.log(cards[i].innerText,arr[index])
// }