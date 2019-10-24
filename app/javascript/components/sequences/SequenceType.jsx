// import React from 'react'
//
// import PlaySwitch from '../controls/PlaySwitch'
// import ToggleSwitch from '../controls/ToggleSwitch'
//
// import ButtonSet from '../controls/ButtonSet'
//
// export default class Distortion extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     const set = ['none', '2x', '4x']
//
//     const {
//       name,
//       effect,
//       wet,
//       on,
//       toggleEffect,
//       changeEffectWetValue,
//       changeEffectValue,
//       changeDistortionValue
//     } = this.props
//
//     return (
//       <div>
//         <div className="Pannel">
//           <div className="controlsContainer">
//             <div className="controlRow">
//               <ToggleSwitch
//                 value="Distortion"
//                 current={on}
//                 handleClick={toggleEffect}
//               />
//               <div className="EffectCover">
//                 <h2>Wet</h2>
//                 <div className="EffectControl">
//                   <div className="SliderStick"></div>
//                   <Slider
//                     id="1"
//                     name={name}
//                     property="wet"
//                     min="0"
//                     max="1"
//                     value={wet}
//                     handleValueChange={changeEffectWetValue}
//                   />
//                 </div>
//               </div>
//             </div>
//
//             <div className="controlRow">
//               <div className="EffectCover">
//                 <h2>Distortion</h2>
//                 <div className="EffectControl">
//                   <div className="SliderStick"></div>
//                   <Slider
//                     name={name}
//                     property="distortion"
//                     min="0"
//                     max="100"
//                     value={effect.distortion}
//                     handleValueChange={changeEffectValue}
//                   />
//                 </div>
//               </div>
//               <div className="EffectCover">
//                 <h2>Oversample</h2>
//                 <div className="EffectControl">
//                   <ButtonSet
//                     name={name}
//                     property="oversample"
//                     set={set}
//                     value={effect.oversample}
//                     handleValueChange={changeEffectValue}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
