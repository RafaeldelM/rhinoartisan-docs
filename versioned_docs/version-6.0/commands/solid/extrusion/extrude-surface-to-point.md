# Extrude Surface To Point

## <img src="../../../.gitbook/assets/EXTRUDE_SRF_TO_POINT.png" alt="" data-size="line"> Extrude Surface To Point <a href="#profiles" id="profiles"></a>

The ExtrudeSrfToPoint command creates a solid by tracing the path of the surface edges tapering to converge at a selected point.

**Steps**

1. Select a surface.
2. Pick the point to extrude to.

#### Command-line options

-Solid: If the profile curve is closed and planar, both ends of the extruded object are filled with planar surfaces and joined to make a closed polysurface.

DeleteInput

* Yes: Deletes the original geometry.
* No: Retains the original geometry.

ToBoundary: Extrudes the object to a boundary surface.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudesrftopoint.htm).
