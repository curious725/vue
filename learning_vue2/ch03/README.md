Both  initialization  and registration  can be  written as  
a single  Vue.component invocation  with corresponding options:
Vue.component('hello-component',  { template: '<h1>Hello</h1>'  });


But this  would lead  to  a scope leak. 
Every instance  of  HelloComponent  would share the same data  and el.
And this  is  not exactly what  we  want. 
That  is  why Vue explicitly  demands to declare these properties  as  functions:
var HelloComponent  = Vue.component('hello-component',  { 
    el: function  ()  { 
        return  '#hello'; 
    },  
    data: function  ()  { 
        return  { 
            msg:  'Hello' 
        } 
    } 
}); 

