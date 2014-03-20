<style>
.reveal section del,
.reveal h1 del {
  color: #FF9900;
}

.reveal section code {
  font-size: 14px;
}
</style>

gravicom
========================================================
author: Andrea Kaplan
date: March 27, 2014
font-family: Helvetica
css: css/charts.css

A web-based tool for community detection in networks

Outline
========================================================

- Introduction/Background
- User Interface
- Demo
- Technical Aspects
- Further Work

Introduction
========================================================
type: section

Who cares and why did we make this?

Networks 
========================================================

Community Detection
========================================================

The Problem
========================================================

Current Solutions
========================================================

User Interface
========================================================
type: section

Meet gravicom

Site Components
========================================================
1. Control Panel
1. Data Management
1. Connection table
1. Graph display
1. Tabset

An Interface
========================================================
![Site Components](images/sitecomponents.png)


Demo
========================================================
type: section

http://shiny1.iastate.edu/andeek/gravicom  
<small>(must be VPNed to internal ISU network)</small>

Technical Aspects
========================================================
type: section

What makes it tick?

Tools
========================================================
class: particle-chart

- **Shiny**: Server-client interaction
- **D3**: User interface and graph layout
- **igraph**: Data formatting

Tools (Cont'd)
========================================================
![Integrated Algorithm](images/clientserverflow.png)

Page Lifecycle
========================================================
![Integrated Algorithm](images/pagelifecycle.png)

Data Formatting
========================================================
GML file structure:

```
graph
[
  directed 0
  node
  [
    id 0
    label "Node 1"
    value 100
  ]
  node
  [
    id 1
    label "Node 2"
    value 200
  ]
  edge
  [
    source 1
    target 0
  ]
]
```


JSON file structure:

```
{
  "nodes":
  [{"id":"n0","v_id":"0","v_label":"Node 1","v_value":"100"}, 
   {"id":"n1","v_id":"1","v_label":"Node 2","v_value":"200"}], 
 "edges":
  [{"source":0, "target":1}]
}
```


Force-Directed Layout
========================================================

Graph Simplification
========================================================


Further Work
========================================================
type: section

Possible extensions to gravicom

Integrated Algorithmic Community Detection
========================================================
- Combine the benefits of human detection of communities with algorithmic detection
- Visual detection of communities serves as an initialization step
- Pass to iterative algorithm
- User tracks progress and has power to dynamically set stopping criterion

How would it work?
=======================================================
![Integrated Algorithm](images/integrated_algorithm.png)

Dynamic Temporal Graph Visualization
========================================================
- View a dynamic graph across time -- how the edges change between nodes 
- Detect time-dependent communities
- Add optional node labels to track progress

Questions?
========================================================
type: section

Thank you!

<script type="text/javascript" src="scripts/jquery.min.js"></script>
<script type="text/javascript" src="scripts/d3.v3.min.js"></script>
<script type="text/javascript" src="scripts/charts.js"></script>
<script>$(document).ready(function() { (particleChart())()  });</script>

