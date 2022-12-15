const API_URL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ba850db44df349a3cf76159de6de9703"
const SEARCH_URL ="https://api.themoviedb.org/3/search/movie?api_key=ba850db44df349a3cf76159de6de9703="
const IMAGE_PATH ="https://image.tdmb.org/t/p/w703";

const form=document.getElementById('form')
const search=document.getElementById('search')
const main=document.getElementById('main')

getMovies(API_URL)
async function getMovies(url){
const res = await fetch(url)
const data = await res.json()
displayMovies(data.results)
console.log(data.results);
}

function displayMovies(movies){
    main.innerHTML=''
    movies.forEach((movie)=>{
    const{title,poster_path,voter_average,overview,vote_count}=movie 
    const moviesElement=document.createElement('div')
    moviesElement.classList.add('movie')
    moviesElement.innerHTML=`
   <img src'${IMAGE_PATH + poster_path} alt="${title}"/>
   <div class='movie-info'>
   <h3>${title}</h3>
   <span class="${getClassesByRating(voter_average)}"> ${voter_average}</span>
   <div class='overview'>
   <h3>overview</h3>
   ${overview}
   </div>
   </div>
    `
    main.appendChild(moviesElement) 
    })
}
 function getClassesByRating(rating){
    if(rating>=8){
return'green'
    }else if(rating>=5){
        return'orange'
    }else {
        return 'red'
    }
 }
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const searchValue=search.value
    if(searchValue && searchValue !==''){
        getMovies(SEARCH_URL+searchValue)
        searchValue=''
    }else {
        window.location.reload()
    }
})