// import React from 'react'
//
// import PlaySwitch from '../PlaySwitch'
// import ToggleSwitch from '../ToggleSwitch'
// import Slider from '../Slider'
// import Knob from '../Knob'
//
// export default class FeedbackDelay extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     let name = 'feedbackDelay'
//     const {
//       effect,
//       wet,
//       on,
//       toggleEffect,
//       changeEffectWetValue,
//       changeFeedbackDelayValue
//     } = this.props
//
//     return (
//       <div>
//         <div className="Pannel">
//           <h1>Feedback Delay</h1>
//           <div className="controlsContainer">
//             <div className="controlRow">
//               <h2>Wet</h2>
//               <Slider
//                 name={name}
//                 min="0"
//                 max="1"
//                 value={wet}
//                 handleValueChange={changeEffectWetValue}
//               />
//             </div>
//
//             <div className="controlRow">
//               <h2>Max Delay</h2>
//               <Slider
//                 name={name}
//                 min="0"
//                 max="100"
//                 value={effect.maxDelay}
//                 handleValueChange={changeEffectValue}
//               />
//             </div>
//           </div>
//           <ToggleSwitch value="Delay" current={on} handleClick={toggleEffect} />
//         </div>
//       </div>
//     )
//   }
// }
