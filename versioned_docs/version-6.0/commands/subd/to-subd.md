# To SubD

## <img src="../../.gitbook/assets/G1_01_SUBD_COVERT_TO_MESH.png" alt="" data-size="line"> To SubD <a href="#profiles" id="profiles"></a>

The ToSubD command converts supported object types into SubD objects.

### Input

Mesh, Extrusion, Surface, Sub-surface

### Command-line options

### **UseMesh**

* **ControlPoints:** Turns mesh vertices into SubD control points (left).
* **Location:** Turns mesh vertices into SubD surface points (right).

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_interpolatemeshpoints.gif" alt=""></div>

Conceptually, this is the difference between what the [Curve](https://docs.mcneel.com/rhino/8/help/en-us/commands/curve.htm) and [InterpCrv](https://docs.mcneel.com/rhino/8/help/en-us/commands/interpcrv.htm) commands do. The Curve command turns input points into the curve's control points. The InterpCrv command creates a curve to pass the input points.

### **MeshCreases**

Specifies whether unwelded mesh edges (red) will be turned into creased edges.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_crease_input.png) ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_crease_yes.png) ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_crease_no.png)

_1) Input mesh        2) MeshCreases=Yes       3) MeshCreases=No_

### **MeshCorners**

Specifies whether the boundary corner vertex of a quad mesh face will be creased or smoothed.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_corners_input.png) ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_corners_yes.png) ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_corners_no.png)

1\) Input mesh        2) MeshCorners=Yes         3) MeshCorners=No

### **UseSurface**

* **ControlPoints:** Turns NURBS surface control points into SubD control points.

Use this option if you are doing "Class A" modeling and need to join separate SubDs into a single SubD.

* **Location:** The output SubD has the best fit to the input NURBS surface. Extra faces might be inserted.

### **SurfaceCorners**

Specifies whether NURBS surface corners will turn into creased or smooth SubD vertices.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_surfacecorners_input.png) ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_surfacecorners_yes.png) ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_surfacecorners_no.png)

_1) Input NURBS surface 2) SurfaceCorners=Yes 3) SurfaceCorners=No_

### **DeleteInput**

Deletes (Yes) or keeps (No) the input objects.

* When a surface is [SubD friendly](https://docs.mcneel.com/rhino/8/help/en-us/information/subdfriendly.htm) (left), the SubD will match to the input surface shape.\
  ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_subdfriendly.gif)
* Trims of a surface or sub-surface will be lost in the SubD.\
  ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_trimmedsurface.png)
* Sub-surfaces of a polysurface will be converted individually.\
  ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_sub-surfaces.png)
* Non-manifold mesh edges and related faces will be removed.\
  ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/tosubd_non-manifold.png)



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/tosubd.htm#\(null\)).
