let cardText;

Tesseract.recognize(
  './card3.jpg',
  'eng',
//   { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    cardText = text;
    console.log(text.replace(/[\W_]+/g," "));
    // console.log(text.length)
    removeSpaces(text.replace(/[\W_]+/g," "));
})



function removeSpaces(string){
    let startingIndex = 0;
    let currentString =""
    let longestString = "";
    let longestStringLength = 3;
    let currentStringLength = 0;

    if(string[0]=== " "){
        startingIndex = 1;
    }

    for(let i = startingIndex; i< 20; i++){
        if(string[i + 1] != " "){
            currentString += string[i+1];
            currentStringLength ++;
        }else{
            currentString = ""
            currentStringLength = 0;
        }

        if(currentString.length > longestString.length){
            longestString = currentString;
        }
        
    }

    console.log(longestString)
    getCardDetails(longestString)

}

function getCardDetails(name){

    fetch(`http://api.magicthegathering.io/v1/cards?name=${name}`)
        .then(res=> res.json())
        .then(data => console.log(data))
}

getCardDetails("Adanto");