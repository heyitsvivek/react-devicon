import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SafariPlainWordmark.svg'

/** SafariPlainWordmark */
function SafariPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SafariPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SafariPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SafariPlainWordmark
