# InsertEdge (loop)

## <img src="../../../.gitbook/assets/INSERT_EDGE.png" alt="" data-size="line"> InsertEdge (loop) <a href="#profiles" id="profiles"></a>

The InsertEdge command inserts edges beside an edge loop (left) or across an edge ring (right) on a SubD or mesh.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/insertedge.gif" alt=""></div>

*   When edges fail to insert, the defective geometry is marked with a text dot. The [secondary text](https://docs.mcneel.com/rhino/8/help/en-us/commands/dot.htm#Secondary_text) in the text dot properties gives a hint of what should be repaired.

    <div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/insertedge_textdot.png" alt=""></div>

### **Type**

**Loop:** Insert edges beside the selected edge loop.

* **BothSides:** Insert edges on both sides of the selected edge loop.

**Ring:** Insert edges across the selected edge ring.

### **Mode**

**Full:** Select an entire edge loop (left) or ring (right) based on the Type option to insert edges.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/insertedge_full.gif" alt=""></div>

**Range:** Select the start and end edges in a range of loop (left) or ring (right) based on the Type option to insert edges.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/insertedge_range.gif" alt=""></div>

### **OffsetMode**

**Proportional:** The amount is proportional to each crossing edge length. The input number should be between 0 and 1.0.

**Absolute:** The amount is same for all edges. The input number is a distance in the model unit.
