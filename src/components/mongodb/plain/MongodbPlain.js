import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './MongodbPlain.svg'

/** MongodbPlain */
function MongodbPlain({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'MongodbPlain' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

MongodbPlain.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MongodbPlain
