# Extrude

## <img src="../../../.gitbook/assets/G2_01_SOLID_EXTRUDE.png" alt="" data-size="line"> Extrude <a href="#profiles" id="profiles"></a>

The ExtrudeCrv command creates a surface by tracing the path of a curve in a straight line.

**Steps**

1. Select a curve.
2. Specify a[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/distance_pick_2pts.htm)distance.

#### Command-line options

Output

* Surface: Create an extrusion or a surface object
* SubD: Create a SubD object.
  * A SubD friendly curve as the input creates a better SubD object.
  * Some options may not be available when Output=SubD.

Direction: Pick two points to define the extruding direction.

BothSides: Extrude towards the both sides of the input curve.

<div align="left"><figure><img src="../../../.gitbook/assets/extrudecrv_bothsides (1).gif" alt=""><figcaption></figcaption></figure></div>

Solid: If the profile curve is closed and planar, both ends of the extruded object are filled with planar surfaces and joined to make a closed polysurface.

ToBoundary: Extrude the object to a boundary surface.

DeleteInput: Specify if the input object will be deleted.

SplitAtTangents

* Yes: Tangent points on the input curve extrude as joined edges.

<div align="left"><figure><img src="../../../.gitbook/assets/image (542).png" alt=""><figcaption></figcaption></figure></div>

* No: Tangent points on the input curve extrude as surface kinks.

<div align="left"><figure><img src="../../../.gitbook/assets/image (543).png" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extrudecrv.htm).
