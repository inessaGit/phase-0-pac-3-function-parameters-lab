/*
Instructions: Define a function called introduction that defines a parameter, 
name, and returns the phrase: "Hi, my name is ${name}."
*/

function introduction (name){
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name,language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introduction1 (name){
    return "Hi, my name is "+ name+".";}

function introductionWithLanguage1(name, language){
    return "Hi, my name is "+ name+" and I am learning to program in "+language +"."
}

function introductionWithLanguageOptional1(name,language="JavaScript"){
    return "Hi, my name is "+ name+" and I am learning to program in "+language +"."
}

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);//using backticks
    console.log('The two values are ${value1} and ${value2}.');//using single quote
    console.log("The two values are ${value1} and ${value2}.");//using double quote

// ` around a series of characters, which are interpreted as a string literal, 
//but any expressions of the form ${..} are parsed and evaluated inline immediately.
  }
  logTwoValues(2,4);

//console.log(introduction("ines"));
//console.log(introductionWithLanguage("ines", "ruby", "Javascript"));
//console.log(introductionWithLanguageOptional("ines"));