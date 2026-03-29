# Extract Mesh Part

## <img src="../../../.gitbook/assets/ExtractMeshPart.png" alt="" data-size="line"> Extract Mesh Part <a href="#profiles" id="profiles"></a>

The ExtractMeshPart command extracts all mesh faces radiating out from the selected face to unwelded, non-manifold, or naked edges in the parent mesh object.

### Command-line options

The scriptable command, -ExtractMeshPart, provides extra options.

### **BorderOnly**

Creates line segments from the boundary edges of the selected mesh face group.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extractmeshpart_borderonly.gif" alt=""></div>

### **MakeCopy**

Duplicates the selected mesh face group instead of extracting it.

### **ExtractWholeDisjointParts**

* **Yes:** Extracts the selected part in the mesh that does not physically join to other parts.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extractmeshpart_extractwholedisjointparts.gif" alt=""></div>

* **No:** The ExtractToNonManifoldEdges option decides how mesh faces are extracted.
  * **ExtractToNonManifoldEdges**

**Yes:** Extraction stops at non-manifold edges.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extractmeshpart_extracttononmanifoldedges_yes.gif)

**No:** Extraction stops at unwelded edges.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extractmeshpart_extracttononmanifoldedges_no.gif)

### **JoinOutput**

Joins the extracted mesh faces into a mesh object.
