# Align Vertices

## <img src="../../../.gitbook/assets/G5_09_SUBD_ALIGN_VERTICES.png" alt="" data-size="line"> Align Vertices

The AlignVertices command forces mesh or SubD vertices to the same location.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/stlrepair_093.png" alt=""></div>

* Some STL/SLA printers have problems if meshes contain many long, thin facets. These facets can slow the printer down, produce odd results, or run the printer out of memory.
* The [MeshRepair](https://docs.mcneel.com/rhino/8/help/en-us/commands/meshrepair.htm) command may be useful when tuning up meshes for STL/SLA printing.

### **Steps**

*   [Select](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm) mesh or SubD objects, and [specify command line options](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/specifycommandlineoption.htm), press [Enter](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/enter_key.htm).

    If the distances between vertices are smaller than the value of DistanceToAdjust, the vertices are forced together.

    This command is useful for fixing areas that have many vertices that should be in the same spot but for some reason are not.

### Command-line options

**SelectVertices:** Lets you select vertices to align.

**SelectNakedEdges:** Lets you select naked edges to align all vertices on the naked edge.

**DistanceToAdjust:** Sets the [tolerance](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/tolerance.htm) distance.

**AverageVertexesToAdjust:** Moves vertices to the average location instead of moving one to the other.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/alignvertices.htm?Highlight=align%20vertices).
