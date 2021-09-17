const { match } = require('assert');
const { debug } = require('console');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})



var matchTxt;

var matchNumbers = []; //array to hold matches
var results =[];
var result;

var counter;
var percentage;
var p;



  var firstName;
  var secondName;
  var nameT1;
  var nameT2;

  /*
  readline.question(`Please input the first name. `, firstName => {
    console.log(`Character 1 : ${firstName}`);

    readline.question(`Please input the second name. `, secondName => {
      console.log(`Character 2 : ${secondName}`);
      isNameValid(firstName, secondName);
    })
  
  })

  */
 
 

 

function isNameValid(name1, name2){ //ensures input accepts alphabetical characters only.

  if(/[^a-zA-Z]/.test(name1) && /[^a-zA-Z]/.test(name2)){   //Both incorrect
    console.log("Invalid Input! Only alphabetical characters are accepted."); 
    readline.question(`Please input the first name. `, name1 => {
      console.log(`Character 1 : ${name1}`)
        readline.question(`Please input the second name. `, name2 => {
      console.log(`Character 1 : ${name2}`)
      NameMatch(name1, name2);
    })
 
    })

  }
  else if(/[^a-zA-Z]/.test(name1)){   //First incorrect
    console.log("Invalid Input! Only alphabetical characters are accepted."); 

    readline.question(`Please input the first name. `, name1 => {
      console.log(`Character 1 : ${name1}`)
      NameMatch(name1, name2);
    })
  }
  else if(/[^a-zA-Z]/.test(name2)){   //Second incorrect
    console.log("Invalid Input! Only alphabetical characters are accepted.");
    readline.question(`Please input the second name. `, name2 => {
      console.log(`Character 1 : ${name2}`)
      NameMatch(name1, name2);
    })
  }
  else if(name1 == null && name2 == null){   //both names null
    console.log("No input detected. Please enter a valid name for both entries.");
    readline.question(`Please input the first name. `, name1 => {
      console.log(`Character 1 : ${name1}`)

      readline.question(`Please input the second name. `, name2 => {
        console.log(`Character 2 : ${name2}`)
        NameMatch(name1, name2);
      })

    })
  }
  else if(name1 == null){   //name1 null
    
    console.log("No input detected. Please enter a valid name.");
    readline.question(`Please input the first name. `, name1 => {
      console.log(`Character 1 : ${name1}`)
      NameMatch(name1, name2);
    })

   } 
   else if(name2 == null){ //name2 null
    
    console.log("No input detected. Please enter a valid name.");
    readline.question(`Please input the second name. `, name2 => {
      console.log(`Character 2 : ${name2}`)
      NameMatch(name1, name2);
    })

   }  
   else{
    NameMatch(name1, name2);
  
   }
  
}

function NameMatch(name1, name2){


  let  matchTxt = name1 + " matches " + name2;;
  var matchTxtLC = matchTxt.toLocaleLowerCase();
    
   countLetters(matchTxtLC);

   var percent = percentage;

   nameT1 = name1.charAt(0).toUpperCase() + name1.slice(1);
   nameT2 = name2.charAt(0).toUpperCase() + name2.slice(1);
   
   if(parseInt(percent) >= 80 ){
    return result = nameT1 + " matches " + nameT2 + " " + percent +", good match.";
   

   }
   else{
    return result = nameT1 + " matches " + nameT2 + " " + percent+".";
 
   }
  
   var score = percent;
   results.push(score);
   results.sort().reverse();

    

   

 readline.close()

}


function countLetters  (word, nameA, nameB) {
	var count = [];


  var counts = {};


  var ch, index, len, count;
  

  for (index = 0, len = word.length; index < len; ++index) {
    
      ch = word.charAt(index); 
  
     if(ch != " "){
      count = counts[ch];

      counts[ch] = count ? count + 1 : 1;
     }
      
  }

count = 0;
  for (ch in counts) {
    matchNumbers[count] = counts[ch];
    count++;
   // console.log(counts[ch]);
}



 p =  toString(PercentageCalc(matchNumbers));


	return p;
};



