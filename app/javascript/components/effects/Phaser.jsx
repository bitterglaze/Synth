import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class Phaser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let name = 'phaser'
    const {
      name,
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue,
      changePhaserSecValue
    } = this.props

    return (
      <div>
        <div className="Pannel" id="pink">
          <div className="controlsContainer">
            <div className="lableCover">
              <ToggleSwitch
                value="Phaser"
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
                max="10000"
                value={effect.frequency}
                handleValueChange={changeEffectValue}
              />
            </div>
          </div>

          <div className="EffectCover">
            <h5>Oct</h5>
            <div className="EffectControl">
              <div className="SliderStick"></div>
              <Slider
                name={name}
                min="0"
                max="8"
                value={effect.octaves}
                handleValueChange={changeEffectValue}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
