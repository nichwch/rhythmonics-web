
const audioCtx = new AudioContext();

const osc = audioCtx.createOscillator();

osc.connect(audioCtx.destination)

osc.start()
