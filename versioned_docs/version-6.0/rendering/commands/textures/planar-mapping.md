# Planar Mapping

## <img src="../../../.gitbook/assets/G6_02_RENDERING_PLANAR_MAPPING.png" alt="" data-size="line"> Planar Mapping

The ApplyPlanarMapping command adds a texture mapping channel to an object and sets the mapping type to planar.

### **Steps**

1. Select[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm)objects, and press Enter.
2. Draw the mapping widget box.
3. Select UV for 2D mapping, or UVW for 3D.
4. Enter a mapping[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/mapping_channels.htm)channel number, or press Enter to accept the default value.

***

### Command-line options

-BoundingBox: Uses the object bounding box to determine the location and size of the mapping widget

* CPlane: Uses Construction plane coordinates for the bounding box.
* World: Uses World coordinates for the bounding box

**Box**\
Draws a box to add a planar mapping widget.

* The vertical direction of the box defines the W direction that is used by 3D procedural textures, such as [Wood](https://docs.mcneel.com/rhino/8/help/en-us/commands/textures.htm#wood), [Noise](https://docs.mcneel.com/rhino/8/help/en-us/commands/textures.htm#noise), [Granite](https://docs.mcneel.com/rhino/8/help/en-us/commands/textures.htm#granite), etc.

**(Default)**\
Draws the rectangle using two opposite corners.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_default.png" alt=""></div>

**3Point**\
Draws the rectangle using two adjacent corner locations and a location on the opposite side.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_3point.png" alt=""></div>

**EdgeMidpoint**\
Draws the rectangle from the midpoint of the first edge, an end of the edge, and a location on the opposite side.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_edgemidpoint.png" alt=""></div>

**Vertical**\
Draws the rectangle perpendicular to the construction plane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_vertical.png" alt=""></div>

**Center**\
Draws the rectangle from the center point and a corner.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_center.png" alt=""></div>

**AroundCurve**\
Draws a rectangle perpendicular to a curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_aroundcurve.png" alt=""></div>

**Steps**

1. Select a curve and pick the center of the rectangle on the curve.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/texturemapping.htm#ApplyPlanarMapping).
