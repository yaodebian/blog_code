// 初始化画布
function init (nodes, id, set) {
  // 声明实例
  var $ = go.GraphObject.make
  myDiagram =
        $(go.Diagram, 'myDiagramDiv', {
          initialAutoScale: go.Diagram.Uniform,
          initialContentAlignment: go.Spot.Center,
          'undoManager.isEnabled': true,
          isReadOnly: true,
          // when a node is selected, draw a big yellow circle behind it
          nodeSelectionAdornmentTemplate: $(go.Adornment, 'Auto', {layerName: 'Grid'}, // the predefined layer that is behind everything else
            $(go.Shape, 'RoundedRectangle', {
              fill: '#c1cee3',
              stroke: null
            }),
            $(go.Placeholder, {margin: 2})
          ),
          layout: // use a custom layout, defined below
            $(GenogramLayout, {
              direction: 90,
              layerSpacing: 100,
              columnSpacing: 10
            })
        })

  // Set up a Part as a legend, and place it directly on the diagram
  myDiagram.add(
    $(go.Part, 'Table', {
      position: new go.Point(-100, -100),
      selectable: false
    },
    $(go.TextBlock, '标识', {
      row: 0,
      font: '700 14px Droid Serif, sans-serif'
    }), // end row 0
    $(go.Panel, 'Horizontal', {
      row: 1,
      alignment: go.Spot.Left
    },
    $(go.Shape, 'RoundedRectangle', {
      desiredSize: new go.Size(30, 30),
      stroke: null,
      strokeWidth: 0,
      fill: '#90CAF9',
      margin: 5
    }),
    $(go.TextBlock, '男性', {font: '700 13px Droid Serif, sans-serif'})
    ), // end row 1
    $(go.Panel, 'Horizontal', {
      row: 2,
      alignment: go.Spot.Left
    },
    $(go.Shape, 'RoundedRectangle', {
      desiredSize: new go.Size(30, 30),
      stroke: null,
      strokeWidth: 0,
      fill: '#F48FB1',
      margin: 5
    }),
    $(go.TextBlock, '女性', {font: '700 13px Droid Serif, sans-serif'})
    ), // end row 2
    $(go.Panel, 'Horizontal', {
      row: 3,
      alignment: go.Spot.Left
    },
    $(go.Shape, 'RoundedRectangle', {
      desiredSize: new go.Size(30, 30),
      stroke: null,
      strokeWidth: 0,
      fill: 'yellow',
      margin: 5
    }),
    $(go.TextBlock, '本人', {font: '700 13px Droid Serif, sans-serif'})
    ) // end row 3
    ))

  // define Converters to be used for Bindings
  function sexBrushConverter (s) {
    if (s === 'M') { 
      return '#90CAF9' 
    }
    if (s === 'F') { 
      return '#F48FB1' 
    }
    if (s === 'MY') {
      return 'yellow'
    }
    return 'lightgray'
  }

  //get tooltip text from the object's data
  function tooltipTextConverter (person) {
    var str = ''
    str += person.tag + ': ' + person.n + '\n身份证号：' + person.code + '\n是否死亡：' + person.dead
    return str
  }

  // define tooltips for nodes
  var tooltiptemplate =
    $('ToolTip', {
      'Border.fill': 'whitesmoke',
      'Border.stroke': 'black'
    },
    $(go.TextBlock, {
      font: 'bold 8pt Helvetica, bold Arial, sans-serif',
      wrap: go.TextBlock.WrapFit,
      margin: 5
    },
    new go.Binding('text', '', tooltipTextConverter))
    )

  // 设置每个节点的样式
  myDiagram.nodeTemplate =
        $(go.Node, 'Auto', {
          deletable: false,
          toolTip: tooltiptemplate,
          doubleClick: function (e, node) {
            var data = node.hb
            if (!data.expanded) {
              var keys = nodes.map(item => {
                return item.key
              })
              var extData = set[data.key]
              if (!extData) {
                return
              }
              var len = extData.length
              var temp = []
              var nLen = nodes.length
              for (var i = 0; i < len; i++) {
                if (keys.indexOf(extData[i].key) === -1) {
                  temp.push(extData[i])
                } else if (keys.indexOf(extData[i].key) !== -1 && extData[i].key === data.key) {
                  for (var m = 0; m < nLen; m++) {
                    if (nodes[m].key === data.key) {
                      nodes[m] = extData[i]
                    }
                  }
                }
              }
              for (var j = 0; j < nLen; j++) {
                if (nodes[j].key === data.key) {
                  nodes[j].expanded = true
                }
              }
              nodes = nodes.concat(temp)
              var res = []
              nLen = nodes.length
              for (var n = 0; n < nLen; n++) {
                if (nodes[n].key > 0) {
                  res.push(nodes[n])
                }
              }
              nodes = res
              setupDiagram(myDiagram, nodes, id)
            }
          }
        },
        new go.Binding('text', 'n'),
        $(go.Shape, 'RoundedRectangle', {
          fill: 'lightgray',
          stroke: null,
          strokeWidth: 0,
          // margin: 10,
          stretch: go.GraphObject.Fill,
          alignment: go.Spot.Center
        },
        new go.Binding('fill', 's', sexBrushConverter)),
        $(go.Panel, 'Table', {
          margin: new go.Margin(6, 10, 6, 6),
          defaultAlignment: go.Spot.Right
        },
        $(go.RowColumnDefinition, {
          column: 3,
          width: 4
        }),
        $(go.Picture, {
          name: 'Picture',
          desiredSize: new go.Size(30, 30),
          row: 0,
          column: 0,
        },
        new go.Binding('source', 'sex', function (value) {
          return value === 'M' ? './img/boy.png' : './img/girl.png'
        })),
        $(go.TextBlock, {
          font: '700 12px Droid Serif, sans-serif',
          margin: 5
        }, {
          row: 0,
          column: 1,
          font: '12pt Segoe UI,sans-serif',
          editable: false,
          isMultiline: false
        },
        new go.Binding('text', 'tag', function (value) {
          return '  ' + value + ': '
        })),
        $(go.TextBlock, {
          font: '700 12px Droid Serif, sans-serif',
          margin: 5,
          alignment: go.Spot.Left
        }, {
          row: 0,
          column: 2,
          font: '12pt Segoe UI,sans-serif',
          editable: false,
          isMultiline: false,
        },
        new go.Binding('text', 'n')),
        $(go.TextBlock, {
          font: '700 12px Droid Serif, sans-serif',
          margin: 5
        }, {
          row: 1,
          column: 0,
          columnSpan: 2,
          font: '12pt Segoe UI,sans-serif',
          editable: false,
          isMultiline: false,
        },
        new go.Binding('text', 'code', function () {
          return '身份证号: '
        })),
        $(go.TextBlock, {
          font: '700 12px Droid Serif, sans-serif',
          margin: 5,
          alignment: go.Spot.Left
        }, {
          row: 1,
          column: 2,
          font: '12pt Segoe UI,sans-serif',
          editable: false,
          isMultiline: false,
        },
        new go.Binding('text', 'code')),
        $(go.TextBlock, {
          font: '700 12px Droid Serif, sans-serif',
          margin: 5
        }, {
          row: 2,
          column: 0,
          columnSpan: 2,
          font: '12pt Segoe UI,sans-serif',
          editable: false,
          isMultiline: false,
        },
        new go.Binding('text', 'dead', function () {
          return '是否死亡: '
        })),
        $(go.TextBlock, {
          font: '700 12px Droid Serif, sans-serif',
          margin: 5,
          alignment: go.Spot.Left
        }, {
          row: 2,
          column: 2,
          font: '12pt Segoe UI,sans-serif',
          editable: false,
          isMultiline: false,
        },
        new go.Binding('text', 'dead'))
        )
        )

  // the context menu allows users to make a position vacant,
  // remove a role and reassign the subtree, or remove a department
  myDiagram.nodeTemplate.contextMenu =
      $('ContextMenu',
        $('ContextMenuButton',
          $(go.TextBlock, {
            width: 100,
            font: '700 12px Droid Serif, sans-serif',
            margin: 5,
            alignment: go.Spot.Left
          },
          '详情'),
          {
            click: function (e, obj) {
              alert('hello, I am yaodebian, welcome to learn front end with me.')
            }
          }
        )
      )

  myDiagram.linkTemplate = // for parent-child relationships
        $(go.Link, {
          routing: go.Link.Orthogonal,
          corner: 5,
          layerName: 'Background',
          selectable: false,
          fromSpot: go.Spot.Bottom,
          toSpot: go.Spot.Top
        },
        $(go.Shape, {
          stroke: '#424242',
          strokeWidth: 2
        })
        )

  myDiagram.linkTemplateMap.add('Marriage', // for marriage relationships
    $(go.Link, {selectable: false},
      $(go.Shape, {
        strokeWidth: 2.5,
        stroke: '#424242' /* blue */
      })
    ))

  // n: name, s: sex, m: mother, f: father, love: wife or husband
  setupDiagram(myDiagram, nodes, id /* focus on this person */ )

  return myDiagram
}


