radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    instruction = receivedString
})
let instruction = ""
radio.setGroup(1)
basic.forever(function () {
    if (instruction == "U") {
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
    } else if (instruction == "D") {
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 1)
    } else if (instruction == "L") {
        cuteBot.moveTime(cuteBot.Direction.left, 50, 1)
    } else if (instruction == "R") {
        cuteBot.moveTime(cuteBot.Direction.right, 50, 1)
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
