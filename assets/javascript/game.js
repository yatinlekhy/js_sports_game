(function () {
    let hoSound = new Audio('./assets/sound/ho.wav');
    let crySound = new Audio('./assets/sound/cry.mp3');
    let count = 0;
    let goalCount = 0
    const teamoneNumshots = document.getElementById("teamone-numshots");
    const teamoneNumhits = document.getElementById("teamone-numhits");
    const teamoneShoot = document.getElementById("teamone-shoot");

    teamoneShoot.addEventListener("click", function () {
        count = count + 1
        teamoneNumshots.innerHTML = count
        //if its a succesful goal, then increase goalCount
        let randomNum = Math.random()
        //console.log(randomNum)
        if (randomNum > 0.5) {
            goalCount = goalCount + 1
            teamoneNumhits.innerHTML = goalCount
            hoSound.play();
        }
    })
    let twoCount = 0
    let goaltwoCount = 0
    const teamtwoNumshots = document.getElementById("teamtwo-numshots");
    const teamtwoNumhits = document.getElementById("teamtwo-numhits");
    const teamtwoShoot = document.getElementById("teamtwo-shoot");

    teamtwoShoot.addEventListener("click", function () {
        twoCount = twoCount + 1
        teamtwoNumshots.innerHTML = twoCount
        //if its a succesful goal, then increase goalCount
        let randomNum = Math.random()
        //console.log(randomNum)
        if (randomNum > 0.5) {
            goaltwoCount = goaltwoCount + 1
            teamtwoNumhits.innerHTML = goaltwoCount
            hoSound.play();
        }
    })
    let resetCount = 0
    let resetButton = document.getElementById("reset")
    let pleaseMove = document.querySelector("#num-resets")

    resetButton.addEventListener("click",function(){
        resetCount = resetCount+1
        pleaseMove.innerHTML = resetCount
        count=0
        goalCount=0
        twoCount=0
        goaltwoCount= 0
        teamoneNumshots.innerHTML=0
        teamoneNumhits.innerHTML=0  
        teamtwoNumhits.innerHTML=0
        teamtwoNumshots.innerHTML=0
        crySound.play();
        



    }
    )
    


}())