// create and initialize the Diagram.model given an array of node data representing people
/** 绘制关系图
     * @param { Object } diagram gojs实例
     * @param { Array } array 画布节点数据
     * @param { Number } fousId 初始化时被选中的元素
     */
function setupDiagram (diagram, array, focusId) {
  diagram.model =
        go.GraphObject.make(go.GraphLinksModel, { // declare support for link label nodes
          linkLabelKeysProperty: 'labelKeys',
          // this property determines which template is used
          nodeCategoryProperty: 's',
          // if a node data object is copied, copy its data.a Array
          copiesArrays: true,
          // create all of the nodes for people
          nodeDataArray: array
        })
  setupMarriages(diagram) // 绘制夫妻连线
  setupParents(diagram) // 将关系结构进行连接

  var node = diagram.findNodeForKey(focusId)
  if (node !== null) {
    diagram.select(node) // 将设定的节点进行选中
  }
}

/** 获取夫妻关系link
     * @param { Object } diagram gojs实例
     * @param { Number } a 节点的id
     * @param { Number } b 节点的id
     */
function findMarriage (diagram, a, b) { // A and B are node keys
  var nodeA = diagram.findNodeForKey(a)
  var nodeB = diagram.findNodeForKey(b)
  if (nodeA !== null && nodeB !== null) {
    var it = nodeA.findLinksBetween(nodeB) // in either direction
    while (it.next()) {
      var link = it.value
      // Link.data.category === "Marriage" means it's a marriage relationship
      if (link.data !== null && link.data.category === 'Marriage') { 
        return link 
      }
    }
  }
  return null
}

