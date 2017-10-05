import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './RedisOriginalWordmark.svg'

/** RedisOriginalWordmark */
function RedisOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'RedisOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

RedisOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default RedisOriginalWordmark
