# Fillet Variable

## <img src="../../../.gitbook/assets/G4_07_SURFACE_FILLET_VARIABLE.png" alt="" data-size="line"> Fillet Variable

The VariableFilletSrf command creates a round tangent surface between edges of intersecting surfaces with varying radius values.

### **Steps**

1. Select two intersecting surfaces for variable fillet on the surfaces near the edge that will be filleted.\
   Surfaces must intersect.\
   Handles will appear on surface edges.
2. Infinite Plane: Type IP for InfinitePlane options.
3. Press Enter to use the default radii.\
   Or\
   Type a new radius distance any time the Radius option displays on the command line.
4. Specify a command line option.\
   Or\
   Select a handle to edit.\
   Moving a handle at the end of the edge will cause the fillet to extend beyond the surface. This will have to be trimmed by other means.

The Radius and Distance options appear on the command line when you drag a handle grip.

### Radius/Distance options

**FromCurve**: Select a curve. The radius of the curve at the picked location will be used.

**FromTwoPoints**: Pick two points to show the radius distance.

### Handle options

**AddHandle**: Adds a handle along the edges.

**CopyHandle**: Adds a new handle using the distance from the selected handle.

**RemoveHandle**: Visible only when at least one handle has been added.

**SetAll**: Sets the distance or radius for all handles.

**LinkHandles**: Editing a single handle updates all handles

### RailType options

**DistFromEdge**: The distance from the edge curves determines the intersection.

**RollingBall**: The radius of a rolling ball determines the intersection.

**DistBetweenRails**: The distance between the edge rails determines the intersection.

**TrimAndJoin**: Trims and joins the resulting surface to the input surfaces. History only works if TrimAndJoint=No.

**Preview**: Displays a dynamic preview. You can change the options and the previese will update.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/variablefilletsrf.htm#\(null\)).
