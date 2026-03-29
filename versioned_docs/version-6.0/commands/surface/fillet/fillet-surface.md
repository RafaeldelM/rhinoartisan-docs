# Fillet Surface

## <img src="../../../.gitbook/assets/G4_01_SURFACE_FILLET.png" alt="" data-size="line"> Fillet Surface

The FilletSrf command creates a constant-radius round surface between two surfaces.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/filletsrf.gif" alt=""></div>

### Steps

1.  Select the first surface.

    Click the surface at the side you want to keep after filleting.
2.  Select second surface.

    Click the surface at the side you want to keep after filleting.

### Command-line options

**Radius**: Sets the radius of the fillet surface. It will be the initial value of the Radius slider in the options dialog.

### Options

**Radius**: Move the slider to change the radius, or double-click on the slider to enter a value.

**Range**: Click a number button to change the range of the slider for smaller or larger adjustment.

**Blend Type**

* Arc Creates a fillet surface with arc sections and tangent (G1) to the input surfaces.



<div align="left"><figure><img src="../../../.gitbook/assets/image (564).png" alt=""><figcaption></figcaption></figure></div>

* Deformable: Adds more control points to the fillet sections for adjusting tangency and bulge.



<div align="left"><figure><img src="../../../.gitbook/assets/image (566).png" alt=""><figcaption></figcaption></figure></div>

* Deformable degree: Sets the degree of fillet sections from 3 to 5
* Tangent: Moves the second points on both ends in the tangent direction.
* Bulge (For degree 4 and 5): Moves the point(s) in the middle to make the fillet sections sharper or flatter.
* G2 Blend: Creates a blend surface connecting to the input surfaces with curvature (G2) continuity.

<div align="left"><figure><img src="../../../.gitbook/assets/image (567).png" alt=""><figcaption></figcaption></figure></div>

**Trim**: Uses the output surface to trim the input surfaces when possible. History is supported when the Trim checkbox is disabled.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_trim.gif" alt=""><figcaption></figcaption></figure></div>

**Extend**: When one input surface is longer than the other, the fillet surface is extended on the longer edge.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_extend.gif" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/chamfersrf.htm#FilletSrf).
