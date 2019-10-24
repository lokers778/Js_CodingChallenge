const data='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';



const cities=[]

fetch(data)
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
    .then(res=>cities.push(...res))
    .then(()=>{console.log(cities)})


const start=(wordToMatch,cities)=>{
    return cities.filter(place=>{
      const regex =new RegExp(wordToMatch, "gi")
       return  place.city.match(regex) || place.state.match(regex)
    });
}

function displayMatches(){
   const matchArray= start(this.value,cities)
    console.log(matchArray)
    const html=matchArray.map(place=>{
        const regex=new RegExp(this.value, "gi");
        const cityName=place.city.replace(regex, `<span class="h1">${this.value}</span>`)
        const stateName=place.state.replace(regex, `<span class="h1">${this.value}</span>`)
        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
        </li>
        `
    }).join("")
    suggestions.innerHTML=html
}

const form=document.querySelector("form")
const searchInput =document.querySelector(".search")
const suggestions =document.querySelector(".suggestions")
searchInput.addEventListener("change",displayMatches)