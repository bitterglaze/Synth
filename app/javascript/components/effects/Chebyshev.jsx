import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class Chebyshev extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let name = 'chebyshev'
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
        <div className="Pannel" id="purple">
          <div className="controlsContainer">
            <ToggleSwitch
              value="Chebyshev"
              current={on}
              handleClick={toggleEffect}
            />
            <div className="EffectCover">
              <h2>Wet</h2>
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
          </div>

          <div className="EffectCover">
            <h2>Order</h2>
            <div className="EffectControl">
              <div className="SliderStick"></div>
              <Slider
                name={name}
                min="0"
                max="10"
                value={effect.order}
                handleValueChange={changeEffectValue}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
