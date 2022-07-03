type Concat<T extends unknown[], Y extends unknown[]> = [...T, ...Y];
 

//js 
function Concat(arryA, arryB) {
  return [...arryA,...arryB]
}


//infer

type First< T extends unknown[]> =  T extends [infer First, ...infer next] ? First : never;
type Last< T extends unknown[]> =  T extends [...infer next, infer Last] ? Last : never;