var data = { a: 1}

var vm = new Vue({
  data: data
})

// Получение свойства из экземпляра
// возвращает тоже значение из исходных данных
vm.a === data.a // => true

// Изменение свойства экземпляра
// будет влиять на оригинальные данные
vm.a = 2
data.a // => 2

// ... и наоборот
data.a = 3
vm.a // => 3

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
