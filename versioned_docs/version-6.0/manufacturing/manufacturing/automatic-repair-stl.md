# Automatic Repair STL



## <img src="../../.gitbook/assets/AUTOMATIC REPAIR (1).png" alt="" data-size="line"> Automatic Repair STL

The **Automatic Repair STL** tool allows users to correct errors in STL files, ensuring that they are ready for 3D printing. This tool offers both simplicity and customization, enabling users to achieve optimal results based on their specific requirements.

#### Features:

1. **Error Detection and Repair**:
   * Identifies and resolves issues within STL files, such as open edges or multiple components.
2. **Artisan Panel Integration**:
   * Opens a dedicated panel within the Artisan Panel where users can adjust settings for the repair process.
3. **Precision Settings**:
   * Provides two configuration options:
     * **Document Settings**: Uses the default precision settings defined in the document.
     * **Custom Settings**: Allows users to specify:
       * Minimum and maximum edge lengths for the mesh.
       * Decimation levels for optimizing the mesh resolution.
4. **Repair Report**:
   * After executing the repair, the tool generates a brief report indicating:
     * Whether the mesh is suitable for 3D printing.
     * The number of components (a correct STL file should have only one component).
     * The presence of open edges for further guidance on potential issues.

<figure><img src="../../.gitbook/assets/image (697).png" alt=""><figcaption></figcaption></figure>

#### Advantages:

* **Ensures Print-Ready Files**: Guarantees that repaired STL files meet the necessary standards for successful 3D printing.
* **Customizable Repair**: Offers flexible settings to adapt the repair process to specific project needs.
* **Clear Diagnostics**: Provides detailed feedback to help users understand and address potential issues effectively.

This command does not work with blocks. If the model you want to repair contains any blocks, we recommend using Rhino’s **ExplodeBlock** command to break them into their individual components before running **Automatic Repair STL**. This ensures that the repair process works as expected and delivers optimal results.

The **Automatic Repair STL** tool is a vital component of the Manufacturing section, enabling users to resolve STL file errors effortlessly and confidently proceed with their 3D printing projects.
