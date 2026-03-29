# Ribbon

## <img src="../../../.gitbook/assets/G3_06_SURFACE_EXTRUDE_RIBBON.png" alt="" data-size="line"> Ribbon

The Ribbon command Offsets a curve and creates a ruled surface between the two curves.

### **Steps**

1. Select a curve.
2. Drag the cursor to one side of the curve and pick.

### Command-line options

**Distance**: Sets the offset distance.

**Loose**: The Corner and Tolerance options are not shown and do not affect the output. Polycurves are offset as a group of separate curve segments, and there is no corner trimming or filling.

**Corner**: Specifies how corners are handled when they are offset to the "convex"  side as pointed out in the image.

<div align="left"><figure><img src="../../../.gitbook/assets/offsetcorners-001.png" alt=""><figcaption></figcaption></figure></div>

* Sharp: Curves offset to the outside of a corner will be extended to meet at sharp corners with position (G0) continuity.

<div align="left"><figure><img src="../../../.gitbook/assets/offsetcornersharp (3).png" alt=""><figcaption></figcaption></figure></div>

* Round: Curves offset to the outside of a corner will be filled with arc segments with tangent (G1) continuity.

<div align="left"><figure><img src="../../../.gitbook/assets/offsetcornerround (2).png" alt=""><figcaption></figcaption></figure></div>

* Smooth: Curves offset to the outside of a corner will be filled with blend segments with curvature (G2) continuity.

<div align="left"><figure><img src="../../../.gitbook/assets/offsetcornersmooth.png" alt=""><figcaption></figcaption></figure></div>

* Chamfer: The corners of the offset curves will be filled with a straight line between their endpoints.

<div align="left"><figure><img src="../../../.gitbook/assets/offsetcornerchamfer.png" alt=""><figcaption></figcaption></figure></div>

**ThroughPoint**: Offset through a picked point instead of at a distance.

**Tolerance**: Sets the tolerance for the offset curve. Type 0 to use the default system tolerance.

**BothSides**: Offsets the curve on both sides of the input curve.

**InCPlane**: The curve is offset in the plane of the original curve. This option offsets the curve in the plane of the current construction plane instead.

**OutputLayer**

* Current: Place the results on the current layer.
* Input: Place the results on the same layer as the input objects.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/ribbon.htm#\(null\)).
