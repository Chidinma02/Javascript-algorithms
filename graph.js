const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];
  function buildGraph(edges) {
    let graph = Object.create(null); // Create an empty object
  
    function addEdge(from, to) {
      if (from in graph) {
        graph[from].push(to);  // If place already exists, add connection
      } else {
        graph[from] = [to];     // Otherwise, create a new entry
      }
    }
  
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);  // Add both directions (from -> to)
      addEdge(to, from);  // and (to -> from), since roads work both ways
    }
  
    return graph;
  }
  const roadGraph = buildGraph(roads);

  console.log(roadGraph)