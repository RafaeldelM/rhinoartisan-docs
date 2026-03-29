---
description: Available in Rhino and RhinoArtisan User Interface
---

# Outliner

The Outliner panel is responsible for organizing the global parameters of your design and all the elements it's made of.

<figure><img src="../../../.gitbook/assets/Group 4 (1) (1).png" alt=""><figcaption></figcaption></figure>

:::info
We suggest docking this toolbar to the right side of your layout to optimise space, especially within the same area where you have other panels.
:::

## Sections

The Outliner consists of three sections: Header, Design and Elements.

### Header

It contains four commonly used tools for parametric editing.

<figure><img src="../../../.gitbook/assets/Group 2 (5).png" alt=""><figcaption></figcaption></figure>

In addition, this panel has four buttons in the top-left corner:

* **Apply Style**: You can easily copy and paste the parameters of an element for a particular stone to another stone. Select an element as a basket, for instance, click on Apply Style, and then click on another stone. A basket with the same parameters will be applied to that stone. This works with all elements in RhinoArtisan.
* **Weight:** When clicked on, it opens a window displaying the weight of metals in grams and the carat weight of gems from your design. This data will automatically be stored in your clipboard.
* **Edit**: You can edit the selected element or elements after clicking this button. To cancel this operation, right-click on your viewport.
* **Refresh Design**: RhinoArtisan will use this icon to unite stray gems and adapt the design to its new measurements. For example, if you change a shank's finger size, clicking this button will adjust the design's element to the new shank size.
* Help : By clicking this icon, we access the RhinoArtisan documentation.

### Design&#x20;

You will define traits affecting all your design elements in the design parameters. Changing a global parameter will update all your elements to match the change.

<figure><img src="../../../.gitbook/assets/Group 2 (6).png" alt=""><figcaption></figcaption></figure>

These are all the possible Global Parameters:

* **Display** **mode**:&#x20;
  * **Rendering** shows the piece as a finished product with materials and lighting.
  * **Manufacturing** previews how the piece would appear after 3D printing. In this mode, an additional _Manufacturing Extension_ parameter is applied to elements built with commands that include prongs, ensuring they are ready for production.
  * **Retail** is mainly used when displaying pieces from the _Boutique_ module, presenting them in a rendered view suitable for customer-facing presentations.
* **Design type**: What kind of jewelry piece is your design, this parameter may be automatically set depending on what elements you add to your design.
* **Design Subtype:** This setting defines the specific type of piece you are creating. While the system automatically detects the general category, such as a ring, you can use the subtype to specify what kind of ring it is: for example, a **Halo**, **Trilogy**, **Solitaire**, **Cluster**, among many others. Declaring the subtype helps the system better understand the design intent and supports the AI assistant in generating accurate technical descriptions of the piece.
* **Diamond Type:** Within the Outliner, you can now specify whether the diamonds used in your design are **Natural** or **Lab-Grown**. This information is particularly useful when integrated with the **Nivoda** platform, as it allows the system to search their inventory for certified stones of the selected type. This helps generate a more accurate cost breakdown for production planning and pricing.
* **Finger size and scale**: This feature is only present in ring designs. It lets you set the shank's size and switch between multiple international ring size measurement scales. The button  Cut by ring size allows you to cut objects that could be inside the ring curve so they would not intersect with the finger, assuring a perfect ring size.\
  \
  On the right side, there is an icon of a ring viewed from the front. This icon allows us to execute the **Cut by Ring Size** command, which will cut any object within the section of the ring where the finger would go.&#x20;

<figure><img src="../../../.gitbook/assets/Group 3 (3).png" alt=""><figcaption></figcaption></figure>

*   Metal : In the Outliner, it is possible to define multiple different metals, which are automatically linked to the Metal layers in the layer manager.

    If only one metal is defined, it will be assigned to all three metal layers: Metal 01, Metal 02, and Metal 03.

    If two metals are defined in the Outliner, the first metal will be assigned to the Metal 01 layer, while the Metal 02 and Metal 03 layers will have the metal listed second in the Outliner.

    If three metals are defined, each will be assigned to one of the Metal layers following the order in which they appear in the Outliner.

    We recommend clicking the Refresh button in the Outliner once a new metal has been added to the scene to ensure the proper assignment of metals across the different layers.

### Elements

The elements in your designs will be displayed below the Outliner's Global Parameters. This list of elements allows you to see the components that form your design.

![](/img/v60/Outiner Parts Element.jpg>)

Each element listed has, from left to right, the following features:

* A coloured line that, if pressed, will open the element's parameters if applicable.
* An icon that represents the type of element it is.
* The name of the element.
* The total number of the same elements present in your design is in parentheses.
* Listed gems on the Outliner display some more icons:
  * The total weight of the same type of gems in carats.
  * A button that expands a detailed report with the following icons:
    * An icon on the right of each gem lets you select the specific gem individually.
    * The lower-right corner of the report has a button that allows you to create the report on your viewport. To place the report, click on the point where you want it to be generated. To cancel this operation, right-click a viewport.
* A pencil shape icon to edit the parameters of the element.
* An icon resembling an eye that, if clicked, hides and shows the element on your viewports.
