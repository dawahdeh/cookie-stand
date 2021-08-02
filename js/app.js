


let locationRef=document.getElementById('locationRef');

const Seattle= {

name:'Seattle',    

minimumNumberOfCustomer : 23,
maxmumNumberOfCustomer : 65,
avgNumberofCookiesPerchased :6.3,
Total:0,
resultSimulatedAmountOfCookies :[],
workinghour :15,



simulatedNumberCookies : function (min,max){


    min = Math.ceil(min);
    max = Math.floor(max);



for (let i=1;i<=this.workinghour;i++){

simulatedAmountOfCookies =Math.floor(Math.random() * (max - min + 1) + min)*this.avgNumberofCookiesPerchased;

 this.resultSimulatedAmountOfCookies[i-1] =simulatedAmountOfCookies;

 this.Total=this.resultSimulatedAmountOfCookies[i-1]+this.Total;


}



},





render :function() {



let h2Element =document.createElement('h2');
locationRef.appendChild(h2Element);
h2Element.textContent=this.name;


    let ulElement=document.createElement('ul');
    locationRef.appendChild(ulElement);
    
    for (let i =1;i<=this.workinghour+1;i++) {


        if (i<=7){
        hourTime=i+5;
        amPm="am";}
        else {
        hourTime=i-7;
        amPm="pm";
        }
    
let liElement=document.createElement('li');
ulElement.appendChild(liElement);
if (i<=15)
liElement.textContent= `${hourTime}`+`${amPm}`+ ": "+"  "+this.resultSimulatedAmountOfCookies[i-1]+"  "+"  Cookies";
else
liElement.textContent= 'Total  :'+ `${this.Total}` +"  Cookies";




}



}




}











const Tokyo = {

 name:'Tokyo ' ,

minimumNumberOfCustomer :3,

maxmumNumberOfCustomer :24,

avgNumberofCookiesPerchased :1.2,

resultSimulatedAmountOfCookies :[],

workinghour:    15,





    simulatedNumberCookies : function (min,max){


        min = Math.ceil(min);
        max = Math.floor(max);
    
    
    
    for (let i=1;i<=this.workinghour;i++){
    
    simulatedAmountOfCookies =Math.floor(Math.random() * (max - min + 1) + min)*this.avgNumberofCookiesPerchased;


     this.resultSimulatedAmountOfCookies[i-1] =simulatedAmountOfCookies;
    
    }
    
},
 render : function (){

let locationRef =document.getElementById ('locationRef');

let h2Element =document.createElement('h2');

h2Element.textContent=this.name;

locationRef.appendChild(h2Element);

let ulElement=document.createElement('ul');
locationRef.appendChild(ulElement);


for (let i =1;i<=this.workinghour;i++) {


    if (i<=7){
    hourTime=i+5;
    amPm="am";}
    else {
    hourTime=i-7;
    amPm="pm";
    }
 

let liElement =document.createElement('li');


ulElement.appendChild(liElement);

liElement.textContent= `${hourTime}`+`${amPm}`+ ": "+"  "+this.resultSimulatedAmountOfCookies[i-1]+"  "+"  Cookies";







 }




}





}