function PercentageCalc(numArray){

  var tempArr2 = [];
  var newArray =[];
  var limit = numArray.length;
    for(var i = 0; i <limit; i++){
     if(numArray.length>1)
     {
      newArray[i] = numArray[0] + numArray[numArray.length-1];
     }
    else if(numArray.length == 1){
      newArray[i] = numArray[0];
    }
      if(numArray.length != 0){
     //   console.log(numArray);
      }
       
    //  console.log(newArray);
      let first = numArray.shift();
     let last = numArray.pop();    

    }

   
 
  numArray = newArray; 
 
  if(numArray.length != 2){
   PercentageCalc(numArray); 
  }
  else{
    if(numArray[0] > 9 && numArray[1] > 9){
  
     // var tempArr2 = [];
    var tempInt = numArray[0];  //first number
     tempInt = (""+tempInt).split("");
     
    var tempArr = Array.from(tempInt);
      tempArr2[0] = parseInt(tempArr[0]);
      tempArr2[1] = parseInt(tempArr[1]);



    tempInt = numArray[1];  //second number
    tempInt = (""+tempInt).split("");

    var tempArr = Array.from(tempInt);
    tempArr2[2] = parseInt(tempArr[0]);
    tempArr2[3] = parseInt(tempArr[1]);

    tempArr2[0] = tempArr2[0] + tempArr2[3];
    tempArr2[1] = tempArr2[0] + tempArr2[2];


    numArray = tempArr2;
    //console.log(tempArr2);
    numArray =PercentageCalc(numArray); 

    }
    else if(numArray[0] > 9){
      
    var  tempInt = numArray[0];

    tempInt = (""+tempInt).split("");
    var tempArr = Array.from(tempInt);
    tempArr[2] = numArray[1];
    
    tempArr2[0] = parseInt(tempArr[0]) + parseInt(tempArr[2]);
    tempArr2[1] = parseInt(tempArr[1]);

     percentage = tempArr2[0] +"" + tempArr2[1] + "%";
     
     
    }
    else if(numArray[1] > 9){
     
     var tempInt = numArray[1];
      tempInt = (""+tempInt).split("");

      var tempArr = Array.from(tempInt);
      tempArr[2] = numArray[0];
      
      tempArr2[0] = parseInt(tempArr[0]) + parseInt(tempArr[2]);
      tempArr2[1] = parseInt(tempArr[1]);

      if(tempArr2[0] == 10){
       var newTemp = tempArr2[0];
        newTemp = (""+newTemp).split(""); 
       var tempArr3 = Array.from(tempInt);
      tempArr3[2] = tempArr2[1];
     
      var tempArr4=[];
      tempArr4[0] = parseInt(tempArr3[0]) + parseInt(tempArr3[2]);
      tempArr4[1] = parseInt(tempArr3[1]);

        tempArr2 = tempArr4;

      }
      
       percentage = tempArr2[0] +"" + tempArr2[1] + "%";

    }
    else{
      
      percentage = numArray[0] +"" + numArray[1]+ "%";
    }
    
    
  }
  
 
 // return percentage;
}
  

const csv = require('csv-parser');
const fs = require('fs');

GroupNames();

var namesM =[];
var namesF =[];

var data = "";

function getNames(nameCsv) {
  return `${nameCsv}`;
}


function GroupNames(){
  fs.createReadStream(__dirname+'/names.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    if(row.Gender == "f"){
    var newName = getNames(row.FirstName);
    namesF.push(newName);
  
    }
    else if(row.Gender == "m"){
      var newName = getNames(row.FirstName);
      namesM.push(newName);
     
  }
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    console.log("List of female: " + namesF);
    console.log("List of male: " + namesM);

    for(var i = 0; i < namesM.length; i++){
      for(var k = 0; k <namesF.length; k++){
       var score = NameMatch(namesM[i], namesF[k]);
       
       
      data += score + "\n";
     
      }
    }

    console.log(results);
    fs.writeFile('output.txt', data, (err) => { 
      
      // In case of a error throw err. 
      if (err) throw err; 
  })
   
  });


}

