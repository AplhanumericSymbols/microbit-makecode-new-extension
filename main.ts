namespace voicechat {
    let lastClip: Buffer = null
    let isRecording: boolean = false

    //% block="start recording for $ms milliseconds"
    //% ms.shadow="timePicker"
    export function startRecording(ms: number): void {
        isRecording = true
        lastClip = control.createBuffer(ms) // Simulated buffer (replace with real recording in C++)
        control.raiseEvent(9990, ms) // Signal recording started (can use in listener blocks)
        isRecording = false
    }

    //% block="get last voice clip"
    export function getLastClip(): Buffer {
        return lastClip
    }

    //% block="play last voice clip"
    export function playLastClip(): void {
        if (lastClip) {
            control.raiseEvent(9991, lastClip.length)
        } else {
            basic.showIcon(IconNames.No)
        }
    }

    //% block="is recording in progress"
    export function recordingInProgress(): boolean {
        return isRecording
    }
}
