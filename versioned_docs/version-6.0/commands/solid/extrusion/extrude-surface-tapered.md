# Extrude Surface Tapered

## <img src="../../../.gitbook/assets/EXTRUDE_SRF_TAPERED.png" alt="" data-size="line"> Extrude Surface Tapered <a href="#profiles" id="profiles"></a>

The ExtrudeSrfTapered command creates a solid by tracing the path of the surface edges in a straight line tapering in or out at a specified draft angle.

**Steps**

1. Select a surface.
2. Specify a distance.

#### Command-line options

SetBasePoint: Specify a location that serves as the first point when picking two points that set the extrusion distance.

Direction: Two points establish the direction angle.

*   Direction steps

    1.Pick a base point.

    2.Pick a second point that establishes the direction angle.

DraftAngle: Specify the draft angle for the taper. The draft angle depends on the construction plane orientation. When the surface is vertical/perpendicular to the construction plane, the draft angle is zero. When the surface is parallel to the construction plane, the draft angle is 90 degrees.

Solid: If the profile curve is closed and planar, both ends of the extruded object are filled with planar surfaces and joined to make a closed polysurface.

Corners: Specifies how corner continuity is handled.

* Sharp: The corners of the tapered surfaces will extend to meet at sharp corners with position (G0) continuity.
* Round: The corners of the tapered surfaces will be filled with filleted segments with tangent (G1) continuity.
* Smooth: The corners of the tapered surfaces will be filled with blend segments with curvature (G2) continuity.

DeleteInput

* Yes: Deletes the original geometry.
* No: Retains the original geometry.

FlipAngle: Toggles the draft angle direction.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudesrftapered.htm).
