# Mesh From Lines

## <img src="../../../.gitbook/assets/MESH_FROM_LINES.png" alt="" data-size="line"> Mesh From Lines <a href="#profiles" id="profiles"></a>

The **MeshFromLines** command allows you to create a polygon mesh from a set of three or more connected line segments. These lines must be connected at their endpoints to form closed regions. This command is useful for quickly converting line-based geometry into meshes, especially when dealing with closed loops of lines. Note that **MeshFromLines** does not accept polylines as input.

***

**Steps to Use**

1. **Start the Command**:\
   Type **MeshFromLines** in the command line or select the command from the menu.
2.  **Select Line Segments**:\
    Choose the line segments connected at their endpoints. These segments must form closed regions. Once selected, press **Enter** to create the mesh.

    > **Note**: **MeshFromLines** does not accept polyline inputs.

***

**Command-line Options**

* **MaxSidesPerFace**:\
  Defines the maximum number of sides that can be used for each face in the generated mesh. This is useful if you want to limit the complexity of the mesh faces.
* **DeleteInput**:\
  This option determines whether the original geometry (the line segments) is retained or deleted after the mesh is created.
  * **Yes**: Deletes the original line segments after the mesh is generated.
  * **No**: Retains the original geometry.
* **CurrentLayer**:\
  Places the resulting mesh on the current layer, making it easier to manage in your scene.

***

**Use Case Example**

1. **Create a Mesh from Lines**:
   * Start the **MeshFromLines** command.
   * Select the line segments that form a closed loop, ensuring they are connected at their endpoints.
   * Press **Enter** to generate the mesh.
2. **Control Mesh Complexity**:
   * If needed, adjust the **MaxSidesPerFace** option to limit the number of sides for each mesh face.
3. **Decide on Geometry Retention**:
   * Choose whether to delete or retain the original line segments by using the **DeleteInput** option.
4. **Layer Management**:
   * The resulting mesh will automatically be placed on the **CurrentLayer** for easier organization.
