# Sweep2

## <img src="../../../.gitbook/assets/G3_02_SUBD_SWEEP_2.png" alt="" data-size="line"> Sweep2 <a href="#profiles" id="profiles"></a>



The Sweep2 command fits a surface through a series of profile curves that define the surface shape and two curves that define the surface edges.

**Steps**

1. Select two curves as the rails.
2. Select cross-section curves in the order in which the surface will pass through them.\
   Select open curves near the same ends. For closed curves, adjust the curve seams.

### Adjust seam options (Closed curves only)

#### **Flip**

Reverses the curve direction.

#### **Automatic**

Attempts to align the seam points and directions without intervention.

#### **Natural**

Moves the seam points to the way they were at the beginning of the command.

#### **SnapToKnots**

**Yes -** The seam points are always at the knots. You can only move them among the knots.

**No -** The seam points may leave the knots. You can move them without restriction.

### Sweep 2 Rail Options dialog box

#### **Curve options**

* **Do not change cross sections -** Creates the sweep without altering the cross-section curves.
* **Rebuild cross sections with \_\_\_ control points -** before creating the sweep.
* **Refit cross sections within \_\_\_ -** Refits the cross-section curves before creating the sweep.
* **Preserve first cross section -** When you are matching edge tangency or curvature, your surface may pull away from your cross-section curves. This option forces the surface to match the first cross-section curve.
* **Preserve last cross section -** When you are matching edge tangency or curvature, your surface may pull away from your cross-section curves. This option forces the surface to match the last cross-section curve..
* **Maintain height -** Removes the association between the height scaling from the width scaling. By default, cross-section curves normally scale in both the height and width dimensions.
* **Refit rails -** Refits the rail curves before creating the sweep.

#### **Edge continuity**

Continuity is only enabled if the rails are surface edges and the shape curves are non-rational, that is, all control-point weights are 1. Exact arcs and ellipse segments are rational.

Only continuity options that the curve structure (point count and rational/non rational) supports will be available.

*   **Closed sweep -** The Closed sweep option creates a closed surface, continuing the surface past the last curve around to the first curve.

    This option is only available after you select two cross-section curves.

&#x20;      **Add Slash -** Adds additional cross-section alignments to control how the surface is created between sections.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/sweep2.htm#\(null\)).

