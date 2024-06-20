const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

fetch("https://imdb-top-100-movies.p.rapidapi.com/", options)
.then(res => res.json())
.then(Response => {
    console.log(Response)
})