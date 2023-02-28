/* -----Get date for hidden message----- */
const d = new Date().getDay();
//console.log(d); //-----troubleshooting
if (d == 1 || d == 2){
    document.getElementById('meeting').hidden = false;
}
else {
    document.getElementById('meeting').hidden = true;
};


// -----Wind Chill Script-----
const tempHTML = document.getElementById('temp').innerText
const windHTML = document.getElementById('wind').innerText

temp = parseInt(tempHTML)
wind = parseInt(windHTML)

if(temp <= 50 && wind > 3){
    chill = Math.round(35.74 + ( 0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16)));
    document.querySelector('#chill').innerHTML = chill;
}
else
{
    console.log("N/A")
}