// 将具有夫妻关系的两个节点进行连接
function setupMarriages (diagram) {
  var model = diagram.model
  var nodeDataArray = model.nodeDataArray
  for (var i = 0; i < nodeDataArray.length; i++) {
    var data = nodeDataArray[i]
    var key = data.key
    var love = data.love
    if (love !== undefined) {
      if (typeof love === 'number') { 
        love = [love] 
      }
      for (var j = 0; j < love.length; j++) {
        var wife = love[j]
        if (key === wife) {
          // or warn no reflexive marriages
          continue
        }
        var link = findMarriage(diagram, key, wife) // 获取两个节点的link
        // 如果没有link，即还没有连接，则将两个节点进行连接
        if (link === null) {
          // add a label node for the marriage link
          var mlab = {s: 'LinkLabel'}
          model.addNodeData(mlab) // 添加link节点
          // add the marriage link itself, also referring to the label node
          var mdata = {
            from: key,
            to: wife,
            labelKeys: [mlab.key],
            category: 'Marriage'
          }
          model.addLinkData(mdata) // 将两个节点通过刚添加的link进行连接
        }
      }
    }
  }
}

// 一旦全部节点中的夫妻连接确定，则将父子关系的连接绘制
function setupParents (diagram) {
  var model = diagram.model
  var nodeDataArray = model.nodeDataArray
  for (var i = 0; i < nodeDataArray.length; i++) {
    var data = nodeDataArray[i]
    var key = data.key
    var mother = data.m
    var father = data.f
    var linkObj = ''
    if (mother !== undefined && father !== undefined) {
      var link = findMarriage(diagram, mother, father)
      if (link === null) {
        // or warn no known mother or no known father or no known marriage between them
        if (window.console) { 
          window.console.log('unknown marriage: ' + mother + ' & ' + father) 
        }
        continue
      }
      var mdata = link.data
      var mlabkey = mdata.labelKeys[0]
      linkObj = {
        from: mlabkey,
        to: key
      }
      myDiagram.model.addLinkData(linkObj)
    } else if (father !== undefined && mother === undefined) {
      var fNode = diagram.findNodeForKey(father)
      linkObj = {
        from: fNode.key,
        to: key
      }
      myDiagram.model.addLinkData(linkObj)
    } else if (father === undefined && mother !== undefined) {
      var mNode = diagram.findNodeForKey(mother)
      linkObj = {
        from: mNode.key,
        to: key
      }
      myDiagram.model.addLinkData(linkObj)
    }
  }
}


// A custom layout that shows the two families related to a person's parents
function GenogramLayout () {
  go.LayeredDigraphLayout.call(this)
  this.initializeOption = go.LayeredDigraphLayout.InitDepthFirstIn
  this.spouseSpacing = 30 // minimum space between spouses
}
go.Diagram.inherit(GenogramLayout, go.LayeredDigraphLayout)

