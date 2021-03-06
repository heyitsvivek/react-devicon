import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './PhotoshopLine.svg'

/** PhotoshopLine */
function PhotoshopLine({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'PhotoshopLine' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

PhotoshopLine.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PhotoshopLine
