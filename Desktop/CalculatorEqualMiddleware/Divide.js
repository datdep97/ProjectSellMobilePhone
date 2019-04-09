class Divide
    
    {
    
        operate (firstNumber, secondNumber) 
        
            {

                if (secondNumber == 0) 
            
                    {
                
                        throw ('Unknown. Please insert second number must be other zero');
                
                    } 
            
                else 
            
                    {
                
                        return firstNumber / secondNumber;
                    
                    }
        
            }
    
    }


module.exports = Divide;