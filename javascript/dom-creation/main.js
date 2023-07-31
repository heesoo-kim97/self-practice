/*

function renderPokemon(placeValue) {
var $columnThird = document.creatElement('div')
-> creates div tag
$columnThird.setAttribute('class', 'column-third');
-> creates attribute class with value column-third or div from varaible $columnThird

var $pokemoncard = document.createElement('div');
$pokemoncard.setAttribute('class', 'pokemon-card');
$columnThird.appendChild($pokemonCard);
-> setting div for $pokemoncard as the child of div for $columnThird

return $columnThird;
}

var $row = document.querySelector('.row');

for (var i = 0; i < array.length; i++) {
    $row.appendchild(renderPokemon([array[i]]));;
}

in this case array[i] is an object with parameters

*/