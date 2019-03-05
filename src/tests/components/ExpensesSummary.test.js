import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpensesSummary correctly with single expense", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary correctly with multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={235165165165} />);
  expect(wrapper).toMatchSnapshot();
});