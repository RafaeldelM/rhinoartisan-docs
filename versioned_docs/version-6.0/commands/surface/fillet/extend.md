# Extend

## <img src="../../../.gitbook/assets/G4_06_SURFACE_EXTEND.png" alt="" data-size="line"> Extend

The ExtendSrf command moves a surface edge to lengthen a surface.

If the surface edges is trimmed, a preview of the extension displays.

### **Steps**

1. Select a trimmed or untrimmed surface edge.\
   If an untrimmed edge or an isocurve trimmed edge is picked, the extending path displays from the picking point.<br>
2. Specify a distance.

### Command-line options

**Type**

* Smooth: Extends the surface smoothly curving from the edge.
* Line: Extends the surface in a straight line from the edge.

**SetBasePoint**: Specify a location that serves as the first point when picking two points that set the extension distance.

**Merge**

* Yes: The extension will be merged with the original surface.
* No: The extension will be created as a separate surface.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extendsrf.htm#\(null\)).
