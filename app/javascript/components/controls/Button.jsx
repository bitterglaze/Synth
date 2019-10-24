import classnames from 'classnames'
import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, property, option, current, images, handleClick } = this.props

    const classes = classnames({
      Button: true,
      [`${option}`]: true,
      on: option == current,
      images: images
    })

    return (
      <div
        className={classes}
        onClick={() => handleClick(name, property, option)}
      >
        {images == true ? '' : option}
      </div>
    )
  }
}
