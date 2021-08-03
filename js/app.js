


let locationRef=document.getElementById('locationRef');

// const Seattle= {

// name:'Seattle',    

// minimumNumberOfCustomer : 23,
// maxmumNumberOfCustomer : 65,
// avgNumberofCookiesPerchased :6.3,
// Total:0,
// resultSimulatedAmountOfCookies :[],
// workinghour :15,



// simulatedNumberCookies : function (min,max){


//     min = Math.ceil(min);
//     max = Math.floor(max);



// for (let i=1;i<=this.workinghour;i++){

// simulatedAmountOfCookies =Math.floor(Math.random() * (max - min + 1) + min)*this.avgNumberofCookiesPerchased;

//  this.resultSimulatedAmountOfCookies[i-1] =simulatedAmountOfCookies;

//  this.Total=this.resultSimulatedAmountOfCookies[i-1]+this.Total;


// }



// },





// render :function() {



// let h2Element =document.createElement('h2');
// locationRef.appendChild(h2Element);
// h2Element.textContent=this.name;


//     let ulElement=document.createElement('ul');
//     locationRef.appendChild(ulElement);
    
//     for (let i =1;i<=this.workinghour+1;i++) {


//         if (i<=7){
//         hourTime=i+5;
//         amPm="am";}
//         else {
//         hourTime=i-7;
//         amPm="pm";
//         }
    
// let liElement=document.createElement('li');
// ulElement.appendChild(liElement);
// if (i<=15)
// liElement.textContent= `${hourTime}`+`${amPm}`+ ": "+"  "+this.resultSimulatedAmountOfCookies[i-1]+"  "+"  Cookies";
// else
// liElement.textContent= 'Total  :'+ `${this.Total}` +"  Cookies";




// }



// }




// }


function Location (name1,minimumNumberOfCustomer1, maxmumNumberOfCustomer1,avgNumberofCookiesPerchased1) {
   
    this.name=name1;   
    this.minimumNumberOfCustomer = minimumNumberOfCustomer1;
    this.maxmumNumberOfCustomer = maxmumNumberOfCustomer1;
    this.avgNumberofCookiesPerchased =avgNumberofCookiesPerchased1,
    this.Total=0;
    this.resultSimulatedAmountOfCookies=[];
    this.workinghour =15;
    this.Total_location =0;
    this.alldata =0;


}

timeHour =["Location","6 am","7 am","8 am","9 am","10 am","11 am","12 am","1 pm","2 pm","3 pm","4 pm","5 pm"," 6 pm","7 pm","8 pm"," Daily Location Total"];

let table1=document.createElement('table');
locationRef.appendChild(table1);

function header  ()  {

   
    
    
        let tr1=document.createElement("tr");
        table1.appendChild(tr1);
    
    for (let k=1 ;k<=17;k++){
       
    
        let th1=document.createElement("th");
        tr1.appendChild(th1);
        th1.textContent=timeHour[k-1];
    
    
    }
    
    }
    
    header (timeHour);







    


Location.prototype.totalCookies=function (){


for (let i=1;i<this.resultSimulatedAmountOfCookies.length;i++){



this.Total_location=this.Total_location+this.resultSimulatedAmountOfCookies[i-1];



}




    }



Location.prototype.render =function() {


    
    // let table1=document.createElement('table');
    // locationRef.appendChild(table1);
        
    
    for (let i =1; i<=1;i++) {
    
        let tr1=document.createElement("tr");
        table1.appendChild(tr1);

       



          
     let td1=document.createElement("td");
     tr1.appendChild(td1);
     td1.textContent=this.name;

    
    for(kk =1;kk<=15;kk++) {
     
     
     
    
    

        let td2=document.createElement("td");
        tr1.appendChild(td2);
        td2.textContent=this.resultSimulatedAmountOfCookies[kk-1];
 
     
        
    }
        



    let td3=document.createElement("td");
    tr1.appendChild(td3);
    td3.textContent=this.Total_location;
    }
    
    
   
    
    
    
    
    
    
    
    
    };
    

    let Result_All=[];
    ResultAll =function (){


// Seattle.ResultAll =Seattle.resultSimulatedAmountOfCookies;

// Tokyo.ResultAll =Tokyo.resultSimulatedAmountOfCookies;

// lan.ResultAll =Tokyo.resultSimulatedAmountOfCookies;

for (kkk=1;kkk<=15;kkk++) {


 Result_All [kkk]= Seattle.resultSimulatedAmountOfCookies[kkk]+Tokyo.resultSimulatedAmountOfCookies[kkk]+Dubai.resultSimulatedAmountOfCookies[kkk]
+Paris.resultSimulatedAmountOfCookies[kkk]+Lima.resultSimulatedAmountOfCookies[kkk];




return Result_All;


}











    }



Location.prototype.simulatedNumberCookies = function() {



    min = Math.ceil(this.minimumNumberOfCustomer);
    max = Math.floor(this.maxmumNumberOfCustomer);
   
   
   
   for (let i=1;i<=this.workinghour+1;i++){
   
   simulatedAmountOfCookies =Math.floor(Math.random() * (max - min + 1) + min)*this.avgNumberofCookiesPerchased;
   
    this.resultSimulatedAmountOfCookies[i-1] =Math.ceil (simulatedAmountOfCookies);
   
    this.Total=this.resultSimulatedAmountOfCookies[i-1]+this.Total;
   
   
   }
   
      
     };







     

     









arrayName=["Seattle","Tokyo","Dubai","Paris","Lima"];


let Seattle= new Location("Seattle",23,65,6.3)

Seattle.simulatedNumberCookies();
Seattle.totalCookies();
Seattle.render();
console.log(Seattle.resultSimulatedAmountOfCookies);





let Tokyo= new Location("Tokyo",3,24,1.2)

Tokyo.simulatedNumberCookies();
Tokyo.totalCookies();
Tokyo.render();


let Dubai= new Location("Dubai",11,38,3.7)
Dubai.simulatedNumberCookies();
Dubai.totalCookies();
Dubai.render();


let Paris= new Location("Paris",20,38,2.3)
Paris.simulatedNumberCookies();
Paris.totalCookies();
Paris.render();

let Lima= new Location("Lima",2,16,4.6)
Lima.simulatedNumberCookies();
Lima.totalCookies();
Lima.render();



function footer () {
        
    let Result_all_all=0;


    
        let tr1=document.createElement("tr");
        table1.appendChild(tr1);
        

        let th1=document.createElement("th");
        tr1.appendChild(th1);
        th1.textContent="Total";

        for (let k=1 ;k<=15;k++){
        
            Result_All [k-1]= Seattle.resultSimulatedAmountOfCookies[k-1]+Tokyo.resultSimulatedAmountOfCookies[k-1]+Dubai.resultSimulatedAmountOfCookies[k-1]+Paris.resultSimulatedAmountOfCookies[k-1]+Lima.resultSimulatedAmountOfCookies[k-1];
            Result_all_all=Result_all_all+Result_All [k-1];
            //console.log(Result_All[k-1]);
            // console.log(Seattle.resultSimulatedAmountOfCookies[k-1]);
            //console.log(Tokyo.resultSimulatedAmountOfCookies[k-1]);

        let th2=document.createElement("th");
        tr1.appendChild(th2);
        th2.textContent=Result_All[k-1];


        }
        

        let th3=document.createElement("th");
        tr1.appendChild(th3);
        th3.textContent=Result_all_all;
        



        }
        
        
        
        
        
         footer ();