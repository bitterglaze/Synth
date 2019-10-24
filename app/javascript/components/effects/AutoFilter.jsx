import classnames from 'classnames'
import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class AutoFilter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const typeSet = ['sine', 'square', 'triangle', 'sawtooth']

    const classes = classnames({
      sawtooth: typeSet == '.sawtooth',
      sine: typeSet == '.sine',
      triangle: typeSet == '.triangle',
      square: typeSet == '.square'
    })

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
            <div className="controlRow">
              <div className="lableCover">
                <ToggleSwitch
                  value="AutoFilter"
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
                <h5>Depth</h5>
                <div className="EffectControl">
                  <div className="SliderStick"></div>
                  <Slider
                    name={name}
                    min="-3"
                    max="3"
                    value={effect.depth}
                    handleValueChange={changeEffectValue}
                  />
                </div>
              </div>
              <div className="EffectCover">
                <h5>Type</h5>
                <div className="EffectControl">
                  <ButtonSet
                    typeSet={''}
                    className={classes}
                    name={name}
                    property="type"
                    images={true}
                    set={typeSet}
                    value={effect.type}
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
