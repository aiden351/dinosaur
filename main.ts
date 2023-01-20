input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(24)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 30))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.East)
})
for (let index = 0; index < 10; index++) {
    music.playMelody("G A F B G A D E ", 120)
}
