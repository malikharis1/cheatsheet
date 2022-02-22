// JavaScript code
function search_code() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('langcode');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}
let getE = document.getElementById('hello');
let onSearch = document.getElementById('searchbar');
onSearch.addEventListener('click', function (e) {
    getE.className = 'new';
    e.preventDefault()
});
