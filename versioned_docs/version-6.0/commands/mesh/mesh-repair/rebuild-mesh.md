# Rebuild Mesh

## <img src="../../../.gitbook/assets/FILL_MESH_HOLES.png" alt="" data-size="line"> Rebuild Mesh <a href="#profiles" id="profiles"></a>

The **RebuildMesh** command removes all non-essential data from a mesh, such as texture coordinates, vertex colors, surface curvatures, and surface parameters. This command is useful for repairing or simplifying meshes that are not functioning correctly, particularly for 3D printing and prototyping.

***

**Key Features**

* Strips unnecessary metadata to simplify the mesh.
* Recalculates face and vertex normals to ensure proper geometry.
* Retains vertices and faces, preserving the basic structure of the mesh.

***

**Steps to Use**

1. Select the mesh objects you want to rebuild.
2. Execute the command.
3. Adjust command-line options if needed.

***

**Command-Line Options**

* **PreserveTextureCoordinates**\
  Keeps the existing texture coordinates on the mesh.
* **PreserveVertexColors**\
  Retains the original vertex color data on the mesh.

***

**Applications**

Use **RebuildMesh** when a mesh is malfunctioning or contains extraneous data that may hinder performance or cause errors during 3D printing. By recalculating normals and removing unnecessary attributes, this command ensures the mesh is clean, optimized, and ready for further processing or export.
