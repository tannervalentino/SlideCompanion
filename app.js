document.getElementById('search-button').addEventListener('click', function () {
    const username = document.getElementById('username-input').value;

    // Make an API request to fetch high scores data for the entered username
    fetch(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${username}`)
        .then(response => response.text())
        .then(data => {
            // Parse and display the high scores data in the "results" div
            document.getElementById('results').innerHTML = data;
        })
        .catch(error => {
            // Handle any errors or display a message
            document.getElementById('results').innerHTML = 'Error: Unable to fetch data';
        });
});
