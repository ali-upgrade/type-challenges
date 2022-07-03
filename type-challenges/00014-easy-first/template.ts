// type First<T extends any[]> =T extends [] ? never : T[0]; 
// type First<T extends any[]> =T["length"] extends 0 ? never : T[0]; 
// type First<T extends any[]> =T[0] extends T[number] ? T[0] : never; 
type First<T extends any[]> =T extends [infer First, ...infer rest] ? First : never; 


//T[number]
type ages = [1,2,3]
//union
type t1 = ages[number]
// 1 extends 1   1 extends 2    1 extends 3
// type t2 = T[0] extends ages[number] ? "true" : 'false'


//extends类型条件判断
//获取tuple的lenth属性
//extends union 判断规则
// infer 的使用



// js
const first = (arr) => {
  // return arr[0];
  const [first, ...rest] = arr
    return first
}

