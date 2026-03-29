# Softening

## <img src="../../../.gitbook/assets/G7_04_RENDERING_SOFTENING.png" alt="" data-size="line"> Softening

Edge softening constructs an edge-softening display mesh for surfaces, polysurfaces, or meshes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/applyedgesoftening-001.png" alt=""></div>

### **Note**

* Edge softening applies a mesh radius or chamfer to edges in the model.
* Edge Softening appears as a property for the surface.
* Surfaces inside blocks cannot be selected.

### **Steps**

1. Select objects to apply edge softening to.
2. In the Properties panel, click the Edge Softening button.
3. Specify the edge softening properties.

<div align="left"><figure><img src="../../../.gitbook/assets/applyedgesoftening-002.png" alt=""><figcaption><p><em>Box object (left) and box with edge softening applied (right).</em></p></figcaption></figure></div>

***

### **Edge softening properties**

Manages surface edge softening properties for the selected objects.

**On**\
Enables edges softening.

#### Settings

**Softening**\
Specifies a softening amount. The visual radius approximation depends on the density of the current render mesh. Use the Properties Render Mesh Settings to adjust the mesh density.

**Chamfer**\
The edge will be cut straight across with a hard edged chamfer. No attempt is made to soften this into a rounded edge.

**Faceted**\
The object, including the edge softening effect will be shaded as faceted as in FlatShade.

**Edge Threshold (degrees) \_\_\_\_**\
Softens the edge when the angle between the normal directions of two adjacent faces is greater than this setting.

In the example below, the edge will be softened only if Edge threshold is smaller than 42.46°.\
![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/applyedgesoftening-003.png)

Force Softening

Forces the softening in cases where too large a softening radius might prevent softening to take place.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/edgesoftening.htm?Highlight=Softening).
