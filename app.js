var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


var serverURL="https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text){
    return serverURL + "?" +"text=" + text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something went wrong with server. Try again after sometime !!")
}

function clickHandler() {
    var inputText=txtInput.value; //here i am taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputDiv.innerText= translatedText; // showing output
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)

