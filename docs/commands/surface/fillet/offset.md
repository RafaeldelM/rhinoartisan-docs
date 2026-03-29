# Offset

## <img src="../../../.gitbook/assets/G4_05_SURFACE_OFFSET.png" alt="" data-size="line"> Offset

The OffsetSrf command copies a surface or polysurface so that locations on the copied surface are the same specified distance from the original surface.

### **Steps**

1. Select a surface or polysurface.
2. Infinite Plane: Type IP for InfinitePlane options.
3. Type the offset distance, and press Enter.

### Command-line options

**Distance**: Sets the offset distance.

**Corner**: Specifies how offset corner continuity handled. These options only apply if the offset direction is to the "outside" as shown in the image.

* Sharp: Curves offset to the outside of a corner will be extended to meet at sharp corners with position (G0) continuity.

<div align="left"><figure><img src="../../../.gitbook/assets/offsetcornersharp.png" alt=""><figcaption></figcaption></figure></div>

* Round: Curves offset to the outside of a corner will be filled with arc segments with tangent (G1) continuity.

<div align="left"><figure><img src="../../../.gitbook/assets/offsetcornerround (1).png" alt=""><figcaption></figcaption></figure></div>

**ThroughPoint**: Offsets through a picked point instead of at a distance.

**FlipAll**: Flips the offset direction of all selected surfaces. Arrows indicate the positive offset direction.

**Solid**: Makes a closed solid from the input and offset surfaces by lofting a ruled surface between all of the matching edges.

**Loose (Surfaces only)**: The control point structure of the offset surface is identical to the original surface.

**Tolerance**: Sets the tolerance for the offset surface. Type 0 to use the default tolerance.

**BothSides**: Draws the offset on both sides of the original.

**DeleteInput**: Deletes (Yes) or keeps (No) the input objects.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/offsetsrf.htm#\(null\)).
