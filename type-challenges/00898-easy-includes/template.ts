import { Equal } from "@type-challenges/utils";
export type Includes<T extends any[], U> = T extends [
  infer First,
  ...infer rest
]
? Equal<First, U> extends true
? true
: Includes<rest, U>
: false;

//js
// function Includes (list, key) {
//   for(let i = 0; i < list.length; i++) {
//     const element = list[i];
//     if(element == key) {
//       return true
//     }
//   }
//   return false;
// }


function Includes (list, key) {
  function _ (list, key) {
    const [frist, ...rest] = list;
    if(frist === key) {
      return true
    } else {
      return _(rest, key)
    }
  }

  return _(list, key);
}