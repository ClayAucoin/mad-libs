onEvent("myForm", "submit", function (event) {
    event.preventDefault();
    buildLib();
});

onEvent("resetButton", "click", resetLib);

function buildLib() {
    //event.preventDefault();

    const pluralNounValue = document.getElementById("inputPluralNoun").value;
    const noun1Value = document.getElementById("inputNoun1").value;
    const noun2Value = document.getElementById("inputNoun2").value;
    const songValue = document.getElementById("inputSong").value;
    const verbValue = document.getElementById("inputVerb").value;

    // result
    resultDiv.innerHTML = "Learning to drive is a tricky process. There are a few rules you must follow.<br><br>"+
    "1. Keep two "+ pluralNounValue +" on the steering wheel at all times.<br><br>"+
    "2. Step on the "+ noun1Value +" to speed up and the "+ noun2Value +" to slow down.<br><br>"+
    "3. Your parents will just LOVE it if you play &quot;"+ songValue +"&quot; on the radio.<br><br>"+
    "4. Make sure to honk your horn when you see "+ verbValue +" on a street sign.";

    //resultDiv.textContent = pluralNounValue + " " + noun1Value + " " + noun2Value + " " + songValue + " " + verbValue
    //resultContainer.classList.remove("d-none");
    showElement("resultContainer");

    // hide form
    hideElement("formContainer");
}

function onEvent(id, event, handler) {
    var el = document.getElementById(id);
    if (!el) {
        console.warn("onEvent: Element with id '" + id + "' not found.");
        return;
    }
    el.addEventListener(event, function (e) { handler(e); });

    console.info("onEvent: Listening for '" + event + "' on #" + id);
}

function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add("d-none");
    }
}

function showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove("d-none");
    }
}

function resetLib() {
  document.getElementById("myForm").reset();
  hideElement("resultContainer");
  showElement("formContainer");
}
