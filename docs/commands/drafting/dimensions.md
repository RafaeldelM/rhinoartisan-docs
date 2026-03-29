# Dimensions

In RhinoArtisan, dimensions are essential tools for measuring and visualizing the dimensions of objects, such as lengths, diameters, angles, and areas. These dimensions are fundamental for ensuring accuracy and precision in 3D designs and models.

Here are some of the main functions of dimensions in RhinoArtisan:

* **Length measurement:** You can measure the distance between two points or the length of a line, curve, or edge of an object.
* **Diameter measurement:** You can measure the diameter of circles or ellipses.
* **Angle measurement:** You can measure the angle between two lines or curves.
* **Area measurement:** You can measure the area of flat surfaces, such as polygons or regions bounded by curves.
* **Dimension verification:** You can compare measured dimensions with values specified in plans or technical drawings to verify the accuracy of the model.
* **Dimension adjustment:** You can modify object dimensions to meet design or manufacturing requirements.
* **Annotation creation:** You can create dimensional annotations to include measurement information in drawings or plans.

Dimensions in RhinoArtisan can be created in various ways, such as using specific commands, drawing tools, or selecting objects directly. Additionally, you can customize the appearance of dimensions, such as line style, text format, and placement.

### <img src="../../.gitbook/assets/09_DRAFTING_LINEAR_DIMENSION.png" alt="" data-size="line">  Linear Dimension

The Dim command draws horizontal or vertical linear dimensions.

<div align="left"><figure><img src="../../.gitbook/assets/image (495).png" alt=""><figcaption><p>Linear Dimension</p></figcaption></figure></div>

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm).

### <img src="../../.gitbook/assets/10_DRAFTING_HORIZONTAL_DIMENSION.png" alt="" data-size="line"> Horizontal Dimension

The Dim command draws horizontal linear dimensions.

**Steps**

1. Start the command.
2. Pick two points.
3.  Pick the third point to locate the dimension line.

    When the dimension text does not fit between the extension lines, you can place it on the left or right.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#Dim).

### <img src="../../.gitbook/assets/11_DRAFTING_VERTICAL_DIMENSION.png" alt="" data-size="line"> Vertical Dimension

The Dim command draws vertical linear dimensions.

**Steps**

1. Start the command.
2. Pick two points.
3.  Pick the third point to locate the dimension line.

    When the dimension text does not fit between the extension lines, you can place the dimension text on left or right.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#Dim).

### <img src="../../.gitbook/assets/13_DRAFTING_ALIGNED_DIMENSION.png" alt="" data-size="line"> Aligned Dimension

The DimAligned command draws a linear dimension lined up with two points.

<div align="left"><figure><img src="../../.gitbook/assets/image (509).png" alt=""><figcaption><p>Aligned Dimension</p></figcaption></figure></div>

**Steps**

1. Start the command.
2. Pick two points.
3.  Pick the third point to locate the dimension line.

    When the dimension text does not fit between the extension lines, you can place the dimension text on left or right.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#DimAligned).

### <img src="../../.gitbook/assets/13_DRAFTING_ALIGNED_DIMENSION.png" alt="" data-size="line"> Rotated Dimension

The DimRotated command draws a linear dimension rotated from the xy-axis.

<div align="left"><figure><img src="../../.gitbook/assets/image (511).png" alt="" width="188"><figcaption><p>Rotated Dimension</p></figcaption></figure></div>

**Steps**

1. Start the command.
2. Enter a number to set the rotation angle of the dimension line.\
   The rotation angle can also be set by [picking](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/pick_location.htm) two points.
3. Pick two points.
4. Pick the third point to locate the dimension line.\
   When the dimension text does not fit between the extension lines, you can place it on the left or right side.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#DimRotated).

### <img src="../../.gitbook/assets/14_DRAFTING_ANGLE_DIMENSION.png" alt="" data-size="line"> Angle Dimension

The DimAngle command dimensions the angle of an arc, or between two selected lines, or from three points.

**Steps**

1. Select an arc or select two lines, polyline segments, linear surfaces, or poly surface edges.
2. Pick the dimension location.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#DimAngle).

### <img src="../../.gitbook/assets/15_DRAFTING_RADIAL_DIMENSION.png" alt="" data-size="line"> Radial Dimension

The DimRadius command dimensions the radius of an arc or circle. Dimensions always measure like the object was projected to the current construction plane.

<div align="left"><figure><img src="../../.gitbook/assets/image (512).png" alt=""><figcaption><p>Radial Dimension</p></figcaption></figure></div>

**Steps**

1. Select a curve
2. Pick a dimension location

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#DimRadius).

### <img src="../../.gitbook/assets/16_DRAFTING_DIAMETER_DIMENSION.png" alt="" data-size="line"> Diameter Dimension

The DimDiameter command dimensions the diameter of a selected curve.

<div align="left"><figure><img src="../../.gitbook/assets/image (513).png" alt=""><figcaption><p>Diameter Dimension</p></figcaption></figure></div>

**Steps**

1. Select a curve.
2. Pick the dimension location.\
   Dimensions always measure like the object was projected to the current construction plane.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#DimDiameter).

### <img src="../../.gitbook/assets/17_DRAFTING_CENTER_MARK.png" alt="" data-size="line"> Center Mark

The Centermark command draws a cross or cross and centre lines at the centre point of a curve. The size and style of the center mark are controlled by the Annotation Style and the Centermark[ ](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#CentermarkProperties)properties.

<div align="left"><figure><img src="../../.gitbook/assets/image (514).png" alt=""><figcaption><p>Center Mark</p></figcaption></figure></div>

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#Centermark).

<img src="../../.gitbook/assets/19_DRAFTING_VOL_DIMENSION.png" alt="" data-size="line"> Volume Dimension

The DimVolume command dimensions the volume of a closed extrusion, surface, poly surface, mesh, or SubD.

**Steps**

1. Select a closed extrusion, surface, polysurface, mesh, or SubD.
2. Pick a starting point for the text or leader.\
   If the Leader option is used, continue to draw leader points for the Leader command.\
   The volume of the object is automatically entered.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/dimension_commands.htm#DimVolume).

