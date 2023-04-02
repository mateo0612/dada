music.playMelody("- - - - - - - - ", 120)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
})
