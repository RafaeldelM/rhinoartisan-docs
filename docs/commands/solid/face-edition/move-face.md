# Move Face

<img src="../../../.gitbook/assets/SOLID_MOVE_FACE.png" alt="" data-size="line"> Move Face

The MoveFace command moves a polysurface face.

The surrounding joined surfaces are adjusted to accommodate the new face orientation.

Faces on relatively simple polysurfaces such as boxy planar shapes can be moved to adjust things like wall locations in a building or planes in a mechanical part.

**Steps**

1. Select a face.
2. Pick a point to move from.
3. Pick a point to move to.

#### Command-line options

-DirectionConstraint

* None: The face can be moved any direction.
* Normal: The face can only be moved in the positive or negative normal direction.

-ToBoundary

* DeleteBoundary: Determines whether or not the boundary is deleted after the move



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/moveface.htm#\(null\)).
