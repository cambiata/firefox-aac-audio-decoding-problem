console.log('hello');

async function test(e) {
    const response = await window.fetch('arraybufferAAC.dat');
    const arrayBufferAAC = await response.arrayBuffer();
    console.log('example arrayBuffer:', arrayBufferAAC);

    const context = new AudioContext();
    try {
        // this is where Firefox fails:
        const audioBuffer = await context.decodeAudioData(arrayBufferAAC);
        console.log('decoded audioBuffer:', audioBuffer);

        var node = context.createBufferSource();
        node.buffer = audioBuffer;
        node.connect(context.destination);
        node.start(0);
    } catch (e) {
        // casuses the following error on Firefox:
        // EncodingError: The buffer passed to decodeAudioData contains an unknown content type.
        console.log(e);
        alert(e);
    }
}

document.getElementById('btnTest').onclick = test;

