# Quad Remesh

## <img src="../../../.gitbook/assets/QUAD_REMESH.png" alt="" data-size="line"> Quad Remesh <a href="#profiles" id="profiles"></a>

The QuadRemesh command quickly creates a quad mesh with optimized topology from existing surfaces, meshes, or SubDs. It uses a unique algorithm to generate manageable polygon meshes, ideal for rendering, animation, CFD, FEA, and reverse-engineering.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadremesh_rabbit.png" alt=""></div>

### Options

### Target Edge Length

Sets the approximate edge length of the output mesh.

* This setting is scale dependent. The resulting face count increases with object scale.
* Re-meshing would fail if the target edge length is set too large for the object size.

### Target Quad Count

Sets the approximate face count of the output mesh as a goal for the algorithm.

* This setting is scale independent. An input object in different scales produces a similar face count.

**Adaptive Size (0-100)**

Set 0 to get a minimal number of quads and uniform sizes. A value above 30 will diminish your control of getting a smaller number of quads. Higher values result in smaller quads in high curvature areas. Set 100 to keep more details.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadremesh_adaptivesize.gif" alt=""></div>

### Use Surface Edges (Polysurface/Extrusion only)

Specifies if meshes edges will be created along the sub-face boundaries on the input object.

* **Off:** Ignores sub-face boundaries.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadremesh_usesurfacefaces_off.png" alt=""></div>

* **Smart:** Retains sub-face boundaries except for the ones being determined as meaningless by the algorithm. This is usually the best choice.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadremesh_usesurfacefaces_on.png" alt=""></div>

* **Strict:** Retains all sub-face boundaries.

### Symmetry Axis: ![](https://docs.mcneel.com/rhino/8/help/en-us/image/general/checkbox.png)X ![](https://docs.mcneel.com/rhino/8/help/en-us/image/general/checkbox.png)Y ![](https://docs.mcneel.com/rhino/8/help/en-us/image/general/checkbox.png)Z

Select to perform symmetrical re-meshing across the X, Y, or Z central plane of the object's bounding box. Multiple axes can be selected. It only makes sense for symmetrical objects and when the correct symmetrical plane is selected.

![Disable](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadremesh_symmetry_off.png)

![Enable](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadremesh_symmetry_on.png)

### **Guide Curves**

The quad re-meshing algorithm will try to place edge loops or edge rings along guide curves. Guide Curves can be used to define more details, or simply influence the direction of quad re-meshing in a region. Guide curves must be projected onto the input object to have an effect. Click Select Curves to select guide curves.

**Curve Influence:** These options control how guide curves affect the final quad mesh.

* **None:** No effect on the result.
* **Approximate:** Adjusts the general direction of the quads by influencing their natural flow. The guide curves have a weak effect on the result.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadremesh_approximate.png" alt=""></div>

* **Create Edge Ring:** Orients the crossing edges perpendicular to the guide curves. The guide curves have a stronger effect on the result, but edge rings may not follow guide curves exactly.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadremesh_createedgering.png" alt=""></div>

* **Create Edge Loop:** Places edge loops along guide curves. The guide curves have the strongest effect on the result.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadremesh_createedgeloop.png" alt=""></div>

**Detect Hard Edges**

Uses a 30-degree break angle threshold to divide the quad mesh with hard edges (creased edges). If the break angle between two adjacent faces is larger than 30 degrees, a hard edge loop will be added.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadmesher_detecthardedges.gif)
