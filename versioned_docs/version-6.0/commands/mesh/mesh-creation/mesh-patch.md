# Mesh Patch

## <img src="../../../.gitbook/assets/MESH_PATCH.png" alt="" data-size="line"> Mesh Patch <a href="#profiles" id="profiles"></a>

The **MeshPatch** command creates a polygon mesh from selected curves and points. This is useful when you need to generate a mesh that matches the contours of your input curves and points, while optionally allowing for holes defined by closed curves. The command gives you the flexibility to control the mesh generation with several options, including angle tolerance and reference surfaces.

***

**Steps to Use**

1. **Select Curves and Points**:\
   Choose the curves and points that will define the mesh. This can include any curve or point object.
2. **Define Holes**:\
   Select closed interior curves to be used as holes in the mesh. If no curves are selected, the mesh will be created without any holes.
3. **Press Enter**:\
   After selecting the necessary curves and points, press **Enter** to create the mesh.

***

**Command-line Options**

* **AngleTolerance**:\
  Defines the angle tolerance for approximating the curves as polylines. If polylines are selected instead of curves, this option has no effect on the final output.
* **StartingSurface**:\
  Uses a reference surface that is similar in shape to the mesh you're trying to create. This surface will influence the shape of the final mesh, allowing for better matching of the mesh to the reference surface's geometry.

***

**Hidden Command-line Options**

To access hidden options, type a hyphen in front of the command name, e.g., **-MeshPatch**. These hidden options provide additional flexibility in mesh creation:

* **TrimBack**:\
  Trims the base rectangular mesh to the boundaries defined by the input curves and points.



* **MainSegmentCount**:\
  Controls the number of segments on each side of the base rectangular mesh. This option is only available when **TrimBack** is set to "No". If **TrimBack** is enabled, the segment count will be automatically set to 1.



***

**Use Case Example**

1. **Create a Mesh with Curves and Points**:
   * Select the curves and points that define the mesh shape.
   * Optionally select closed curves to create holes in the mesh.
2. **Adjust Mesh Shape**:
   * Set the **AngleTolerance** if necessary to control how curves are approximated as polylines.
   * Use the **StartingSurface** option if you want the mesh to follow the shape of an existing reference surface.
3. **Finalize the Mesh**:
   * Once all selections are made, press **Enter** to generate the mesh. The mesh will respect the defined curves, holes, and shape influences.
