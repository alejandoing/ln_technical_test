import moment from "moment";

import "moment/locale/es";

moment.locale("es");

export const createDate = (date) => moment(new Date(date));
export const formatDate = (date, format = "LL") =>
  createDate(date).format(format);

export const mapByKey = (arr, key) => arr.map((x) => x[key]);
export const mergeArr = (arr) => [].concat.apply([], arr);

export const sortByLength = (arr) => arr.sort((a, b) => b.length - a.length);

export const groupArrDuplicate = (arr) =>
  [...new Set(arr)].map((x) => arr.filter((y) => y === x));

export const findEqual = (arr, key, val) => arr.find((y) => y[key] === val);
