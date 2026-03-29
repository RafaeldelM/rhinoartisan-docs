# Box Mapping

## <img src="../../../.gitbook/assets/G6_10_RENDERING_BOX_MAPPING.png" alt="" data-size="line"> Box Mapping

The ApplyBoxMapping command adds a box texture mapping channel to an object and sets the mapping type to box.

<div align="left"><figure><img src="../../../.gitbook/assets/applyboxmapping-002.png" alt=""><figcaption></figcaption></figure></div>

### **Steps**

1. Select[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm)objects, and press Enter.
2. Draw the mapping widget box.
3. Select the coordinate system.
4. Specify if the box will be capped.
5. Enter a mapping[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/mapping_channels.htm)channel number, or press Enter to accept the default value.

***

### Command-line options

**BoundingBox**\
Uses the object bounding[ ](https://docs.mcneel.com/rhino/8/help/en-us/commands/boundingbox.htm)box to determine the location and size of the mapping widget.

**CPlane**\
Uses Construction plane[ ](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/accurate_modeling.htm#Construction_plane_coordinates)coordinates for the bounding box.

**World**\
Uses World[ ](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/accurate_modeling.htm#World_Coordinates)coordinates for the bounding box.

**Diagonal**\
Creates a box from the diagonal corners. If you pick the two corners on the CPlane, the command prompts for picking the height.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/box_diagonal.png" alt=""></div>

**Cube**\
Creates a box with six square faces from the diagonal corners.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/box_diagonal_cube.png" alt=""></div>

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

**Capped**\
Applies the mapping to all six sides of the box.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/texturemapping.htm#ApplyBoxMapping).
