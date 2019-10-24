import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class BitCrusher extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let name = 'bitCrusher'
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
        <div className="Pannel">
          <div className="controlsContainer">
            <div className="lableCover">
              <ToggleSwitch
                value="BitCrusher"
                current={on}
                handleClick={toggleEffect}
              />
              <div className="lable"></div>
            </div>

            <div className="EffectCover">
              <h5>Wet</h5>
              <div className="EffectControl">
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
            </div>
            <div className="EffectCover">
              <h5>Bits</h5>
              <div className="EffectControl">
                <div className="SliderStick"></div>
                <Slider
                  name={name}
                  min="-3"
                  max="3"
                  value={effect.bits}
                  handleValueChange={changeEffectValue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
