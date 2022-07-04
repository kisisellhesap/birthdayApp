let namePerson = document.querySelector(".name");
let born = document.querySelector(".born");

let add = document.querySelector(".add");

let birthdayPersons = document.querySelector(".birthday-persons");
let birthdayArr = [];

const image_input = document.querySelector("#image-input");

let personNumber= document.querySelector(".personNumber");

let errorText = document.querySelector(".error");


if (localStorage.getItem("birthdayArr") !== null) {
    birthdayArr = JSON.parse(localStorage.getItem("birthdayArr"));
}

displayBirthdayPerson();

function BirthdayCard(id,name,born,age,birthdaydate,horoscope,birhtdayCheck){
    this.id=id;
    this.name=name;
    this.born=born;
    this.age=age;
    this.birthdaydate=birthdaydate;
    this.horoscope=horoscope;
    this.birhtdayCheck=birhtdayCheck;
    }

    let card;



BirthdayCard.prototype.ageCalculator = function(){
    let now = new Date();
    let me = new Date(this.born);
    let age ;

    
        age = now.getFullYear()-me.getFullYear();


    
    return age;
}
BirthdayCard.prototype.birthdaydateCalculator= function(){
    let me = new Date(this.born);
    let birthdayDate =`${me.getDate()} ${card.BirthdayMonthCalculator(me.getMonth())}`;
    return birthdayDate;
}

BirthdayCard.prototype.BirthdayMonthCalculator=function(month){
    let bornMonth;
    switch (month) {
        case 0:
           return bornMonth="Ocak";
            break;
        case 1:
            return bornMonth="Şubat";
            break;
        case 2:
            return bornMonth="Mart";
            break;
        case 3:
            return bornMonth="Nisan";
            break;
        case 4:
            return bornMonth="Mayıs";
            break;
        case 5:
            return bornMonth="Haziran";
            break;
        case 6:
            return bornMonth="Temmuz";
            break;
        case 7:
            return bornMonth="Ağustos";
            break;
        case 8:
            return bornMonth="Eylül";
            break;
        case 9:
            return bornMonth="Ekim";
            break;
        case 10:
            return bornMonth="Kasım";
            break;
        case 11:
            return bornMonth="Aralık";
            break;
   
         
    }
}




BirthdayCard.prototype.BirthdayHoroscope=function(){
    let personHoroscope;
    let me = new Date(this.born);
    let month = me.getMonth();

    switch (month) {
        case 0:
           return personHoroscope="Oğlak";
            break;
        case 1:
            return personHoroscope="Kova";
            break;
        case 2:
            return personHoroscope="Balık";
            break;
        case 3:
            return personHoroscope="Koç";
            break;
        case 4:
            return personHoroscope="Boğa";
            break;
        case 5:
            return personHoroscope="İkizler";
            break;
        case 6:
            return personHoroscope="Yengeç";
            break;
        case 7:
            return personHoroscope="Aslan";
            break;
        case 8:
            return personHoroscope="Başak";
            break;
        case 9:
            return personHoroscope="Terazi";
            break;
        case 10:
            return personHoroscope="Akrep";
            break;
        case 11:
            return personHoroscope="Yay";
            break;
   
         
    }
}

BirthdayCard.prototype.birthdayControl= function(){
    let me = new Date(this.born);
    let now = new Date();

    let birthday;

    
    if(me.getDate()===now.getDate()&& me.getMonth()===now.getMonth()){
        birthday="Birthday Today";
    }

    else {
        birthday= "Not Birthday Today";
    }

    return birthday;
}

add.addEventListener("click",function() {

   



    card = new BirthdayCard(birthdayArr.length+1,namePerson.value,born.value);
    let now = new Date();
    let me = new Date(born.value);
    if(namePerson.value!="" && born.value!=""){

        birthdayArr.push(new BirthdayCard(birthdayArr.length+1,namePerson.value,born.value,card.ageCalculator(),card.birthdaydateCalculator(),card.BirthdayHoroscope(),card.birthdayControl()));   
        localStorage.setItem("birthdayArr", JSON.stringify(birthdayArr));
    }
    else {
        errorText.innerHTML="ad veya doğum tarihini boş bırakmayın";
         errorTime =  setTimeout(() => {
            errorText.innerHTML="";
        }, 2000);
    }

    



   
console.log(birthdayArr);
    
    namePerson.value="";
    born.value="";

    displayBirthdayPerson();
    });
  

    function displayBirthdayPerson(){

    birthdayPersons.innerHTML="";
    personNumber.innerHTML=`${birthdayArr.length} Birthday Person`;
 for(let person of birthdayArr){

let div = `
<div class="birthday-card">
<div class="card-left">
    <div class="img">
    </div>
    <p class="age">Age : ${person.age} </p>
</div>

<div class="card-middle">
<p class="name">    Name : ${person.name}</p>
<p class="birhtday-month">Birthday Date : ${person.birthdaydate}</p>
<p class="burc">Horoscope : ${person.horoscope}</p>
<p class="checkBirthday">Birthday : ${person.birhtdayCheck}</p>
</div>
<div class="card-right">
<button class="delete" onclick ="deletePerson(${person.id})">X</button>
</div>

</div>
`;

birthdayPersons.insertAdjacentHTML("beforeend",div);
}
}


function deletePerson(id){
    let deleteP;
    for(let person in birthdayArr){
        if(person==id){
            deleteP=person;
        }
    }
    birthdayArr.splice(deleteP,1);
    displayBirthdayPerson();
    localStorage.setItem("birthdayArr", JSON.stringify(birthdayArr));
}

