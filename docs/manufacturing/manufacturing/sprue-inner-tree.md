# Sprue Inner Tree

## <img src="../../.gitbook/assets/3DPRINTING_INNER_SPRUE (1).png" alt="" data-size="line"> Sprue Inner Tree

The **Sprue Inner Tree** command is highly useful for creating sprues inside rings where the lower part of the shank's interior is smooth, while the rest of the ring features intricate shapes such as multiple prongs or holes. This command allows you to create branches that provide proper support for the structure and ensure adequate metal flow during the casting process.

<figure><img src="../../.gitbook/assets/image (139).png" alt=""><figcaption></figcaption></figure>

#### **Command Structure**

**Selection Panel**

* **Mesh Selection**: In this panel, you can select the mesh to which you want to apply the command.
* **Start Point Button**: A button to define the starting point of the main branch. Typically, this is placed at the center of the lower interior of the shank.
* **Diameter Settings**:
  * **Lower Diameter**: The diameter where the main branch contacts the ring.
  * **Upper Diameter**: The diameter at the top of the main branch, where secondary branches will originate.

**Parameters Panel**

1. **Add Branches**:
   * Allows you to select the end points of the secondary branches. Choose points on flat areas with a sufficiently large contact surface to support the branch. Avoid crucial design details or necessary holes.
   * You can define the **diameter of the branches at the contact points**, ensuring they are appropriately sized for support and metal flow.
   * Each created branch is accompanied by a **Gumball** manipulator, which you can use to adjust the endpoint of each branch.
   * To delete a specific branch, hold down the **Shift** key and click on the branch's gumball. This action will immediately remove the selected branch.
2. **Symmetry Option**:
   * Enables you to create symmetrical branches, which is particularly useful for designs that are perfectly symmetrical, ensuring an identical structure is mirrored elsewhere on the ring.

<figure><img src="../../.gitbook/assets/image (140).png" alt="" width="271"><figcaption></figcaption></figure>

#### **Workflow**

1. Select the mesh you want to work on.
2. Define the starting point of the main branch, typically at the center of the lower interior of the shank.
3. Set the lower and upper diameters of the main branch.
4. Use the **Add Branches** button to select end points for the secondary branches, ensuring proper placement on flat areas and avoiding crucial design elements.
5. Define the diameter of the branches at their contact points for optimal support.
6. Adjust the position of each branch endpoint using the Gumball manipulator.
7. Enable symmetry if the design requires mirrored branches.

This command is ideal for creating internal sprues that ensure the structural integrity and successful casting of intricate ring designs.
