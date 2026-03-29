# Loft

## <img src="../../.gitbook/assets/G2_05_SURFACE_LOFT.png" alt="" data-size="line"> Loft

The Loft command fits a surface through selected profile curves that define the surface shape.

### Steps

* Select the curves in the order in which the surface should pass through them.
* Select open curves near the same ends. For closed curves, adjust the curve seams.

### Adjust seam options (Closed curves only)

**Flip**\
Reverses the curve direction.

**Automatic**\
Attempts to align the seam points and directions without intervention.

**Natural**\
Moves the seam points to the way they were at the beginning of the command.

**SnapToKnots**

* **Yes**: The seam points are always at the knots. You can only move them among the knots.
* **No**: The seam points may leave the knots. You can move them without restriction.

***

### To adjust seams

1. Select each seam point and move it along the curve to line up all curve seams.
2. Use the Flip option to make all seam arrows point to the same side.\
   Click here to watch the video example.
3. Press Enter to continue.

### Command-line option

**Point**: Allows picking a location for the start or end of the loft at a point. This tapers the loft to the selected point. No point object is necessary, but it is a good idea to have some reference geometry in place to aid in picking the point location.

* Point steps
  * 1.At the start or the end of the loft, click the Point option.
  * 2.Pick a location for the start or end location.

**SubCrv**: Type subcrv to select part of a curve as input.

### Loft Options

**Style**: Determines the knot and control point structure of the surface. When some, but not all, endpoints of loft shapes touch, the loft type is restricted to Straight sections to avoid self-intersecting loops in the resulting surfaces.

* Loose: The surface control points are created at the same locations as the contreol points of the original. This is a good option if the control points will be edited later.
* Normal: The surface has an average amount of strtching between the curves. This is a good choice when the curves are proceeding in a relatively straight path or there is a lot of space between the curves.
* Straight sections: Creates a ruled surface. The sections between the curves are straight.
* Tight: The surface closely follows the original. This is a good choice when the input curves are going around a corner.
* Uniform: Makes the object knot vectors uniform.

**Closed loft**: Creates a closed surface, continuing the surface past the last curve and around to the first curve. Available when you have selected three shape curves.

**Match start tangent**: If the start curve is a surface edge, the lofted surface maintains tangency with the adjacent surface. You must use at least three curves to activate this option.

**Match end tangent**: If the end curve is a surface edge, maintains tangency with the adjacent surface. You must use at least three curves to activate this option.

**SplitAtTangents**: If checked, the loft creates a single surface. If unchecked, the loft creates a polysurface when the input curves are joined tangent curves. Faces in the resulting polysurface correspond to the tangent sub-curves in the input curves.

<div align="left"><figure><img src="../../.gitbook/assets/extrudesplitattangents_yes.png" alt=""><figcaption></figcaption></figure></div>

### Cross-section curve options

**Align Curves**: Click the end of a shape curve to reverse the direction.

\
**Do not simplify (A):** Curves will not be rebuilt.

**Rebuild with \_\_\_ control points (B):** Rebuilds the shape curves before lofting.

**Refit within \_\_\_ \<units> (C):** Refits the shape curves to the specified tolerance value.



To watch the video examples and for more information about **Loft Options** and **DevLoft**, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/loft.htm).
