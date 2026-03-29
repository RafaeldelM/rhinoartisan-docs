# Rib

## <img src="../../../.gitbook/assets/RIB.png" alt="" data-size="line"> Rib <a href="#profiles" id="profiles"></a>

The Rib command extrudes a curve in two directions to a boundary surface.

**Steps**

1. Select planar curves to rib.
2. Select a boundary.

#### Command-line options

-Offset: The offset direction relative to the input curve.

* InCurvePlane: Use when the input curve describes the rib in plan view.
* NormalToCurvePlane: Use when the rib curve describes the rib in elevation view.

-Distance: Sets the offset distance.

-Mode

* Straight: Extrudes the curve straight to the boundary.
* Tapered: Extrudes the curves to the boundary with a draft angle.
* DraftAngle: Specify the draft angle for the taper. The draft angle depends on the construction plane orientation. When the surface is vertical/perpendicular to the construction plane, the draft angle is zero. When the surface is parallel to the construction plane, the draft angle is 90 degrees.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/rib.htm).
