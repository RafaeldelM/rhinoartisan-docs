# Rebuild

## <img src="../../.gitbook/assets/G5_06_SURFACE_ADVANCED_REBUILD (1).png" alt="" data-size="line"> Rebuild

The Rebuild command reconstructs selected curves or surfaces to a specified degree and control point number.

**Steps**

*   Select the curves or surfaces.

    Or, press Ctrl (CMD) + Shift to select a polycurve segment.

### -Curves and extrusion objects

### To rebuild curves

1. Click Preview to see what the rebuilt curves will look like.
2. When you are satisfied with the results, click OK.

### Rebuild options

**Point count:** Reports in parentheses the current number and sets the number of control points in the result.

**Degree:** Reports in parentheses the current number and sets the degree of the curve. Degree in Rhino can be up to 11.

Point count and Degree values change automatically to fulfill the minimum requirement of Point count = Degree + 1. For example, when Point count=4 and Degree=3, reducing Point count also reduces Degree; increasing Degree also increases Point count. In closed curves/surfaces, the start and end points are overlapped and counted as one. They have one less point than open curves/surfaces.

**Delete input:** Deletes the original geometry.

**Create new object on current layer:** Creates the new objects on the current layer. Clear this check box to place the new objects on the layer of the original curves.

**Preserve end tangent directions:** The new curve matches the input curve end tangents if the curve is open, the degree is two or more, and the point count is four or more.

**Make SubD friendly:** Makes the output curve compatible with SubD.

When this option is enabled, the Degree option is disabled. The output curve can only be degree 3.

*   Select Master Curve:Rebuild a curve to match another curve's parameter structure. The SubD friendly state of the master curve will be ignored.

    The Loft, Sweep1 and Sweep2 commands create a better surface from section curves with the same parameter structure.

**Span counts:** Reports in parentheses the minimum number of spans and the proposed number of spans.

**Maximum deviation:** Reports the maximum deviation from the original curve when Preview is clicked.

* Preview: Displays a preview of the output. If you change the settings, click the Preview button again to refresh the display.

### Command-line options

**SubCrv**: Type subcrv to select part of a curve as input.

### -Surfaces

### To rebuild surfaces

1. Click Preview to see what the rebuilt surfaces will look like.
2. When you are satisfied with the results, click OK.

### Rebuild Surface Options

**Point count**

* U: Reports in parentheses the current number and sets the number of points in the u direction.
* V: Reports in parentheses the current number and sets the number of points in the v direction.

**Degree**

* U: Reports in parentheses the current number and sets the degree in the u direction.
*   V: Reports in parentheses the current number and sets the degree in the v direction.

    Point count and Degree values change automatically to fulfill the minimum requirement of Point count = Degree + 1. For example, when Point count=4 and Degree=3, reducing Point count also reduces Degree; increasing Degree also increases Point count. In closed curves/surfaces, the start and end points are overlapped and counted as one. They have one less point than open curves/surfaces.

**Options**

* DeleteInput: Deletes the original geometry.
* Current Layer: Creates the new surfaces on the current layer. Clear this checkbox to place the new surfaces on the layer of the original surfaces.
* Retrim: Trims the rebuilt surface with the original trimming curves.

**Span counts**

* U: Reports in parentheses the minimum number of spans and the proposed number of spans in the u direction.
* V: Reports in parentheses the minimum number of spans and the proposed number of spans in the v direction.
* Maximum deviation: Reports the maximum deviation from the original surface.
  *   Calculate: The calculation tests how far away the new surface is at knot line intersections and half-way between knot lines. Conducts tests at knot line intersections and halfway between knot lines.

      The display color indicates how far away the new surface is from the original. Points are green if the surface is within absolute [tolerance](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/tolerance.htm), yellow if it is between tolerance and 10 times tolerance, and red if it is farther away than that.
  *   Preview: Displays a preview of the output.

      If you change the settings, click the Preview button again to refresh the display.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/rebuild.htm#\(null\)).
