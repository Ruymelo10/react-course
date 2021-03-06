import './styles.css';
import P from 'prop-types';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      type="search"
      placeholder="type your search"
      onChange={handleChange}
      value={searchValue}
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
