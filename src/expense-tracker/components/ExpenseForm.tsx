import React from "react";
import { categories } from "../../App";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-lable">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-lable">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-lable">
          Category
        </label>
        <select id="category" className="form-select">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
