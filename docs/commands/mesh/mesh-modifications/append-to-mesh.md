# Append to mesh

## <img src="../../../.gitbook/assets/APPEND_TO_MESH.png" alt="" data-size="line"> Append to mesh <a href="#profiles" id="profiles"></a>

The 3DFace command creates mesh or SubD faces that can be standalone or added to an existing mesh or SubD.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/3dface_mesh_subd.png)

A mesh face (left) and a SubD face (right)

* When meshes or SubDs are pre-selected, the 3DFace command starts in the [Append](https://docs.mcneel.com/rhino/8/help/en-us/commands/3dface.htm#Append) mode.

### Command-line options

**Output**

**Mesh**

Creates mesh faces.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/3dface_mesh.gif)

**SubD**

Creates SubD faces.

**Interpolated (Yes/No)**

| <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/3dface_interpolated.gif" alt="" data-size="original"> |    |
| ------------------------------------------------------------------------------------------------------------------------------------ | -- |
| Yes                                                                                                                                  | No |

Conceptually, this is the difference between what the [Curve](https://docs.mcneel.com/rhino/8/help/en-us/commands/curve.htm) and [InterpCrv](https://docs.mcneel.com/rhino/8/help/en-us/commands/interpcrv.htm) commands do. The Curve command turns input points into the curve's control points. The InterpCrv command creates a curve to pass the input points.

**Append**

Selects an existing mesh or SubD to which the new faces will be added.

* During appending new faces, press ESC to cancel the current face creation. Press ESC one more time to cancel the command.

**PolygonType (Triangle/Quad/Ngon)**

Specifies to create triangle, quad, or n-gon faces.

* When PolygonType=Ngon, picking not enough points adds a triangle or quad face.

**FromEdge**

**Yes**

Each new face is started by selecting an existing mesh or SubD boundary edge.

**Chain (Yes/No)**

Create faces along an edge chain. The edge chain can be from an existing mesh or the current creating mesh.

This option is only available when PolygonType= Quad

**Example**

1. Click the Append option to select a mesh or SubD.
2. Set PolygonType=Quad, FromEdge=Yes, Chain=Yes, and Mode=MultipleFaces.
3. Select a boundary edge of the object.
4. Pick two points to form the first face.
5. Pick one point to form the next face and repeat.
6.  Right-click to start a new edge chain.

    ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/append_chain.gif)

**FromEdgeReset**

**Yes**

Resets FromEdge to No in the next 3DFace command session.

**No**

Remembers the setting of FromEdge for the next 3DFace command session.

**No**

Each new face is created by picking points.

**InPlane (Yes/No)**

Set Yes to define a plane with the first three points and constrain the rest points of the current face on that plane. This option only takes effect when PolygonType=Quad/Ngon.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/3dface_inplane.gif)

**WeldAngle (Only for Output=Mesh)**

The welding tolerance for mesh edges in degrees. Welding applies to edges around new faces. The default angle is 180 degrees that welds all edges.

**Mode (SingleFace/MultipleFaces)**

Specifies to create only one or more faces in a command session.

**Undo**

Removes the previous pick.
