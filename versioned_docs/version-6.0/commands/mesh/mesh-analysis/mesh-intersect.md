# Mesh Intersect

## <img src="../../../.gitbook/assets/MESH_INTERSECT.png" alt="" data-size="line"> Mesh Intersect <a href="#profiles" id="profiles"></a>

The MeshIntersect command creates a polyline at the intersection of mesh objects.

### Command-line options

### **Tolerance**

* **Auto:** Uses a tolerance that is more suitable for well-drawn meshes created using document tolerances. The value is computed using heuristics.
* **Literal:** Uses document tolerances. This might not be the best value because meshes often have tiny features that might fall well below the document tolerance.

### **CoplanarFaces**

* **Drop:** Discards coplanar overlaps.
* **Polylines:** Creates polylines from the boundaries of coplanar overlaps.
* **Meshes:** Creates meshes from coplanar overlaps.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/meshintersect_coplanarfaces.gif" alt=""></div>

Drop (left), Polylines (middle), and Meshes (right)
