# SubDPlane

## <img src="../../../.gitbook/assets/G2_02_SUBD_PLANE.png" alt="" data-size="line"> SubDPlane <a href="#profiles" id="profiles"></a>

The SubDPlane command creates a Subdivision plane object.

### **Steps**

*   Pick two points for the opposite corners of a rectangle.

    Or, select one of the options to draw the rectangle in a different way.
* Specify the face numbers in X and Y directions.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdplane.gif)

### Command-line options

#### **(Default):** Draws the rectangle using two opposite corners.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_default.png" alt=""></div>

#### **3Point:** Draws the rectangle using two adjacent corner locations and a location on the opposite side.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_3point.png" alt=""></div>

#### **EdgeMidpoint:** Draws the rectangle from the midpoint of the first edge, an end of the edge, and a location on the opposite side.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_edgemidpoint.png" alt=""></div>

#### **Vertical:** Draws the rectangle perpendicular to the construction plane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_vertical.png" alt=""></div>

#### **Center:** Draws the rectangle from the center point and a corner.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_center.png" alt=""></div>

**XCount:** The number of faces in the x direction.

**YCount:** The number of faces in the y direction.

***

Type a number other than 0 and press Enter to set the same number for both directions. Typing 0 picks a point at the current CPlane origin.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/subdprimitives.htm#SubDPlane).
