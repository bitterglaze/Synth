import Tone from 'tone'

function part1(synth) {
  let part = new Tone.Part(
    function(time, note) {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    },
    [
      {
        time: '0:0:0',
        noteName: 'C5',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '0:0:2',
        noteName: 'D5',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '0:1:0',
        noteName: 'A4',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '0:3:0',
        noteName: 'F0',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '1:0:2',
        noteName: 'C3',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '1:1:0',
        noteName: 'D3',
        velocity: 1,
        duration: '16n'
      }
      // {
      //   time: '0:3:0',
      //   noteName: 'B1',
      //   velocity: 1,
      //   duration: '2n'
      // }
    ]
  )
  part.loop = true
  part.loop = '8m'

  return part
}

function part2(synth) {
  let part = new Tone.Part(
    function(time, note) {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    },
    [
      {
        time: '0:0:0',
        noteName: 'C4',
        velocity: 1,
        duration: '8n'
      },
      {
        time: '0:1:0',
        noteName: 'C6',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '0:2:1',
        noteName: 'G4',
        velocity: 1,
        duration: '8n'
      }
      // {
      //   time: '0:3:0',
      //   noteName: 'A4',
      //   velocity: 1,
      //   duration: '16n'
      // },
      // {
      //   time: '0:4:0',
      //   noteName: 'Bb3',
      //   velocity: 1,
      //   duration: '16n'
      // }
    ]
  )

  part.loop = true
  part.loop = '3m'

  return part
}

export { part1, part2 }
