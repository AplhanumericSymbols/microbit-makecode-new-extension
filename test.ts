input.onButtonPressed(Button.A, function () {
    basic.showString("REC")
    voicechat.startRecording(3000)
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    let clip = voicechat.getLastClip()
    radio.sendBuffer(clip)
    basic.showString("SENT")
})

radio.onReceivedBuffer(function (clip: Buffer) {
    basic.showIcon(IconNames.Heart)
    // Simulate playback trigger
    control.raiseEvent(9991, clip.length)
})
