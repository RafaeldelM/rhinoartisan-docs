# Match Mesh Edge

## <img src="../../../.gitbook/assets/MATCH_MESH_EDGE.png" alt="" data-size="line"> Match Mesh Edge <a href="#profiles" id="profiles"></a>

The **MatchMeshEdge** command adjusts the edges of an open mesh to align them with adjacent mesh edges. This is particularly useful for repairing and closing gaps in meshes. It ensures that no part of the mesh moves beyond a specified tolerance, making it suitable for precise adjustments.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/stlrepair_074.png)

***

**Key Features**

* Aligns open edges to adjacent mesh edges by matching vertices or splitting edges as needed.
* Operates on the entire mesh or selected edges for targeted corrections.
* Supports a progressive matching approach to address small gaps first and gradually adjust larger ones.
* Prevents excessive distortion by adhering to user-defined tolerance limits.

***

**Usage Guidelines**

1. **Select edges or a complete mesh** to apply the command.
2. **Set the distance tolerance** to define the maximum adjustment allowed.
3. **Run the command** and review the adjustments made to the mesh edges.

_Note_: When working with large tolerances on a complete mesh, unexpected results may occur. It is recommended to use higher tolerances only for specific edges.

***

**Command-Line Options**

* **PickEdges**\
  Allows selection of specific edges to match, ensuring targeted adjustments.
* **DistanceToAdjust**\
  Specifies the maximum distance vertices or edges can move during matching.
* **RatchetMode**\
  Enables a multi-pass adjustment process, starting with smaller tolerances and progressing to the specified maximum tolerance.
* **AverageVertexesToAdjust**\
  Moves vertices to an averaged position rather than relocating one vertex to another.
* **Join**\
  Joins input meshes with aligned vertices, effectively merging them.

***

**Tips for Best Results**

* Use this command to repair gaps in meshes intended for 3D printing, especially for STL/SLA models.
* Smaller tolerances are recommended for precise work and to avoid unintended distortions.
* Always verify the results when working on complex meshes to ensure optimal performance and geometry.

This tool is ideal for improving the quality and continuity of mesh geometries while maintaining control over tolerances and edge alignment.
