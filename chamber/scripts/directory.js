//-----JSON-----
const file = 'json/data.json'

async function getFileData() {
    const response = await fetch(file);
        const data = await response.json();
        //console.table(data.companies)
        displayGrid(data.companies);
        displayList(data.companies);
    };

getFileData();


//-----Directory-----
const displayGrid = (companies) => {
    const cards = document.querySelector('div.cards')

    companies.forEach((company) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let logo = document.createElement('img');
        let h3 = document.createElement('h3');

        h2.textContent = company.name;
        p1.textContent = company.address;
        p2.textContent =   `Phone: ${company.phone}`;
        p3.textContent = company.website;
        h3.textContent = `Member Level: ${company.level}`;

        logo.setAttribute('alt', `${company.name} logo`);
        logo.setAttribute('src', `images/${company.logo}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('height', 250)
        logo.setAttribute('width', 250)

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(logo);
        card.appendChild(h3);

        cards.appendChild(card);
    
    })

}

const displayList = (companies) => {
    const list = document.querySelector('div.list')

    companies.forEach((company) => {
        let item = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let link = document.createElement('a');


        h2.textContent = company.name;
        p1.textContent = company.address;
        p2.textContent =   company.phone;

        link.textContent = "Visit";
        link.title = "Website";
        link.href = "#"

        

        item.appendChild(h2);
        item.appendChild(p1);
        item.appendChild(p2);
        item.appendChild(link);


    list.appendChild(item);
    
    })

}

//-----Buttons-----
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const cards = document.querySelector("div#card-view")
const list = document.querySelector("div#list-view")

gridButton.addEventListener('click', () => {
    cards.hidden=false;
    list.hidden=true;
})


listButton.addEventListener('click', () => {
    cards.hidden=true;
    list.hidden=false;
    
})