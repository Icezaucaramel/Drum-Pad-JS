let soundVolume = document.querySelector('.masterVolumeConfig')
console.log(soundVolume.value / 10)


function playSound (id, classImg, color) {
    let sound = document.getElementById(id)
    sound.volume = soundVolume.value / 10
    if (sound.paused) {
        sound.play()
    } else {
        sound.currentTime = 0
    }
    let soundImg = document.querySelector(classImg)
    soundImg.src = '../assets/images/trackButton' + color+ '.png'
    setTimeout(function(){ 
        soundImg.src = '../assets/images/trackButton.png'
    }, sound.duration * 1000)
    
}

// document.addEventListener("keydown", function(event) {
//     console.log(event.which)
//   })

  document.addEventListener("keydown", function(event) {
    let eventWichKey = event.which
    switch (eventWichKey) {
        case 65:
            playSound('clap1', '.line1-1', 1)
            break
        case 90:
            playSound('clap2', '.line1-2', 1)
            break
        case 69:
            playSound('clap3', '.line1-3', 1)
            break
        case 82:
            playSound('clap4', '.line1-4', 1)
            break
        case 84:
            playSound('clap5', '.line1-5', 1)
            break
        case 89:
            playSound('clap6', '.line1-6', 1)
            break
        case 85:
            playSound('hiHat1', '.line2-1', 2)
            break
        case 73:
            playSound('hiHat2', '.line2-2', 2)
            break
        case 79:
            playSound('hiHat3', '.line2-3', 2)
            break
        case 80:
            playSound('hiHat4', '.line2-4', 2)
            break
        case 221:
            playSound('hiHat5', '.line2-5', 2)
            break
        case 186:
            playSound('hiHat6', '.line2-6', 2)
            break   
        case 81:
             playSound('kick1', '.line3-1', 3)
            break 
        case 83:
            playSound('kick2', '.line3-2', 3)
            break
        case 68:
            playSound('kick3', '.line3-3', 3)
            break
        case 70:
            playSound('kick4', '.line3-4', 3)
            break
        case 71:
            playSound('kick5', '.line3-5', 3)
            break
        case 72:
            playSound('kick6', '.line3-6', 3)
            break
        case 74:
            playSound('snare1', '.line4-1', 4)
            break
        case 75:
            playSound('snare2', '.line4-2', 4)
            break
        case 76:
            playSound('snare3', '.line4-3', 4)
            break
        case 77:
            playSound('snare4', '.line4-4', 4)
            break
        case 192:
            playSound('snare5', '.line4-5', 4)
            break
        case 220:
            playSound('snare6', '.line4-6', 4)
            break
    }
  })

