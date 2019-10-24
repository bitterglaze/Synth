import Tone from 'tone'
////ЭФФЕКТЫ
var convolver = new Tone.Convolver(
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/132550/factory.hall.wav'
).toMaster()

var player = new Tone.Player(
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/132550/Drum%20Loop%20-%20Bonobo%20-%20The%20Keeper%20(ft.%20Andreya%20Triana)%20-%20%20Banks%20Remix.mp3'
).toMaster()
////////

function seq1(synth) {
  let seq = new Tone.Sequence(
    function(time, note) {
      // console.log(time, note)
      //straight quater notes
      synth.triggerAttackRelease(note, '4t', time)
    },
    ['G3', 'Cb4', 'D4', 'G4', 'D4', 'Cb4', 'G3', 'Cb4'],
    '32n'
  )
  return seq
}

function seq2(synth) {
  let seq = new Tone.Sequence(
    function(time, note) {
      // console.log(time, note)
      //straight quater notes
      synth.triggerAttackRelease(note, '16n', time)
    },
    [
      'D#5',
      'G4',
      'C5',
      'G4',
      'D#5',
      'G4',
      'C5',
      'G4',
      'C5',
      'D#5',
      'G4',
      'C5',
      'D#5',
      'G4'
    ],
    '8n'
  )
  return seq
}

function seqdrum(membraneSynth) {
  let seq = new Tone.Sequence(
    function(time, note) {
      membraneSynth.triggerAttackRelease(note, '10hz', time)
    },
    [
      'G0',
      null,
      null,
      'G0',
      null,
      null,
      null,
      'G0',
      null,
      null,
      null,
      null,
      null,
      'G0',
      'G0',
      'G0'
    ],
    '16n'
  )

  return seq

  // Tone.Transport.start ();
}

function seqSnare(noiseSynth, metalSynth, membraneSynth) {
  let seq = new Tone.Sequence(
    function(time, note) {
      metalSynth.frequency.setValueAtTime(note, time)
      metalSynth.triggerAttack(time, Math.random() * 0.5 + 0.5)
      noiseSynth.triggerAttackRelease('16n', time, 1)
      membraneSynth.triggerAttackRelease('E1', '16n', time, 1)
    },
    [
      null,
      null,
      null,
      null,
      null,
      null,
      90,
      null,
      null,
      null,
      null,
      null,
      90,
      null,
      10,
      null
    ],
    '16n'
  )
  return seq

  Tone.Master.volume = 10
}

function seqPerc(membraneSynthEffects) {
  let seq = new Tone.Sequence(
    function(time, note) {
      // console.log(time, note)
      membraneSynthEffects.triggerAttackRelease(note, '10hz', time)
    },
    ['Eb4', 'A4', 'Bb4', 'Eb4', 'A4'],
    '2n'
  )
  membraneSynthEffects.connect(convolver)
  return seq

  // Tone.Transport.start ();
}

function seqPerc2(membraneSynthEffects2) {
  let seq = new Tone.Sequence(
    function(time, note) {
      // console.log(time, note)
      membraneSynthEffects2.triggerAttackRelease(note, '16n', time)
    },
    ['Eb4', 'A4', 'Bb4', 'Eb4', 'A4'],
    '8n'
  )
  membraneSynthEffects2.connect(convolver)
  membraneSynthEffects2.connect(player)
  return seq

  // Tone.Transport.start ();
}

function seqSnare2(noiseSynth, metalSynth, membraneSynth) {
  let seq = new Tone.Sequence(
    function(time, note) {
      metalSynth.frequency.setValueAtTime(note, time)
      metalSynth.triggerAttack(time, Math.random() * 0.5 + 0.5)
      noiseSynth.triggerAttackRelease('2n', time, 1)
      membraneSynth.triggerAttackRelease('A5', '4n', time, 1)
    },
    [
      null,
      null,
      null,
      null,
      null,
      null,
      10,
      null,
      null,
      null,
      null,
      null,
      10,
      null,
      70,
      70
    ],
    '16n'
  )
  return seq
  volume: 14
  // Tone.Master.volume = 10
}

function seqdrum2(membraneSynthEffects) {
  let seq = new Tone.Sequence(
    function(time, note) {
      membraneSynthEffects.triggerAttackRelease(note, '4n', time)
    },
    [
      'F1',
      null,
      'F1',
      'F1',
      null,
      null,
      null,
      'G0',
      null,
      null,
      null,
      null,
      null,
      'F1',
      null,
      null
    ],
    '16n'
  )
  membraneSynthEffects.connect(convolver)

  return seq

  // Tone.Transport.start ();
}

export { seq1, seq2, seqdrum, seqdrum2, seqSnare, seqSnare2, seqPerc, seqPerc2 }
