# Orient

## <img src="../../../.gitbook/assets/G6_01_TRANSFORMATION_ORIENT.png" alt="" data-size="line"> Orient <a href="#profiles" id="profiles"></a>

The Orient command moves or copies, rotates, and scales objects using two reference and two target points.

### **Steps**

1. Select the objects.
2. Pick two reference points.\
   Markers are drawn at the reference points.
3. Pick two target points.\
   The first and second reference points will match these locations.\
   The objects are moved, scaled and rotated so the reference points transform to the target points.

### Command-line options

**Copy:** Specifies whether or not the objects are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on.

The RememberCopyOptions command determines whether the selected option is used as the default.

**Scale:**&#x20;

* **No:** The second target point defines the direction of the transformation, but objects remain the same size.
* **1D:** Scale the object only along the axis between the target points.
* **3D:** The second target point defines the direction of the transformation and the scale factor for the objects.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/orient.htm).
