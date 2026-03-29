# Scale 2D

### <img src="../../../../.gitbook/assets/G4_08_TRANSFORMATION_SCALE_2D.png" alt="" data-size="line"> Scale 2D <a href="#profiles" id="profiles"></a>

The Scale2D command changes the size of selected objects uniformly in two directions.

**Steps**

1. Select objects.
2. Pick a base point, or press Enter to use the center of the bounding box of all selected objects as the base point.
3. Type the scale factor, or pick two reference points.
4. The objects are expanded or contracted uniformly in the two directions of the axes of the active viewport construction plane where you specify the scale factor.\
   When scaling by dragging, the scale factor becomes the default next time the Scale2D command is used.

#### Command-line options

**Copy:** Specifies whether or not the objects are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on.

The RememberCopyOptions command determines whether the selected option is used as the default.

**Rigid:** Specifies that individual objects will not be deformed as they are transformed.

* **Yes:** Individual objects will not change, only their positions will change.
* **No:** Individual objects are transformed as well as their positions.

**SubCrv**: Type subcrv to select part of a curve as input.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/scale.htm#Scale2D).
