# Fillet Surface to Rail Curve

## <img src="../../../.gitbook/assets/G4_02_SURFACE_FILLET_SRF_TO_RAIL.png" alt="" data-size="line"> Fillet Surface to Rail Curve

The FilletSrfToRail command creates a surface blending between a surface and a curve referencing the curvature of another surface.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrftorail.gif" alt=""><figcaption></figcaption></figure></div>

### **Steps**

1. Select a curve.
2. Select the surface near the curve.
3. Select another surface.

### Options

**Blend Type**

* Arc: Creates a fillet surface with arc sections and tangent (G1) to the input surfaces.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_circularfillet (1).png" alt=""><figcaption></figcaption></figure></div>

* Deformable: Add more control points to the filet sections for adjusting tangency and bulge.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_deformable (1).gif" alt=""><figcaption></figcaption></figure></div>

* Deformable degree: Sets the degree of fillet sections from 3 to 5.
* Tangent: Moves the second points on both ends in the tangent direction.
* Bulge (For degree 4 and 5): Moves the point(s) in the middle to make the fillet sections sharper or flattrer.
* G2 Blend: Creates a blend surface connecting to the input surfaces with curvature (G2) continuity.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_g2blend.png" alt=""><figcaption></figcaption></figure></div>

* Trim: Uses the output surface to trim the input surfaces when possible. History is supported when the Trim checkbox is disabled.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_trim (1).gif" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/filletsrfcrv.htm#FilletSrfToRail).
