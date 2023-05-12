input.onButtonPressed(Button.A, function () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    Seconds += 10
    basic.showNumber(Seconds)
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    Seconds += 60
    basic.showNumber(Seconds / 60)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    Seconds += 600
    basic.showNumber(Seconds / 60)
})
let Seconds = 0
Seconds = 0
music.setVolume(255)
basic.forever(function () {
    if (input.logoIsPressed()) {
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        while (Seconds > 0) {
            basic.showNumber(Seconds)
            basic.pause(1000)
            Seconds += -1
        }
        if (Seconds == 0) {
            for (let index = 0; index <= 10; index++) {
                for (let index2 = 0; index2 < 999999999; index2++) {
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                }
                music.playTone(523, music.beat(BeatFraction.Quarter))
                music.rest(music.beat(BeatFraction.Eighth))
                music.playTone(523, music.beat(BeatFraction.Quarter))
                music.rest(music.beat(BeatFraction.Whole))
                basic.showIcon(IconNames.SmallDiamond)
                Seconds = 0
            }
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
basic.forever(function () {
    if (Seconds == 0) {
        music.setVolume(255)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 891, 1, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
