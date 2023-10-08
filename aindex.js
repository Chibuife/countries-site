let loader = document.querySelector('#loader')
const center = document.querySelector('#center')
const lightmode = document.querySelector('.mode');
const body = document.querySelector('body');
const lightDarkState = localStorage.getItem('LightDarkModeState')

// const param = window.location.search.substring(13, window.location.search.length)
const param = localStorage.getItem('country')

const mainCard = (array) => {
    if (array) {
        const content = array.map((country, i) => {
            const currencyObj = country.currencies
            let currency = ''
            for (let key in currencyObj) {
                currency = currencyObj[key].name
            }
            const language = country.languages
            let languag = ''
            for (let key in language) {
                languag = language[key]
            }
            return `  <div class="flag"><img src="${country.flags.svg}" alt="belgiumflag"></div>
               <div class="con-detail">
                   <h1>${country.name.common}</h1>
                   <ul>
                       <li class="list1"><span class="des">Native Name:</span> ${country.name.official}</li>
                       <li class="list1"><span class="des">Population:</span> ${country.population}</li>
                       <li class="list1"><span class="des">Region:</span> ${country.region}</li>
                       <li class="list1"><span class="des">Sub Region:</span> ${country.subregion}</li>
                       <li class="list1"><span class="des">Capital:</span> ${country.capital}</li>
                   </ul>
               </div>
               <div class="prob">
                   <ul>
                       <li><span class="des">Top Level Domain: </span>${country.tld}</li>
                       <li><span class="des">Currencies: </span>${currency}</li>
                       <li><span class="des">Languages: </span>${languag}</li>
                   </ul>
               </div>
               <div class="last">
                   <h4 class="bodCon">Border Countries:</h4>
                   <div class="boxcontainer">
                   <div class="box">${country?.borders?.[0]}</div>
                   <div class="box">${country?.borders?.[1]}</div>
                   <div class="box">${country?.borders?.[2]}</div>
                   </div>
               </div>`
        }).join('')

        center.innerHTML = content
    }
}


const fetchData = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            loader.classList.remove('isFetching')
            loader.classList.add('notFetching')
            data.length > 1 ? mainCard([data[1]]) : mainCard(data)
            console.log(data)
        })
        .catch(error => console.log(error))
}
window.addEventListener('DOMContentLoaded', () => {
    loader.classList.add('isFetching')
    fetchData(param)
    if (lightDarkState === 'dark') {
        return funtion()
    }
})




const funtion = function () {
    body.classList.toggle("darktheme");
    if (body.classList == "darktheme") {
        return localStorage.setItem('LightDarkModeState', 'dark')
    }
    else {
        return localStorage.setItem('LightDarkModeState', 'light')
    }
}



lightmode.addEventListener('click', funtion)
