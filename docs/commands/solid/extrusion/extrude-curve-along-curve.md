# Extrude Curve Along Curve

## <img src="../../../.gitbook/assets/3_SRF_EXTRUDE_ALONG_CURVE.png" alt="" data-size="line"> Extrude Curve Along Curve <a href="#profiles" id="profiles"></a>

The ExtrudeCrvAlongCrv command creates a surface by tracing the path of a curve along another path curve.

**Steps**

1. Select a curve.
2. Select the path curve.

#### Command-line options

Output

* Surface: Create a surface object.
* SubD: Create a SubD object.
  * SubD friendly curves as the input create a better SubD object.
  * Some options may not be available when Output=SubD.

Solid: If the profile curve is closed and planar, both ends of the extruded object are filled with planar surfaces and joined to maje a closed polysurface.

DeleteInput

* Yes: Deletes the input objects.
* No: Keeps the input objects.

SubCurve: Extrudes a curve the distance specified by picking two points along a curve.

The extruded surface starts from the beginning of the curve, not the first picked point. Picking the points only establishes the extrusion distance.

*   Steps

    1.Select the path curve.

    2.Pick a start along the path curve.

    3.Pick an end along the path curve.

SplitAtTangents

* Yes: Tangent points on the input curve extrude as joined edges.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_yes (5).png" alt=""><figcaption></figcaption></figure></div>

* No: Tangent points on the input curve extrude as surface kinks.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_no (2).png" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudecrvalongcrv.htm).
