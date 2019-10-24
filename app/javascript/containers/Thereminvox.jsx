import React from 'react'
import Tone from 'tone'

export default class Thereminvox extends React.Component {
  constructor(props) {
    super(props)

    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)()
    let oscillator = audioContext.createOscillator()
    oscillator.type = 'sine'

    let analyser = audioContext.createAnalyser()
    analyser.fftsize = 2048
    oscillator.connect(analyser)

    // var distortion = new Tone.Distortion(0.9).toMaster()
    // synth.connect(distortion)

    this.state = {
      audioContext: audioContext,
      oscillator: oscillator,
      analyser: analyser,
      playing: false,
      x: 0,
      y: 0,
      fftData: []
    }

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleStartOrStopClick = this.handleStartOrStopClick.bind(this)
    this.changeFrequency = this.changeFrequency.bind(this)
    this.changeDetune = this.changeDetune.bind(this)
    this.changeVisualization = this.changeVisualization.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })

    this.changeFrequency()
    this.changeDetune()
    this.changeVisualization()
  }

  handleStartOrStopClick() {
    let { playing } = this.state

    if (playing) {
      this.handleStop()
    } else {
      this.handleStart()
    }
  }

  handleSinthPlay() {
    var synth = new Tone.PolySynth(4, Tone.Synth).toMaster()

    synth.triggerAttackRelease('G4', '4n', '8n')
    synth.triggerAttackRelease('c', '8n', Tone.Time('4n') + Tone.Time('8n'))
    synth.triggerAttackRelease('C4', '16n', '2n')
    synth.triggerAttackRelease('Gc', '16n', Tone.Time('2n') + Tone.Time('8t'))
    synth.triggerAttackRelease(
      'G4',
      '16',
      Tone.Time('2n') + Tone.Time('8t') * 2
    )
    synth.triggerAttackRelease('E4', '2n', '0:3')
    // synth.triggerAttackRelease()
    // synth.triggerAttackRelease('G1', 1, 0)
    // synth.triggerAttackRelease('с', 1, 1)
    // synth.triggerAttackRelease('C0', 1, 2)
    // synth.triggerAttackRelease('G2', 1, 3)
    // synth.triggerAttackRelease('с', 1, 4)
    // synth.triggerAttackRelease('C0', 1, 5)
    // synth.triggerAttackRelease('G0', 1, 6)
    // synth.triggerAttackRelease('C4', 1, 7)
    // synth.triggerAttackRelease('C0', 1, 8)
    // synth.triggerAttackRelease('G0', 1, 9)
    // synth.triggerAttackRelease('C4', 1, 10)
    // synth.triggerAttackRelease('C0', 1, 11)

    // var loop = new Tone.Loop(function(time) {
    //   synth.triggerAttackRelease(
    //     [
    //       'D4',
    //       'G4',
    //       'B4',
    //       'G4',
    //       'A4',
    //       'G4',
    //       'B4',
    //       'G4',
    //       'E4',
    //       'G4',
    //       'B4',
    //       'G4',
    //       'E4',
    //       'G4',
    //       'B4',
    //       'G4'
    //     ],
    //     '1n',
    //     time
    //   )
    // }, '1n')

    loop.start(0).stop('30m')
    Tone.Transport.bpm.value = 610
    Tone.Transport.start()

    // var distortion = new Tone.Distortion(0.9).toMaster()
    // synth.connect(distortion)
  }

  handleStart() {
    let { audioContext, oscillator, analyser, x, y } = this.state

    oscillator = audioContext.createOscillator()
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(x, audioContext.currentTime)
    oscillator.connect(audioContext.destination)
    oscillator.start()

    analyser = audioContext.createAnalyser()
    analyser.fftsize = 2048
    oscillator.connect(analyser)

    this.setState({
      oscillator: oscillator,
      analyser: analyser,
      playing: true
    })
  }

  handleStop() {
    let { oscillator } = this.state
    oscillator.stop()

    this.setState({
      oscillator: oscillator,
      playing: false
    })
  }

  changeFrequency() {
    let { audioContext, oscillator, x, y } = this.state
    oscillator.frequency.setValueAtTime(x, audioContext.currentTime)
  }

  changeDetune() {
    let { audioContext, oscillator, x, y } = this.state
    oscillator.detune.setValueAtTime(x, audioContext.currentTime)
  }

  changeVisualization() {
    const { analyser, playing } = this.state

    if (playing) {
      const bufferLength = analyser.frequencyBinCount
      let dataArray = new Uint8Array(bufferLength)
      analyser.getByteTimeDomainData(dataArray)

      this.setState({
        fftData: dataArray
      })
    }
  }

  render() {
    const { playing, analyser, fftData } = this.state
    let button = 'Start'
    // const data = analyser.frequencyBinCount

    if (playing) {
      button = 'Stop'
    }

    let elements = []

    if (fftData != undefined) {
      fftData.map(function(fftParam, i) {
        elements.push(
          <div
            key={i}
            className="analyserCol"
            style={{ height: fftParam + 'px' }}
          />
        )
      })
    }

    return (
      <div>
        <div onClick={this.handleSinthPlay}>Sinth</div>
        <div onClick={this.handleStartOrStopClick}>{button}</div>
        <div className="analyser">{elements}</div>
        {elements}
      </div>
    )
  }
}
