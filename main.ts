namespace voicebuffer {
    let lastClip: Buffer = null

    //% block
    export function startRecording(ms: number): void {
        control.raiseEvent(9000, 1) // signal recording start
        lastClip = control.createBuffer(ms) // mock buffer (substitute real mic access later)
    }

    //% block
    export function getLastClip(): Buffer {
        return lastClip
    }
}
