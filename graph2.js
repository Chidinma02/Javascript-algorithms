let graph = {};

function addFriend(graph,person,friend){

    if(!graph[person]){
        graph[person]=[];
    }

    if(!graph[friend]){
        graph[friend] = [];
    }

    graph[person].push(friend);

    graph[friend].push(person)
}
// let friendsGraph = {}; // Start with an empty graph

addFriend(graph, "Alice", "Bob");

// addFriend(graph, "Alice", "Charlie");
// addFriend(graph, "Bob", "Charlie");
// addFriend(graph, "Charlie", "David");
// addFriend(graph, "David", "Eve");

console.log(graph);
