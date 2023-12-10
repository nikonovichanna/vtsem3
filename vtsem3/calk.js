let operation = prompt("Выбери знак арифметической операции (+, -, *, /):");
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
function calculator(num1, num2, operation) {
    let result;
    
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Некорректная операция";
        break;
    }
    
    return result;
  }
  
  let result = calculator(num1, num2, operation);
  alert(`Результат: ${result}`);
  