
const button = document.getElementById('generateBtn');

const indexPicker = arr => {

    let n = arr.length;
    const index = Math.floor(Math.random()*n)
    return index
}
  
const generateSentence = (obj) => {
    const rawSentence = [];
    for (arr in sentenceParts) {
      let part = obj[arr][indexPicker(obj[arr])];
      rawSentence.push(part);
    }
  
    const sentenceText = rawSentence.join(" ");
    const sentenceDisplay = document.getElementById("sentenceDisplay");
    sentenceDisplay.innerHTML = `<h2>${sentenceText}</h2>`;
    sentenceDisplay.style.display = 'block';
  };
  
  

button.addEventListener('click', () => generateSentence(sentenceParts));

