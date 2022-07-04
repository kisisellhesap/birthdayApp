let namePerson = document.querySelector(".name");
let born = document.querySelector(".born");

let add = document.querySelector(".add");

let birthdayPersons = document.querySelector(".birthday-persons");
let birthdayArr = [];

const image_input = document.querySelector("#image-input");

let personNumber= document.querySelector(".personNumber");


/*------------------------- */

displayBirthdayPerson();

function BirthdayCard(id,img,name,born,bornMonth,burc){
this.id=id;
this.img=img;
this.name=name;
this.born=born;
this.bornMonth=bornMonth;
this.burc=burc;
}



BirthdayCard.prototype.deneme = function(){
    let val = new Date(this.born);
    console.log(val.getFullYear());
}


BirthdayCard.prototype.BirthdayControl=function(month){
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


BirthdayCard.prototype.BirthdayBurc=function(month){
    let burc;
    switch (month) {
        case 0:
           return burc="Aslan";
            break;
        case 1:
            return burc="Boğa";
            break;
        case 2:
            return burc="Yay";
            break;
        case 3:
            return burc="İkizler";
            break;
        case 4:
            return burc="Yengeç";
            break;
        case 5:
            return burc="Oğlak";
            break;
        case 6:
            return burc="Akrep";
            break;
        case 7:
            return burc="Balık";
            break;
        case 8:
            return burc="Terazi";
            break;
        case 9:
            return burc="Başak";
            break;
        case 10:
            return burc="Kova";
            break;
        case 11:
            return burc="Koç";
            break;
   
         
    }
}



/*-------------------------- */



add.addEventListener("click",function()       
{
    let card = new BirthdayCard(born.value);    
    let bornMonth=`${born.value[5]}${born.value[6]}`-1;

    birthdayArr.push(new BirthdayCard(birthdayArr.length+1, "a",
    namePerson.value,born.value,card.BirthdayControl(bornMonth),card.BirthdayBurc(bornMonth)));   
  
    card.ageCalculator();
 
    console.log(birthdayArr);
    console.log(birthdayPersons);
    console.log(card.born);
    card.deneme();
    
    namePerson.value="";
    born.value="";

    displayBirthdayPerson();
    });

BirthdayCard.prototype.ageCalculator = function(){
  
}

/*----------------------------------- */   

function displayBirthdayPerson(){

    birthdayPersons.innerHTML="";
    personNumber.innerHTML=`${birthdayArr.length} Birthday Person`;
 for(let person of birthdayArr){


let div = `
        <div class="birthday-card" id=${person.id}>
            <div class="img">

            </div>
            <div class="info">
                <p class="name">${person.name}</p>
                <p class="age">${person.ageCalculator()} </p>
            </div>
            <div class="birthday-info">
            <p class="birhtday-month">${person.born[8]}${person.born[9]} ${person.bornMonth}</p>
            <p class="burc">${person.burc}</p>
            </div>
            <button class="delete" onclick="deletePerson(${person.id})">X</button>
        </div>
`;

birthdayPersons.insertAdjacentHTML("beforeend",div);
}
}

/**----------------------------------- */    














    function deletePerson(id){
        let deleteP;
        for(let person in birthdayArr){
            if(person==id){
                deleteP=person;
            }
        }
        birthdayArr.splice(deleteP,1);
        displayBirthdayPerson();
    }






