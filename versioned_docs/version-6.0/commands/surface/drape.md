# Drape

## <img src="../../.gitbook/assets/G2_08_SURFACE_DRAPE.png" alt="" data-size="line"> Drape

The Drape command creates a surface through points defined at the intersection of objects and points projected toward the construction plane in the current viewport.

### Steps

* Drag a rectangle over the objects.\
  A surface is created that drapes over the objects.

### Notes

* Drape works over meshes or meshable objects (surfaces, polysurfaces, etc.). Non-meshable objects (curves, annotations, clipping planes, etc.) will be ignored.
* Drape samples locations in the render depth buffer (z buffer) and then uses them for the surface control point locations. Because of this, the surface will always sag more than the original.
* The Drape command uses the deepest point in the view for the base level of the drape surface. It only sees mesh or render mesh objects.

### Command-line options

**AutoSpacing**

* Yes: All points within the draped surface are evenly-spaced at a distance set by the Spacing option. The lower the number, the more dense the surface will be.
  * Spacing: Sets the control point spacing.
* No: Controls custom spacing for the points.
  * U/V: Sets the number of control points in the surface in the u and v directions.

**AutoDetectMaxDepth**

* Yes: Stops the draped surface at what is automatically determined to be the farthest visible point within the rectangle.
* No: Controls the custom depth setting.
  * MaxDepth: Sets the maximum depth the draped surface. This can be farther away from (1.0) and/or closer to the camera (0.0), providing complete or partial coverage of an object.

***

To watch the video example and for more information about **DrapePt** , please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/drape.htm).
