import moment from "moment";
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";

test("should generate set start date action object", () => {
  const date = 1000;
  const action = setStartDate(moment(date));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(date)
  });
});

test("should generate set end date action object", () => {
  const date = 3000;
  const action = setEndDate(moment(date));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(date)
  });
});

test("should generate sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should generate sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should generate set text filter action object with provided values", () => {
  const text = "text"
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should generate set text filter action object with default values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});