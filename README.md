
> Open this page at [https://aplhanumericsymbols.github.io/microbit-makecode-new-extension/](https://aplhanumericsymbols.github.io/microbit-makecode-new-extension/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/aplhanumericsymbols/microbit-makecode-new-extension** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/aplhanumericsymbols/microbit-makecode-new-extension** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

# Microbit VoiceChat Extension

This extension lets you record, store, and send voice clips between Microbit v2 devices using simulated buffers. Future versions will support real microphone access via native bindings.

## Features
- Record simulated audio clips
- Store and retrieve buffers
- Send clips via radio
- Playback support

## Usage
1. Install the extension in MakeCode via GitHub URL.
2. Use `startRecording(ms)` to simulate a recording.
3. Use `getLastClip()` to retrieve the buffer.
4. Use `playLastClip()` to simulate playback.
5. Use `radio.sendBuffer()` to transmit clips.

## Future Plans
- Add real mic access via C++ shims
- Encrypt voice clips
- Combine with text messaging
