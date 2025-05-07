let graph ={}

function addFriend(graph,person,friend){
    if(!graph[friend]){
        graph[friend]=[]
    }

    if(!graph[person]){
        graph[person]=[]
    }


    graph[person].push(friend);
    graph[friend].push(person)
}
addFriend(graph, "Alice", "Bob");
console.log(graph);