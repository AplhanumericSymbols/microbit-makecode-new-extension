// tests go here; this will not be compiled when this package is used as an extension.
basic.showString("Ready")

input.onButtonPressed(Button.A, function () {
    voicebuffer.startRecording(3000)
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    let clip = voicebuffer.getLastClip()
    radio.sendBuffer(clip)
})
