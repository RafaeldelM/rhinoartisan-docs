# Extrude Mesh

## <img src="../../../.gitbook/assets/EXTRUDE_MESH.png" alt="" data-size="line"> Extrude Mesh <a href="#profiles" id="profiles"></a>

The ExtrudeMesh command extrudes mesh faces and boundary edges with different direction modes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh.gif" alt=""></div>

### **Steps**

1. Start the command.
2.  Select mesh faces or boundary edges to extrude.

    To extrude a whole mesh, select the mesh before starting the command.
3. Set command-line options.
4. Pick or enter the extrusion distance.

### Command-line options

**EdgeLoop:** Pick an edge on the boundary to select an edge loop.

**Basis**

* **WCS:** All faces or boundary edges extrude in the same direction based on world coordinates.
  * **Direction**
    * **Free:** The direction is picked freely.
    * **X/Y/Z:** The direction is fixed to the world X, Y, or Z axis.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_wcs_edge.png)

* **UVN:** Each face or edge extrudes in the direction based on UVN coordinates.
* **Direction**
  *   **Free:** The direction is picked freely.

      <div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_edge_free.gif" alt=""></div>


  *   **V (Boundary edges only):** Boundary edges extrude along the extending direction of the faces.

      <div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_edge_v.png" alt=""></div>


  *   **N:** Faces extrude along vertex normal directions.

      <div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_face_n.png" alt=""></div>


  *   Boundary edges extrude perpendicular to the faces.

      <div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_edge_n.png" alt=""></div>

**SetBasePoint**

Picks a point as the starting point of the extruding distance.
