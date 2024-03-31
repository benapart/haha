basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 4891, 255, 255, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
