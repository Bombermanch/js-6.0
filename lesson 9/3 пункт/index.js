let input = document.getElementById('age');
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

let show = showUser.bind(input);
show('Антон', 'Иванов');



