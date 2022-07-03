

//ts联合类型union

type MyPick<T, K extends keyof T> = {
  [P in K] : T[P]
}

//js
function myPick (todo, keys) {
  const obj = {}

  keys.forEach(key => {
    if(key in todo ) {
      obj[key] = todo[key]
    }
  });

  return obj
}


//返回一个对象
//遍历foreach
//todo[key] 取值
// 看看key 在不在todo里面

