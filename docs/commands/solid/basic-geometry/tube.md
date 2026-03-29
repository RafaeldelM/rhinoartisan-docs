# Tube

## <img src="../../../.gitbook/assets/G1_04_SOLID_TUBE.png" alt="" data-size="line"> Tube <a href="#profiles" id="profiles"></a>

The Tube command draws a closed cylinder with a concentric cylindrical hole.

**Steps**

1. Pick the center and radius of the base.\
   See the Circle command for option descriptions.
2. After drawing the base circle, pick the radius/diameter for the second tube wall.
3. Pick the end of the tube or type a height.

#### Command-line options

-Direction constraint options: Direction constraints restrict the direction of the circle.

* Nonce: The center can be anywhere in 3-D space.
  * Pick the second point anywhere using elevator mode, object snaps or other modeling aids.
* Vertical: Draws an object perpendicular to the construction plane.
  * Pick the center and a radius or diameter.
* AroundCurve: Draws a circle perpendicular to a curve.
  * Select a curve and pick the center of the circle on the curve and a radius or diameter.

-BothSides: Draws the object on both sides of the start point, creating the object twice as long as you indicate.

-WallThickness: Specifies the value for the distance between the inside and outside of the tube.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mesh.htm).

