# Orient Curve

## <img src="../../../.gitbook/assets/G6_08_TRANSFORMATION_ORIENT_PERPENDICULAR_TO_CURVE.png" alt="" data-size="line"> Orient On Curve <a href="#profiles" id="profiles"></a>

The OrientOnCrv command moves or copies and rotates objects along a curve using the curve direction for orientation.

### **Steps**

1. Select objects.
2. Pick a base point.
3. Select the orientation curve.
4. Pick a new base point on the curve

***

### **Command-line options**

**OnCurve**

Pick a base point on the curve. This allows moving the object along the curve while maintaining its orientation to the curve.

**Copy:** Specifies whether or not the objects are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on.

The RememberCopyOptions command determines whether the selected option is used as the default.

**Flip:** Flips the direction of the oriented object on the target curve.

By default, the curve direction is used to orient the object.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/orientoncrv_airplane.gif" alt=""></div>

**Perpendicular:** Orients the object perpendicular to the curve. The perpendicular plane is determined by the current construction plane when the base point is picked.&#x20;

* **XFlip/YFlip:** Reverses the orientation relative to the original orientation to the construction plane.
* **Rotate:** Enter an angle or pick two reference points to rotate the object.

**SubCrv:** Type subcrv to select part of a curve as input.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/orientoncrv.htm).
