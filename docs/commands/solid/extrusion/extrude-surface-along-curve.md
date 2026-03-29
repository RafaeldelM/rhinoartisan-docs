# Extrude Surface Along Curve

## <img src="../../../.gitbook/assets/EXTRUDE_SRF_ALONG_CURVE copy.png" alt="" data-size="line"> Extrude Surface Along Curve <a href="#profiles" id="profiles"></a>

The ExtrudeSrfAlongCrv command creates a solid by tracing the path of the surface edges along another path curve.

**Steps**

1. Select a surface.
2. Select the path curve near the start.

#### Command-line options

-Solid: If the profile curve is closed and planar, both ends of the extruded object are filled with planar surfaces and joined to make a closed polysurface.

-DeleteInput

* Yes: Deletes the original geometry.
* No: Retains the original geometry.

-SubCurve: Extrudes a curve the distance specified by picking two points along a curve.

The extruded surface starts from the beginning of the curve, not the first picked point. Picking the points only establishes the extrusion distance.

*   SubCurve steps

    1.Select the path curve.

    2.Pick a start along the path curve.

    3.Pick an end along the path curve.

-ToBoundary: Extrudes the object to a boundary surface.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudesrfalongcrv.htm).
