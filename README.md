# firefox-aac-audio-decoding-problem

Firefox's WebAudioApi context decoder seems to be pickier than Chrome, Edge and Safari when it
comes to some cases of AAC-encoded data.

This example shows a an example that works fine on Edge, Chrome, Safari but fails on Firefox with the following error:

`EncodingError: The buffer passed to decodeAudioData contains an unknown content type.`

Demo:

https://firefox-aac-decoding-problem.web.app/
