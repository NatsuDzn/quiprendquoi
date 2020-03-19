if (typeof party !== 'undefined') {
  localStorage.setItem(location.href, document.title);
}

// Items count
var itemsLenght = document.querySelectorAll('.newParty__items--container').length;
document.getElementById('count').innerHTML = 'Liste des items (' + itemsLenght + ')';