# Mesh Boolean Union

## <img src="../../../.gitbook/assets/MESH_BOOLEAN_UNION.png" alt="" data-size="line"> Mesh Boolean Union <a href="#profiles" id="profiles"></a>

The **MeshBooleanUnion** command trims the shared areas of selected meshes, polysurfaces, or surfaces and creates a single mesh from the unshared areas. This command is primarily used for combining multiple meshes or surfaces into a single object, removing the overlapping regions, and ensuring the resulting mesh is clean and unified.

***

**Use Cases**

* **Combining Meshes**: Combine two or more meshes by trimming shared areas, useful for creating complex shapes from simpler ones.
* **Mesh Cleanup**: Remove unnecessary overlapping geometry to create a cleaner and more efficient mesh.
* **Mesh Preparation for 3D Printing**: Create a single unified mesh by merging multiple mesh objects, suitable for 3D printing.

***

**Steps to Use**

1. **Start the Command**:\
   Type **MeshBooleanUnion** in the command line or select it from the mesh tools menu.
2. **Select Meshes, Polysurfaces, or Surfaces**:\
   Select the meshes, polysurfaces, or surfaces that you want to union. The shared areas between the selected objects will be trimmed.
3. **Complete the Operation**:\
   After the selection, the command will perform the boolean operation, removing the shared regions and creating a new mesh that represents the unshared areas of the selected objects.
