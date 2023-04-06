const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    //displayProphets(data.prophets);
  }

  getFruitData();