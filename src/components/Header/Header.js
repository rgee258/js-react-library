import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <h1 className="main-header">
        {props.text}
      </h1>
    </div>
  )
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header;