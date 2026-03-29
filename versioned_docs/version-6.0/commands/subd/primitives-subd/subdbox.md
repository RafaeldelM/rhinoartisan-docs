# SubDBox

## <img src="../../../.gitbook/assets/G2_04_SUBD_BOX.png" alt="" data-size="line"> SubDBox <a href="#profiles" id="profiles"></a>

The SubDBox command creates a subdivision box object.

### **Steps**

1. Specify the face numbers in the X, Y, and Z directions.
2.  Pick two points for the opposite corners of the base rectangle.

    Press and hold [Shift](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/shift-key.htm) to draw a square.

    Or, select one of the options to draw the rectangle in a different way.
3.  Pick the height.

    Press [Enter](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/enter_key.htm) to use the width value for the height.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdbox.gif" alt=""></div>

### Command-line options

#### **Diagonal:** Creates a box from the diagonal corners. If you pick the two corners on the CPlane, the command prompts for picking the height.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/box_diagonal.png" alt=""></div>

* **Cube:** Creates a box with six square faces from the diagonal corners.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/box_diagonal_cube.png" alt=""></div>

#### **(Default)**

Draws the rectangle using two opposite corners.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_default.png" alt=""></div>

#### **3Point**

Draws the rectangle using two adjacent corner locations and a location on the opposite side.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_3point.png" alt=""></div>

* **EdgeMidpoint:** Draws the rectangle from the midpoint of the first edge, an end of the edge, and a location on the opposite side.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_edgemidpoint.png" alt=""></div>

#### **Vertical**

Draws the rectangle perpendicular to the construction plane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_vertical.png" alt=""></div>

#### **Center**

Draws the rectangle from the center point and a corner.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_center.png" alt=""></div>

#### **AroundCurve**

Draws a rectangle perpendicular to a curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_aroundcurve.png" alt=""></div>

**Steps**

* [Select](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm) a curve and [pick](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/pick_location.htm) the center of the rectangle on the curve.<br>

#### **XCount/YCount/ZCount**

The number of faces in the x/y/z direction.

***

Type a number other than 0 and press Enter to set the same number for all directions. Typing 0 picks a point at the current CPlane origin.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/subdprimitives.htm#SubDBox).
