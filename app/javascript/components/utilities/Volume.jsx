import React from 'react'

import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class Volume extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { volume, changeVolumeValue } = this.props

    return (
      <div className="Effect">
        <div className="controlsContainer">
          <div className="controlsRow">
            <div className="SliderUtilities">
              <h2>vol {volume}</h2>
              <Slider
                name="volume"
                property="volume"
                min="10"
                max="100"
                value={volume}
                handleValueChange={changeVolumeValue}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
