async function getSynonyms() {
    let query = document.getElementById('inputField').value;
    let url = `https://www.openthesaurus.de/synonyme/search?q=${query}&format=application/json`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let synsets = responseAsJson['synsets'];
    renderSynsets(synsets);
}

function renderSynsets(synsets) {
    let container = document.getElementById('container');
    container.innerHTML = `<div>Es wurden <b>${synsets.length}</b> Synonym-Sets geladen.</div>`;

    for (let i = 0; i < synsets.length; i++) {
        let synset = synsets[i];
        container.innerHTML += `<h2>Synonym-Set mit ID <b>${synset['id']}</b></h2>`;
        let terms = synset['terms'];
        for (let j = 0; j < terms.length; j++) {
            let term = terms[j];
            container.innerHTML += `<div>${term['term']}<div>`;
        }
    }
}

