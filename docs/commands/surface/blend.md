# Blend

## <img src="../../.gitbook/assets/G2_14_SURFACE_BEND.png" alt="" data-size="line"> Blend

The BlendSrf command creates a transitional surface between two surface, polysurface, or extrusion edges.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/blendsrf.gif)

### Steps

1.  Select the first edge.

    Use the ChainEdges option to select an edge chain.
2. Select the second edge, or another edge chain.
3. Adjust the blend settings or handle control points, click OK.

### Command-line option

**ChainEdges**: Selects connected edges that will be considered a single edge.

**Edit**: Changes the blend settings and handles for the blend surface created with History. History locking temporarily turns off when editing a blend surface with History.

### Keys for control

**Shift**: By default the shape curves are separately edited at each end, Hold Shift to retain symmetry. With symmetry, point editing is mirrored to the other end of the curve.

**Alt**: Hold Alt while dragging the handles to change the angle between the shape curve and the surface edge.

### To Adjust seams

1. Select each seam point and move it along the curve to line up all curve seams.
2. Use the Flip option to make all seam arrows point to the same side.
3. Press Enter to continue.

### Adjust seam options (Closed curves only)

**Flip**: Reverses the curve direction.

**Automatic**: Attempts to align the seam points and directions without intervention.

**Natural**: Moves the seam points to the way they were at the beginning of the command.

### Adjust Surface Blend options

**Lock**: Maintains the relationship between the two curve ends.

**Slider**: Determines the distance of influence the surface has on the edge curve.

<div align="left"><figure><img src="../../.gitbook/assets/blendsrf-020.png" alt=""><figcaption></figcaption></figure></div>

\
To watch the video examples and for more information about **Adjust seam and Surface Blend options,** , please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/blendsrf.htm).

***

**Tips**

* Always blend from the largest radius to the smallest radius across a model.
* Remove any edges you can prior to blending with [MergeAllCoplanarFaces](https://docs.mcneel.com/rhino/8/help/en-us/commands/mergeallcoplanarfaces.htm) or by way of surfacing in a simpler manner. Fewer intersected edges = Fewer problems as the blend rolls along any edges and tries to trim and join with the adjacent surfaces.
* Make sure there is enough room for the blend surface to trim and join with adjacent surfaces. The angle relationships between surfaces, sharpness of the bend in the edge around corners, and blend type all play a part in any particular case.
