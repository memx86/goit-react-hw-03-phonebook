import PropTypes from "prop-types";
import s from "./Filter.module.css";

function Filter({ filter, setFilter }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value);
  };
  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by Name
        <input
          className={s.input}
          type="text"
          placeholder=" "
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
export default Filter;
