let wineLevel = 50; // Start with the wine at 100%

document.getElementById('drinkButton').addEventListener('click', function() {
    if (wineLevel > 0) {
        wineLevel -= 5; // Lower the wine level by 10% (1 cm)
        document.getElementById('wine').style.height = `${wineLevel}%`;

        // Play the audio file.
        let audio = new Audio('audio_file.mp3');
        audio.play();
    }
});
