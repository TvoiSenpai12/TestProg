document.querySelector('#popup__filter').oninput = () => {
    let val = this.value.trim().toUpperCase();
    let listItems = document.querySelectorAll('.popup__list li');
    
    if (val != '') {
        listItems.forEach((elem) => {
            (elem.innerText.toUpperCase().search(val) == -1) ? elem.classList.add('hide') : elem.classList.remove('hide');
        });
    }
    else {
        listItems.forEach(function(elem) {
            elem.classList.remove('hide')
        });
    }
};