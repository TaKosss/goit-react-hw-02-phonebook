import { nanoid } from 'nanoid';
const Filter = ({ filter, onChange }) => {
  const inputId = nanoid();
  return (
    <label>
      Find contact by name{' '}
      <input
        type="text"
        id={inputId}
        value={filter}
        onChange={onChange}
        name="filter"
      ></input>
    </label>
  );
};

export default Filter;