GenogramLayout.prototype.makeNetwork = function (coll) {
  // generate LayoutEdges for each parent-child Link
  var net = this.createNetwork()
  if (coll instanceof go.Diagram) {
    this.add(net, coll.nodes, true)
    this.add(net, coll.links, true)
  } else if (coll instanceof go.Group) {
    this.add(net, coll.memberParts, false)
  } else if (coll.iterator) {
    this.add(net, coll.iterator, false)
  }
  return net
}

// internal method for creating LayeredDigraphNetwork where husband/wife pairs are represented
// by a single LayeredDigraphVertex corresponding to the label Node on the marriage Link
GenogramLayout.prototype.add = function (net, coll, nonmemberonly) {
  var multiSpousePeople = new go.Set()
  // consider all Nodes in the given collection
  var it = coll.iterator
  while (it.next()) {
    var node = it.value
    if (!(node instanceof go.Node)) { 
      continue 
    }
    if (!node.isLayoutPositioned || !node.isVisible()) { 
      continue 
    }
    if (nonmemberonly && node.containingGroup !== null) { 
      continue 
    }
    // if it's an unmarried Node, or if it's a Link Label Node, create a LayoutVertex for it
    if (node.isLinkLabel) {
      // get marriage Link
      var link = node.labeledLink
      var spouseA = link.fromNode
      var spouseB = link.toNode
      // create vertex representing both husband and wife
      var vertex = net.addNode(node)
      // now define the vertex size to be big enough to hold both spouses
      vertex.width = spouseA.actualBounds.width + this.spouseSpacing + spouseB.actualBounds.width
      vertex.height = Math.max(spouseA.actualBounds.height, spouseB.actualBounds.height)
      vertex.focus = new go.Point(spouseA.actualBounds.width + this.spouseSpacing / 2, vertex.height / 2)
    } else {
      // don't add a vertex for any married person!
      // instead, code above adds label node for marriage link
      // assume a marriage Link has a label Node
      var marriages = 0
      node.linksConnected.each(function (l) {
        if (l.isLabeledLink) { 
          marriages++ 
        }
      })
      if (marriages === 0) {
        var vertex = net.addNode(node)
      } else if (marriages > 1) {
        multiSpousePeople.add(node)
      }
    }
  }
  // now do all Links
  it.reset()
  while (it.next()) {
    var link = it.value
    if (!(link instanceof go.Link)) { 
      continue 
    }
    if (!link.isLayoutPositioned || !link.isVisible()) { 
      continue 
    }
    if (nonmemberonly && link.containingGroup !== null) { 
      continue 
    }
    // if it's a parent-child link, add a LayoutEdge for it
    if (!link.isLabeledLink) {
      var parent = net.findVertex(link.fromNode) // should be a label node
      var child = net.findVertex(link.toNode)
      if (child !== null) { // an unmarried child
        net.linkVertexes(parent, child, link)
      } else { // a married child
        link.toNode.linksConnected.each(function (l) {
          if (!l.isLabeledLink) { 
            return 
          } // if it has no label node, it's a parent-child link
          // found the Marriage Link, now get its label Node
          var mlab = l.labelNodes.first()
          // parent-child link should connect with the label node,
          // so the LayoutEdge should connect with the LayoutVertex representing the label node
          var mlabvert = net.findVertex(mlab)
          if (mlabvert !== null) {
            net.linkVertexes(parent, mlabvert, link)
          }
        })
      }
    }
  }

  while (multiSpousePeople.count > 0) {
    // find all collections of people that are indirectly married to each other
    var node = multiSpousePeople.first()
    var cohort = new go.Set()
    this.extendCohort(cohort, node)
    // then encourage them all to be the same generation by connecting them all with a common vertex
    var dummyvert = net.createVertex()
    net.addVertex(dummyvert)
    var marriages = new go.Set()
    cohort.each(function (n) {
      n.linksConnected.each(function (l) {
        marriages.add(l)
      })
    })
    marriages.each(function (link) {
      // find the vertex for the marriage link (i.e. for the label node)
      var mlab = link.labelNodes.first()
      var v = net.findVertex(mlab)
      if (v !== null) {
        net.linkVertexes(dummyvert, v, null)
      }
    })
    // done with these people, now see if there are any other multiple-married people
    multiSpousePeople.removeAll(cohort)
  }
}

// collect all of the people indirectly married with a person
GenogramLayout.prototype.extendCohort = function (coll, node) {
  if (coll.has(node)) { 
    return 
  }
  coll.add(node)
  var lay = this
  node.linksConnected.each(function (l) {
    if (l.isLabeledLink) { // if it's a marriage link, continue with both spouses
      lay.extendCohort(coll, l.fromNode)
      lay.extendCohort(coll, l.toNode)
    }
  })
}

