# Quadrangulate Mesh

## <img src="../../../.gitbook/assets/QUADRANGULATE_MESH.png" alt="" data-size="line"> Quadrangulate Mesh <a href="#profiles" id="profiles"></a>

The QuadrangulateMesh command merges mesh triangles into quadrangles.

Diagonals that are unwelded (have unique vertexes at the corners) will not be considered as candidates for merging triangles into quadrangles.<br>

<div align="left"><figure><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/quadrangulatemesh-001.png" alt=""><figcaption></figcaption></figure></div>

### Command-line options

* **Planarity**: The angle between the face normals of the triangles.
* **Rectangularity**: Specify a number greater than or equal to 1. If the adjacent triangles pass the planarity test then they will be merged into a quadrangle if the largest ratio of the lengths of the diagonal is less than or equal to the number you typed, then the triangles are converted to quadrangle.
* **Increment**: Increment value used by the spinner controls.
