import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

// export let instrument = new Tone.PolySynth({})

export default class PolySynth extends React.Component {
  constructor(props) {
    super(props)
    _.bindAll(this, 'handleValueChange')
  }

  handleValueChange(name, property, value) {
    const { changeSynthValue } = this.props
    changeSynthValue(name, property, value)
  }

  render() {
    const { synth, on, togglePlay } = this.props
    // const { attack, decay, sustain, release } = instrument.envelope
    // const { width } = instrument.oscillator

    return (
      <div className="Effect">
        <ToggleSwitch value="PolySynth" current={on} handleClick={togglePlay} />

        <div className="controlsContainer">
          <div className="controlsRow"></div>
        </div>
      </div>
    )
  }
}
