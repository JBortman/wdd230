//-----JSON-----
const file = 'json/data.json'

async function getFileData() {
    const response = await fetch(file);
        const data = await response.json();
        //console.table(data.companies)
        displayInfo(data.companies);
    };

getFileData();

const displayInfo = (companies) => {
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
        logo.setAttribute('src', 'images/sweetroll-placeholder.webp');
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('height', 200)
        logo.setAttribute('width', 200)

        

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(logo);
        card.appendChild(h3);

        cards.appendChild(card);
    
    })

}

//-----Button-----
const button = querySelector("#direcoty-button")

button.addEventListener("click" )
