type MyReadonly<T> = {
  readonly [P in keyof T] : T[P]
}

// keyof显示键名
// [in T] 相当于遍历
//遍历得到建名
//js

function readonly(obj) {
  const result = {}

  for(const key in obj) {
    result["readonly" + key] = obj[key];
  }
 

  return result
}

//返回一个对象
//遍历obj   in -》 mapped keyof —— lookup
//通过key 来获取obj里面的值  indexed