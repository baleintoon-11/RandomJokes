document.getElementById("getJoke").addEventListener("click", getJoke);

async function getJoke() {
    const loader = document.getElementById("loader");
    const jokeText = document.getElementById("jokeText");

    //show spinner
    loader.classList.remove("hidden")
    jokeText.textContent = "";

    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
    } catch (err) {
        jokeText.textContent = "❌ Couldn't fetch joke.";
    }
}
