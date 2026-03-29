# Mesh

## <img src="../../../.gitbook/assets/MESH.png" alt="" data-size="line"> Mesh <a href="#profiles" id="profiles"></a>

The **Mesh** command creates a polygon mesh from a NURBS surface, polysurface, or SubD. A polygon mesh is a collection of vertices and polygons (typically triangles and quadrilaterals) that define the shape of a polyhedral object. In Rhino, meshes are essential for 3D modeling, rendering, and exporting to various file formats, including STL for 3D printing.

When you create a mesh from a solid, it will be seamless and watertight, meaning there will be no holes in the mesh. This feature is particularly important for rapid prototyping and 3D printing.

***

**Steps to Use**

1. **Select Objects**: Choose the NURBS surfaces, polysurfaces, or SubD objects you want to convert into a mesh.
2. **Preview Mesh**: Rhino will generate a preview of the mesh and allow you to adjust the mesh options before finalizing.
3. **Adjust Mesh Options**: Use the available options to control the quality and density of the generated mesh.
4. **Finalize**: Once satisfied with the preview, finalize the mesh creation.

***

**Mesh Options**

* **Simple Mesh Options**\
  Adjust the density of the mesh faces created from the NURBS surfaces. A higher polygon count results in a more detailed mesh, while a lower polygon count creates a more simplified mesh.
* **NURBS Meshing Parameters**
  * **Fewer Polygons / More Polygons**: This slider controls the density of the mesh. Fewer polygons will create a coarser mesh, while more polygons result in a finer, more detailed mesh.
* **SubD Meshing Parameters**
  * **Adaptive Subdivision Level**: Controls how the mesh adapts to the subdivision level of SubD objects. A lower subdivision level results in fewer mesh faces, which increases performance but reduces mesh accuracy.
* **Render Mesh Wire Preview**: You can preview the mesh wireframe in the viewport. This is particularly useful to visualize the structure of the mesh before finalizing the settings.
  * **Note**: The wireframe preview will not display in **Rendered** and **Raytraced** display modes.
* **Restore Defaults**: If you want to reset the meshing options to the default settings, you can click the **Restore Defaults** button. Your custom mesh presets will remain unaffected.
* **Detailed Controls**: For advanced users, switching to detailed meshing settings allows for greater control over how the mesh is generated, particularly in terms of polygon count and the distribution of vertices.

***

**Mesh Types and Considerations**

* **Seamless (Watertight) Meshes**:\
  When creating a mesh from a solid, Rhino ensures that the mesh is seamless, meaning all faces are connected, and there are no holes. This feature is crucial for exporting to 3D printing file formats like STL, as a watertight mesh is required for successful printing.
* **Editable vs. Display Meshes**:\
  Meshes created using the **Mesh** command are fully editable, and you can modify them independently of the original NURBS or SubD object. In contrast, meshes generated in shaded viewports are not editable but can be extracted using the **ExtractRenderMesh** command.

***

**Use Case Example**

1. **Convert a Solid to Mesh**:
   * Select a solid object that you wish to convert into a mesh.
   * Use the **Mesh** command to create a seamless, watertight mesh suitable for 3D printing.
2. **Adjust Mesh Density**:
   * Use the slider to adjust the number of polygons based on your need for mesh detail. For rapid prototyping, you may opt for fewer polygons.
3. **Preview and Finalize**:
   * Preview the mesh and make any necessary adjustments before clicking **OK** to generate the final mesh.
