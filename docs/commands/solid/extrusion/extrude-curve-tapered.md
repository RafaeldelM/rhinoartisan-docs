# Extrude Curve Tapered

## <img src="../../../.gitbook/assets/EXTRUDE_CRV_TAPERED.png" alt="" data-size="line"> Extrude Curve Tapered <a href="#profiles" id="profiles"></a>

The ExtrudeCrvTapered command creates a surface by tracing the path of a curve in a straight line tapering in or out at a specified draft angle.

**Steps**

1. Select a curve.
2. Specify a distance.

#### Command-line options

SetBasePoint: Specify a location that serves as the first point when picking two points that set the extrisopm distance.

Direction: Two points establish the direction angle.

*   Direction steps

    1.Pick a base point.

    2.Pick a second point that establishes the direction angle.

DraftAngle: Specify the draft angle for the taper. The draft angle depends on the construction plane orientation. When the surface is vertical/perpendicular to the construction plane, the draft angle is zero. When the surface is parallel to the construction plane, the draft angle is 90 degrees.

Solid: If the profile curve is closed and planar, both ends of the extruded object are filled with planar surfaces and joined to make a closed polysurface.

Corners: Specifies how corner continuity is handled.

* Sharp: The corners of the tapered surfaces will extend to meet at sharp corners with position (G0) continuity.
* Round: The corners of the tapered surfaces will be filled with filleted segments with tangent (G1) continuity.
* Smooth: The corners of the tapered surfaces will be filled with blend segments with curvature (G2) continually.

DeleteInput: Delete (Yes) or keeps (No) the input objects.

FlipAngle: Toggles the draft angle direction.

SplitAtTangents

* Yes: Tangent points on the input curve extrude as joined edges.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_yes (4).png" alt=""><figcaption></figcaption></figure></div>

* No: Tangent points on the input curve extrude as surface kinks.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_no (1).png" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudecrvtapered.htm).
