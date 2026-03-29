# Align Vertices

## <img src="../../../.gitbook/assets/ALIGN_VERTICES.png" alt="" data-size="line"> Align Vertices <a href="#profiles" id="profiles"></a>

The **AlignVertices** command aligns mesh or SubD vertices to the same location. This can be particularly useful when preparing meshes for STL/SLA printing, where long, thin facets can cause issues like slow printing, odd results, or excessive memory usage. The command helps fix areas where vertices that should be at the same location are slightly offset.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/stlrepair_093.png)

***

**How to Use the AlignVertices Command**

1. **Select mesh or SubD objects** and specify the desired command-line options. Press **Enter** to execute.
2. If the distance between vertices is smaller than the set **DistanceToAdjust**, the vertices will be forced to align at the same location.

***

**Command-Line Options**

* **SelectVertices**\
  Allows you to manually select the vertices that you want to align.
* **SelectNakedEdges**\
  Enables you to select naked edges and align all vertices on those edges.
* **DistanceToAdjust**\
  Sets the tolerance distance for vertex adjustment. Vertices within this distance will be aligned.
* **AverageVertexesToAdjust**\
  Moves vertices to the average location, instead of aligning them to one specific vertex.

***

This command is particularly useful for cleaning up meshes and SubD models, ensuring that vertices that should be in the same location are properly aligned for better mesh quality and smoother printing results.
