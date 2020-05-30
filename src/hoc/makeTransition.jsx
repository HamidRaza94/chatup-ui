import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion'

const makeTransition = (WrappedComponent) => {
  const Wrapper = (props) => {
    const baseStyle = {
      position: props.animate ? 'relative' : 'fixed',
      left: props.animate ? 'auto' : '50%',
    };

    const animateStyle = {
      translateX: props.animate ? spring(0, presets.wobbly) : spring(-50),
    };

    return (
      <Motion style={animateStyle}>
        {({ translateX }) => {
          const divStyle = Object.assign({}, baseStyle, {
            transform: `translateX(${translateX}%)`,
          });

          return (
            <div style={divStyle}>
              <WrappedComponent {...props} />
            </div>
          )
        }}
      </Motion>
    );
  }

  Wrapper.propTypes = {
    animate: PropTypes.bool.isRequired,
  }

  return Wrapper;
};

export default makeTransition;
