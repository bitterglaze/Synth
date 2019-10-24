import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class PingPongDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let name = 'pingPongDelay'
    const {
      name,
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue
    } = this.props

    return (
      <div>
        <div className="Pannel" id="blue">
          <div className="controlsContainer">
            <div className="controlRow">
              <ToggleSwitch
                value="PingPongDelay"
                current={on}
                handleClick={toggleEffect}
              />
              <h2>Wet</h2>
              <div className="SliderStick"></div>
              <Slider
                name={name}
                property="wet"
                min="0"
                max="1"
                value={wet}
                handleValueChange={changeEffectWetValue}
              />
            </div>

            <div className="controlRow">
              <h2>delayTime</h2>
              <div className="SliderStick"></div>
              <Slider
                name={name}
                min="0.01"
                max="1"
                value={effect.delayTime}
                handleValueChange={changeEffectValue}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
