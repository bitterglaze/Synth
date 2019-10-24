import React from 'react'

import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class Speed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { bpm, changeBPMValue } = this.props

    return (
      <div className="Effect">
        <div className="controlsContainer">
          <div className="controlsRow">
            <div className="SliderUtilities">
              <h2>BPM {bpm}</h2>
              <Slider
                name="Bpm"
                property="bpm"
                min="1"
                max="200"
                value={bpm}
                handleValueChange={changeBPMValue}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
