# Chamfer

## <img src="../../../.gitbook/assets/G4_03_SURFACE_CHAMFER.png" alt="" data-size="line"> Chamfer

The ChamferSrf command creates a ruled surface as a bevel between two input surface edges.

<div align="left"><figure><img src="../../../.gitbook/assets/chamfersrf.gif" alt=""><figcaption></figcaption></figure></div>

### **Steps**

1.  Select the first surface.

    Click the surface at the side you want to keep after chamfering.<br>
2.  Select the second surface.

    Click the surface at the side you want to keep after chamfering.

### Command-line options

**Distances**: The distance from the intersection of the surfaces to the edge of the chamfer.

**Extend**: When one input surface is longer than the other, the chamfer surface is extended on the longer edge.

<div align="left"><figure><img src="../../../.gitbook/assets/chamfersrf_extend.gif" alt=""><figcaption></figcaption></figure></div>

**Trim**

* **Yes**: Trims the original surfaces to the intersections with the resulting surface.
* **No**: Does not trim. Uses the output surface to trim the input surfaces when possible. History is supported when the Trim=No.
* **Split**: Splits the original surfaces at the resulting surface edges.

<div align="left"><figure><img src="../../../.gitbook/assets/chamfersrf_trim.gif" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/chamfersrf.htm#\(null\)).
