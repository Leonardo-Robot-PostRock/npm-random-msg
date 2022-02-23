const messages = [
    "Stella",
    "Angel",
    "Marcelo",
    "Daniela",
    "Franco",
    "Diego",
    "Jazmin",
    "Leticia",
    "Fernando",
    "Martina",
    "Gabriel"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message);
}

module.exports = { randomMsg };
