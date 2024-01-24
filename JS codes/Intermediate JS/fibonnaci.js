function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        let sequence = [];
        if (n === 1) {
            sequence = [0];
        }
        
        else if (n === 2) {
            sequence = [0, 1]    
        }

        else {
            sequence = [0,1];
            sequence.push (sequence[sequence.length - 2] + sequence[sequence.length - 1]);
            for (var i=sequence.length; i < n; i++) {
                sequence.push (sequence[sequence.length - 2] + sequence[sequence.length - 1]);
            }
        }

        
            return sequence;
        
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    