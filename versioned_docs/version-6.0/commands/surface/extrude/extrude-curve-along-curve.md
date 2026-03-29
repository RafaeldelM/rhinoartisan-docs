# Extrude Curve Along Curve

## <img src="../../../.gitbook/assets/G3_05_SURFACE_EXTRUDE_ALONG_CURVE (1).png" alt="" data-size="line"> Extrude Curve Along Curve

The ExtrudeCrvAlongCrv command creates a surface by tracing the path of a curve along another path curve.

### **Steps**

1. Select a curve.
2. Select the path curve.

### Command-line options

**Output**

* Surface: Create a surface object.
* SubD: Create a SubD object.

**Solid**: If the profile curve is closed and planar, both ends of the extrude objects are filled with planar surfaces and joined to make a closed polysurface.

**DeleteInput**: Deletes (Yes) or keeps (No) the input objects.

**SubCurve**: Extrudes a curve the distance specified by picking two points along a curve. The extruded surface starts from the beginning of the curve, not the first picked point. Picking the points only establishes the extrusion distance.

**Steps**

1. Select the path curve.
2. Pick a start along the path curve.
3. Pick an end along the path curve.

**SplitAtTangents**

* Yes: Tangent points on the input curve extrude as joined edges.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_yes (9).png" alt=""><figcaption></figcaption></figure></div>

* No: Tangent points on the input curve extrude as surface kinks.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_no (5).png" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudecrvalongcrv.htm#\(null\)).
