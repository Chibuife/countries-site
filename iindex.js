let loader = document.getElementById('loader')
const cardHolder = document.getElementById("countryCardsHolder")
const lightmode = document.querySelector('.mode');
const body = document.querySelector('body');


const input = document.querySelector('input')


const lightDarkState = localStorage.getItem('LightDarkModeState')

const createCards = (array)=>{
  if(array){
     const cards = array.map((country,i)=>{
          return ` <div class="info" onclick="localStorage.setItem('country','${country.name.common}')">
         <a href=${"aindex.html?countryName=" + country.name.common} class="infoCountry">
             <img src=${country.flags.svg} alt="">
             <h2>${country.name.common}</h2>
             <ul>
                 <li><span class="description" >Population:</span>${country.population}</li>
                 <li><span class="description" >Region:</span>${country.region}</li>
                 <li><span class="description" >Capital:</span>${country.capital}</li>
             </ul>
         </a>
     </div>`
     }).join('')
     cardHolder.innerHTML = cards
  }else{
     return null
  }
}
const fetchData =(search,type)=>{
     fetch(`https://restcountries.com/v3.1/${search ? `name/${search}`: type ? `region/${type}`:'all'}`)
     .then(res => {
          return res.json()
     })
     .then(data => {
          loader.classList.remove('isFetching')
          cardHolder.classList.remove('notFetching')
          loader.classList.add('notFetching')
          createCards(data)
     })
     .catch(error => console.log('error'))  
}

const handleChange = (e)=> {
     const searchValue= e.target.value
     loader.classList.remove('notFetching')
     loader.classList.add('isFetching')
     cardHolder.classList.add('notFetching') 
     fetchData(searchValue === '' ? null : searchValue)
}



//todo get inputfield
const searchInput = document.getElementById("countrysearchparams")
searchInput.addEventListener('change',handleChange)
window.addEventListener('DOMContentLoaded', ()=>{
     loader.classList.add('isFetching')
     fetchData()
     if(lightDarkState === 'dark'){  
          return funtion()  
     }
     
})




//try
const option = document.querySelector('#regionoption')
option.addEventListener('change',(e)=>{
  const value = e.target.value
  if(value === 'all') fetchData()
  loader.classList.remove('notFetching')
  loader.classList.add('isFetching')
   cardHolder.classList.add('notFetching')
   fetchData(null,value)
})

const funtion = function(){
     body.classList.toggle("darktheme");
    if ( body.classList =="darktheme") {  
        return localStorage.setItem('LightDarkModeState','dark')
     }
     else{
          return localStorage.setItem('LightDarkModeState','light')
     }
 } 
lightmode.addEventListener('click', funtion)