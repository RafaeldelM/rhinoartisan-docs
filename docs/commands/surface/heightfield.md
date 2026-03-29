# Heightfield

## <img src="../../.gitbook/assets/CURVE_01_DRAW_CONTROL_POINTS.png" alt="" data-size="line"> Heightfield

The Heightfield command creates a [NURBS](http://www.rhino3d.com/nurbs) surface or mesh based on grayscale values of the pixels in an image file.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/heightfield-001b.png" alt="A grayscale z-buffer bitmap generated from 3-D
objects by the ShowZBuffer command."></div>

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/heightfield-001c.png" alt="The mesh object created from the grayscale z-buffer
bitmap by the Heightfield command ."></div>

### Steps

1. [Select](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm) an image file.
2. [Pick](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/pick_location.htm) the first corner.\
   The base of the surface will be parallel to the current construction plane.
3. Pick the second corner or type a length.\
   The shape of the pick rectangle will match the aspect ratio of the image file.
4. Specify options.

***

### Heightfield Options

**Number of sample points \_\_\_ x \_\_\_**\
The image's "height" is sampled at the specified number of control points along the u and v [directions](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/curvesurfacedirection.htm) of the image.

**Sample count is \_\_\_ of 10000 (surface only)**\
**Height \_\_\_ \<units>**\
Sets the scale of the height of the object.

**Set image as texture**\
Uses the image as a render texture for the created object.

**Create vertex colors (mesh only)**\
Evaluates the color of the texture at each texture coordinate (u,v) and sets the vertex color to match.

**Create object by**

&#x20;  **Mesh with vertexes at sample locations**\
&#x20;  Creates a mesh with vertex points at each of the sample locations.

&#x20;  **Surface with control points at sample location**\
&#x20;  Creates a surface with [control points](https://docs.mcneel.com/rhino/8/help/en-us/popup_moreinformation/controlpoint.htm) at each of the sample locations.

&#x20;  **Interpolate surface through samples**\
&#x20;  Creates a surface that passes through each sample location's height.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/heightfield.htm?Highlight=heightfield).
