# Sweep1

## <img src="../../../.gitbook/assets/G3_01_SUBD_SWEEP_1.png" alt="" data-size="line"> Sweep1 <a href="#profiles" id="profiles"></a>

The Sweep1 command fits a surface through a series of profile curves that define the surface cross-sections and one curve that defines a surface edge.

### **Steps**

1. Select a single rail curve.
2. Select cross-section curves in the order that the surface will pass through them.\
   When multiple closed cross-section curves are selected, there will be an extra step for adjusting curve seams.

### Command-line options

**ChainEdges (rails only):** Select connected edge/curve segments based on the continuity between segments. [How to chain selection.](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/howtochainselectedges.htm)

**Point (cross‑sections only):** Creates a surface that begins or ends at a point.

### Adjust seam options (Closed curves only)

#### **Flip**

Reverses the curve direction.

#### **Automatic**

Attempts to align the seam points and directions without intervention.

#### **Natural**

Moves the seam points to the way they were at the beginning of the command.

#### **SnapToKnots**

1. **Yes :** The seam points are always at the knots. You can only move them among the knots.
2. **No :** The seam points may leave the knots. You can move them without restriction.

### Sweep 1 Rail Options

#### **Frame Style**

A frame is a 3-D point and three direction vectors. It can be drawn as something that looks like the Rhino world axes icon. It describes a unique coordinate system in space. Frames are calculated along the rail and are used to orient the cross-section curves at those locations. In a simple case with one cross-section, frames are made at the cross-section curve location and where the calculated cross-section is going to go. The 3-D rotation between those two frames determines the rotation of the cross-section curve at its new location.

Freeform is the default Frame style. The selected Frame style will be remembered in the current Rhino for next use.

*   **Freeform**

    The cross-section curve rotates to maintain its angle to the rail throughout the sweep.
*   **Roadlike**

    Specify an axis for calculating the 3-D rotation of the cross-section.

    The default Roadlike axis will be different depending on the rail curve. For a planar rail curve, the default axis is perpendicular to the curve plane. For a non-planar rail curve, world-Z axis will be used.

&#x20;      **Set axis -** Sets the axis direction for the Roadlike style.

*   **Align with surface (surface edge as rail only)**

    If the rail is a surface edge, the cross-section curve will twist with the surface edge. If the shapes are tangent to the surface, the new surface should also be tangent.

#### **Sweep options**

*   **Closed sweep**

    Creates a closed surface, continuing the surface past the last curve around to the first curve.

    This option is only available after you select two cross-section curves.
*   **Global shape blending**

    The sweep is linearly blended from one end to the other, creating sweeps that taper from one cross-section curve to the other. Otherwise, the sweep stays constant at the ends and changes more rapidly in the middle.
*   **Untrimmed miters**

    If the sweep creates a polysurface with kinks, the component surfaces will be untrimmed.

#### **Curve options**

* **Refit rail -** Refits the rail curve before creating the sweep.
* **Align cross sections -** Allows reversing the direction of the cross-section curves.
* **Do not change cross sections -** Creates the sweep without altering the cross-section curves.
* **Rebuild cross sections with \_\_\_ control points -** before creating the sweep.
* **Refit cross sections within \_\_\_ -** Refits the cross-section curves before creating the sweep.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/sweep1.htm).

