const Add = require ('./Add.js');

const Subtract = require ('./Subtract.js');

const Multiply = require ('./Multiply.js');

const Divide  = require ('./Divide.js');


const Koa = require('koa');

const app = new Koa();


const castFirstNumber = async (context, next) => 

    {
        
        const firstNumber = parseInt(context.query.firstNumber);
        
        await next();

        context.body = 
        
            {
            
                message: '2xx'
        
            }
    
    };


const castSecondNumber = async (context) => 

    {
    
        const secondNumber = parseInt(context.query.secondNumber);

        context.body = 
        
            {
            
                message: '2xx'
        
            }
        
    }

app.use(castFirstNumber);

app.use(castSecondNumber);

app.listen(6969);




class Calculator 

    {

        calculate (operator, firstNumber, secondNumber) 
    
            {
        
                return operator.operate (firstNumber, secondNumber); 
    
            }

    }

    
var runCalculator = new Calculator( );


console.log(runCalculator.calculate(new Add(), process.argv[2], process.argv[3]));

console.log(runCalculator.calculate(new Subtract(), process.argv[2], process.argv[3]));

console.log(runCalculator.calculate(new Multiply(), process.argv[2], process.argv[3]));

console.log(runCalculator.calculate(new Divide(), process.argv[2], process.argv[3]));


try 

    {
        
        console.log(runCalculator.calculate(new Divide(), process.argv[2], process.argv[3]));
    
    } 

catch (e) 

    {
        
        console.log(e);

    }


