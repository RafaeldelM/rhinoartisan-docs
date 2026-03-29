# Mirror

## <img src="../../../.gitbook/assets/G5_02_TRANSFORMATION_MIRROR.png" alt="" data-size="line"> Mirror <a href="#profiles" id="profiles"></a>

The Mirror command creates a mirror-image copy of objects.

### **Steps**

1. Select the objects.
2. Pick the start of the mirror plane.
3. Pick the end of the mirror plane.\
   As you move the cursor, Rhino previews the location for the mirrored objects.\
   The two end points specify a mirror plane perpendicular to the construction plane.\
   Use object snaps to accurately place the mirror plane, especially if you want to Join a surface and its mirrored copy.

### Command-line options

**3Point:** Pick three points to define a mirror plane.

**Copy:** Specifies whether or not the objects are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on.

The RememberCopyOptions command determines whether the selected option is used as the default.

**XAxis:** Mirrors the object across the CPlane x axis (xz plane) of the current viewport.

**YAxis:** Mirrors the object across the CPlane y axis (yz plane) of the current viewport.

**ZAxis:** Mirrors the object across the CPlane (xy plane) of the current viewport.

**Object:** Select a planar surface as the mirror plane.

* A planar single surface, polysurface face, or extrusion face border can be selected as the mirror plane.
* The mirror plane can be attached to the planar surface with History. History update will be inactive if the surface is made non-planar until it is made planar again.

**SubCrv:** Type subcrv to select part of a curve as input.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mirror.htm#\(null\)).