GenogramLayout.prototype.assignLayers = function () {
  go.LayeredDigraphLayout.prototype.assignLayers.call(this)
  var horiz = this.direction == 0.0 || this.direction == 180.0
  // for every vertex, record the maximum vertex width or height for the vertex's layer
  var maxsizes = []
  this.network.vertexes.each(function (v) {
    var lay = v.layer
    var max = maxsizes[lay]
    if (max === undefined) { 
      max = 0 
    }
    var sz = (horiz ? v.width : v.height)
    if (sz > max) { 
      maxsizes[lay] = sz 
    }
  })
  // now make sure every vertex has the maximum width or height according to which layer it is in,
  // and aligned on the left (if horizontal) or the top (if vertical)
  this.network.vertexes.each(function (v) {
    var lay = v.layer
    var max = maxsizes[lay]
    if (horiz) {
      v.focus = new go.Point(0, v.height / 2)
      v.width = max
    } else {
      v.focus = new go.Point(v.width / 2, 0)
      v.height = max
    }
  })
  // from now on, the LayeredDigraphLayout will think that the Node is bigger than it really is
  // (other than the ones that are the widest or tallest in their respective layer).
}

GenogramLayout.prototype.commitNodes = function () {
  go.LayeredDigraphLayout.prototype.commitNodes.call(this)
  // position regular nodes
  this.network.vertexes.each(function (v) {
    if (v.node !== null && !v.node.isLinkLabel) {
      v.node.position = new go.Point(v.x, v.y)
    }
  })
  // position the spouses of each marriage vertex
  var layout = this
  this.network.vertexes.each(function (v) {
    if (v.node === null) { 
      return 
    }
    if (!v.node.isLinkLabel) { 
      return 
    }
    var labnode = v.node
    var lablink = labnode.labeledLink
    // In case the spouses are not actually moved, we need to have the marriage link
    // position the label node, because LayoutVertex.commit() was called above on these vertexes.
    // Alternatively we could override LayoutVetex.commit to be a no-op for label node vertexes.
    lablink.invalidateRoute()
    var spouseA = lablink.fromNode
    var spouseB = lablink.toNode
    // prefer fathers on the left, mothers on the right
    if (spouseA.data.s === 'F') { // sex is female
      var temp = spouseA
      spouseA = spouseB
      spouseB = temp
    }
    // see if the parents are on the desired sides, to avoid a link crossing
    var aParentsNode = layout.findParentsMarriageLabelNode(spouseA)
    var bParentsNode = layout.findParentsMarriageLabelNode(spouseB)
    if (aParentsNode !== null && bParentsNode !== null && aParentsNode.position.x > bParentsNode.position
      .x) {
      // swap the spouses
      var temp = spouseA
      spouseA = spouseB
      spouseB = temp
    }
    spouseA.position = new go.Point(v.x, v.y)
    spouseB.position = new go.Point(v.x + spouseA.actualBounds.width + layout.spouseSpacing, v.y)
    if (spouseA.opacity === 0) {
      var pos = new go.Point(v.centerX - spouseA.actualBounds.width / 2, v.y)
      spouseA.position = pos
      spouseB.position = pos
    } else if (spouseB.opacity === 0) {
      var pos = new go.Point(v.centerX - spouseB.actualBounds.width / 2, v.y)
      spouseA.position = pos
      spouseB.position = pos
    }
  })
  // position only-child nodes to be under the marriage label node
  this.network.vertexes.each(function (v) {
    if (v.node === null || v.node.linksConnected.count > 1) { 
      return 
    }
    var mnode = layout.findParentsMarriageLabelNode(v.node)
    if (mnode !== null && mnode.linksConnected.count === 1) { // if only one child
      var mvert = layout.network.findVertex(mnode)
      var newbnds = v.node.actualBounds.copy()
      newbnds.x = mvert.centerX - v.node.actualBounds.width / 2
      // see if there's any empty space at the horizontal mid-point in that layer
      var overlaps = layout.diagram.findObjectsIn(newbnds, function (x) {
        return x.part
      }, function (p) {
        return p !== v.node
      }, true)
      if (overlaps.count === 0) {
        v.node.move(newbnds.position)
      }
    }
  })
}

GenogramLayout.prototype.findParentsMarriageLabelNode = function (node) {
  var it = node.findNodesInto()
  while (it.next()) {
    var n = it.value
    if (n.isLinkLabel) { 
      return n 
    }
  }
  return null
}
// end GenogramLayout class