# Swap Mesh Edge

## <img src="../../../.gitbook/assets/SNAP_MESH_EDGE.png" alt="" data-size="line"> Swap Mesh Edge <a href="#profiles" id="profiles"></a>

The **SwapMeshEdge** command transposes (swaps) the corners of mesh triangles that share an edge. This operation is useful for adjusting the mesh topology, often to improve the structure of a mesh for further modeling or 3D printing.

<figure><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/swapmeshedge-002.png" alt=""><figcaption></figcaption></figure>

***

**Steps to Use**

1. Select a shared mesh edge (the edge must be shared by two faces).
2. Execute the **SwapMeshEdge** command to transpose the corners of the mesh triangles that share the selected edge.

***

**Applications**

* **Mesh Repair**: The **SwapMeshEdge** command helps adjust the geometry of mesh faces, particularly when correcting edge-related issues.
* **STL/SLA Printing**: When preparing meshes for 3D printing, this command can improve mesh quality and prevent printing errors caused by poorly defined edges.

***

**Important Notes**

* Only edges shared by two faces can be selected for this operation.
* Mesh edges and other subparts are not selectable in shaded view mode.
