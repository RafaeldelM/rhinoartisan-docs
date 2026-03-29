# Scale

### <img src="../../../../.gitbook/assets/G4_07_TRANSFORMATION_SCALE.png" alt="" data-size="line"> Scale <a href="#profiles" id="profiles"></a>

The Scale command changes the size of selected objects uniformly in the x, y, and z directions.

#### **Steps**

1. Select objects.
2. Pick a base point, or press Enter to use the center of the bounding box of all selected objects as the base point.
3. Type the scale factor, or pick two reference points.

**To scale an object from an arbitrary size to a specific one**

1. Use the origin point and the first reference point to establish the original size of the object.
2. Type the new size for the second reference point.\
   When scaling by dragging, the scale factor becomes the default the next time you use that scale command.

#### Command-line options

**Copy:** Specifies whether or not the objects are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on.

The RememberCopyOptions command determines whether the selected option is used as the default.

**Rigid:** Specifies that individual objects will not be deformed as they are transformed.

* **Yes:** Individual objects will not change, only their positions will change.
* **No:** Individual objects are transformed as well as their positions.

**SubCrv**: Type subcrv to select part of a curve as input.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/scale.htm#\(null\)).
