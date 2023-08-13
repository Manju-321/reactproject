let text = '{ "employees" : [' + 
'{ "firstName":"John" ,"lastName":"Doe","address":{"streetAddress":"88 2nd street","city":"New York"}},'+
'{ "firstName":"Anna" ,"lastName":"Smith","address":{"streetAddress":"88 2nd street","city":"New York"}},'+
'{ "firstName":"Peter" ,"lastName":"Jones","address":{"streetAddress":"88 2nd street","city":"New York"}}]}';

let obj=JSON.parse(text)

console.log(obj.employees[1].firstName+" "+obj.employees[2].lastName+" "+obj.employees[1].address.streetAddress+" "+obj.employees[1].address.city);