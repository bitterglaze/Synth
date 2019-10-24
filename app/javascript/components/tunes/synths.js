import Tone from 'tone'
// SYNTH
function polySynth() {
  return new Tone.PolySynth(1, Tone.Synth, {
    envelope: {
      attack: 0.01,
      attackCurve: 'linear',
      decay: 0.1,
      decayCurve: 'exponential',
      sustain: 0.3,
      release: 1,
      releaseCurve: 'exponential'
    },
    oscillator: {
      type: 'triangle'
      // spread: 30,
      // count: 3
    }
    // oscillator: {
    //   type: 'fatsawtooth',
    //   count: 3,
    //   spread: 30,
    //   phase: 10,
    //   fadeIn: 4
    // },
    // envelope: {
    //   attack: 0.3,
    //   decay: 1,
    //   sustain: 1,
    //   release: 5,
    //   attackCurve: 'exponential'
    // }
  })
}

function tSynth() {
  return new Tone.Synth({
    portamento: 0.2,
    envelope: {
      attack: 0.1,
      attackCurve: 'linear',
      decay: 1.2,
      decayCurve: 'exponential',
      sustain: 0,
      release: 1.2,
      releaseCurve: 'exponential'
    },
    oscillator: {
      type: 'sine',
      partialCount: 1
    }
  })
}

function amSynth() {
  return new Tone.AMSynth({
    portamento: 0,
    harmonicity: 2.4,
    carrierEnvelope: {
      attack: 0.2,
      attackCurve: 'linear',
      decay: 0.11,
      decayCurve: 'exponental',
      sustain: 0.3,
      release: 2.84,
      releaseCurve: 'exponental'
    },
    carrierOscillator: {
      type: 'sawtooth'
    },
    modulationEnvelop: {
      attack: 0.1,
      attackCurve: 'linear',
      decay: 1.17,
      decayCurve: 'exponental',
      sustain: 1,
      release: 2.15,
      releaseCurve: 'exponental'
    },
    modulationOscillator: {
      type: 'triangle'
    },
    volume: 14
  })
}

function metalSynth() {
  return new Tone.MetalSynth({
    // harmonicity: 12,
    // modulationIndex: 21,
    // resonance: 106,
    // octaves: 4,
    //
    // envelope: {
    //   attack: 0.01,
    //   attackCurve: 'linear',
    //   decay: 0.04,
    //   decayCurve: 'linear',
    //   sustain: 0,
    //   release: 0.49,
    //   releaseCurve: 'exponental'
    // }
    // frequency: 800,
    harmonicity: 300, // 200 sounds like a timbali
    resonance: 200, // 200 is nice
    modulationIndex: 250,
    envelope: {
      decay: 0.25, // 0.2 gives some percusive snare sounds
      sustain: 0.0125,
      release: 0.05
    },
    volume: -5
  })
}

function membraneSynthEffects() {
  return new Tone.MembraneSynth({
    pitchDecay: 0.05,
    octaves: 12,
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0.001,
      decay: 0.4,
      sustain: 0.01,
      release: 1,
      attackCurve: 'exponential'
    },
    volume: 3
    // harmonicity: 300, // 200 sounds like a timbali
    // resonance: 200, // 200 is nice
    // modulationIndex: 250,
    // envelope: {
    //   decay: 0.25, // 0.2 gives some percusive snare sounds
    //   sustain: 0.0125,
    //   release: 0.05
    // },
    // volume: -5
  })
}

function membraneSynthEffects2() {
  return new Tone.MembraneSynth({
    pitchDecay: 0.05,
    octaves: 12,
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0.001,
      decay: 0.4,
      sustain: 0.01,
      release: 1,
      attackCurve: 'exponential'
    },
    volume: 3
  })
}

function membraneSynth() {
  return new Tone.MembraneSynth({
    pitchDecay: 0.05,
    octaves: 12,
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0.001,
      decay: 0.4,
      sustain: 0.01,
      release: 1,
      attackCurve: 'exponential'
    },
    volume: 3
    // harmonicity: 300, // 200 sounds like a timbali
    // resonance: 200, // 200 is nice
    // modulationIndex: 250,
    // envelope: {
    //   decay: 0.25, // 0.2 gives some percusive snare sounds
    //   sustain: 0.0125,
    //   release: 0.05
    // },
    // volume: -5
  })
}

function noiseSynth() {
  return new Tone.NoiseSynth({
    noise: {
      type: 'pink'
    },

    envelope: {
      attack: 0.001,
      decay: 0.2, // 0.2 gives some percusive snare sounds
      // sustain: 0.5,

      sustain: 0.2,
      release: 1.75
    }
  })
}

export {
  polySynth,
  tSynth,
  amSynth,
  noiseSynth,
  metalSynth,
  membraneSynth,
  membraneSynthEffects,
  membraneSynthEffects2
}
