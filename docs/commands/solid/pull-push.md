# Pull Push

## <img src="../../.gitbook/assets/G3_08_SOLID_RHINO_PULLPUSH.png" alt="" data-size="line"> Pull Push <a href="#profiles" id="profiles"></a>

The PushPull command extrudes a polysurface face to interactively add or remove volumes on the polysurface.

<figure><img src="../../.gitbook/assets/pushpull.gif" alt=""><figcaption></figcaption></figure>

**Steps**

1. Select a surface.
   * Curves lying on the surface can be detected for finding regions.
   * Use the Invert option to swap the selected and unselected regions.
   * Click on a region to toggle its selection state.
2. Move the mouse to decide the extruding direction and distance.
   * The preview color changes to red if the operation is going to remove a volume from the object.
   *   When you enter a distance, the mouse cursor location is the positive direction.

       \*The scriptable command, -PushPull, always uses the surface normal as the positive direction.

#### Command-line options

-Invert: Swaps the selected an unselected regions. The Invert option is only available when the selected surface has curves lying on it that divide the surface into three or more regions.

-Mode: The Mode option is only available when extending is possible that is when all the surrounding surfacees are planar.

* Extrude: Extrudes the selected surface without extending or shortening the surrounding surfaces.
* Extend: Extends or shortens the surrounding surfaces when extruding the selected surface.

<div align="left"><figure><img src="../../.gitbook/assets/pushpull_extend.gif" alt=""><figcaption></figcaption></figure></div>

-Toggle: Switches the operation mode between Extrude and Extend.

-Direction: Defines the direction by picking two points or typing two coordinates. The default direction is the normal direction of the selected surface.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mesh.htm).
