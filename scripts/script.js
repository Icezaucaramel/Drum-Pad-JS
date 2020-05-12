const soundVolume = document.querySelector('.masterVolumeConfig') // Get the input for the volume
const outputVolume = document.querySelector('.outputVolume')    // output 
const redColumn = document.querySelector('.redColumn')
const greenColumn = document.querySelector('.greenColumn')
const purpleColumn = document.querySelector('.purpleColumn')
const yellowColumn = document.querySelector('.yellowColumn')

const VisualizationColor = {    // 
    RED: { id: 1, selector: redColumn },
    GREEN: { id: 2, selector: greenColumn },
    PURPLE: { id: 3, selector: purpleColumn },
    YELLOW: { id: 4, selector: yellowColumn }
}

function handleVizualiation(sound, colorElement) {      // Vizualiation of the buttons pressed
    const newHeight = colorElement.offsetHeight + 20        
    colorElement.style.height = newHeight + 'px'
    setTimeout(() => {
        const newHeight = Math.max(colorElement.offsetHeight - 20, 0)
        colorElement.style.height = newHeight + 'px'
    }, sound.duration * 1000) 
}

function updateImage(sound, classImg, colorId) {        // Change the button color by changing the img
    const soundImg = document.querySelector(classImg)
    soundImg.src = `./assets/images/trackButton${colorId}.png`;
    setTimeout(() => soundImg.src = './assets/images/trackButton.png', sound.duration * 1000) 
}

const soundsList = {    // List of sounds, classnames, and color to attribuates
    65: { name: 'clap1', selector: '.line1-1', color: VisualizationColor.RED }, 
    90: { name: 'clap2', selector: '.line1-2', color: VisualizationColor.RED },        
    69: { name: 'clap3', selector: '.line1-3', color: VisualizationColor.RED },        
    82: { name: 'clap4', selector: '.line1-4', color: VisualizationColor.RED },        
    84: { name: 'clap5', selector: '.line1-5', color: VisualizationColor.RED },        
    89: { name: 'clap6', selector: '.line1-6', color: VisualizationColor.RED },        
    85: { name: 'hiHat1', selector: '.line2-1', color: VisualizationColor.GREEN },        
    73: { name: 'hiHat2', selector: '.line2-2', color: VisualizationColor.GREEN },        
    79: { name: 'hiHat3', selector: '.line2-3', color: VisualizationColor.GREEN },        
    80: { name: 'hiHat4', selector: '.line2-4', color: VisualizationColor.GREEN },        
    221: { name: 'hiHat5', selector: '.line2-5', color: VisualizationColor.GREEN },        
    186: { name: 'hiHat6', selector: '.line2-6', color: VisualizationColor.GREEN },        
    81: { name: 'kick1', selector: '.line3-1', color: VisualizationColor.PURPLE },        
    83: { name: 'kick2', selector: '.line3-2', color: VisualizationColor.PURPLE },        
    68: { name: 'kick3', selector: '.line3-3', color: VisualizationColor.PURPLE },        
    70: { name: 'kick4', selector: '.line3-4', color: VisualizationColor.PURPLE },        
    71: { name: 'kick5', selector: '.line3-5', color: VisualizationColor.PURPLE },        
    72: { name: 'kick6', selector: '.line3-6', color: VisualizationColor.PURPLE },        
    74: { name: 'snare1', selector: '.line4-1', color: VisualizationColor.YELLOW },        
    75: { name: 'snare2', selector: '.line4-2', color: VisualizationColor.YELLOW },        
    76: { name: 'snare3', selector: '.line4-3', color: VisualizationColor.YELLOW },        
    77: { name: 'snare4', selector: '.line4-4', color: VisualizationColor.YELLOW },        
    192: { name: 'snare5', selector: '.line4-5', color: VisualizationColor.YELLOW },        
    220: { name: 'snare6', selector: '.line4-6', color: VisualizationColor.YELLOW },
};

document.addEventListener("keydown", ({ which }) => { 
    if (!soundsList[which]) {
        return;
    }
    const { name, selector, color } = soundsList[which];
    const sound = document.getElementById(name)
    sound.volume = soundVolume.value / 10    // /10 because the value of .volume is between 0.1 and 1, the input return us something between 1 and 10
    if (sound.paused) {
        sound.play()
        handleVizualiation(sound, color.selector);
    } else {
        sound.currentTime = 0    // Reset the current time to replay the sound
    }
    updateImage(sound, selector, color.id);
})

soundVolume.oninput = function() {      // Volume Output
    outputVolume.innerHTML = this.value
}