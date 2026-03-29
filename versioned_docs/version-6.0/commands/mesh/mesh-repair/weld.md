# Weld

## <img src="../../../.gitbook/assets/WELD.png" alt="" data-size="line"> Weld <a href="#profiles" id="profiles"></a>

The **Weld** command removes creases from a mesh by merging coincident mesh vertices. This helps smooth out the mesh and eliminate unwanted sharp edges. As vertices are merged, individual texture mapping, color, and normal vector data are averaged or discarded for the affected vertices. New vertex normals are created as averages of the adjacent face normals.

***

### **How to Use the Weld Command**

1. **Select a mesh** to apply the weld.
2. **Specify the angle tolerance value** that determines how closely aligned the adjacent faces must be for their vertices to be welded.

***

### **Command-Line Options**

* **Angle Tolerance**\
  Sets the maximum angle between the faces that will allow their coincident vertices to be merged into a single vertex.
  * If two naked edge points are coincident, and their neighboring faces are within the specified angle tolerance, they will be replaced by one vertex.
  * If the points belong to different sub-meshes of a joined mesh, the meshes will merge into one, and the resulting mesh cannot be exploded.
  * As you adjust the tolerance, the mesh edges that are within the tolerance for welding will be highlighted.

***

This command is useful for cleaning up meshes by removing unnecessary creases and ensuring smooth transitions between adjacent faces, improving the overall appearance and geometry of the model.

### <img src="../../../.gitbook/assets/WELD_VERTICES.png" alt="" data-size="line"> Weld Vertices <a href="#profiles" id="profiles"></a>

The WeldVertices command merges selected coincident vertices on joined mesh edges into single vertices.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/weldvertices_mesh.gif" alt=""></div>

&#x20;

Or, converts selected SubD creased vertices into smooth vertices.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/weldvertices_subd.gif" alt=""></div>

**Supported input**

* Mesh Vertex, Control point.
* SubD Vertex, Edit point, Control point

### <img src="../../../.gitbook/assets/WELD_EDGE.png" alt="" data-size="line"> Weld Edge <a href="#profiles" id="profiles"></a>

The WeldEdge command:

* Merges coincident mesh vertices along selected unwelded mesh edges.
* Smooths selected creased edges in SubDs.

