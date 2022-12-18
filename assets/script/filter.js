document.querySelector('#popup__filter').oninput = function () {
    let val = this.value.trim().toUpperCase();
    let listItems = document.querySelectorAll('.popup__list li');
    if (val != '') {
        listItems.forEach(function(elem) {
            if (elem.innerText.toUpperCase().search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        listItems.forEach(function(elem) {
            elem.classList.remove('hide')
        });
    }
};