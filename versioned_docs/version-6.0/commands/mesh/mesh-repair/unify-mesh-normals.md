# Unify Mesh Normals

## <img src="../../../.gitbook/assets/UNIFY_MESH_NORMALS.png" alt="" data-size="line"> Unify Mesh Normals <a href="#profiles" id="profiles"></a>

The **UnifyMeshNormals** command ensures that all face normals in a mesh object point in a consistent direction. This is particularly useful when cleaning up meshes for 3D printing or exporting them into other software. Consistent normal direction helps prevent errors in rendering or 3D printing, especially in STL/SLA formats.

***

**Steps to Use**

1. Select a single unjoined mesh object.
2. Run the **UnifyMeshNormals** command to adjust the normals of all faces in the mesh so they point to one side of the object.
3. (Optional) After using **UnifyMeshNormals**, you can verify the consistency of the normals by displaying front and back faces in different colors using the **Display Modes Options**.
4. If the command doesn’t seem to affect the mesh, try exploding it and rejoining after ensuring the normals are unified.

***

**Applications**

* **Mesh Repair**: Unifying normals ensures that the mesh has a consistent structure and directionality, which is important for cleaning up the mesh for export or further processing.
* **STL/SLA Printing**: Inconsistent normals can lead to poor 3D print quality, including inverted faces or issues with surface rendering. This command corrects such problems.

***

**Additional Notes**

* A polygon mesh has both **vertex normals** and **face normals**. The **UnifyMeshNormals** command primarily adjusts the face normals to be consistent across the mesh.
* The direction of the face normal is typically determined by the order of vertices in a polygon (clockwise or counterclockwise). You can use the **right-hand rule** to determine the correct normal direction.
* If **UnifyMeshNormals** doesn’t work as expected, try exploding the mesh, correcting the normals, and then rejoining the mesh.

***

**Example Use Case**

1. Import an STL file with holes.
2. Fill the holes in the mesh.
3. Weld the mesh by setting the welding angle to 180° to ensure all vertices are welded together.
4. Run **UnifyMeshNormals** to ensure all face normals point in the same direction.
5. Use the **Flip** command if needed to correct the direction of the normals.
6. Export the mesh in the desired format.
