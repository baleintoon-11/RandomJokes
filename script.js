document.getElementById("getJoke").addEventListener("click", getJoke);

async function getJoke() {
    const loader = document.getElementById("loader");
    const jokeText = document.getElementById("jokeText");

    loader.classList.remove("hidden");
    jokeText.classList.remove("visible"); // fade out text

    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();

        // Only set new text after short delay
        setTimeout(() => {
            jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
            jokeText.classList.add("visible");
        }, 100);
    } catch (err) {
        jokeText.textContent = "❌ Couldn't fetch joke.";
        jokeText.classList.add("visible");
    } finally {
        loader.classList.add("hidden");
    }
}

