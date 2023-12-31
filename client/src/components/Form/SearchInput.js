import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/search";
import axios from "axios";

const SearchInput = () => {
  const navigate = useNavigate();
  const [values, setValues] = useSearch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/meal/search-recipe/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        style={{ width: '900px' }}
        type="search"
        placeholder="Search by recipe name, instruction keyword, or space separated ingredients"
        aria-label="Search"
        value={values.keyword}
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
      />
      <button className="btn btn-outline-success" style={{ width: '100px' }} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
