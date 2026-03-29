# Sync

### <img src="../../../.gitbook/assets/G5_01_RENDERING_SET_RENDER_COLOR.png" alt="" data-size="line"> Set Render Color

The Properties command manages object properties for the selected objects. The availability of the properties is based on the selected object types. For example, points only have Object and Attribute User Text properties. If no objects are selected, viewport properties display.

When running the command, select the object which you want to apply color.

### <img src="../../../.gitbook/assets/G5_03_RENDERING_MATCH_MATERIAL_IDENTICAL.png" alt="" data-size="line"> Match Identical Material&#x20;

### <img src="../../../.gitbook/assets/G5_02_RENDERING_SYNCRHONIZE_RENDER_COLORS.png" alt="" data-size="line"> Syncrhonize Render Color

The SynchronizeRenderColors command changes an object's material color to match its display color.

If the object does not have a material assigned, a new material will be created and assigned to the object's layer.

**Steps**

* Select[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm)objects to apply their display colors to material colors.

#### Command-line option

-AllLayers: Apply the display colors of all layers to layer materials. If a layer does not have a material assigned, a new material using the layer's display color is created for the layer

### <img src="../../../.gitbook/assets/G5_04_RENDERING_SET_MATERIAL_SOURCE_LAYER.png" alt="" data-size="line"> Set Material Source Layer

### <img src="../../../.gitbook/assets/G5_05_RENDERING_MERGE_IDENTICAL.png" alt="" data-size="line"> Merge Identical

The RenderMergeIdenticalMaterials command finds materials with the same settings in the model, keeps one of them, and deletes the rest. Material assignments will update accordingly.

<figure><img src="../../../.gitbook/assets/rendermergeidenticalmaterials.gif" alt=""><figcaption></figcaption></figure>

#### Command-line options

-SameNameOnly (Yes/No): Set yes to only merge identical materials with the same name.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mesh.htm).
