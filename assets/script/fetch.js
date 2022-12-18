const requestURL = 'http://testprog/russian-cities.json';

async function test() {
    let response = await fetch(requestURL);
    
    let citys = await response.json();
    
    citys.forEach(function(index) {
        let emptyString = index['name'] + '';
        document.querySelector('.test').innerHTML += `<li>${emptyString}</li>`;
    });
}

test()