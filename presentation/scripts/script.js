const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

async function getMemberData() {
  const link = await fetch(url);
  const data = await link.json();
  console.table(data.members);
  displayMembers(data.members);
}

getMemberData();


//-----------------------------------------------
 const displayMembers = (members) => {
   const tables = document.querySelector('body'); // select the output container element

   members.forEach((i) => {
     let section = document.createElement('section');
     let p = document.createElement('p');

     p.textContent = `${i.name} - ${i.age} (${i.secretIdentity})`;


     section.appendChild(p);  
     tables.appendChild(section);
  })
 }

console.log(JSON.stringify({"list" : [{"value1" : 1, "value2" : 2, "value3" : 3}]}));
