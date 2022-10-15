// declaring variables for context
let hText = document.getElementById("wordHead");
let pText = document.getElementById("pText");

// declaring variables for getting the word function
let btn = document.getElementById("btn");
let resultObject;

// async function for the value we search for
const getWord = async function () {
    try {
        let sWord = document.getElementById("search").value;
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${sWord}`;
        let response = await fetch(url);
        resultObject = await response.json();
        pText.innerText = resultObject[0].meanings[0].definitions[0].definition;
        hText.innerText = resultObject[0].word;
    } catch (error) {
        console.log(error);
    }
};

btn.addEventListener("click", getWord);