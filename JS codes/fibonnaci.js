function fibonacciGenerator (n) {

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
    }
    
    