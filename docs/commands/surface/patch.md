# Patch

## <img src="../../.gitbook/assets/G2_06_SURFACE_PATCH.png" alt="" data-size="line"> Patch

The Patch command fits a surface through selected curves, meshes, point objects, and point clouds.

### Steps

1. [Select](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm) point objects, curves, and edges to base the patch on.\
   <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/command_icons/subcrv.png" alt="" data-size="line">[SubCrv](https://docs.mcneel.com/rhino/8/help/en-us/commands/subcrv.htm#SubCrvAsInput): Type subcrv to select part of a curve as input.<br>
2. Specify the options

***

### Patch Surface Options

**Sample point spacing**\
The physical distance along the input curve between sample points. The minimum is eight points per curve.

**Surface U spans**\
The u [direction](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/curvesurfacedirection.htm) span count for the automatically generated surface. This value is also used if the starting surface is a 1x1 span plane.

**Surface V spans**\
The v [direction](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/curvesurfacedirection.htm) span count for the automatically generated surface. This value is also used if the starting surface is a 1x1 span plane.

**Stiffness**\
Rhino builds the patch surface by first finding the best fit plane ([PlaneThroughPt](https://docs.mcneel.com/rhino/8/help/en-us/commands/planethroughpt.htm)) through the selected and sampled points along curves. Then the surface deforms to match the points and sampled points. The Stiffness setting tells how much you allow the best fit plane to deform. The bigger the number, the "stiffer" and more rectangular and planar the resulting surface will be. You can test this setting with small or even very big values (>1000).\
Click the Preview button to check the result.

**Adjust tangency**\
Match to the tangent direction of surfaces if the input curves are edges of existing surfaces.

**Automatic trim**\
Tries to find an outside curve and trims the surface to it.

For more information about **Starting surface options**, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/patch.htm).

***

#### Tips

* Try using the [Sweep2](../subd/creation/sweep2.md) command if the Patch command does not give good results.
* For a trimmed patch, select curves that form a closed shape. Select them in order, so each additional curve touches one you have already selected.
* Select additional curves to influence the shape of the patch (such as dips or peaks in the middle of the patch). These do not have to be connected.
* The patch may not pass exactly through all of the input curves.
* If a starting surface is selected and Delete input is checked, [History](https://docs.mcneel.com/rhino/8/help/en-us/commands/history.htm) is not saved.
