# Fillet Surface to Curve

## <img src="../../../.gitbook/assets/G4_08_SURFACE_FILLET_CURVE.png" alt="" data-size="line"> Fillet Surface to Curve

The FilletSrfCrv command creates a fillet surface between a surface and a curve.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrfcrv.gif" alt=""><figcaption></figcaption></figure></div>

### **Steps**

1.  Select a surface.

    The picking location decides the side to create the surface.
2. Select a curve near the surface.

### Options

**Radius**: Move the slider to change the radius, or double-click on the slider to enter a value.

**Range**: Click a number button to change the range of the slider for smaller or larger adjustment.

**Blend Type**

* Arc: Creates a fillet surface with arc sections and tangent (G1) to the input surfaces.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_circularfillet (2).png" alt=""><figcaption></figcaption></figure></div>

* Deformable: Add more control points to the fillet sections for adjusting tangency and bulge.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_deformable (3).gif" alt=""><figcaption></figcaption></figure></div>

* Deformable degree: Sets the degree of fillet sections from 3 to 5.
* Tangent: Moves the second points on both ends in the tangent direction.
* Bulge (For degree 4 and 5): Moves the point(s) in the middle to make the fillet sections sharper or flatter.
* G2 Blend: Creates a blend surface connecting to the input surfaces with curvature (G2) continuity.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_g2blend (1).png" alt=""><figcaption></figcaption></figure></div>

**Trim**: Uses the output surface to trim the input surfaces when possible. History is supported when the Trim checkbox is disabled.

<div align="left"><figure><img src="../../../.gitbook/assets/filletsrf_trim (3).gif" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/filletsrfcrv.htm#\(null\)).
