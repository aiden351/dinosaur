input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(24)
})
for (let index = 0; index < 10; index++) {
    music.playMelody("G A F B G A D E ", 120)
}
