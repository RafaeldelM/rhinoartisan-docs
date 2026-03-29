# Repair

## <img src="../../../.gitbook/assets/MESH_REPAIR.png" alt="" data-size="line"> Repair <a href="#profiles" id="profiles"></a>

The **MeshRepair** command opens the Mesh Repair panel, providing tools to analyze and repair problematic meshes efficiently. This is especially useful for preparing models for STL/SLA printing, where issues like long, thin facets can cause errors or performance problems.

***

### **How to Use the Mesh Repair Panel**

1. **Select a mesh** and click **Check Mesh**.
   * A detailed report on the mesh is displayed, including an **Edge Analysis** view.
2. Identify problems from the report and click **Repair** to fix them.
3. After resolving all issues, click **Next** to access **Advanced Repair Tools** for further adjustments.
4. Make final edits and click **Finish** to complete the repair process.

***

### **Panel Features and Error Types**

The panel provides a summary of detected mesh errors and tools to address them. Error types are automatically highlighted when detected.

### **Error Statistics and Fixes**

* **Degenerate faces:**\
  Removes faces with all vertices at the same location.
  * See: `CullDegenerateMeshFaces`.
* **Zero-length edges:**\
  Removes edges with overlapping vertices.
* **Duplicate faces:**\
  Eliminates overlapping faces.
* **Non-manifold edges:**\
  Extracts faces joined by non-manifold edges.
  * See: `ExtractNonManifoldMeshEdges`.
* **Inconsistent normals:**\
  Fixes reversed normals.
  * See: `UnifyMeshNormals`.
* **Disjoint pieces:**\
  Separates unconnected parts of the mesh.
  * See: `SplitDisjointMesh`.

***

### **Advanced Repair Tools**

Additional tools for precise mesh editing:

* **Align Vertices:** Aligns selected vertices. (`AlignVertices`)
* **Match Edges:** Adjusts mesh edges to align. (`MatchMeshEdge`)
* **Delete Faces:** Removes unwanted faces. (`DeleteFaces`)
* **Patch Face:** Repairs individual faces. (`PatchSingleFace`)
* **Fill Hole:** Closes a specific mesh hole. (`FillMeshHole`)
* **Fill All Holes:** Automatically closes all detected holes. (`FillMeshHoles`)
* **Split Edges:** Splits selected mesh edges. (`SplitMeshEdge`)
* **Swap Edge:** Adjusts edge connections. (`SwapMeshEdge`)
* **Rebuild Mesh:** Reconstructs the mesh with uniform topology. (`RebuildMesh`)
* **Unify Normals:** Ensures all normals are consistent. (`UnifyMeshNormals`)
* **Undo:** Reverts the last action. (`Undo`)
