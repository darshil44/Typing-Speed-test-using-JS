document.addEventListener('DOMContentLoaded', function () {

    const setofWords = [
        "If you're visiting this page, you're likely here because you're searching for a random sentence",
        "Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play.",
        "By inputting the desired number, you can make a list of as many random sentences as you want or need.",
        "Producing random sentences can be helpful in several different ways.",     
        "For writers, a random sentence can help them get their creative juices flowing",   
        "Lulu was out for her usual morning walk when she took a wrong turn and found herself in the woods.", 
        "She tried to retrace her steps, but soon realized she was lost.",
        "She began to panic, but then she remembered her training and started using her nose to sniff out a way home." ]; 

    
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
        let totalTime = ((endTime - startTime) / 1000);
        console.log(totalTime);

        let totalstr = typeWords.value;
        let wordCount = wordCounter(totalstr);
        let speed = Math.floor((wordCount / totalTime) * 60);
        let finalMsg = "you typed total at " + speed + " words per minute. "

        finalMsg += compareWords(msg.innerText, totalstr)

        msg.innerText = finalMsg;
    }
    const wordCounter = (str) => {
        let response = str.split(" ").length;
        console.log(response)
        return response;

    }

    const compareWords = (str1, str2) => {
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let cnt = 0;

        words1.forEach(function (item, index) {
            if (item == words2[index]) {
                cnt++;
            }
        })
        let errorWords = (words1.length - cnt);
        return ( cnt + " correct out of " + words1.length + " words and the total number of error are" + errorWords + ".");
    }

    button.addEventListener('click', function () {
        console.log(this.innerText);
        if (this.innerText === 'Start') {
            typeWords.disabled = false;
            playGame();
        }
        else if (this.innerText == 'Done') {
            typeWords.disabled = true;
            button.innerText = 'Start'
            endPlay();
        }

    });
});        
