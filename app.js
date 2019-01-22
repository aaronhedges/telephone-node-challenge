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

// new graph class to handle mappping
class Graph {
    constructor(noOfVertices) { 
        this.noOfVertices = noOfVertices; 
        this.AdjList = new Map(); 
        this.curMapDirection = null;
    } 
  
    addVertex(v) { 
        this.AdjList.set(v, []); 
    } 

    addEdge(v, w) { 
        this.AdjList.get(v).push(w); 
        this.AdjList.get(w).push(v); 
    }

    printGraph() { 
        let get_keys = this.AdjList.keys(); 
      
        console.log('printGraph: ');
        for (var i of get_keys) { 
            let get_values = this.AdjList.get(i); 
            let conc = ""; 
      
            for (var j of get_values) 
                conc += j + " "; 
      
            console.log(i + " -> " + conc); 
        } 
    }  
  
    bfs(startingNode, stepCount) {
        console.log('bfs function start');
        console.log('======================');
        console.log('startingNode: ', startingNode);
        let currentStep = 0;
        console.log('currentStep: ', currentStep);
        console.log('stepCount: ', stepCount);
      
        let visited = []; 
        for (var i = 0; i < this.noOfVertices; i++) 
            visited[i] = false; 
      
        let q = new Queue(); 
      
        visited[startingNode] = true; 
        q.enqueue(startingNode); 

        while (!q.isEmpty()) { 
            let getQueueElement = q.dequeue();
      
            console.log('getQueueElement: ', getQueueElement); 
      
            // get adjacent list for current vertex 
            let get_List = this.AdjList.get(getQueueElement); 
            console.log('get_List: ', get_List);
      
            // loop to only process new vertexes 
            for (var i in get_List) { 
                var neigh = get_List[i]; 
      
                if (!visited[neigh]) { 
                    visited[neigh] = true; 
                    q.enqueue(neigh); 
                } 
            } 
        } 
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

