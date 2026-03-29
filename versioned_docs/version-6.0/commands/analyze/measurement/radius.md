# Radius

## <img src="../../../.gitbook/assets/ANALYZE_MEASURE_RADIUS.png" alt="" data-size="line"> Radius

The Radius command reports the radius of a curve at a specified point.

### **Steps**

1.  Move the mouse cursor along a curve.

    The Units pane on the status bar reports the radius of the curve at the current cursor location.
2.  Pick a point on the curve.

    The diameter and radius report to the command-line.

    If the diameter and radius return "infinite", the curve is linear (no curvature) at the picked location, or has the shape of a line or a polyline.

### Command-line options

**SelectCurve:** Limit the selection to a specified curve. Press Enter to select any curve.

**MarkDiameter:** Places a point object at the evaluated point on a curve and creates a curvature circle through that point.

**Units:** Set the units for the length display. This option is only available if no objects are selected.

**SubCrv:** Type subcrv to select part of a curve as input.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/diameter.htm).
