import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="All categories">All categories</option>
      <option value="Food">Food</option>
      <option value="Home">Home</option>
      <option value="Electronics">Electronics</option>
    </select>
  );
};

export default ExpenseFilter;
