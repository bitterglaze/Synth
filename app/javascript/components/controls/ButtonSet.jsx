import React from 'react'

import Button from './Button'

export default class ButtonSet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { name, property, set, value, images, handleValueChange } = this.props
    let buttons = []

    set.map((option, i) => {
      buttons.push(
        <Button
          name={name}
          property={property}
          option={option}
          current={value}
          images={images}
          handleClick={handleValueChange}
          key={i}
        />
      )
    })

    return <div className="ButtonSet">{buttons}</div>
  }
}
