import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Tremolo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['none', '2x', '4x']

    const {
      name,
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue,
      changeTremoloValue
    } = this.props

    return (
      <div>
        <div className="Pannel">
          <div className="controlsContainer">
            <div className="controlRow">
              <ToggleSwitch
                value="Tremolo"
                current={on}
                handleClick={toggleEffect}
              />
              <div className="EffectCover">
                <h2>Wet</h2>
                <div className="EffectControl">
                  <div className="SliderStick"></div>
                  <Slider
                    id="1"
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

            <div className="controlRow">
              <div className="EffectCover">
                <h2>frequency</h2>
                <div className="EffectControl">
                  <div className="SliderStick"></div>
                  <Slider
                    name={name}
                    min="0"
                    max="100"
                    value={effect.frequency}
                    handleValueChange={changeEffectValue}
                  />
                </div>
              </div>
              <div className="EffectCover">
                <h2>depth</h2>
                <div className="EffectControl">
                  <Slider
                    name={name}
                    min="0"
                    max="100"
                    value={effect.depth}
                    handleValueChange={changeEffectValue}
                  />
                </div>
                <h2>spread</h2>
                <div className="EffectControl">
                  <Slider
                    name={name}
                    min="0"
                    max="100"
                    value={effect.spread}
                    handleValueChange={changeEffectValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
