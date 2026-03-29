# Set XYZ Coordinates

## <img src="../../../.gitbook/assets/G6_04_TRANSFORMATION_SETPT.png" alt="" data-size="line"> Set XYZ Coordinates <a href="#profiles" id="profiles"></a>

The SetPt command moves selected points and control points of objects to a specified location in the x, y, and/or z directions.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/setpt.gif" alt=""></div>

* If the entire objects such as curves or surfaces are selected without showing control points, SetPt will move all of the objects’ control points to that location. This may result in a flattening or distortion of the object.
* This command is often used to accurately change the position of points and control points. It is also a fast way to be sure that a set of planar curves are all in the same plane.

***

### **Steps**

1. Select objects.
2. In the Set Points dialog box, click the check boxes for the coordinates.
3.  Pick a location to match.

    The selected objects will line up with the set point in the direction(s) you chose.

:::info
* To move in one direction, enable the checkbox only.
* Right-click on a checkbox to enable the checkbox and clear all the others.
* When repeating the SetPt command with the same settings, right-click the mouse button, press Enter, or press the space bar to accept the current settings.
* When block instances are selected, the block instances are aligned with their insertion points
:::

***

### Set Points Options

-Set X/Set Y/Set Z: Aligns objets in the x, y, and z directions.

-Align to World/Align to CPlane: Align with the world or construction plane coordinates.

### Command-line option

-Copy: Specifies whether or not the objects are copied.

* A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on.
* Copy=Yes supports [History recording](https://docs.mcneel.com/rhino/8/help/en-us/commands/history.htm).
* The [RememberCopyOptions](https://docs.mcneel.com/rhino/8/help/en-us/commands/remembercopyoptions.htm) command determines whether the selected option is used as the default.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/setpt.htm).
