var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");



function clickEventHandler() {
    console.log("Clicked !!")
    console.log("input", txtInput.value);
    outputDiv.innerText="hello "+txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler)
