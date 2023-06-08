radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    instruction = receivedString
})
let instruction = ""
radio.setGroup(1)
basic.forever(function () {
    if (instruction == "U") {
        cuteBot.forward()
    } else if (instruction == "D") {
        cuteBot.backforward()
    } else if (instruction == "L") {
        cuteBot.motors(40, 100)
        basic.pause(100)
        cuteBot.forward()
    } else if (instruction == "R") {
        cuteBot.motors(100, 40)
        basic.pause(100)
        cuteBot.forward()
    } else if (instruction == "A") {
        cuteBot.motors(100, -100)
    } else if (instruction == "B") {
        cuteBot.stopcar()
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
    } else if (instruction == "0") {
        cuteBot.stopcar()
    } else {
        cuteBot.stopcar()
    }
})
