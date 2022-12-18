const requestURL = 'http://testprog/russian-cities.json';

async function datacCitys() {
    let response = await fetch(requestURL);
    
    let citys = await response.json();
    
    citys.forEach((index) => {
        let emptyString = index['name'] + '';
        document.querySelector('.popup__list').innerHTML += `<li>${emptyString}</li>`;
    });
}

datacCitys()