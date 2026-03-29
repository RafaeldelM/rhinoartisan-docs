# Scale 1D

### <img src="../../../../.gitbook/assets/G4_05_TRANSFORMATION_SCALE_1D.png" alt="" data-size="line"> Scale 1D <a href="#profiles" id="profiles"></a>

The Scale1D command changes the size of selected objects in one direction.

#### **Steps**

1. Select objects.
2. Pick a base point, or press Enter to use the center of the bounding box of all selected objects as the base point.
3.  Type the scale factor and a direction, or pick two reference points.

    Typing 0 for the scale factor flattens the object in the picked direction.

    The objects expand or contract in the single direction specified, without expanding the objects in the other directions.

    When scaling by dragging, the scale factor becomes the default next time the Scale1D command is used.

#### Command-line options

**Copy:** Specifies whether or not the objects are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on.

The RememberCopyOptions command determines whether the selected option is used as the default.

**Rigid:** Specifies that individual objects will not be deformed as they are transformed.

* **Yes:** Individual objects will not change, only their positions will change.
* **No:** Individual objects are transformed as well as their positions.

**SubCrv**: Type subcrv to select part of a curve as input.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/scale.htm#Scale1D).
