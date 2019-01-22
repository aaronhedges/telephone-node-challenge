const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// quick and dirty que for this app
class Queue 
{ 
    constructor() { 
        this.items = []; 
    } 
                  
    enqueue(element) {     
        this.items.push(element); 
    } 
    
    dequeue() { 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 

    front() { 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    }  

    isEmpty() { 
        return this.items.length == 0; 
    } 

    printQueue() { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 
} 

// quick and direct single page for testing
const server = http.createServer((req, res) => {
  const startDigit = '5';
  const stepCount = '2';

  graphStep(startDigit, stepCount);  

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World - reload page to see output of bfs map function in command line output');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

