# Extrude Curve

## <img src="../../../.gitbook/assets/G3_01_SURFACE_EXTRUDE.png" alt="" data-size="line"> Extrude Curve

The ExtrudeCrv command creates a surface by tracing the path of a curve in a straight line.

### **Steps**

1. Select a curve.
2. Specify a distance.

### Command-line options

**Output**

* Surface: Create an extrusion or a surface object.
* SubD: Create a SubD object.

**Direction**: Pick two points to define the extruding direction.

**BothSides**: Extrude towards the both sides of the input curve.

**Solid**: If the profile curve is closed and planar, both ends of the extruded object are filled with planar surfaces and joined to make a closed polysurface.

**ToBoundary**: Extrude the object to a boundary surface.

**DeleteInput**: Specify if the input object will be deleted.

**SplitAtTangents**

* Yes: Tangent points on the input curve extrude as joined edges.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_yes (6).png" alt=""><figcaption></figcaption></figure></div>

* No: Tangent points on the input curve extrude as surface kinks.

<div align="left"><figure><img src="../../../.gitbook/assets/splitattangents_no (3).png" alt=""><figcaption></figcaption></figure></div>

**SetBasePoint**: Specify a location that serves as the first point when picking two points that et the extrusion distance.

**SubCrv**: Type subcrv to select part of a curve as input.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudecrv.htm#\(null\)).
