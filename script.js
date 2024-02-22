document.getElementById("randomGameBtn").addEventListener("click", function() {
    var games = [
        "https://cm1803.github.io/charlie/",
        "https://cm1803.github.io/delta/"
    ];
    var randomIndex = Math.floor(Math.random() * games.length);
    window.open(games[randomIndex], "_blank");
});
