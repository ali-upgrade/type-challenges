type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]] : P
}

//js
function tupleToObject(array) {
  const obj = {};

  array.forEach((val) => {
    obj[val] = val;
  });

  return obj;
}

//keyof array -> 索引

//返回对象
//遍历数组