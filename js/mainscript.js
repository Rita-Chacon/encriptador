const txtInput = document.querySelector("#text");
const outputtxt = document.querySelector("#outputtxt");

const btnEnc = document.querySelector("#encrypt");
const btnDec = document.querySelector("#decrypt");
const btnCopytoclipboard = document.querySelector("#copytoclipboard");

function copytoclipboard () {
  let textEncrypt = outputtxt.value;
  navigator.clipboard.writeText(textEncrypt);
}

function fnencrypt (){
  let text = txtInput.value.toLowerCase();
  let textEncrypt = text
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");

  document.getElementById("imghidden").style.visibility = "hidden";
  document.getElementById("copytoclipboard").style.visibility = "visible";

  outputtxt.value = textEncrypt;

  document.getElementById("text").value = '';

}

function fndecrypt (){
  let textEncrypt = txtInput.value.toLowerCase();
  let text = textEncrypt
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");

  document.getElementById("imghidden").style.visibility = "hidden";
  document.getElementById("copytoclipboard").style.visibility = "visible";

  outputtxt.value = text;

  document.getElementById("text").value = '';

}



btnEnc.onclick = fnencrypt;
btnDec.onclick = fndecrypt;

btnCopytoclipboard.onclick = copytoclipboard;



