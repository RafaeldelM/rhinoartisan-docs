# Apply Custom Texture Mapping

## <img src="../../../.gitbook/assets/G6_06_RENDERING_APPLY_CUSTOM_TEXTURE_MAPPING_OBJECTS.png" alt="" data-size="line"> Apply Custom Texture Mapping

The ApplyCustomMapping command adds a custom texture mapping channel to an object.

<div align="left"><figure><img src="../../../.gitbook/assets/image (554).png" alt=""><figcaption></figcaption></figure></div>

No mapping or surface mapping (left), custom mapping object (center), result of custom mapping.

A specified mesh or NURBS surface or polysurface acts as the mapping for the selected objects. The mapping object is preserved in the mapping table so deleting the mapping object does not affect the mapping on the target object.

### **Steps**

1. Select target objects.
2. Select the custom mapping surface or mesh.
3. Enter a mapping channel number, or press Enter to accept the default value.

* The custom mapping object applied to objects can be extracted by the [ExtractCustomMappingObject](https://docs.mcneel.com/rhino/8/help/en-us/commands/extractcustommappingobject.htm) command.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/texturemapping.htm#ApplyCustomMapping).
