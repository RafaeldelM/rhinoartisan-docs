# Bevel

## <img src="../../../.gitbook/assets/BEVEL.png" alt="" data-size="line"> Bevel <a href="#profiles" id="profiles"></a>

The **Bevel** command chamfers or fillets mesh or SubD edges with the specified number of segments. This command is useful for smoothing or rounding sharp edges of 3D models, making them more suitable for various applications, including 3D printing and visualization.

<figure><img src="../../../.gitbook/assets/Group 15.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/Group 16.png" alt=""><figcaption></figcaption></figure>

***

**Use Cases**

* **Edge Smoothing**: Smooth or round sharp edges of meshes or SubDs to create more aesthetically pleasing shapes or improve the quality of 3D models.
* **3D Printing**: Chamfer or fillet sharp edges to improve mesh quality and minimize printing issues.
* **Subdivision Surface Modelling**: Retain sharp edges while beveling SubD objects, improving the model’s appearance.

***

**Steps to Use**

1. **Start the Command**:\
   Type **Bevel** in the command line or select it from the mesh or SubD editing tools menu.
2. **Select the Edge(s)**:\
   Click one or more edges on a mesh or SubD object. Press **Enter** to confirm the selection.
3. **Decide the Bevel Amount**:
   * Move the cursor to visually adjust the bevel amount, then click to confirm.
   * Alternatively, input a specific number for the bevel distance and press **Enter**. The value can be absolute or proportional, depending on the selected **OffsetMode**.

***

**Command-line Options**

* **Edge Selection Mode**:
  * **Default**: Click to select a single edge. Double-click to select an edge loop.
  * **EdgeLoop**: Click on one edge of the loop to select the entire loop. The selected edge will be highlighted brighter than the others.
  * **Ctrl+click**: Deselect an individual edge or an entire loop (Ctrl+double-click to deselect the loop).
* **Segments**:\
  Specifies the number of new faces added along the beveled edge. This controls the smoothness of the bevel.
* **OffsetMode**:
  * **Proportional**: The bevel amount is proportional to the length of the crossing edges. The input value should range from **0** to **1.0**.
  * **Absolute**: The bevel amount is constant for all selected edges and is specified as a distance in the model units.
* **Straightness (0-1.0)**:\
  Controls the curvature of the bevel:
  * **0** creates the most rounded bevel (requires more segments).
  * **1.0** creates a flat bevel (sharp, chamfer-like edges).
* **WeldAngle (Mesh only)**:\
  The tolerance in degrees for welding mesh edges that meet at an angle. This option is only available for meshes.
* **RetainShape (Mesh only)**:\
  When enabled, new vertices added during the bevel operation will lie along the original mesh edges.
* **KeepCreases (SubD only)**:\
  Specifies whether the creased edges of SubD objects will be retained after the bevel operation.

***

**Example Workflow**

1. **Beveling Mesh Edges**:
   * Start the **Bevel** command.
   * Select the edges to bevel on the mesh.
   * Use the cursor to adjust the bevel, or enter a specific distance for the bevel.
   * Use the **OffsetMode** setting to define if the bevel should be proportional or absolute.
   * Confirm the bevel.
2. **Beveling SubD Edges**:
   * Start the **Bevel** command.
   * Select the edges of a SubD object.
   * Adjust the bevel using the proportional or absolute setting.
   * If the SubD has creased edges, choose whether to retain them using the **KeepCreases** option.
   * Confirm the bevel.
