async function getSynonyms() {
    let query = document.getElementById('inputField').value;
    let url = `https://www.openthesaurus.de/synonyme/search?q=${query}&format=application/json`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let synsets = responseAsJson['synsets'];
    renderSynsets(synsets);
}

function renderSynsets(synsets) {
    let mainSynonyms = document.getElementById('mainSynonyms');
    let partialWord = document.getElementById('partialWord');
let synset = synsets[0];
      mainSynonyms.innerHTML = `<b>Synonym-Set mit ID <b>${synset['id']}</b></b>`;
        let terms = synset['terms'];
        for (let j = 0; j < terms.length; j++) {
            let term = terms[j];
            mainSynonyms.innerHTML += `<div>${term['term']}<div>`;
    }

    synset = synsets[1];
    partialWord.innerHTML = `<b>Synonym-Set mit ID <b>${synset['id']}</b></b>`;
      for (let j = 0; j < terms.length; j++) {
          let term = terms[j];
          partialWord.innerHTML += `<div>${term['term']}<div>`;
  }
  if()

}

