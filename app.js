let baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
let container = document.querySelector('.container');
for(let n = 1 ; n<=151; n++){
    const divisionElement = document.createElement('div');
    const spanElement = document.createElement('span');
    spanElement.innerHTML = `#${n}`
    const pokemon = document.createElement('img');
    pokemon.src = `${baseURL}${n}.png`;
    divisionElement.classList.add('flexview')
    divisionElement.appendChild(pokemon);
    divisionElement.appendChild(spanElement);
    container.appendChild(divisionElement)
}