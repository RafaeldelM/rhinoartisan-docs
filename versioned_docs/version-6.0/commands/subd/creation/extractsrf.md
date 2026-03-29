# ExtractSrf

## <img src="../../../.gitbook/assets/G3_01_SUBD_EXTRACT_SURFACE.png" alt="" data-size="line"> ExtractSrf <a href="#profiles" id="profiles"></a>

The ExtractSrf command separates or duplicates polysurface, Extrusion, or SubD faces.

### Input

* Polysurface face
* Extrusion face
* SubD face

### **Steps**

Select the faces on a polysurface, an Extrusion, or a SubD.

> * The extracted faces will be removed from the group containing the source object.
> * To remove a surface from the selection, press Ctrl(CMD) while clicking.



### Command-line options

#### **Copy**

Specifies whether or not the selected faces are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when Copy=Yes.

The RememberCopyOptions command determines whether the selected option is used as the default.

#### **OutputLayer**

*   **Current**

    Places the results on the current layer.
*   **Input**

    Places the results on the source object's layer.

#### **SubDAddCorners**

Creases the SubD corner vertices on the boundaries created by the extraction.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/extractsrf_subadddcorners.gif" alt=""></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extractsrf.htm#\(null\)).
