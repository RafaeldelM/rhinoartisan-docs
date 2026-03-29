# Copy of Extract Mesh Part

## <img src="../../../.gitbook/assets/ExtractMeshEdges.png" alt="" data-size="line"> Extract Mesh Edges <a href="#profiles" id="profiles"></a>

The ExtractMeshEdges command separates edges from the parent mesh determined by an angle between mesh face normals.

The command may help if you have a mesh that came from a polysurface but no longer have the polysurface. Using the command with the Unwelded option creates polyline approximations of where the edges of the polysurface were.

### Command-line options

**Extract edges by**

* **Unwelded:** Extracts edges with coincident vertices.
* **Break angle:** Extracts edges based on the angle between the face normals of adjacent faces.

**Greater than:** Specifies the minimum break angle.

**Less than:** Specifies a maximum break angle

**Increment:** Sets the amount the value changed by each arrow click.

* **Naked:** Extracts the edges that have only one face associated.
* **Join results:** Creates polylines from the extracted line segments.
