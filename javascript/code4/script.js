const myresults = document.getElementById('results')
const button = document.getElementById('btn');
const input = document.getElementById('myinput');
    button.addEventListener('click',getmovies);

function getmovies()
{
    const moviename = input.value;
    fetch(`https://www.omdbapi.com/?s=${moviename}&apikey=d29b9d79`)
        .then(function (res){return res.json() })
        .then(function (data){displayData(data.Search) })
        .catch(function (err){console.log(err)})
}
function displayData(data)
{
    myresults.textContent=' '
    data.forEach(function (val)
    {
        const moviediv = document.createElement("div")
        moviediv.classList.add("movie")
        const mimg = document.createElement("img")
        mimg.src = val.Poster;
        mimg.alt = val.Title;
        const title = document.createElement("h2")
         title.textContent = val.Title;
            moviediv.append(mimg,title)
            myresults.appendChild(moviediv)
    })
}