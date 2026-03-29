# Spherical Mapping

## <img src="../../../.gitbook/assets/G6_11_RENDERING_SPHERICAL_MAPPING.png" alt="" data-size="line"> Spherical Mapping

The ApplySphericalMapping command adds a texture mapping channel to an object and sets the mapping type to spherical.

### **Steps**

1. Select[ ](https://docs.mcneel.com/rhino/8/help/en-us/commands/selection_commands.htm#Select_object_basics)objects, and press Enter.
2. Draw the mapping widget sphere.<br>
3. Enter a mapping[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/mapping_channels.htm)channel number, or press Enter to accept the default value.

***

### Command-line options

**BoundingBox**\
Uses the object bounding[ ](https://docs.mcneel.com/rhino/8/help/en-us/commands/boundingbox.htm)box to determine the location and size of the mapping widget.

**CPlane**\
Uses Construction plane[ ](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/accurate_modeling.htm#Construction_plane_coordinates)coordinates for the bounding box.

**World**\
Uses World[ ](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/accurate_modeling.htm#World_Coordinates)coordinates for the bounding box.

**Radius**\
Creates a sphere by picking the center point and a radius point.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/sphere_radius.png" alt=""></div>

* Sphere attributes
  * Diameter
  * Orientation
  * Circumference
  * Area
  * ProjectOsnap

**2Point**\
Creates a sphere from two opposite points on the base circle.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/sphere_2point.png" alt=""></div>

**3Point**\
Creates a sphere from three points on the base circle.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/sphere_3point.png" alt=""></div>

* Sphere attributes
  * Radius

**Tangent**\
Creates a sphere with the base circle tangent to one, two or three curves.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/sphere_tangent.png" alt=""></div>

* Sphere attributes
  * Point
  * FromFirstPoint
  * Radius

**AroundCurve**\
Creates a sphere from its center point on a curve, and a point on the base circle perpendicular to the curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/sphere_aroundcurve.png" alt=""></div>

* Sphere attributes
  * Radius
  * Diameter
  * Circumference
  * Area
  * ProjectOsnap

**4Point**\
Creates a sphere from three points on a section circle and a point on the sphere.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/sphere_4point.png" alt=""></div>

* Sphere attributes
  * Radius

**FitPoints**\
Creates a sphere by fitting to selected point objects, curve and surface control[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/controlpoint.htm)points, and mesh vertices.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/sphere_fitpoints.png" alt=""></div>

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/texturemapping.htm#ApplySphericalMapping).
