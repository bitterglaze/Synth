import Tone from 'tone'

function distortion() {
  let f = new Tone.Distortion({
    distortion: 0,
    oversample: 'none'
  })

  f.wet.value = 0

  return f
}

function tremolo() {
  let f = new Tone.Tremolo({
    frequency: 10,
    type: 'sine',
    depth: 100,
    spread: 180
  })

  f.wet.value = 0

  return f
}

function feedbackDelay() {
  let f = new Tone.FeedbackDelay({
    delayTime: '8n',
    maxDelay: 10
  })

  f.wet.value = 0

  return f
}

function autoFilter() {
  let f = new Tone.AutoFilter({
    frequency: 1,
    type: 'sine',
    depth: 1,
    baseFrequency: 20,
    octaves: 4.6,
    filter: {
      type: 'lowpass',
      rolloff: -12,
      Q: 1
    }
  })

  f.wet.value = 0

  return f
}

function autoPanner() {
  let f = new Tone.AutoPanner({
    frequency: 1,
    type: 'square',
    depth: 1
  })

  f.wet.value = 0

  return f
}

function autoWah() {
  let f = new Tone.AutoWah({
    baseFrequency: 100,
    octaves: 6,
    sensitivity: 0,
    Q: 2,
    gain: 2,
    follower: {
      attack: 0.3,
      release: 0.5
    }
  })

  f.wet.value = 0

  return f
}

function bitCrusher() {
  let f = new Tone.BitCrusher({
    bits: 0
  })

  f.wet.value = 0

  return f
}

function chebyshev() {
  let f = new Tone.Chebyshev({
    order: 1,
    oversample: 'none'
  })

  f.wet.value = 0

  return f
}

function chorus() {
  let f = new Tone.Chorus({
    frequency: 1.5,
    delayTime: 3.5,
    depth: 0.7,
    type: 'sine',
    spread: 180
  })

  f.wet.value = 0

  return f
}

function convolver() {
  let f = new Tone.Convolver({
    onload: Tone.noOp,
    normalize: true
  })

  f.wet.value = 0

  return f
}

function feedbackEffect() {
  let f = new Tone.FeedbackEffect({
    feedback: 0.125
  })

  f.wet.value = 0

  return f
}

// let effect = new Tone.Effect({
//   wet: 1
// })

function freeverb() {
  let f = new Tone.Freeverb({
    roomSize: 0.7,
    dampening: 3000
  })

  f.wet.value = 0

  return f
}

function jcReverb() {
  let f = new Tone.JCReverb({
    roomSize: 0.5
  })

  f.wet.value = 0

  return f
}

function phaser() {
  let f = new Tone.Phaser({
    frequency: 0,
    octaves: 1,
    stages: 10,
    Q: 10,
    baseFrequency: 350
  })

  f.wet.value = 0

  return f
}

function pingPongDelay() {
  let f = new Tone.PingPongDelay({
    delayTime: 0.01,
    maxDelayTime: 1
  })

  f.wet.value = 0

  return f
}

function pitchShift() {
  let f = new Tone.PitchShift({
    pitch: 0,
    windowSize: 0.1,
    delayTime: 0,
    feedback: 0
  })

  f.wet.value = 0

  return f
}

function reverb() {
  let f = new Tone.Reverb({
    decay: 1.5,
    preDelay: 0.01
  })

  f.wet.value = 0

  return f
}

function stereoWidener() {
  let f = new Tone.StereoWidener({
    width: 0.5
  })

  f.wet.value = 0

  return f
}

function vibrato() {
  let f = new Tone.Vibrato({
    maxDelay: 0.005,
    frequency: 5,
    depth: 0.1,
    type: 'sine'
  })

  f.wet.value = 0

  return f
}

export {
  autoFilter,
  autoPanner,
  autoWah,
  bitCrusher,
  chebyshev,
  chorus,
  convolver,
  distortion,
  feedbackDelay,
  feedbackEffect,
  freeverb,
  jcReverb,
  phaser,
  pingPongDelay,
  pitchShift,
  reverb,
  stereoWidener,
  tremolo,
  vibrato
}
