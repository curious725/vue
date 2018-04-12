var data = { a: 1 }
var app1 = new Vue({
  el: '#app-1',
  data: {
    message: data
  }
})

// Получение свойства из экземпляра
// возвращает тоже значение из исходных данных
app1.message.a === data.a // true

// Изменение свойства экземпляра
// будет влиять на оригинальные данные
app1.message.a = 2
data.a  // => 2

// ... и наоборот
data.a = 3
app1.message.a // => 3

var obj = {
  foo: 'bar'
}

// Object.freeze(), которое предотвращает изменение существующих свойств, что 
// также означает, что система реактивности не сможет отслеживать изменения.
// Object.freeze(obj)

var app2 = new Vue({
  el: '#app-2',
  data() {
    return {
      obj
    }
  }
})
