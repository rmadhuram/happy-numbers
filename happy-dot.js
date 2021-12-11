
function ssq(n) {
  let k = n
  let sum = 0
  while (k != 0) {
    sum += (k%10)**2
    k = Math.floor(k/10)
  }
  return sum
}

let N = 200

let edges = []
for (let i=0; i<N; i++) {
  edges.push(i + '->' + ssq(i) + ' [penwidth=3]')
}

let graph = `digraph G {` + edges.join('\n') + '}'
console.log(graph)

// https://github.com/magjac/d3-graphviz/issues/7#issuecomment-348393896
function renderDotEnd() {
  /* Remove width and height attributes from svg element,
     so that it scales to fit its container */
  d3.select("#graph > svg")
    .attr("width", null)
    .attr("height", null)

  document.getElementById('info').remove();
}

d3.select("#graph").graphviz()
  .engine('fdp')
  .renderDot(graph, renderDotEnd);