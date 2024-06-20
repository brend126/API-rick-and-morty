async function getCharacters(done) {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        done(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
            </article>
        `);

        const main = document.querySelector("main");
        main.append(article);
    });
});
