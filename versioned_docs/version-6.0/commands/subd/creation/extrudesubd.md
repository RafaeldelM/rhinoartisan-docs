# ExtrudeSubD

## <img src="../../../.gitbook/assets/G3_10_SUBD__EXTRUDE.png" alt="" data-size="line"> ExtrudeSubD <a href="#profiles" id="profiles"></a>

The ExtrudeSubD command extrudes SubD faces and boundary edges with different direction modes.

### **Steps**

1. Start the command.
2.  Select SubD faces or boundary edges to extrude.

    To extrude a whole SubD, select the SubD before starting the command.
3. Set command-line options.
4. Pick or enter the extrusion distance.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh.gif)

### Command-line options

#### **EdgeLoop**

Pick an edge on the boundary to select an edge loop.

#### **Basis**

*   **WCS**

    All faces or boundary edges extrude in the same direction based on world coordinates.

    *   **Direction**

        **Free**

        The direction is picked freely.

    &#x20;       **X/Y/Z**

    &#x20;      The direction is fixed to the world X, Y, or Z axis.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_wcs_edge.png" alt=""></div>

*   **UVN**

    Each face or edge extrudes in the direction based on UVN coordinates.
*   **Direction**

    **Free**

    The direction is picked freely.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_edge_free.gif)

&#x20;     **V (Boundary edges only)**

&#x20;    Boundary edges extrude along the extending direction of the faces.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_edge_v.png)

&#x20;    **N**

&#x20;    Faces extrude along vertex normal directions.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_face_n.png)

&#x20;   Boundary edges extrude perpendicular to the faces.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extrudemesh_edge_n.png)

**SetBasePoint**

Picks a point as the starting point of the extruding distance.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudesubd.htm#\(null\)).
