document.getElementById("getJoke").addEventListener("click", getJoke);

async function getJoke() {
    const jokeText = document.getElementById("jokeText");
    const loader = document.getElementById("loader");

    loader.classList.remove("hidden"); // Show spinner
    jokeText.classList.remove("visible"); // Fade/dim joke area
    jokeText.textContent = "";

    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();

        loader.classList.add("hidden"); // Hide spinner
        jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
        jokeText.classList.add("visible");
    } catch (err) {
        loader.classList.add("hidden");
        jokeText.textContent = "❌ Couldn't fetch joke.";
        jokeText.classList.add("visible");
    }
}
