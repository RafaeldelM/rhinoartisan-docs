# Mesh From Points

## <img src="../../../.gitbook/assets/MESH_FROM_POINTS.png" alt="" data-size="line"> Mesh From Points <a href="#profiles" id="profiles"></a>

**Overview**

The **MeshFromPoints** command creates a polygon mesh from selected point objects or point clouds. This command is ideal for generating meshes from a collection of points or 3D data, such as a point cloud from a 3D scan. It uses these points to form a mesh that can be used for modeling or further editing.

***

**Steps to Use**

1. **Start the Command**:\
   Type **MeshFromPoints** in the command line or select the command from the menu.
2. **Select Points**:\
   Choose the point objects or point cloud that will be used to generate the mesh. Once the points are selected, press **Enter** to create the mesh.

***

**Command-line Options**

* **SamplingDensityPlusNoise**:\
  Specifies the number of points to use in a given grid cell. Increasing this value can improve the mesh quality by increasing the point density, but it may also increase the computational time.
* **AutoAdjustGrid (Yes/No)**:\
  Decides whether the system should automatically calculate a better starting point for the mesh generation. Setting this option to **Yes** allows the system to adjust the grid automatically to optimize the mesh creation.
* **NumOfContouringGridCells**:\
  Sets the number of grid cells that the entire model is divided into. The more cells, the finer the mesh will be, but it may also increase the processing time and complexity.

***

**Use Case Example**

1. **Create a Mesh from Points**:
   * Start the **MeshFromPoints** command.
   * Select the point objects or point cloud you want to convert into a mesh.
   * Press **Enter** to generate the mesh.
2. **Control Mesh Density**:
   * Adjust the **SamplingDensityPlusNoise** to set how many points are used in each grid cell, influencing the mesh resolution.
3. **Optimize the Grid**:
   * Set **AutoAdjustGrid** to **Yes** if you want the system to automatically adjust the starting grid for better mesh formation.
4. **Adjust Grid Cell Count**:
   * Modify **NumOfContouringGridCells** to determine how many cells the model will be divided into, affecting the mesh detail and processing time.
