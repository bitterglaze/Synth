import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import * as effects from '../components/tunes/effects'
import * as parts from '../components/tunes/parts'
import * as synths from '../components/tunes/synths'
import * as seqs from '../components/tunes/sequences'

import Speed from '../components/utilities/Speed'
import Volume from '../components/utilities/Volume'

import PlaySwitch from '../components/controls/PlaySwitch'
import Distortion from '../components/effects/Distortion'
import Chebyshev from '../components/effects/Chebyshev'
import Phaser from '../components/effects/Phaser'
import PingPongDelay from '../components/effects/PingPongDelay'
import BitCrusher from '../components/effects/BitCrusher'
import AutoPanner from '../components/effects/AutoPanner'
import AutoFilter from '../components/effects/AutoFilter'
import Tremolo from '../components/effects/Tremolo'

import PolySynth from '../components/synths/PolySynth'
import TSynth from '../components/synths/TSynth'
// import MetalSynth from '../components/synths/MetalSynth'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    const defaultWetValue = 0.8

    let ambientSynth = synths.tSynth()
    let ambientPingPongDelay = effects.pingPongDelay()
    let ambientChebyshev = effects.chebyshev()
    let ambientPhaser = effects.phaser()
    let ambientBitCrusher = effects.bitCrusher()
    let ambientAutoPanner = effects.autoPanner()
    let ambientDistortion = effects.distortion()
    let ambientAutoFilter = effects.autoFilter()
    let ambientTremolo = effects.tremolo()

    let leadSynth = synths.polySynth()
    let leadChebyshev = effects.chebyshev()
    let leadBitCrusher = effects.bitCrusher()
    let leadAutoPanner = effects.autoPanner()
    let leadDistortion = effects.distortion()
    let leadAutoFilter = effects.autoFilter()

    let amSynth = synths.amSynth()
    let amPingPongDelay = effects.pingPongDelay()
    let amChebyshev = effects.chebyshev()
    let amPhaser = effects.phaser()
    let amBitCrusher = effects.bitCrusher()
    let amAutoPanner = effects.autoPanner()
    let amDistortion = effects.distortion()
    let amAutoFilter = effects.autoFilter()
    let amTremolo = effects.tremolo()

    let metalSynth = synths.metalSynth()
    let noiseSynth = synths.noiseSynth()

    let membraneSynth = synths.membraneSynth()
    let membranePingPongDelay = effects.pingPongDelay()
    let membraneChebyshev = effects.chebyshev()
    let membranePhaser = effects.phaser()
    let membraneBitCrusher = effects.bitCrusher()
    let membraneAutoPanner = effects.autoPanner()
    let membraneDistortion = effects.distortion()
    let membraneAutoFilter = effects.autoFilter()
    let membraneTremolo = effects.tremolo()

    let membraneSynthEffects = synths.membraneSynthEffects()
    let membraneeffectPingPongDelay = effects.pingPongDelay()
    let membraneeffectChebyshev = effects.chebyshev()
    let membraneeffectPhaser = effects.phaser()
    let membraneeffectBitCrusher = effects.bitCrusher()
    let membraneeffectAutoPanner = effects.autoPanner()
    let membraneeffectDistortion = effects.distortion()
    let membraneeffectAutoFilter = effects.autoFilter()
    let membraneeffectTremolo = effects.tremolo()
    let membraneSynthEffects2 = synths.membraneSynthEffects2()

    // let loop1 = new Tone.Pattern(function(time, note) {
    //   leadSynth.triggerAttackRelease(
    //     ['C6', 'C3', 'F4', 'A2', 'C1', 'F1'],
    //     '32n',
    //     time
    //   )
    // }, '16n')
    let loop1 = new Tone.Loop(function(time, note) {
      ambientSynth.triggerAttackRelease('A3')
    }, '16n')

    let loop2 = new Tone.Loop(function(time) {
      amSynth.triggerAttackRelease('C3', '16n')
    }, '4n')

    let loop3 = new Tone.Loop(function(time) {
      ambientSynth.triggerAttackRelease('E2', '16n', time)
    }, '2n')

    let loop4 = new Tone.Loop(function(time) {
      leadSynth.triggerAttackRelease('F3', '4n', time)
    }, '2n')

    ambientSynth.chain(
      ambientPingPongDelay,
      ambientChebyshev,
      ambientPhaser,
      ambientBitCrusher,
      ambientAutoPanner,
      ambientDistortion,
      ambientAutoFilter,
      ambientTremolo,
      Tone.Master
    )

    leadSynth.chain(
      leadChebyshev,

      leadBitCrusher,
      leadAutoPanner,
      leadDistortion,
      leadAutoFilter,

      Tone.Master
    )

    amSynth.chain(
      amPingPongDelay,
      amChebyshev,
      amPhaser,
      amBitCrusher,
      amAutoPanner,
      amDistortion,
      amAutoFilter,
      amTremolo,
      Tone.Master
    )
    membraneSynth.chain(
      membranePingPongDelay,
      membraneChebyshev,
      membranePhaser,
      membraneBitCrusher,
      membraneAutoPanner,
      membraneDistortion,
      membraneAutoFilter,
      membraneTremolo,
      Tone.Master
    )
    metalSynth.chain(Tone.Master)
    noiseSynth.chain(Tone.Master)
    membraneSynthEffects.chain(
      membraneeffectPingPongDelay,
      membraneeffectChebyshev,
      membraneeffectPhaser,
      membraneeffectBitCrusher,
      membraneeffectAutoPanner,
      membraneeffectDistortion,
      membraneeffectAutoFilter,
      membraneeffectTremolo,
      Tone.Master
    )
    membraneSynthEffects2.chain(Tone.Master)

    // metalSynth.chain(Tone.Master)

    this.state = {
      // lastChange: Date.now(),
      // timeout: 100,
      ambientSynth,
      ambientPingPongDelay: {
        name: 'ambientPingPongDelay',
        effect: ambientPingPongDelay,
        wet: defaultWetValue,
        on: false
      },
      ambientChebyshev: {
        name: 'ambientChebyshev',
        effect: ambientChebyshev,
        wet: defaultWetValue,
        on: false
      },

      ambientPhaser: {
        name: 'ambientPhaser',
        effect: ambientPhaser,
        wet: defaultWetValue,
        on: false
      },

      ambientBitCrusher: {
        name: 'ambientBitCrusher',
        effect: ambientBitCrusher,
        wet: defaultWetValue,
        on: false
      },

      ambientAutoPanner: {
        name: 'ambientAutoPanner',
        effect: ambientAutoPanner,
        wet: defaultWetValue,
        on: false
      },

      ambientDistortion: {
        name: 'ambientDistortion',
        effect: ambientDistortion,
        wet: defaultWetValue,
        on: false
      },
      ambientAutoFilter: {
        name: 'ambientAutoFilter',
        effect: ambientAutoFilter,
        wet: defaultWetValue,
        on: false
      },
      ambientTremolo: {
        name: 'ambientTremolo',
        effect: ambientTremolo,
        wet: defaultWetValue,
        on: false
      },

      leadSynth,
      leadChebyshev: {
        name: 'leadChebyshev',
        effect: leadChebyshev,
        wet: defaultWetValue,
        on: false
      },

      leadBitCrusher: {
        name: 'leadBitCrusher',
        effect: leadBitCrusher,
        wet: defaultWetValue,
        on: false
      },

      leadAutoPanner: {
        name: 'leadAutoPanner',
        effect: leadAutoPanner,
        wet: defaultWetValue,
        on: false
      },

      leadDistortion: {
        name: 'leadDistortion',
        effect: leadDistortion,
        wet: defaultWetValue,
        on: false
      },
      leadAutoFilter: {
        name: 'leadAutoFilter',
        effect: leadAutoFilter,
        wet: defaultWetValue,
        on: false
      },

      loop1: { loop: loop1, on: false },
      loop2: { loop: loop2, on: false },
      loop3: { loop: loop3, on: false },
      loop4: { loop: loop4, on: false },

      amSynth,
      amPingPongDelay: {
        name: 'amPingPongDelay',
        effect: amPingPongDelay,
        wet: defaultWetValue,
        on: false
      },
      amChebyshev: {
        name: 'amChebyshev',
        effect: amChebyshev,
        wet: defaultWetValue,
        on: false
      },

      amPhaser: {
        name: 'amPhaser',
        effect: amPhaser,
        wet: defaultWetValue,
        on: false
      },

      amBitCrusher: {
        name: 'amBitCrusher',
        effect: amBitCrusher,
        wet: defaultWetValue,
        on: false
      },

      amAutoPanner: {
        name: 'amAutoPanner',
        effect: amAutoPanner,
        wet: defaultWetValue,
        on: false
      },

      amDistortion: {
        name: 'amDistortion',
        effect: amDistortion,
        wet: defaultWetValue,
        on: false
      },
      amAutoFilter: {
        name: 'amAutoFilter',
        effect: amAutoFilter,
        wet: defaultWetValue,
        on: false
      },
      amTremolo: {
        name: 'amTremolo',
        effect: amTremolo,
        wet: defaultWetValue,
        on: false
      },
      membraneSynth,
      membranePingPongDelay: {
        name: 'membranePingPongDelay',
        effect: membranePingPongDelay,
        wet: defaultWetValue,
        on: false
      },
      membraneChebyshev: {
        name: 'membraneChebyshev',
        effect: membraneChebyshev,
        wet: defaultWetValue,
        on: false
      },

      membranePhaser: {
        name: 'membranePhaser',
        effect: membranePhaser,
        wet: defaultWetValue,
        on: false
      },

      membraneBitCrusher: {
        name: 'membraneBitCrusher',
        effect: membraneBitCrusher,
        wet: defaultWetValue,
        on: false
      },

      membraneAutoPanner: {
        name: 'membraneAutoPanner',
        effect: membraneAutoPanner,
        wet: defaultWetValue,
        on: false
      },

      membraneDistortion: {
        name: 'membraneDistortion',
        effect: membraneDistortion,
        wet: defaultWetValue,
        on: false
      },
      membraneAutoFilter: {
        name: 'membraneAutoFilter',
        effect: membraneAutoFilter,
        wet: defaultWetValue,
        on: false
      },
      membraneTremolo: {
        name: 'membraneTremolo',
        effect: membraneTremolo,
        wet: defaultWetValue,
        on: false
      },

      metalSynth,
      noiseSynth,
      membraneSynthEffects,
      membraneeffectPingPongDelay: {
        name: 'membraneeffectPingPongDelay',
        effect: membraneeffectPingPongDelay,
        wet: defaultWetValue,
        on: false
      },
      membraneeffectChebyshev: {
        name: 'membraneeffectChebyshev',
        effect: membraneeffectChebyshev,
        wet: defaultWetValue,
        on: false
      },

      membraneeffectPhaser: {
        name: 'membraneeffectPhaser',
        effect: membraneeffectPhaser,
        wet: defaultWetValue,
        on: false
      },

      membraneeffectBitCrusher: {
        name: 'membraneeffectBitCrusher',
        effect: membraneeffectBitCrusher,
        wet: defaultWetValue,
        on: false
      },

      membraneeffectAutoPanner: {
        name: 'membraneeffectAutoPanner',
        effect: membraneeffectAutoPanner,
        wet: defaultWetValue,
        on: false
      },

      membraneeffectDistortion: {
        name: 'membraneeffectDistortion',
        effect: membraneeffectDistortion,
        wet: defaultWetValue,
        on: false
      },
      membraneeffectAutoFilter: {
        name: 'membraneeffectAutoFilter',
        effect: membraneeffectAutoFilter,
        wet: defaultWetValue,
        on: false
      },
      membraneeffectTremolo: {
        name: 'membraneeffectTremolo',
        effect: membraneeffectTremolo,
        wet: defaultWetValue,
        on: false
      },

      membraneSynthEffects2,

      part1: {
        part: parts.part1(amSynth),
        on: false
      },
      part2: {
        part: parts.part2(amSynth),
        on: false
      },

      seq1: {
        seq: seqs.seq1(leadSynth),
        on: false
      },
      seq2: {
        seq: seqs.seq2(amSynth),
        on: false
      },
      seqdrum: {
        seq: seqs.seqdrum(membraneSynth),
        on: false
      },
      seqdrum2: {
        seq: seqs.seqdrum2(membraneSynthEffects),
        on: false
      },
      seqSnare: {
        seq: seqs.seqSnare(noiseSynth, metalSynth, membraneSynth),

        on: false
      },
      seqPerc: {
        seq: seqs.seqPerc(membraneSynthEffects),
        on: false
      },
      seqPerc2: {
        seq: seqs.seqPerc2(membraneSynthEffects2),
        on: false
      },
      seqSnare2: {
        seq: seqs.seqSnare2(noiseSynth, metalSynth, membraneSynth),

        on: false
      },
      bpm: 90,
      volume: 90
    }

    _.bindAll(
      this,
      // 'getRandomArbitrary',
      // 'generateRandom',
      'toggleLoop',
      'togglePart',
      'toggleSeq',
      'toggleEffect',
      'changeEffectWetValue',
      'changeEffectValue',
      'changeSynthValue',
      'changeBPMValue',
      'changeVolumeValue'
    )

    // Tone.Transport.bpm.value = 180
    Tone.Transport.start()
  }

  changeBPMValue(synthName, effectName, value) {
    Tone.Transport.bpm.value = Math.round(value)

    this.setState({
      bpm: Math.round(value)
    })
  }

  changeVolumeValue(synthName, effectName, value) {
    Tone.Master.volume.value = Math.round(value)

    this.setState({
      volume: Math.round(value)
    })
  }

  componentDidMount() {
    //this.generateRandom()

    let { name, effect, wet, on } = this.state.ambientDistortion

    effect.wet.value = on == true ? this.props.wet : 0
    effect.distortion = this.props.distortion
    effect.oversample = this.props.oversample

    this.setState({
      ambientDistortion: {
        name,
        effect,
        wet: this.props.wet,
        on
      }
    })
  }

  ///RANDOM

  // getRandomArbitrary(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min
  // }
  //
  // generateRandom() {
  //   const { lastChange, timeout } = this.state
  //
  //   if (Date.now() - lastChange >= timeout) {
  //     const random = this.getRandomArbitrary(100, 3000)
  //     this.setState({
  //       lastChange: Date.now(),
  //       timeout: random
  //     })
  //
  //     this.changeDistortionValue('distortion', random / 30)
  //   }
  //
  //   setTimeout(() => this.generateRandom(), timeout)
  // }

  toggleLoop(loopName) {
    let { loop, on } = this.state[loopName]

    on == true ? loop.stop() : loop.start('0m')

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    })
  }

  //ПАРТЫ
  togglePart(partName) {
    let { part, on } = this.state[partName]

    if (on == true) {
      part.mute = true
    } else {
      // console.log('yo')
      part.mute = false
      part.at('0m')
      part.start(0)
      part.loop = true
      part.loopEnd = '1m'
    }

    this.setState({
      [`${partName}`]: {
        part: part,
        on: !on
      }
    })
  }

  toggleSeq(seqName) {
    let { seq, on } = this.state[seqName]
    // on == true ? seq.stop() : seq.start('0m')

    if (on == true) {
      seq.mute = true
    } else {
      // console.log('yo')
      seq.mute = false
      seq.start('0m')
    }

    this.setState({
      [`${seqName}`]: {
        seq: seq,
        on: !on
      }
    })
  }

  changeSynthValue(synthName, effectName, value) {
    let synth = this.state[synthName]
    // console.log(synthName, effectName, value)
    // //ambientSynth attack 0.45555555555555555
    // console.log(synth)
    let envelope = synth.envelope

    envelope[effectName] = value

    this.setState({
      [`${effectName}`]: {
        oscillator: synth.oscillator,
        envelope: envelope
      }
    })
  }

  toggleEffect(effectName) {
    let { name, effect, wet, on } = this.state[effectName]
    // console.log(this.state.autoPanner)

    effect.wet.value = on == true ? 0 : wet
    on = !on

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  changeEffectWetValue(effectName, effectProperty, value) {
    let { name, effect, wet, on } = this.state[effectName]
    // console.log(effectName, effectProperty, value)

    effect[effectProperty].value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  changeEffectValue(effectName, effectProperty, value) {
    let { name, effect, wet, on } = this.state[effectName]

    if (effectProperty == 'order') {
      value = Math.round(value)
    }

    effect[effectProperty] = value

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  // Специфичность чебушев
  // changeChebyshevValue(effectName, value) {
  //   let { effect, wet, on } = this.state.chebyshev
  //
  //   effect.order = Math.round(value)
  //
  //   this.setState({
  //     chebyshev: {
  //       effect,
  //       wet,
  //       on
  //     }
  //   })
  // }

  render() {
    let {
      ambientSynth,
      ambientPingPongDelay,
      ambientChebyshev,
      ambientPhaser,
      ambientBitCrusher,
      ambientAutoPanner,
      ambientDistortion,
      ambientAutoFilter,
      ambientTremolo,

      leadSynth,
      leadChebyshev,

      leadBitCrusher,
      leadAutoPanner,
      leadDistortion,
      leadAutoFilter,

      loop1,
      loop2,
      loop3,
      loop4,
      part1,
      part2,
      seq1,
      seq2,
      seqdrum,
      seqdrum2,

      seqPerc,
      seqPerc2,
      seqSnare,
      seqSnare2,

      amSynth,
      amPingPongDelay,
      amChebyshev,
      amPhaser,
      amBitCrusher,
      amAutoPanner,
      amDistortion,
      amAutoFilter,
      amTremolo,

      membraneSynth,
      membranePingPongDelay,
      membraneChebyshev,
      membranePhaser,
      membraneBitCrusher,
      membraneAutoPanner,
      membraneDistortion,
      membraneAutoFilter,
      membraneTremolo,

      metalSynth,
      noiseSynth,

      membraneSynthEffects,
      membraneeffectPingPongDelay,
      membraneeffectChebyshev,
      membraneeffectPhaser,
      membraneeffectBitCrusher,
      membraneeffectAutoPanner,
      membraneeffectDistortion,
      membraneeffectAutoFilter,
      membraneeffectTremolo,

      membraneSynthEffects2,
      bpm,
      volume
    } = this.state

    let {
      toggleEffect,
      toggleLoop,
      togglePart,
      toggleSeq,
      changeSynthValue,
      changeEffectWetValue,
      changeEffectValue,
      changeEffectFilterValue,
      changeBPMValue,
      changeVolumeValue
    } = this

    return (
      <div>
        <div className="TopArea">
          <div className="controlsArea">
            <div className="minusplusCover">
              <div className="minus"></div>
              <div>
                <Volume volume={volume} changeVolumeValue={changeVolumeValue} />
              </div>
              <div className="plus"></div>
            </div>
          </div>
          <div className="logoArea">
            <div className="logo"></div>
          </div>

          <div className="controlsArea2">
            <div className="minusplusCover">
              <div className="minus"></div>
              <div>
                <Speed bpm={bpm} changeBPMValue={changeBPMValue} />
              </div>
              <div className="plus"></div>
            </div>
          </div>
        </div>

        <div className="PlaysSwitchCover">
          <div className="PannelsCover2">
            <div className="block"> </div>
            <div className="LeadEffectCover" id="lead">
              <Distortion
                {...leadDistortion}
                toggleEffect={() => toggleEffect('leadDistortion')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
              <BitCrusher
                {...leadBitCrusher}
                toggleEffect={() => toggleEffect('leadBitCrusher')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
              <AutoFilter
                {...leadAutoFilter}
                toggleEffect={() => toggleEffect('leadAutoFilter')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
            </div>
          </div>

          <div className="PannelsCover1">
            <div className="AmEffectsCover">
              <Distortion
                {...amDistortion}
                toggleEffect={() => toggleEffect('amDistortion')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
              <BitCrusher
                {...amBitCrusher}
                toggleEffect={() => toggleEffect('amBitCrusher')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
              <Phaser
                {...amPhaser}
                toggleEffect={() => toggleEffect('amPhaser')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
            </div>
          </div>

          <div className="PlaySwitchContainer">
            <div className="ButtonContainerGroup1">
              <div className="DrumButton" id="drum">
                <div className="ButtonNameContainer" id="membrane">
                  *DRUM*
                  <div className="ButtonExplain">kick 1</div>
                  <PlaySwitch
                    synth="membraneSynth"
                    instrument={membraneSynth}
                    name="play"
                    value={seqdrum.on}
                    handleToggleClick={() => {
                      this.toggleSeq('seqdrum')
                    }}
                  />
                  <div className="note" id="membrane"></div>
                </div>
              </div>

              <div className="DrumButton" id="drum">
                <div className="ButtonNameContainer" id="membraneeffect">
                  *DRUM*
                  <div className="ButtonExplain">kick 2</div>
                  <PlaySwitch
                    synth="membraneSynthEffects"
                    instrument={membraneSynthEffects}
                    name="play"
                    value={seqdrum2.on}
                    handleToggleClick={() => {
                      this.toggleSeq('seqdrum2')
                    }}
                  />
                  <div className="note" id="membraneeffect"></div>
                </div>
              </div>
            </div>
            <div className="PadPercContainer">
              <div className="ButtonContainerGroup2">
                <div className="ButtonNameContainer">
                  *PAD*
                  <div className="ButtonExplain">Part 1</div>
                  <PlaySwitch
                    synth="amSynth"
                    instrument={amSynth}
                    name="play"
                    value={part1.on}
                    handleToggleClick={() => {
                      this.togglePart('part1')
                    }}
                  />
                  <div className="note" id="membrane"></div>
                </div>
                <div className="ButtonNameContainer" id="lead">
                  *PAD*
                  <div className="ButtonExplain">loop 4</div>
                  <PlaySwitch
                    synth="leadSynth"
                    instrument={leadSynth}
                    name="play"
                    value={loop4.on}
                    handleToggleClick={() => {
                      this.toggleLoop('loop4')
                    }}
                  />
                  <div className="note" id="lead"></div>
                </div>
                <div className="ButtonNameContainer" id="lead">
                  *PAD*
                  <div className="ButtonExplain">Seq 1</div>
                  <PlaySwitch
                    // name={name}
                    synth="leadSynth"
                    instrument={leadSynth}
                    name="play"
                    value={seq1.on}
                    handleToggleClick={() => {
                      this.toggleSeq('seq1')
                    }}
                  />
                  <div className="note" id="lead"></div>
                </div>
                <div className="ButtonNameContainer">
                  *PAD*
                  <div className="ButtonExplain">Seq 2</div>
                  <PlaySwitch
                    synth="amSynth"
                    instrument={amSynth}
                    name="play"
                    value={seq2.on}
                    handleToggleClick={() => {
                      this.toggleSeq('seq2')
                    }}
                  />
                  <div className="note" id="membrane"></div>
                </div>
                <div className="ButtonNameContainer">
                  *PAD*
                  <div className="ButtonExplain">Loop 2</div>
                  <PlaySwitch
                    synth="amSynth"
                    instrument={amSynth}
                    name="play"
                    value={loop2.on}
                    handleToggleClick={() => {
                      this.toggleLoop('loop2')
                    }}
                  />
                  <div className="note" id="membrane"></div>
                </div>
              </div>

              <div className="ButtonContainerGroup4">
                <div className="ButtonNameContainer" id="ambient">
                  *RERC*
                  <div className="ButtonExplain">Noise</div>
                  <PlaySwitch
                    synth="ambientSynth"
                    instrument={ambientSynth}
                    name="play"
                    value={loop1.on}
                    handleToggleClick={() => {
                      this.toggleLoop('loop1')
                    }}
                  />
                  <div className="note" id="ambient"></div>
                </div>
                <div className="ButtonNameContainer" id="membraneeffect">
                  *PERC*<div className="ButtonExplain">1</div>
                  <PlaySwitch
                    synth="membraneSynthEffects"
                    instrument={membraneSynthEffects}
                    name="play"
                    value={seqPerc.on}
                    handleToggleClick={() => {
                      this.toggleSeq('seqPerc')
                    }}
                  />
                  <div className="note" id="membraneeffect"></div>
                </div>
                <div className="ButtonNameContainer" id="membraneeffect">
                  *PERC*<div className="ButtonExplain">2</div>
                  <PlaySwitch
                    synth="membraneSynthEffects2"
                    instrument={membraneSynthEffects2}
                    name="play"
                    value={seqPerc2.on}
                    handleToggleClick={() => {
                      this.toggleSeq('seqPerc2')
                    }}
                  />
                  <div className="note" id="membraneeffect"></div>
                </div>
              </div>
            </div>

            <div className="ButtonContainerGroup3">
              <div className="DrumButton" id="drum">
                <div className="ButtonNameContainer" id="membrane">
                  *DRUM*
                  <div className="ButtonExplain"> SNARE + Hi1</div>
                  <PlaySwitch
                    synth="metalSynth ,  noiseSynth, membraneSynth"
                    instrument={(metalSynth, noiseSynth, membraneSynth)}
                    name="play"
                    value={seqSnare.on}
                    handleToggleClick={() => {
                      this.toggleSeq('seqSnare')
                    }}
                  />
                  <div className="note" id="membrane"></div>
                </div>
              </div>
              <div className="DrumButton" id="drum">
                <div className="ButtonNameContainer" id="membrane">
                  *DRUM*
                  <div className="ButtonExplain"> SNARE + Hi2</div>
                  <PlaySwitch
                    synth="metalSynth ,  noiseSynth, membraneSynth"
                    instrument={(metalSynth, noiseSynth, membraneSynth)}
                    name="play"
                    value={seqSnare2.on}
                    handleToggleClick={() => {
                      this.toggleSeq('seqSnare2')
                    }}
                  />
                  <div className="note" id="membrane"></div>
                </div>
              </div>
            </div>
            <div className="PannelsCover5">
              <div className="MembranEffectCover" id="membrane">
                <Distortion
                  {...membraneDistortion}
                  toggleEffect={() => toggleEffect('membraneDistortion')}
                  changeEffectWetValue={changeEffectWetValue}
                  changeEffectValue={changeEffectValue}
                />
                <BitCrusher
                  {...membraneBitCrusher}
                  toggleEffect={() => toggleEffect('membraneBitCrusher')}
                  changeEffectWetValue={changeEffectWetValue}
                  changeEffectValue={changeEffectValue}
                />
                <AutoFilter
                  {...membraneAutoFilter}
                  toggleEffect={() => toggleEffect('membraneAutoFilter')}
                  changeEffectWetValue={changeEffectWetValue}
                  changeEffectValue={changeEffectValue}
                />
              </div>
            </div>
          </div>

          <div className="PannelsCover4">
            <div className="AmbientEffectsCover" id="ambient">
              <Distortion
                {...ambientDistortion}
                toggleEffect={() => toggleEffect('ambientDistortion')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
              <BitCrusher
                {...ambientBitCrusher}
                toggleEffect={() => toggleEffect('ambientBitCrusher')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
              <AutoPanner
                {...ambientAutoPanner}
                toggleEffect={() => toggleEffect('ambientAutoPanner')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
            </div>
          </div>

          <div className="PannelsCover3">
            <div className="MembranEffectsEffectCover" id="membraneeffect">
              <Distortion
                {...membraneeffectDistortion}
                toggleEffect={() => toggleEffect('membraneeffectDistortion')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
              <BitCrusher
                {...membraneeffectBitCrusher}
                toggleEffect={() => toggleEffect('membraneeffectBitCrusher')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
              <AutoFilter
                {...membraneeffectAutoFilter}
                toggleEffect={() => toggleEffect('membraneeffectAutoFilter')}
                changeEffectWetValue={changeEffectWetValue}
                changeEffectValue={changeEffectValue}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
