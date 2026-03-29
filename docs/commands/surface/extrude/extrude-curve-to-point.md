# Extrude Curve to Point

## <img src="../../../.gitbook/assets/G3_04_SURFACE_EXTRUDE_TO_POINT.png" alt="" data-size="line"> Extrude Curve to Point

The ExtrudeCrvToPoint command creates a surface by tracing the path of a curve tapering to converge at a selected point.

### **Steps**

1. Select a curve.
2. Pick the point to extrude to.

### Command-line options

**Output**

* Surface: Create a surface object.
* SubD: Create a SubD object.

**Solid**: If the profile curve is closed and planar, both ends of the extruded object are filled with planar surfaces and joined to make a closed polysurface.

**DeleteInput**: Deletes (Yes) or keeps (No) the input objects.

**SplitAtTangents**

* Yes: Tangent points on the input curve extrude as joined edges.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_yes (6).png" alt=""><figcaption></figcaption></figure></div>

* No: Tangent points on the input curve extrude as surface kinks.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_no (3).png" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudecrvtopoint.htm#\(null\)).
