# SubDCylinder

## <img src="../../../.gitbook/assets/G2_06_SUBD_CYLINDER.png" alt="" data-size="line"> SubDCylinder <a href="#profiles" id="profiles"></a>

The SubDCylinder command creates a Subdivision cylinder object.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdcylinder.gif" alt=""></div>

### **Steps**

1. Draw the base circle.
2.  Pick a location or type a number to set the height.

    The DirectionConstraint options define the positive height differently.

### Command-line options

#### **DirectionConstraint**

#### Direction constraints restrict the direction of the cylinder.

1. **None:** Pick or type a number to set the height.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_none.png" alt=""></div>

***

Use [elevator mode](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/accurate_modeling.htm#Elevator_mode), [object snaps](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/object_snaps.htm), or other [modeling aids](https://docs.mcneel.com/rhino/8/help/en-us/options/modeling_aids.htm) to help picking a location.

The cursor location defines the positive direction when you type a number to set the height.

***

2. **Vertical**

Creates a cylinder perpendicular to the construction plane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_vertical.png" alt=""></div>



***

The CPlane +Z direction defines the positive direction when you type a number to set the height.

***

#### **AroundCurve**

Draws the base circle perpendicular to the picked point on a curve. The center line of the cylinder will be tangent to the curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_aroundcurve.png" alt=""></div>

***

The curve direction defines the positive direction when you type a number to set the height.

***

#### **Solid**

Caps the top and bottom openings or leave them open.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdcylinder_solid.gif" alt=""></div>

#### **Radius**

Draws the base circle by picking the center point and a radius point.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_radius.png" alt=""></div>

[**Diameter**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Diameter) **-** [**Circumference**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Circumference) **-** [**Area**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Area) **-** [**ProjectOsnap**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#ProjectOsnap)

#### **2Point**

Draws the base circle from two opposite points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_2point.png" alt=""></div>

#### **3Point**

Draws the base circle through three points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_3point.png" alt=""></div>

[**Radius**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Radius)

#### **Tangent**

Draws the base circle tangent to one, two, or three curves.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_tangent.png" alt=""></div>

[**Point**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Point) **-** [**FromFirstPoint**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#FromFirstPoint) **-** [**Radius**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Radius)

#### **FitPoints**

Draws the base circle by fitting to selected points, control points, or mesh vertices.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_fitpoints.png" alt=""></div>

#### **AroundFaces**

The number of faces around the circumference.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdcylinder_aroundfaces.png)<br>

#### **VerticalFaces**

The number of faces in the vertical direction.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdcylinder_verticalfaces.png" alt=""></div>

#### **BothSides**

Creates a cylinder symmetrical across the base circle. The height of the cylinder is twice as long as you specify.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cylinder_bothsides.png" alt=""></div>

#### **CapFaceStyle (Tri/Quad)**

Select to use triangle or quad faces to fill the top and bottom openings.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdcylinder_capfacestyle.gif" alt=""></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/subdprimitives.htm#SubDCylinder).
