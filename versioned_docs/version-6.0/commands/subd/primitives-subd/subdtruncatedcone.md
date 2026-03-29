# SubDTruncatedCone

## <img src="../../../.gitbook/assets/G2_08_SUBD_CONE_TRUNCATED.png" alt="" data-size="line"> SubDTruncatedCone <a href="#profiles" id="profiles"></a>

The SubDTruncatedCone command creates a subdivision truncated cone object.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdtruncatedcone.gif" alt=""></div>

### **Steps**

1. Draw the base circle.
2.  Pick a location or type a number to set the height.

    The positive direction of the height is different based on the selected DirectionConstraint option.
3. Draw the end circle.

### Base circle options

**DirectionConstraint**

Direction constraints restrict the direction of the truncated cone.

1. **None:** Pick or type a number to set the height.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_none.png" alt=""></div>

***

Use elevator mode, object snaps, or other modeling aids to help picking a location.

The cursor location is the positive direction when you type a number to set the height.

***

2. **Vertical:** Creates a truncated cone perpendicular to the construction plane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_vertical.png" alt=""></div>

***

The CPlane +Z direction is the positive direction when you type a number to set the height.

***

3. **AroundCurve**

Draws the base circle perpendicular to the picked point on a curve. The center line of the truncated cone will be tangent to the curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cone_aroundcurve.png" alt=""></div>

***

The curve direction is the positive direction when you type a number to set the height.

***

#### **Solid**

Caps the top and bottom openings or leave them open.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdtruncatedcone_solid.gif" alt=""></div>

#### **Radius**

Draws the base circle by picking the center point and a radius point.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/truncatedcone_radius.png" alt=""></div>

[**Diameter**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Diameter) **-** [**Circumference**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Circumference) **-** [**Area**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Area) **-** [**ProjectOsnap**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#ProjectOsnap)

#### **2Point**

Draws the base circle from two opposite points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/truncatedcone_2point.png" alt=""></div>

#### **3Point**

Draws the base circle through three points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/truncatedcone_3point.png" alt=""></div>

[**Radius**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Radius)

#### **Tangent**

Draws the base circle tangent to one, two, or three curves.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/truncatedcone_tangent.png" alt=""></div>

[**Point**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Point) **-** [**FromFirstPoint**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#FromFirstPoint) **-** [**Radius**](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/commandoptions/circle_sub_options.htm#Radius)

#### **FitPoints**

Draws the base circle by fitting to selected points, control points, or mesh vertices.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/truncatedcone_fitpoints.png" alt=""></div>

#### **VerticalFaces**

The number of faces in the vertical direction.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdtruncatedcone_verticalfaces.png" alt=""></div>

#### **AroundFaces**

The number of faces around the circumference.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdtruncatedcone_aroundfaces.png" alt=""></div>

#### **CapFaceStyle (Tri/Quad)**

Select to use triangle or quad faces to fill the top and bottom openings.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdtruncatedcone_capfacestyle.gif" alt=""></div>

***

This option is only visible when AroundFaces is an even number (4, 6, 8...), and Solid=Yes.

Tri is always used when AroundFaces is an odd number.

***

### End circle options

#### **Radius**

Pick a location or enter a number to set the end circle radius.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/truncatedcone_end_radius.png" alt=""></div>

#### **Diameter**

Pick a location or enter a number to set the end circle diameter.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/truncatedcone_end_diameter.png" alt=""></div>

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/subdprimitives.htm#SubDTruncatedCone).