const Dubai = {

    name:'Dubai ' ,
   
   minimumNumberOfCustomer :11,
   
   maxmumNumberOfCustomer :38,
   
   avgNumberofCookiesPerchased :3.7,
   
   resultSimulatedAmountOfCookies :[],
   
   workinghour:    15,
   
   
   
   
   
       simulatedNumberCookies : function (min,max){
   
   
           min = Math.ceil(min);
           max = Math.floor(max);
       
       
       
       for (let i=1;i<=this.workinghour;i++){
       
       simulatedAmountOfCookies =Math.floor(Math.random() * (max - min + 1) + min)*this.avgNumberofCookiesPerchased;
       
   
   
        this.resultSimulatedAmountOfCookies[i-1] =simulatedAmountOfCookies;
       
       }
       
   },
    render : function (){
   
   let locationRef =document.getElementById ('locationRef');
   
   let h2Element =document.createElement('h2');
   
   h2Element.textContent=this.name;
   
   locationRef.appendChild(h2Element);
   
   let ulElement=document.createElement('ul');
   locationRef.appendChild(ulElement);
   
   
   for (let i =1;i<=this.workinghour;i++) {
   
   
       if (i<=7){
       hourTime=i+5;
       amPm="am";}
       else {
       hourTime=i-7;
       amPm="pm";
       }
    
   
   let liElement =document.createElement('li');
   
   
   ulElement.appendChild(liElement);
   
   liElement.textContent= `${hourTime}`+`${amPm}`+ ": "+"  "+this.resultSimulatedAmountOfCookies[i-1]+"  "+"  Cookies";
   
   
   
   
   
   
   
    }
   
   
   
   
   }
   
   
   
   
   
   }
   




   const Paris = {

    name:'Paris ' ,
   
   minimumNumberOfCustomer :20,
   
   maxmumNumberOfCustomer :38,
   
   avgNumberofCookiesPerchased :2.3,
   
   resultSimulatedAmountOfCookies :[],
   
   workinghour:    15,
   
   
   
   
   
       simulatedNumberCookies : function (min,max){
   
   
           min = Math.ceil(min);
           max = Math.floor(max);
       
       
       
       for (let i=1;i<=this.workinghour;i++){
       
       simulatedAmountOfCookies =Math.floor(Math.random() * (max - min + 1) + min)*this.avgNumberofCookiesPerchased;
       
   
   
        this.resultSimulatedAmountOfCookies[i-1] =simulatedAmountOfCookies;
       
       }
       
   },
    render : function (){
   
   let locationRef =document.getElementById ('locationRef');
   
   let h2Element =document.createElement('h2');
   
   h2Element.textContent=this.name;
   
   locationRef.appendChild(h2Element);
   
   let ulElement=document.createElement('ul');
   locationRef.appendChild(ulElement);
   
   
   for (let i =1;i<=this.workinghour;i++) {
   
   
       if (i<=7){
       hourTime=i+5;
       amPm="am";}
       else {
       hourTime=i-7;
       amPm="pm";
       }
    
   
   let liElement =document.createElement('li');
   
   
   ulElement.appendChild(liElement);
   
   liElement.textContent= `${hourTime}`+`${amPm}`+ ": "+"  "+this.resultSimulatedAmountOfCookies[i-1]+"  "+"  Cookies";
   
   
   
   
   
   
   
    }
   
   
   
   
   }
   
   
   
   
   
   }
   





   const Lima = {

    name:'Lima ' ,
   
   minimumNumberOfCustomer :2,
   
   maxmumNumberOfCustomer :16,
   
   avgNumberofCookiesPerchased :4.6,
   
   resultSimulatedAmountOfCookies :[],
   
   workinghour:    15,
   
   
   
   
   
       simulatedNumberCookies : function (min,max){
   
   
           min = Math.ceil(min);
           max = Math.floor(max);
       
       
       
       for (let i=1;i<=this.workinghour;i++){
       
       simulatedAmountOfCookies =Math.floor(Math.random() * (max - min + 1) + min)*this.avgNumberofCookiesPerchased;
       
   
   
        this.resultSimulatedAmountOfCookies[i-1] =simulatedAmountOfCookies;
       
       }
       
   },
    render : function (){
   
   let locationRef =document.getElementById ('locationRef');
   
   let h2Element =document.createElement('h2');
   
   h2Element.textContent=this.name;
   
   locationRef.appendChild(h2Element);
   
   let ulElement=document.createElement('ul');
   locationRef.appendChild(ulElement);
   
   
   for (let i =1;i<=this.workinghour;i++) {
   
   
       if (i<=7){
       hourTime=i+5;
       amPm="am";}
       else {
       hourTime=i-7;
       amPm="pm";
       }
    
   
   let liElement =document.createElement('li');
   
   
   ulElement.appendChild(liElement);
   
   liElement.textContent= `${hourTime}`+`${amPm}`+ ": "+"  "+this.resultSimulatedAmountOfCookies[i-1]+"  "+"  Cookies";
   
   
   
   
   
   
   
    }
   
   
   
   
   }
   
}






Seattle.simulatedNumberCookies(Seattle.minimumNumberOfCustomer,Seattle.maxmumNumberOfCustomer);

Seattle.render();



Tokyo.simulatedNumberCookies(Tokyo.minimumNumberOfCustomer,Tokyo.maxmumNumberOfCustomer);

Tokyo.render();

Dubai.simulatedNumberCookies(Dubai.minimumNumberOfCustomer,Dubai.maxmumNumberOfCustomer);

Dubai.render();


Paris.simulatedNumberCookies(Paris.minimumNumberOfCustomer,Paris.maxmumNumberOfCustomer);

Paris.render();


Lima.simulatedNumberCookies(Lima.minimumNumberOfCustomer,Lima.maxmumNumberOfCustomer);

Lima.render();