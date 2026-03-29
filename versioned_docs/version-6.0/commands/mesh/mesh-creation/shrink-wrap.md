# Shrink Wrap

## <img src="../../../.gitbook/assets/SHRINK_WRAP.png" alt="" data-size="line"> Shrink Wrap <a href="#profiles" id="profiles"></a>

The **ShrinkWrap** command generates a mesh that wraps around the selected geometry, including NURBS surfaces, SubD objects, meshes, point clouds, and point objects. This command is highly useful in a variety of applications, such as 3D printing, reverse engineering, and repairing broken or complex geometry. It can create solid meshes from the union of multiple input objects or from fragments of 3D scan data, and it ensures the output mesh is valid and closed.





***

**Use Cases**

* **3D Printing**: Create a mesh suitable for 3D printing applications.
* **Solid Mesh Creation**: Generate a single solid mesh from multiple objects or 3D scan fragments.
* **Mesh Repair**: Repair broken meshes or geometry with self-intersections.
* **Reverse Engineering**: Create meshes from point clouds or NURBS surfaces for reverse engineering.
* **Offset Meshes**: Create meshes with offsets, useful for shell operations.

***

**Steps to Use**

1. **Start the Command**:\
   Type **ShrinkWrap** in the command line or select the command from the menu.
2. **Select the Geometry**:\
   Select the geometry you want the mesh to wrap around. This can include NURBS surfaces, SubDs, meshes, point clouds, or point objects.
3. **Adjust the Options**:\
   Customize the mesh output using the available command-line options.

***

**Command-line Options**

* **Target Edge Length**:\
  Sets the approximate length of the edges in the output mesh.
  * Default is calculated automatically.
  * The edge length deviates more with higher **Polygon Optimization** settings.
* **Offset**:\
  Offsets the output mesh by a specified distance.
  * Positive values inflate the mesh (adds more faces).
  * Negative values shrink the mesh (reduces face count).
  * The offset distance has less influence on the target edge length.
*   **Smoothing Iterations**:

    Defines the smoothing strength for the mesh output.

    * Set to **0** to disable smoothing.
    * Higher values reduce mesh faces and deflate the mesh more.



* **Polygon Optimization % \[0-100]**:\
  Reduces the number of polygons adaptively, keeping faces along hard edges intact.
  * A higher percentage reduces more faces.



* **Inflate Vertices and Points**:\
  Constructs the output mesh from each vertex/point of the input geometry.
  * Enabled by default for point clouds or point objects.
  * Disabled for other object types like SubDs or NURBS surfaces, but can be enabled manually.
  * Meshes will merge when inflated meshes intersect.
* **Fill Holes in Input Objects**:\
  Fills holes in the input objects before mesh creation.
  * Helpful for closing micro gaps or other minor issues in the input geometry.
  * Has no effect for point clouds or when **Inflate Vertices and Points** is enabled.
* **Compute Vertex Colors**:\
  Adds vertex colors from the original mesh or display colors from point clouds to the resulting mesh.
* **Delete Input Objects**:\
  Deletes the input objects if the output mesh is successfully created.
* **Preview**:\
  Displays a preview of the resulting mesh during the command session.
* **Draw Mesh Wires**:\
  Displays the wireframe of the preview mesh.
* **Hide Input Objects**:\
  Hides the original input objects during the mesh preview.

***

**Use Case Example**

1. **Creating a Mesh for 3D Printing**:
   * Start the **ShrinkWrap** command.
   * Select your NURBS surfaces or point cloud data.
   * Set the **Target Edge Length** to your desired resolution for the mesh.
   * Enable **Polygon Optimization** to reduce unnecessary faces while preserving hard edges.
   * Optionally, adjust the **Offset** if you want to inflate or shrink the mesh.
   * Preview the mesh and adjust smoothing settings if necessary.
   * Click **OK** to finalize and create the mesh.
2. **Repairing a Broken Mesh**:
   * Use the **Fill Holes in Input Objects** option to close any gaps in the geometry.
   * Set a negative **Offset** value if you want to shrink the mesh and reduce its face count.
   * Use **Smoothing Iterations** to clean up any irregularities in the geometry.
   * Preview the results and finalize the mesh creation.
