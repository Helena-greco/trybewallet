import React from 'react';
import PropTypes from 'prop-types';

class InputPadrao extends React.Component {
  render() {
    const { name, description, value, handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        {description}
        <input
          data-testid={ name }
          name={ name }
          id={ name }
          value={ value }
          onChange={ handleChange }
          type={ name }
        />
      </label>
    );
  }
}

InputPadrao.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputPadrao;
