# Move

## <img src="../../../.gitbook/assets/G1_02_TRANSFORMATION_MOVE.png" alt="" data-size="line"> Move

The **Move** command in Rhino allows you to relocate objects by specifying a starting and ending point. It provides various options for precise control over the movement direction and distance.

#### Key Steps:

1. **Select Objects**: Choose the objects you want to move.
2. **Pick Start Point**: Click the point from which you want to move the object. Press Enter to use the bounding box center of the selected object.
3. **Pick End Point**: Click the point where you want to move the object to.

#### Command-Line Options:

* **Normal**: Moves objects in the direction normal to a selected point on another object. Useful for aligning objects to a surface or curve.
  * Select the object.
  * Use the `Normal` option.
  * Pick a location on another object to define the normal direction.
  * Enter or click to set the movement distance.
* **Vertical**: Moves objects perpendicular to the current construction plane. Ideal for vertical adjustments.
* **SubCrv**: Allows selecting a part of a curve for moving.

#### Additional Movement Methods:

* **Move by Dragging**:
  * Select and drag objects or control points directly.
  * Type a distance during dragging to constrain the movement.
* **Nudge**:
  * Select and nudge objects using the arrow keys.
  * Hold **Alt** and press arrow keys to move in the x or y direction; PageUp/PageDn for the z direction.
  * The nudge distance and cumulative distance are shown on the command line.
* <img src="../../../.gitbook/assets/image (544).png" alt="" data-size="line"> **Gumball**:
  * Use the Gumball widget to move, scale, and rotate objects. The Gumball provides visual handles for easier manipulation.

These options allow for flexible and precise control over moving objects in 3D space.

The Move command options control mouse operation for selecting and dragging.

**Steps**

1. Select objects.
2.  Pick a point to move from.

    Press Enter to use the bounding box center of the object.
3. Pick a point to move to.

#### Command-line options

-Normal: Moves objects in the normal direction of the picked location on another object.

* The picked location will be the "from point.
* The object can be a curve, surface, polysurface, extrusion, or SubD.

<figure><img src="../../../.gitbook/assets/move_normal.png" alt=""><figcaption></figcaption></figure>

*   Steps

    1.Select the object to move.

    * 2.Select the Normal command-line option.
    * 3.Select an object and pick a location on the object.
    * 4.Pick (with the mouse) or enter the distance.

-Vertical: Moves objects perpendicular to the current construction plane.

-SubCrv: Type subcrv to select part of a curve as input.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mesh.htm).
