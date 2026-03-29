# Rail Revolve

## <img src="../../.gitbook/assets/G2_15_SURFACE_REVOLVE_CURVE (1).png" alt="" data-size="line"> Rail Revolve

The RailRevolve command creates a surface by revolving a profile curve that defines the surface shape around a rail curve that defines the surface edge.

### Steps

1. Select a profile curve.
2. Select a rail curve.
3. Pick the start of the revolve axis.
4. Pick the end of the revolve axis. Press Enter to use the CPlane z-axis direction.

### Command-line options

**ScaleHeight**: The profile curve, in addition to being revolved, stretches along the revolve axis using the revolve axis origin as the scale base point. The distance from the revolve axis origin to the path curve start point along the revolve axis is the primary reference height, and the distances from the revolve axis origin to path curve control points along the revolve axis are the secondary reference heights.

You do not need ScaleHeight option if the rail curve is planar and perpendicular to the revolve axis. In this case, the result looks exactly the same both ways. This is the way RailRevolve is normally used.

Use the ScaleHeight option if the rail curve is not on a plane perpendicular to the revolve axis and you want a part of the profile curve to only revolve around the revolve axis, not to move along the revolve axis as it is revolved. This is the case if you want to build rail-revolved surfaces with smooth round ends even if the rail curve is not planar.

With the ScaleHeight option, the revolve axis origin location matters. The revolve axis origin is also the scale origin. The one-dimensional scaling happens parallel to the revolve axis.

If the rail curve is closed, the seam must be where the profile touches the rail for good results.

**SplitAtTangents**

* Yes: Creates a single surface.
* No: Creates a polysurface when the input curves are joined tangent curves. Faces in the resulting polysurface correspond to the tangent sub-curves in the input curves.

<figure><img src="../../.gitbook/assets/extrudesplitattangents_yes (1).png" alt=""><figcaption></figcaption></figure>



To watch the video examples and for more information about **ScaleHeight**, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/railrevolve.htm).
