input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    numero_aleatorio = randint(0, 3)
    if (numero_aleatorio == 2) {
        basic.showString("SI")
        music.ringTone(262)
    } else if (numero_aleatorio == 1) {
        basic.showString("NO")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showString("NO SE")
        music.playMelody("- - - - - - - - ", 120)
    }
    basic.showNumber(8)
    music.playTone(262, music.beat(BeatFraction.Whole))
    if (numero_aleatorio == 3) {
        basic.showString("ESTOY EN RACHA")
        music.rest(music.beat(BeatFraction.Whole))
    } else {
    	
    }
})
let numero_aleatorio = 0
basic.showString("HAZ UNA PREGUNTA")
basic.showNumber(8)
basic.forever(function () {
	
})
