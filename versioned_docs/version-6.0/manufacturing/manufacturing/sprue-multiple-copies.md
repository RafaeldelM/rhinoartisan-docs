# Sprue Multiple Copies



## <img src="../../.gitbook/assets/3DPRINTING_SPRUE_MULTIPLE.png" alt="" data-size="line"> Sprue Multiple Copies

The **Sprue Multiple** command is designed to simplify the creation of union structures (branches or "sprues") between multiple selected meshes and a main branch. It is used to configure precise connections during the design process.

<figure><img src="../../.gitbook/assets/image (137).png" alt=""><figcaption></figcaption></figure>

#### **Command Structure**

**Selection Panel**

* **Selected Meshes**: This panel displays the meshes that have been selected to be connected through the branching system.

**Parameters Panel**

1. **Main Branch**:
   * Contains a button that allows users to define the **main branch**, specifying:
     * **Start point** and **end point**.
     * **Diameter of the main branch** at its start and end.
2. **Secondary Branches (Branches)**:
   * **Add Branch**:
     * Allows users to select a point on the meshes to be connected to the main branch.
     * Then, users are prompted to specify where on the main branch this new secondary branch should connect.
   * **Delete Branch**:
     * A button to delete a previously created secondary branch.
     * To delete a specific branch, hold down the **Shift** key and click on the branch's gumball. This action will immediately remove the selected branch.
   * **Diameter**:
     * Allows users to adjust the diameter of the secondary branches, specifying both the start and end diameters.

<figure><img src="../../.gitbook/assets/image (138).png" alt="" width="267"><figcaption></figcaption></figure>

#### **Workflow**

1. Select the meshes you want to connect.
2. Configure the main branch by defining its start and end points, as well as the corresponding diameters.
3. Add secondary branches by selecting points on the meshes and connecting them to a specific point on the main branch.
4. Adjust the diameters of the secondary branches as needed.
5. Remove unnecessary branches using the corresponding button.

This command is ideal for efficiently and precisely designing complex connection structures.
