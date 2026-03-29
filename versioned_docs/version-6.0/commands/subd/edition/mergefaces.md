# MergeFaces

## <img src="../../../.gitbook/assets/G5_04_SUBD_MERGE_FACES.png" alt="" data-size="line"> MergeFaces

The MergeFaces command merges a connected set of SubD or mesh faces into a single face.

<div align="left"><figure><img src="../../../.gitbook/assets/image (667).png" alt="" width="296"><figcaption></figcaption></figure></div>

<div align="left"><figure><img src="../../../.gitbook/assets/image (668).png" alt="" width="294"><figcaption></figcaption></figure></div>

### **Input**

* SubD Face, Edge, Vertex
* Mesh Face, Edge, Vertex

### How faces are merged:

* If a vertex is selected, the faces around the vertex are merged into a single face.
* If an edge is selected, the faces on either side of the edge are merged into a single face.
* If a collection of faces is selected, they are partitioned into subsets. Each subset is merged into a single face.
* Faces separated by a SubD crease or an unwelded mesh edge cannot be merged. Use the RemoveCrease command to remove the crease or unwelded edge before merging the faces.
* Use Ctrl(CMD)+Shift+Click to select vertices or edges and press Delete to merge the surrounding faces into a single face. Deleting faces with Delete will leave holes.

### Command-line options

**Results = Selected / NotSelected**

Specifies if the resulting merged face will be selected.

#### Mesh/SubD face loop selection (Post-selection)

**To select an entire face loop**

1. Click a face.
2. Double-click the next face that decides the loop direction.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/doubleclickfaceloop.gif" alt=""></div>

**To select a face loop range**

1. Click two faces in a loop.
2. Double-click a face in between and next to one of the selected faces.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/doubleclickfacelooprange.gif" alt=""></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mergefaces.htm#\(null\)).
