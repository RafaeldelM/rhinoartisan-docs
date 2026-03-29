# Cap

## <img src="../../.gitbook/assets/G3_03_SOLID_CAP.png" alt="" data-size="line"> Cap <a href="#profiles" id="profiles"></a>

The Cap command fills planar holes in objects with planar faces.

It is caplable of capping surfaces, Meshes and SubDs.

<div align="left"><figure><img src="../../.gitbook/assets/cap_v7.gif" alt=""><figcaption></figcaption></figure></div>

#### Command-line options (Mesh/SubD only)

-DeleteInput: Specify if the input object will be deleted.

-Crease

* Yes: Do not weld the vertices along the cap boundary.

<div align="left"><figure><img src="../../.gitbook/assets/cap_crease_yes.png" alt=""><figcaption></figcaption></figure></div>

* No: Welds the vertices along the cap boundary.

<div align="left"><figure><img src="../../.gitbook/assets/cap_crease_no.png" alt=""><figcaption></figcaption></figure></div>

* Triangles
  * Yes: Fills a planar opening in a SubD or mesh with triangle faces.

<div align="left"><figure><img src="../../.gitbook/assets/cap_triangles.png" alt=""><figcaption></figcaption></figure></div>

* No: Fills a planar opening in a SubD with a single face, or in a mesh with an n-gon.

<div align="left"><figure><img src="../../.gitbook/assets/cap_ngons.png" alt=""><figcaption></figcaption></figure></div>

#### Aditional Notes

Caps will always be made up of triangles when:

* A SubD or mesh cap has a hole (an inner boundary).

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cap_hole.png" alt=""></div>

* Any part of the outer boundary of a SubD cap is not convex.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/cap_subd_convex.gif" alt=""></div>

You can use the MergeFaces command to combine the triangles into a single face as needed.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mesh.htm).
