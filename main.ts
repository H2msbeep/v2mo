input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < Va1; index++) {
        basic.showString("" + (list[A]))
        basic.pause(100)
        basic.showString(",")
        A += 1
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Hitu = 1
    music.ringTone(988)
    list[Va1] = 1
    Va1 += 1
    basic.pause(500)
    if (input.logoIsPressed()) {
        list[Va1 - 1] = 2
    }
    music.rest(music.beat(BeatFraction.Sixteenth))
    A += 1
    basic.pause(1000)
    if (Hitu == 1) {
        list[Va1] = 0
        Va1 += 1
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
	
})
let Hitu = 0
let A = 0
let Va1 = 0
let list: number[] = []
list = [0, 0]
basic.forever(function () {
	
})
