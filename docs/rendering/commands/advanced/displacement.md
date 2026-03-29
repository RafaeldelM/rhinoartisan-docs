# Displacement

## <img src="../../../.gitbook/assets/G7_03_RENDERING_DISPLACEMENT.png" alt="" data-size="line"> Displacement

Displacement constructs a displacement display mesh for surfaces, polysurfaces, or meshes.

<div align="left"><figure><img src="../../../.gitbook/assets/applydisplacement-002 (1).png" alt=""><figcaption></figcaption></figure></div>

### **Steps**

1. Select objects to apply displacement mapping to.
2. In the Properties panel, click the Displacement button.
3. Specify the displacement properties.

***

### **Displacement properties**

Manages surface displacement properties for the selected objects.

#### Basic settings

**On**\
Enables the displacement mapping display.

**Texture**\
Specifies a procedural texture or image file used to map the displacement.

* **Texture pane**: Click to create a new texture, import an external texture, or select an existing texture in the model.
  * **Edit**: Click to edit the texture properties
* **Mapping channel**: Mapping channel number for the displacement mapping

**Displacements**

* **Black point**: Amount of displacement (in currently used units) for black colors on displacement texture. Can be any number.
* **White point**: The amount of displacement for the white color in the procedure or image.

**Mesh detail settings**

-**Initial quality**

* **Low - Extremely hight (5 levels)**: Specifies how densely the object is subdivided and displacement texture is sampled initially. Using too low initial quality may result in loss of some features in the displacement. Too high initial quality makes displacement process unnecessarily dense and slow.
* **Compatible with Rhino 5**: Only appears when an object has Displacement properties added in Rhino 5. The initial quality (subdivision density) approximately matches the initial quality in Rhino 5. This option can be saved in Rhino 6 models. Once a different level is selected, you cannot change it back except using undo.
* **Max faces**: Runs a mesh reduction as a post process and simplifies the result of displacement to meet the specified number of faces.
* **Fairing**: Straightens rough feature edges. This is similar to anti-aliasing. The value specifies the number of passes.

***

### Advanced settings

**Post weld angle**\
Specifies the maximum angle between face normals of adjacent faces that will get welded together.

**Mesh memory limit (MB)**\
Specifies in megabytes how much memory can be allocated for use by the displacement mesh. The memory limit can be set up to 32768 MB.

**Refine steps**\
After the initial subdivision and displacement texture sampling further refinement takes place. The value specifies the number of refinement passes.

**Refine sensivity**\
Specifies how sensitive the divider for contrasts on the displacement texture is. Specify 1 to split all mesh edges on each refine step. Specify 0.99 to make even slight contrasts on the displacement texture cause edges to be split. Specifying 0.01 only splits edges where heavy contrast exists.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/displacement.htm?Highlight=displacement).
