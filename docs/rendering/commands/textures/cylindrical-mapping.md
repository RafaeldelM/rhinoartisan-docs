# Cylindrical Mapping

## <img src="../../../.gitbook/assets/G6_04_RENDERING_CYLINDRICAL_MAPPING.png" alt="" data-size="line"> Cylindrical Mapping

The ApplyCylindricalMapping command adds a texture mapping channel to an object and sets the mapping type to cylindrical.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/applycylindricalmapping-001.png)

### **Steps**

1. Select[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm)objects, and press Enter.
2. Draw the mapping widget cylinder.
3. Select the coordinate system.
4. Specify if the cylinder will be capped.
5. Enter a mapping[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/mapping_channels.htm)channel number, or press Enter to accept the default value.

***

### Command-line options

**BoundingBox**\
Uses the object bounding[ ](https://docs.mcneel.com/rhino/8/help/en-us/commands/boundingbox.htm)box to determine the location and size of the mapping widget.

**CPlane**\
Uses Construction plane[ ](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/accurate_modeling.htm#Construction_plane_coordinates)coordinates for the bounding box.

**World**\
Uses World coordinates for the bounding box.

**DirectionConstraint**\
Direction constraints restrict the direction of the cylinder.

**None**\
Pick or type a number to set the height.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_none.png" alt=""></div>

* Use elevator[ ](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/accurate_modeling.htm#Elevator_mode)mode, objects[ ](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/object_snaps.htm)snaps, or other modeling[ ](https://docs.mcneel.com/rhino/8/help/en-us/options/modeling_aids.htm)aids to help picking a location.
* The cursor location defines the positive direction when you type a number to set the height.

**Vertical**\
Creates a cylinder perpendicular to the construction plane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_vertical.png" alt=""></div>

* The CPlane +Z direction defines the positive direction when you type a number to set the height.

**AroundCurve**\
Draws the base circle perpendicular to the picked point on a curve. The center line of the cylinder will be tangent to the curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_aroundcurve.png" alt=""></div>

* The curve direction defines the positive direction when you type a number to set the height.

**Radius**\
Draws the base circle by picking the center point and a radius point.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_radius.png" alt=""></div>

* Cylinder
  * Diameter
  * Circumference
  * Area
  * ProjectOsnap

**2Point**\
Draws the base circle from two opposite points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_2point.png" alt=""></div>

**3Point**\
Draws the base circle through three points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_3point.png" alt=""></div>

* Cylinder
  * Radius

**Tangent**\
Draws the base circle tangent to one, two, or three curves.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_tangent.png" alt=""></div>

* Cylinder
  * Point
  * FromFirstPoint
  * Radius

**FitPoints**\
Draws the base circle by fitting to selected points, control points, or mesh vertices.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_fitpoints.png" alt=""></div>

**Capped**\
Applies the mapping to the top and bottom of the cylinder.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/texturemapping.htm#ApplyCylindricalMapping).
