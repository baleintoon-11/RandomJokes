document.getElementById("getJoke").addEventListener("click", getJoke);

async function getJoke() {
    const jokeText = document.getElementById("jokeText");

    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();

        setTimeout(() => {
            jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
        }, 100);
    } catch (err) {
        jokeText.textContent = "❌ Couldn't fetch joke.";
        jokeText.classList.add("visible");
    }
}
