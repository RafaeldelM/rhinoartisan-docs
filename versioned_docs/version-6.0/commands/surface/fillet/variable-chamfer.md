# Variable Chamfer

## <img src="../../../.gitbook/assets/G4_09_SURFACE_CHAMFER_VARIABLE.png" alt="" data-size="line"> Variable Chamfer

The VariableChamferSrf command creates a chamfer surface between edges of intersecting surfaces with varying distance values, trims the original surfaces faces, and joins the resulting surfaces.

### **Steps**

1. Select two intersecting surfaces for variable radius chamfer on the surfaces near the edge that will be chamfered.\
   Surfaces must intersect.\
   Handles will appear on surface edges.
2. Infinite Plane: Type IP for InfinitePlane options.
3. Press Enter to use the default distances.\
   Or\
   Type a new distance any time the ChamferDistance option displays on the command line.
4. Specify a command line option.\
   Or\
   Select a handle to edit.

### Radius/Distance options

**FromCurve**: Select a curve. The radius of the curve at the picked location will be used.

**FromTwoPoints**: Pick two points to show the radius distance.

### Handle options

**AddHandle**: Adds a handle along the edges.

**CopyHandle**: Adds a new handle using the distance from the selected handle.

**RemoveHandle**: Visible only when at least one handle has been added.

**SetAll**: Sets the distance or radius for all handles.

**LinkHandles**: Editing a single handle updates all handles.

### RailType options

**DistFromEdge**: The distance from the edge curves determines the intersection.

**RollingBall**: The radius of a rolling ball determines the intersection.

**DistBetweenRails**: The distance between the edge rails determines the intersection.

**TrimAndJoin**: Trims and joins the resulting surface to the input surfaces. History only works if TrimAndJoin=No.

**Preview**: Displays a dynamic preview. You can change the options and the preview will update.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/variablechamfersrf.htm#\(null\)).
