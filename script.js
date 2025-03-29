document.getElementById("getJoke").addEventListener("click", getJoke);

async function getJoke() {
    const loader = document.getElementById("loader");
    const jokeText = document.getElementById("jokeText");

    // Show loader & reset joke text
    loader.classList.remove("hidden");
    jokeText.classList.remove("visible"); // fade out text
    jokeText.textContent = "";            // clear text

    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();

        // Update joke and fade it in
        jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
        setTimeout(() => {
            jokeText.classList.add("visible"); // fade in text
        }, 50); // short delay so transition works
    } catch (err) {
        jokeText.textContent = "❌ Couldn't fetch joke.";
        jokeText.classList.add("visible");
    } finally {
        loader.classList.add("hidden");
    }
}
