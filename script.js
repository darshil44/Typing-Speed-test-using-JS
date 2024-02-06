document.addEventListener('DOMContentLoaded', function () {

    const setofWords = [
        "If you're visiting this page, you're likely here because you're searching for a random sentence",
        "Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play.",
        "By inputting the desired number, you can make a list of as many random sentences as you want or need.",
        "Producing random sentences can be helpful in a number of different ways.",
        "For writers, a random sentence can help them get their creative juices flowing",
        "Lulu was out for her usual morning walk when she took a wrong turn and found herself in the woods.",
        "She tried to retrace her steps, but soon realized she was lost.",
        "She began to panic, but then she remembered her training and started using her nose to sniff out a way home."
    ];

    const msg = document.getElementById('msg');
    const typeWords = document.getElementById('mywords');
    const button = document.getElementById('btn');
    let startTime, endTime;

    const playGame = () => {
        let randomNumber = Math.floor(Math.random() * setofWords.length);
        console.log(randomNumber);
        msg.innerText = setofWords[randomNumber];
        let date = new Date();
        startTime = date.getTime();
        btn.innerText = 'Done';
    }
    const endPlay = () => {
        let date = new Date();
        endTime = date.getTime();
        let totalTime = ((endTime - startTime) / 1000 );
        console.log(totalTime);
    }

button.addEventListener('click', function () {
    console.log(this.innerText);
    if (this.innerText === 'Start') {
        typeWords.disabled = false;
        playGame();
    }
    else if (this.innerText == 'Done') {
        typeWords.disabled = true;
        button.  = 'Start'
        endPlay();
    }

});
});
