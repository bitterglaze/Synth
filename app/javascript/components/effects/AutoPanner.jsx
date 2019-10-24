import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class AutoPanner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let name = 'autoPanner'
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
            <div className="lableCover">
              <ToggleSwitch
                value="AutoPanner"
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
          </div>

          <div className="EffectCover">
            <h5>Freq</h5>
            <div className="EffectControl">
              <div className="SliderStick"></div>
              <Slider
                name={name}
                min="0"
                max="20"
                value={effect.frequency}
                handleValueChange={changeEffectValue}
              />
            </div>
          </div>

          <div className="EffectCover">
            <h5>Depth</h5>
            <div className="EffectControl">
              <div className="SliderStick"></div>
              <Slider
                name={name}
                min="0"
                max="1"
                value={effect.depth}
                handleValueChange={changeEffectValue}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
