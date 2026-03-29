# Unwrap Texture

## <img src="../../../.gitbook/assets/G6_05_RENDERING_UNWRAP_TEXTURE.png" alt="" data-size="line"> Unwrap Texture

The Unwrap command prompts for selecting edges on the selected object as texture seams where the object's render mesh will be split in UV space.

<div align="left"><figure><img src="../../../.gitbook/assets/image (553).png" alt=""><figcaption></figcaption></figure></div>

### Input

* Surface, Polysurface, Extrusion, Mesh, SubD

***

### **Steps**

1. Start the command.
2.  Select one or multiple objects, press Enter.

    Multiple selected objects will not overlap in UV space.
3. Select a mapping channel.
4.  Select edges on the object.

    Use the command-line options to help selecting edges.
5. Press Enter when done.

***

### Command-line options

**Chain**\
Chain[ ](https://docs.mcneel.com/rhino/8/help/en-us/commands/selchain.htm)selects the seams.

**Apply**\
Applies the seam selection.

**Edit**\
Opens the UV[ ](https://docs.mcneel.com/rhino/8/help/en-us/properties/texturemapping.htm#UVEditor)Editor.

**Cancel**\
Cancels the command.

**MappingChannel**\
Selects a mapping[ ](https://docs.mcneel.com/rhino/8/help/en-us/properties/texturemapping.htm#Channel)channel number for the UV mesh.

**UnweldedOnly (For mesh-only)**\
Makes only unwelded mesh edges selectable.

**SymmetryTip**\
Defines the symmetrical plane on an object to unwrap the object symmetrically.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/symmetrytip.png" alt="See the Rectangle command for sub-option descriptions."></div>

**UnweldSeams (Mesh-only)**\
Unwelds the mesh edges along the seams to avoid mapping distortion near the seams. The actual mesh geometry will be modified.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/mappingdistortion.png" alt="UnweldSeams=Yes (left) and No (right)."></div>

**Method**

**Conformal**\
Uses the Least Squares Conformal map (LSCM) algorithm to flatten 3D objects.

**AngleBased**\
Uses the Angle Based Flattening (ABF++) algorithm to flatten 3D objects.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/abf_vs_lscm.png" alt=""></div>

**AsRigidAsPossible**\
Uses the As-Rigid-As-Possible (ARAP) algorithm to flatten 3D objects. ARAP keeps texture size more even across the object than LSCM and ABF.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/texturemapping.htm#Unwrap).
