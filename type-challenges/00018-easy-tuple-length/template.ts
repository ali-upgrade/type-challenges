type Length<T extends readonly any[]> = T["length"] 

//js
function getLength(arr) {
  if(Array.isArray(arr)) return;
  return arr.Length;
}


//知识点
//什么是tuple类型
//tuple和普通数组有什么区别