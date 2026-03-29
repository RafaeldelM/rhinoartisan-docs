# Split and Refit Surface

## <img src="../../.gitbook/assets/G5_01_SURFACE_SPLIT_REFIT.png" alt="" data-size="line"> Split and Refit Surface

The SplitRefitSurface command splits a surface using a curve, and refits the two parts so that the edges from the split operation become untrimmed edges of two surfaces.

<div align="left"><figure><img src="../../.gitbook/assets/splitrefitsurface.gif" alt=""><figcaption></figcaption></figure></div>

### **Steps**

1. Select a surface.
2.  Select a splitting curve.

    The curve must traverse the surface in either the U or V direction.

    The command-line reports the max deviation that is also marked in the viewport.
3. Set options.

### Command-line options

**CreateBeziers**: Splits the new surface along the selected edge. The new surfaces will be one-span in the fitting direction.

**DeleteInput**: Deletes (Yes) or keeps (No) the input objects. DeleteInput=No creates the output on the current layer. Otherwise, the output is created on the layer of the input object.

**ShowGrips**: Displays control points of the output surfaces for reference.

**Degree**: Specifies the degree of the output surfaces in the fitting direction. The surface degree in the fitting direction applies to the output surfaces by default. The degree option cannot be set smaller than the default degree.

**EditKnots**: Allows adding more knots to the surfaces to achieve a closer fit at the expense of more complex surfaces. Use Ctrl(CMD)+click to remove the knots added by yourself.

* Midpoints: Displays points at the middle points (of parameter space) between knots for snapping to.
* Automatic: Adds a knot halfway between every two knots.
* Undo: Reverts the last action.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/refittrim.htm#SplitRefitSurface).
