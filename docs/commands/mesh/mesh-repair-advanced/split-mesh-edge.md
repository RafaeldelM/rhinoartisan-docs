# Split Mesh Edge

## <img src="../../../.gitbook/assets/SPLIT_MESH_EDGE.png" alt="" data-size="line"> Split Mesh Edge <a href="#profiles" id="profiles"></a>

The SplitMeshEdge command divides a mesh edge to create two or more triangles.

Use the SplitMeshEdge command to specify how you want to split faces, and then match an adjacent mesh using the [MatchMeshEdge](https://docs.mcneel.com/rhino/8/help/en-us/commands/matchmeshedge.htm) command.

<div align="left"><figure><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/stlrepair_090.png" alt=""><figcaption></figcaption></figure></div>

* Some STL/SLA printers have problems if meshes contain many long, thin facets. These facets can slow the printer down, produce odd results, or run the printer out of memory.
* The MeshRepair command may be useful when tuning up meshes for STL/SLA printing.
