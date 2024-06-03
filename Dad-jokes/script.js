const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', getJoke);

getJoke(); // Fetch a joke when the page loads

async function getJoke() {
    try{
    // Send a request to the Dad Jokes API
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json" // Requesting JSON response from the API
        }
    });
     // Extract the JSON data from the response
    const jokeData = await response.json();
    // Update the HTML element to display the fetched joke
    jokeElement.innerHTML = jokeData.joke;
    } catch(error) {
    // If there's an error during the process, log it to the console
    console.log("Error fetching joke:", error);

    // Update the HTML element to display an error message
    jokeElement.innerHTML = "Oops! Something went wrong. Please try again later.";
    } 
}