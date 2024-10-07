
const jmeno = prompt("Zadej jmeno");
const vek = Number(prompt("Zadej vek"));

document.body.innerHTML = "<p>" + jmeno + ", " + "věk: " + vek + "</p>"

/* OKSANY RESENI
const age = prompt('How old are you?', '25');
const userName = prompt("What's your name?");
const surName = prompt("What's your surname?");
// Květoslav Voňavý, věk: 67
document.body.innerHTML = `<p>${userName} ${surName}, age: ${age}</p>`;
document.body.innerHTML +=
    '<p>' + userName + ' ' + surName + ', age: ' + age + '</p>';
    */