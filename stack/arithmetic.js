function arithmeticStack(numbers) {

      // Infix to Postfix
      let arrNumber = numbers.split('');
      let operan = [];
      let operator = [];
      let temp = "";

      for (let i = 0; i <= arrNumber.length; i++) {

            if (!isNaN(arrNumber[i]) === true) {
                  temp += arrNumber[i];

            } else if (arrNumber[i] === '+' || arrNumber[i] === '-' || arrNumber[i] === '*' || arrNumber[i] === '/') {

                  if (temp.length > 0) {
                        operan.push(parseInt(temp));
                        temp = "";
                  }

                  operator.push(arrNumber[i]);


            } else if (arrNumber[i] === ')') {

                  if (temp.length > 0) {
                        operan.push(parseInt(temp));
                        temp = "";
                  }

                  operan.push(operator.pop());
            }

      }

      if (temp.length > 0) {
            operan.push(parseInt(temp));
            temp = "";
      }

      // untuk push operator yang masih tersisa ke operan
      while (operator.length !== 0) {
            operan.push(operator.pop());
      }


      // Postfix to Arithmetic 
      let result = [];

      for (let i = 0; i < operan.length; i++) {
            if (typeof operan[i] === 'number') {
                  result.push(operan[i]);

            } else {
                  if (operan[i] === '+') {
                        let num1 = result.pop();
                        let num2 = result.pop();
                        result.push(num2 + num1);

                  } else if (operan[i] === '-') {
                        let num1 = result.pop();
                        let num2 = result.pop();
                        result.push(num2 - num1);

                  } else if (operan[i] === '*') {
                        let num1 = result.pop();
                        let num2 = result.pop();
                        result.push(num2 * num1);

                  } else if (operan[i] === '/') {
                        let num1 = result.pop();
                        let num2 = result.pop();
                        result.push(num2 / num1);
                  }
            }
      }

      return result;

}

console.log(arithmeticStack('12+(2*2)+10+10-(2-1)'));
console.log(arithmeticStack('2+(2*2)+2'));
console.log(arithmeticStack('2+2+(2*1)+100+(2/2)+10+(2*1)'));
console.log(arithmeticStack('2+2'));
console.log(arithmeticStack('2+2+2*2'));
console.log(arithmeticStack('2+(10)'));
console.log(arithmeticStack('2+2+(2*1)'));