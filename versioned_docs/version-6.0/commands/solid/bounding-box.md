# Bounding Box

## <img src="../../.gitbook/assets/G0_01_SOLID_BOX_BOUNDINGBOX.png" alt="" data-size="line"> BoundingBox  <a href="#profiles" id="profiles"></a>

The BoundingBox command creates a box that encloses all selected objects, or each object in selection.

#### Command options

-CoordinateSystem: Specifies the coordinate system that will be used for basing the bounding box.

* CPlane: Bases the object creation on construction plane coordinates.
* World: Bases the object creation on world coordinates.

-Cumulative (Yes/No): Specifies to create a bounding box for a collection of objects, or for each object in the collection.

<div align="left"><figure><img src="../../.gitbook/assets/boundingbox_cumulative_yes.png" alt=""><figcaption><p>Yes (Default)</p></figcaption></figure></div>

<div align="left"><figure><img src="../../.gitbook/assets/boundingbox_cumulative_no (1).png" alt=""><figcaption><p>No</p></figcaption></figure></div>

Yes (Default)No

-Output: For three-dimensional objects, specifies the result.

* Solid: Creates a polysurface box.
* Meshes: Creates a mesh box or plane.
* Curves: Creates six grouped rectangles.
* None: Reports the dimensions of the bounding box at the command line.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mesh.htm).
