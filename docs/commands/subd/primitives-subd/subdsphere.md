# SubDSphere

## <img src="../../../.gitbook/assets/G2_03_SUBD_SPHERE.png" alt="" data-size="line"> SubDSphere <a href="#profiles" id="profiles"></a>

The SubDSphere command creates a Subdivision sphere object with three different styles.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdsphere.gif" alt=""></div>

### Command-line options

#### Styles

1. **UV:** Creates a UV SubD sphere made out of quad faces and a triangle fan at the poles.

**VerticalFaces:** The face count in the vertical direction.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdsphere_verticalfaces.png" alt=""></div>

**AroundFaces:** The face count in the horizontal direction.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdsphere_aroundfaces.png" alt=""></div>

2. **Quads**

Creates a quad SubD sphere with the vertices evenly distributed. A quad SubD sphere starts from a cube (a regular polyhedron with 6 faces). It is then subdivided by the times specified in the Subdivisions option.

**Subdivisions:** Refines the quad SubD sphere by subdividing each quad into 4 smaller quads every time. The subdivision range is from 0 (6 faces) to 6 (24576 faces).

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdspherequadsubdivision.gif" alt=""></div>

3. **Triangles**

Creates an icospherical SubD with the vertices evenly distributed. A SubD icosphere starts from an icosahedron (a regular polyhedron with 20 equilateral triangles). It is then subdivided by the times specified in the Subdivisions option.

**Subdivisions:** Refines the icospherical SubD by subdividing each triangle into 4 smaller triangles every time. The subdivision range is from 0 (20 faces) to 5 (20480 faces).

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdspheretrianglesubdivision.gif" alt=""></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/subdprimitives.htm#SubDSphere).
