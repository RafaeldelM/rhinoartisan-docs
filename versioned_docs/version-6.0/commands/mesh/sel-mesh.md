# Sel Mesh

## <img src="../../.gitbook/assets/SEL_MESH.png" alt="" data-size="line"> Sel Mesh <a href="#profiles" id="profiles"></a>

The SelMesh command selects all mesh objects.

### <img src="../../.gitbook/assets/SEL_CLOSED_MESH.png" alt="" data-size="line"> Sel Closed Mesh <a href="#profiles" id="profiles"></a>

The SelClosedMesh command selects all closed mesh objects.

### <img src="../../.gitbook/assets/SEL_OPEN_MESH.png" alt="" data-size="line"> Sel Open Mesh <a href="#profiles" id="profiles"></a>

The SelOpenMesh command selects all open mesh objects.

### <img src="../../.gitbook/assets/SEL_VISIBLE.png" alt="" data-size="line"> Sel Visible <a href="#profiles" id="profiles"></a>

The SelVisible command selects all surfaces or meshes that are in front of other objects in the active viewport with a crossing selection.



**Steps**

* Drag a crossing selection.

Note: The SelVisible command does not work with block instances since they are drawn using their own draw lists that have no relationship with other objects in the model.

### <img src="../../.gitbook/assets/SEL_EDGE_LOOP.png" alt="" data-size="line"> Sel Edge Loop <a href="#profiles" id="profiles"></a>

The SelEdgeLoop command selects a loop of mesh/SubD edges by picking an edge in the loop.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/seledgeloop.gif" alt=""></div>

**Steps**

1.  Pick a mesh/SubD edge.

    The picked edge is highlighted brighter than the rest of edges in the loop.

    You can hold down Ctrl(CMD) and pick the brighter edge to deselect the loop.
2. Press Enter to accept the selection.\
   An edge loop is selected.
3. Hold down Shift + Ctrl(CMD) and pick the edges to deselect individually.

* This command only works on meshes with UV information.
* This command can be used when a command prompts for selecting mesh/SubD edges.

### <img src="../../.gitbook/assets/SEL_EDGE_RING.png" alt="" data-size="line"> Sel Edge Ring <a href="#profiles" id="profiles"></a>

The SelEdgeRing command selects a ring of mesh/SubD edges by picking an edge in the ring.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/seledgering.gif" alt=""></div>

**Steps**

1.  Pick a mesh/SubD edge.

    The picked edge is highlighted brighter than the rest edges in the ring.

    You can hold down Ctrl(CMD) and pick the brighter edge to deselect the ring.
2. Press Enter to accept the selection.\
   An edge ring is selected.
3. Hold down Shift + Ctrl(CMD) and pick the edges to deselect individually.

* This command only works on meshes with UV information.
* This command can be used when a command prompts for selecting mesh/SubD edges.

### <img src="../../.gitbook/assets/SEL_FACE_LOOP.png" alt="" data-size="line"> Sel Face Loop <a href="#profiles" id="profiles"></a>

The SelFaceLoop command selects a loop of mesh/SubD faces by picking an edge between any two faces in the loop.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/selfaceloop.gif" alt=""></div>

**Steps**

1.  Pick a mesh/SubD edge.

    The picked edge is highlighted brighter than the rest edges in the loop.

    You can hold down Ctrl(CMD) and pick the brighter edge to deselect the loop.
2. Press Enter to accept the selection.\
   A face loop is selected.
3. Hold down Shift + Ctrl(CMD) and pick the faces to deselect individually.

* This command only works on meshes with UV information.
* This command can be used when a command prompts for selecting mesh/SubD faces.

