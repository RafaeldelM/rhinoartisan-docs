# Orient by 3 Points

## <img src="../../../.gitbook/assets/G6_02_TRANSFORMATION_ORIENT3PT.png" alt="" data-size="line"> Orient by 3 Points <a href="#profiles" id="profiles"></a>

The Orient3Pt command moves or copies and rotates objects using three reference and three target points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/orient3pt.gif" alt=""></div>

### **Steps**

1. Select the objects.
2. Pick the first reference point.
3. Pick the second reference point.\
   This defines a base direction from the first reference point.
4. Pick the third reference point.
5. Pick the first target point.\
   This corresponds to the first reference point.
6. Pick the second target point.\
   This corresponds to the second reference point.
7. Pick the third target point.\
   This corresponds to the third reference point.

### Command-line options

**Copy:** Specifies whether or not the objects are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on. The RememberCopyOptions command determines whether the selected option is used as the default.

**Scale:** Re-sizes the object as it is oriented. The scale factor is based on the ratio between the distance between the first two reference points and the first two target points. The third target point is used for orientation only.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/orient3pt.htm).
