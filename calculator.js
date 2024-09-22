var num1 = +prompt("Enter any value 1")
var num2 = +prompt("Enter any value 2")
var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var div = num1 / num2
var mod = num1 % num2


document.write(
    "<table width='250px' border='1px'>"+
    "<tr>"+
    "<th>"+"ADDITION : "+add+"</th>"
    +"</tr>"
    +"</table>"+

    "<table width='250px' border='1px'>"+
    "<tr>"+
    "<th>"+"SUBSTRACTION : "+sub+"</th>"
    +"</tr>"
    +"</table>"+

    "<table width='250px' border='1px'>"+
    "<tr>"+
    "<th>"+"MULTIPLICATION : "+mul+"</th>"
    +"</tr>"
    +"</table>"+

    "<table width='250px' border='1px'>"+
    "<tr>"+
    "<th>"+"DIVISION : "+div+"</th>"
    +"</tr>"
    +"</table>"+

    "<table width= '250px' border='1px'>"+
    "<tr>"+
    "<th>"+"MODULUS : "+mod+"</th>"
    +"</tr>"
    +"</table>"
)