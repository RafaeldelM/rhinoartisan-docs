# Add a picture plane

## <img src="../../.gitbook/assets/G1_01_SURFACE_PICTURE.png" alt="" data-size="line"> Add a picture plane

The Picture command draws a rectangular planar surface with the specified image assigned to its material and sets the object to [Rendered](https://docs.mcneel.com/rhino/8/help/en-us/options/view_displaymode_options.htm#Rendered) display mode similar to using the [SetObjectDisplayMode](https://docs.mcneel.com/rhino/8/help/en-us/commands/setobjectdisplaymode.htm) command.\
![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/picture-002.png)

### Steps

1.  Select one of [the supported image file types](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/picture_supported_file_types.htm).

    Or, press Ctrl+V if there is an image stored in Clipboard.
2. [Pick](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/pick_location.htm) the first corner of the plane.
3. Pick the other corner, or type the length.\
   The defining rectangle retains the same aspect (length to width) ratio as the image.

### Tips

* Isocurves and edges are turned off on picture objects in all display modes.
* A [Picture](https://docs.mcneel.com/rhino/8/help/en-us/commands/materials.htm#picture_panel) material will be created that can be edited in the [Materials](https://docs.mcneel.com/rhino/8/help/en-us/commands/materials.htm) panel.
* When a Picture plane is [split](https://docs.mcneel.com/rhino/8/help/en-us/commands/split.htm) and [shrunk](https://docs.mcneel.com/rhino/8/help/en-us/commands/shrinktrimmedsrf.htm), a new material will be added for each new Picture plane. The goal is to make the texture display consistent.

***

### Command-line options

**(Default)**\
Draws the rectangle using two opposite corners.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_default.png" alt=""></div>

**3Point**\
Draws the rectangle using two adjacent corner locations and a location on the opposite side.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_3point.png" alt=""></div>

**EdgeMidpoint**\
Draws the rectangle from the midpoint of the first edge, an end of the edge, and a location on the opposite side.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_edgemidpoint.png" alt=""></div>

**Vertical**\
Draws the rectangle perpendicular to the construction plane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_vertical.png" alt=""></div>

**Center**\
Draws the rectangle from the center point and a corner.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_center.png" alt=""></div>



**AroundCurve**\
Draws a rectangle perpendicular to a curve.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/rectangle_aroundcurve.png" alt=""></div>

**Steps**

* [Select](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm) a curve and [pick](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/pick_location.htm) the center of the rectangle on the curve.<br>

**1to1**

Pick a point to place the Picture plane. The plane size will be the print size of the bitmap image calculated from the resolution (dots-per-inch) and the pixel dimension.

***

### ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/picture.png)Picture material properties

**Name**\
The name of the material.

* When an image file is dragged to a Rhino object, a Picture material is created and assigned to the object. The image file name becomes the material name.
* Tiling cannot be modified for a picture texture.

**Picture**

The Picture contains a simple bitmap image.

***

**Texture**

**Name**\
The path and name of the bitmap file.

See also [Bitmap Texture](https://docs.mcneel.com/rhino/8/help/en-us/commands/textures.htm#bitmap).<br>

<img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/material_panel_self_illumination.png" alt="" data-size="line">**Self-illumination**

The Self-Illumination option causes the image to always display at full intensity and is not affected by light or shadow.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/self-illumination-002.png)\
&#xNAN;_&#x53;elf-Illumination off (left), and on (right)._

<img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/material_panel_grayscale.png" alt="" data-size="line">**Grayscale**\
The Grayscale option sets the image color to 256-gray.

<img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/named_item_import_from_3dm_file_hot.png" alt="" data-size="line">**Browse in folder**\
Select an external bitmap image file on the computer.

<img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/delete.png" alt="" data-size="line">**Remove texture**\
Delete the texture being added.

***

**Transparency**

Specifies transparency settings for the image. Specify a transparent color to be used as an alpha channel if no alpha channel is specified in the image.

Transparency is not supported when using JPEG (.jpg; .jpeg), PCX (.pcx), or Windows Bitmap (.bmp).

<img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/material_panel_alpha_transparency.png" alt="" data-size="line">**Use alpha channel**\
Specifies that the image alpha channel be used to determine transparency.

<img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/material_panel_use_color_mask.png" alt="" data-size="line">**Use color mask**\
Specifies that a color in the image be used to determine transparency.

**Color selector**\
**Tolerance:**\
The [tolerance](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/tolerance.htm) to be used to determine if the texture's color matches the transparency color.

**Object transparency**\
Sets the amount of transparency for the entire object.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/picture.htm?Highlight=picture).
