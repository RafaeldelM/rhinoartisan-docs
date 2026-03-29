# Mesh Management

## <img src="../../../.gitbook/assets/4_3DPRINT_TRIM.png" alt="" data-size="line"> Trim

The MeshTrim command deletes selected portions of a mesh inside or outside where they are intersected with another object.

## <img src="../../../.gitbook/assets/5_3DPRINT_SPLIT.png" alt="" data-size="line"> Split

The MeshSplit command divides meshes into parts with another object.

## <img src="../../../.gitbook/assets/6_3DPRINT_TRIANGULATE.png" alt="" data-size="line"> Triangulate

The TriangulateMesh command splits all planar quadrangular polygon mesh faces into two triangular mesh faces.

## <img src="../../../.gitbook/assets/7_3DPRINT_WELL_VERTEX.png" alt="" data-size="line"> Weld

The Weld command removes creases from a mesh by merging coincident [mesh vertices](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/meshvertex.htm).

Individual texture mapping, colour, and normal vector data are averaged/created/destroyed for the affected vertices.

Weld will create new vertex normals at each welded vertex that are the average of the adjacent face normals. After welding, one vertex is shared by more than one face.

:::info
If two naked mesh edge points of a selected mesh are coincident, and their neighbouring faces are within the angle tolerance of each other, they will be replaced by a single mesh point. If the two points are from different "sub-meshes" of a joined mesh, the meshes become one mesh that cannot explode.

As you change the tolerance, the mesh edges that are within the tolerance and will therefore be welded are highlighted.
:::

## <img src="../../../.gitbook/assets/8_3DPRINT_DELETE_FACE.png" alt="" data-size="line"> Delete Face

The DeleteFaces command removes selected faces from a mesh, SubD or Polysurface. It is most effective in a shaded display mode since you can see and directly pick faces.



## <img src="../../../.gitbook/assets/9_3DPRINT_FILL_HOLE.png" alt="" data-size="line"> Fill Hole

The FillMeshHole command fills a selected hole in a mesh.

<figure><img src="../../../.gitbook/assets/image (492).png" alt=""><figcaption><p>This helps repair mesh files for rapid prototype printing.</p></figcaption></figure>

## <img src="../../../.gitbook/assets/9_3DPRINT_FILL_HOLES.png" alt="" data-size="line"> Fill Holes

The FillMeshHoles command fills all holes in a polygon mesh object with triangular faces.

Unlike the 'Fill Hole' command, this one does not require selecting an open edge; instead, it will attempt to close all holes in the mesh.<br>

## <img src="../../../.gitbook/assets/9_3DPRINT_OFFSET.png" alt="" data-size="line"> Offset

The OffsetMesh command copies a mesh by moving the vertices a specified distance with different direction modes.<br>

<figure><img src="../../../.gitbook/assets/offsetmesh.gif" alt=""><figcaption></figcaption></figure>



## <img src="../../../.gitbook/assets/11_3DPRINT_BOOLEAN_UNION.png" alt="" data-size="line"> Boolean Union

The MeshBooleanUnion command trims away the shared areas of selected meshes, [polysurfaces](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/polysurface.htm), or surfaces and creates a single mesh from the unshared areas.

## <img src="../../../.gitbook/assets/12_3DPRINT_BOOLEAN_DIFFERENCE.png" alt="" data-size="line"> Boolean Difference

The MeshBooleanDifference command trims away the shared areas of selected meshes, [polysurfaces](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/polysurface.htm), or surfaces with another set of meshes, polysurfaces, or surfaces.

## <img src="../../../.gitbook/assets/13_3DPRINT_BOOLEAN_SPLIT.png" alt="" data-size="line"> Boolean Split

The MeshBooleanSplit command trims away shared areas of selected meshes, [polysurfaces](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/polysurface.htm), or surfaces and create separate meshes from the shared and unshared parts.

## <img src="../../../.gitbook/assets/14_3DPRINT_BOOLEAN_INTERSECTION.png" alt="" data-size="line"> Boolean Intersection

The MeshBooleanIntersection command trims the unshared areas of selected meshes, [polysurfaces](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/polysurface.htm), or surfaces.

<br>



