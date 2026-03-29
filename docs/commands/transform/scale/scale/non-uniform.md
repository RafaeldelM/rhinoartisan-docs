# Non-Uniform

### <img src="../../../../.gitbook/assets/G4_06_TRANSFORMATION_SCALE_NONUNIFORM.png" alt="" data-size="line"> Non-Uniform <a href="#profiles" id="profiles"></a>

The ScaleNU command changes the size of selected objects in three directions using different lengths for each direction.

#### **Steps**

1. Select objects.
2. Pick an origin.
3. Type the x scale factor, or pick two reference points.\
   (Press Enter for a scale of 1.0.)
4. Type the y scale factor, or pick two reference points.\
   (Press Enter for a scale of 1.0.)
5. Type the z scale factor, or pick two reference points.\
   (Press Enter for a scale of 1.0.)\
   The objects expand or contract in the three directions with the scale factor values specified.

#### Command-line options

**Copy:** Specifies whether or not the objects are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on.

The RememberCopyOptions command determines whether the selected option is used as the default.

**Rigid:** Specifies that individual objects will not be deformed as they are transformed.

* **Yes:** Individual objects will not change, only their positions will change.
* **No:** Individual objects are transformed as well as their positions.

**WorldCoordinates:** Use world coordinates for the scaling direction.

**SubCrv**: Type subcrv to select part of a curve as input.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/scale.htm#ScaleNU).
