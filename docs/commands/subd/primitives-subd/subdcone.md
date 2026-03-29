# SubDCone

## <img src="../../../.gitbook/assets/G2_07_SUBD_CONE.png" alt="" data-size="line"> SubDCone <a href="#profiles" id="profiles"></a>

The SubDCone command creates a Subdivision cone object.

<div align="left"><figure><img src="../../../.gitbook/assets/image (663).png" alt=""><figcaption></figcaption></figure></div>

### Command-line options

#### **DirectionConstraint**

Direction constraints restrict the direction of the cone.

1. **None:** Pick or type a number to set the height.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_none.png" alt=""></div>

***

Use [elevator mode](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/accurate_modeling.htm#Elevator_mode), [object snaps](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/object_snaps.htm), or other [modeling aids](https://docs.mcneel.com/rhino/8/help/en-us/options/modeling_aids.htm) to help picking a location.

The cursor location is the positive direction when you type a number to set the height.

***

2. **Vertical**

Creates a cone perpendicular to the construction plane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_vertical.png" alt=""></div>

***

The CPlane +Z direction is the positive direction when you type a number to set the height.

***

3. **AroundCurve**

Draws the base circle perpendicular to the picked point on a curve. The center line of the cone will be tangent to the curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_aroundcurve.png" alt=""></div>

* The curve direction is the positive direction when you type a number to set the height.

#### **Solid (Yes/No)**

Decides if the bottom will be capped to create a solid or open cone.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdcone_solid.gif" alt=""></div>

#### **Radius**

Draws the base circle by picking the center point and a radius point.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_radius.png" alt=""></div>

[**Diameter**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Diameter) **-** [**Circumference**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Circumference) **-** [**Area**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Area) **-** [**ProjectOsnap**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#ProjectOsnap)

#### **2Point**

Draws the base circle from two opposite points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_2point.png" alt=""></div>

#### **3Point**

Draws the base circle through three points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_3point.png" alt=""></div>

[**Radius**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Radius)

#### **Tangent**

Draws the base circle tangent to one, two, or three curves.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_tangent.png" alt=""></div>

[**Point**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Point) **-** [**FromFirstPoint**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#FromFirstPoint) **-** [**Radius**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Radius)

#### **FitPoints**

Draws the base circle by fitting to selected points, control points, or mesh vertices.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_fitpoints.png" alt=""></div>

1. **VerticalFaces:** Sets the face count between the bottom and the apex.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdcone_verticalfaces.png" alt=""></div>

2. **AroundFaces:** Sets the face count in the east-west direction.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdcone_aroundlfaces.png" alt=""></div>

3. **CapFaceStyle (Tri/Quad):** Select to use triangle or quad faces to fill the bottom opening.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdcone_capfacestyle.gif" alt=""></div>

***

This option is only visible when AroundFaces is an even number (4, 6, 8...), and Solid=Yes.

Tri is always used when AroundFaces is an odd number.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/subdprimitives.htm#SubDCone).
