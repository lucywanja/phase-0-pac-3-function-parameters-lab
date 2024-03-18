// parameter function using string interpolation and return 

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

console.log(introduction("Aki"));
console.log(introduction("Samip"));

// two arguments, a name and a language, and returns a phrase using those arguments

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage("Aki", "Ember.js"));
console.log(introductionWithLanguage("Samip", "React"));

// function that uses an optional parameter
function introductionWithLanguageOptional(name, language = "JavaScript" ) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional("Gracie", ));// Defaults to JavaScript
console.log(introductionWithLanguageOptional("Gracie", "Python"));//specified language where the default value can be overridden with an arguement
