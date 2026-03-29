# Gems on Network

## <img src="../../../.gitbook/assets/G2_03_DIAMONDS_GEM_BY_NETWORK.png" alt="" data-size="line"> Gems on Network

With this command, you can parametrically generate gems on any curve. On multiple curves at once, 2Shapes will place diamonds where curves intersect. This is especially useful when adding gems to organic designs and complex pieces that follow curves.

<figure><img src="../../../.gitbook/assets/Gems by Network.jpg" alt=""><figcaption></figcaption></figure>

Running this command will display its parameters in the Commands toolbar.

The **Gems by Network** command allows you to place gemstones along a network of intersecting curves, providing precise control over gem placement and size across complex designs. This command is particularly useful for intricate patterns where multiple curves intersect at various points.

### **How It Works:**

1. **Curve Selection**: Begin by selecting the curves that form the network. These curves will typically intersect at several points, defining the paths along which the gemstones will be placed. Additionally we can select the object where the gems will be oriented to.
2. **Gem Size Definition**: You can define a default gem size for all the gemstones that will be placed along the curves. RhinoArtisan will automatically distribute the gemstones along the network, taking into consideration the intersections between the curves and its ends.
3. **Automatic Placement at Intersections**: The software will automatically place gemstones at each intersection point where the curves meet. These intersection gemstones are highlighted to distinguish them from others, allowing for easy identification and modification.
4. **Interactive Size Adjustment**:
   * **Intersection Gems**: You can click on the gemstones at the intersection points to change their size. This flexibility allows you to emphasize or de-emphasize specific areas of your design by varying the gem sizes at critical points. When you modify the size of a gemstone at an intersection, the software will interpolate the sizes of the gemstones between that intersection and the next significant point (another intersection or the curve's end). This smooth transition ensures a harmonious gradient in gem sizes along the curves.
5. **Parameter Control**:
   * **Gems Distance**: You can control the distance between the gemstones along the curves, allowing for precise spacing according to your design needs.
   * **Vertical Movement (Z-axis)**: Additionally, you can adjust the position of the gemstones along the Z-axis, enabling fine-tuning of their vertical placement relative to the curves.

### **Benefits:**

* **Precision and Control**: The ability to place gemstones at curve intersections and adjust their sizes offers precise control over your design, allowing you to create complex patterns with varying gem sizes.
* **Dynamic Size Interpolation**: The automatic size interpolation between intersection points simplifies the process of creating smooth transitions in gem sizes, enhancing the overall aesthetic of the design.
* **Flexible Design Workflow**: By adjusting parameters such as gem distance and Z-axis position, you can tailor the gemstone placement to fit the specific requirements of your design.

### **Example Use Case:**

Imagine you are designing an intricate necklace where three curves intersect to form a network of paths. You can place gemstones along these paths using the Gems by Network command, which automatically positions them at the intersections. You decide to emphasize certain intersections by increasing the size of the gemstones, and the software interpolates the sizes of the surrounding gems to create a smooth and visually appealing transition. You also fine-tune the spacing and height of the gemstones to ensure they sit perfectly within the design.

:::info
**Goldsmith Tip:** You can gain additional control over gemstone sizes by adding extra 'highlighted points.' Split the curves at desired locations before starting the command, allowing you to create more points to adjust gem sizes independently.
:::

Once you confirm your changes, all your generated stones will be listed on the Outliner toolbar.

