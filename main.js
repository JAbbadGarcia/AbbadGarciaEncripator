const encryptfn = () => {
  var msg = document.getElementById("text-area-input").value.toLowerCase();
  if (msg !== "") {
    msgFilter = msg.replace(/[^a-zA-Z 0-9.]+/g, " ");
    var textEncrypt = msgFilter
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("o", "ober")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat");
    document.getElementById("text-area-output").innerHTML = textEncrypt;
    document.getElementById("no-message").style = "display:none";
    document.getElementById("enter-message").style = "display:none";
    document.getElementById("copy").style = "display:inline";
    document.getElementById("text-area-input").value = "";
  } else {
    alert("Ingresa texto para continuar");
    document.getElementById("text-area-input").focus();
    document.getElementById("copy").style = "display:none";
    document.getElementById("no-message").style = "display:inline-block";
    document.getElementById("enter-message").style = "display:inline-block";
  }
};
const decryptfn = () => {
  var msg = document.getElementById("text-area-input").value.toLowerCase();
  if (msg !== "") {
    msgFilter = msg.replace(/[^a-zA-Z 0-9.]+/g, " ");
    var textDecrypt = msgFilter
      .toLowerCase()
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ai", "a")
      .replaceAll("ufat", "u");
    document.getElementById("text-area-output").innerHTML = textDecrypt;
    document.getElementById("no-message").style = "display:none";
    document.getElementById("enter-message").style = "display:none";
    document.getElementById("copy").style = "display:inline";
    document.getElementById("text-area-input").value = "";
  } else {
    alert("Ingresa texto para continuar");
    document.getElementById("text-area-input").focus();
    document.getElementById("copy").style = "display:none";
    document.getElementById("no-message").style = "display:inline-block";
    document.getElementById("enter-message").style = "display:inline-block";
    document.getElementById("text-area-output").value = "";
  }
};
const copytext = () => {
  var copy = document.getElementById("text-area-output");
  navigator.clipboard.writeText(copy.innerHTML);
};
