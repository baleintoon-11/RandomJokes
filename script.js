document.getElementById("getJoke").addEventListener("click", getJoke);

async function getJoke() {
    const jokeContent = document.getElementById("jokeContent");
    const loader = document.getElementById("loader");

    jokeContent.textContent = "";           // Clear old joke
    loader.classList.remove("hidden");      // Show spinner

    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();

        loader.classList.add("hidden");
        jokeContent.textContent = `${data.setup} 😂 ${data.punchline}`;
    } catch (err) {
        loader.classList.add("hidden");
        jokeContent.textContent = "❌ Couldn't fetch joke.";
    }
}
