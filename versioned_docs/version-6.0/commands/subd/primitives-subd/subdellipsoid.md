# SubDEllipsoid

## <img src="../../../.gitbook/assets/G2_05_SUBD_SOLID_ELLIPSOIDE.png" alt="" data-size="line"> SubDEllipsoid <a href="#profiles" id="profiles"></a>

The SubDEllipsoid command draws a subdivision ellipsoid.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdellipsoid.gif)

### Command-line Options

#### **Radius**

Creates an ellipsoid by defining the half-length of each axis.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/ellipsoid_radius.gif" alt=""></div>

1. **Corner:** Draws the base ellipse from the center point and a corner of the enclosing rectangle.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/ellipsoid_radius_corner.png" alt=""></div>

#### **Corner**

Draws the base ellipse from two opposite corners of the enclosing rectangle.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/ellipsoid_corner.png" alt=""></div>

#### **Diameter**

Creates an ellipsoid by defining the length of each axis.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/ellipsoid_diameter.gif" alt=""></div>

1. **Vertical:** Draws the base ellipse perpendicular to the construction plane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/ellipsoid_vertical.png" alt=""></div>

#### **FromFoci**

Draws the ellipse from focus points and a point on the curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/ellipsoid_fromfoci.png" alt=""></div>

1. **MarkFoci:** Places a point object at the focus locations.

#### **AroundCurve**

Draws the base ellipse perpendicular to the picked point on a curve. The third axis will be tangent to the curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/ellipsoid_aroundcurve.png" alt=""></div>

#### **VerticalFaces**

Number of faces along the first axis.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdellipsoid_1stdirfaces.png" alt=""></div>

#### **AroundFaces**

Number of faces around the first axis.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdellipsoid_2nddirfaces.png" alt=""></div>

#### **CapFaceStyle (Tri/Quad)**

Select to use triangle or quad faces at the poles.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdellipsoid_capfacestyle.gif" alt=""></div>

***

This option is only visible when AroundFaces is an even number (4, 6, 8...).

Tri is always used when AroundFaces is an odd number.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/subdprimitives.htm#SubDEllipsoid).
