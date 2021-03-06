import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './CeylonOriginalWordmark.svg'

/** CeylonOriginalWordmark */
function CeylonOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'CeylonOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

CeylonOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CeylonOriginalWordmark
