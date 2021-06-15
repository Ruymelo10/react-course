import './styles.css'

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
}