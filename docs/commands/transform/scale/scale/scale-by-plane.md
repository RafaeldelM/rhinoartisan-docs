# Scale by Plane

### <img src="../../../../.gitbook/assets/G4_07_TRANSFORMATION_SCALE (1).png" alt="" data-size="line"> Scale by Plane <a href="#profiles" id="profiles"></a>

The ScaleByPlane command changes the size of selected objects in two directions using different lengths for each direction.

#### **Steps**

1. Select objects.
2. Pick an origin.
3. Type the scale factor, or pick two reference points.\
   The objects are expanded or contracted in two directions along the axes of the specified plane.

#### Command-line options

**Copy:** Specifies whether or not the objects are copied. A plus sign ![](https://docs.mcneel.com/rhino/8/help/en-us/image/icons/copyplus.png) appears at the cursor when copy mode is on.

The RememberCopyOptions command determines whether the selected option is used as the default.

**Plane:** Specifies the plane.

* **ActiveCPlane:** Uses the active construction plane as the reference plane.
* **3Point:** Pick three points to specify the reference plane.
* **Object:** Select a planar object to specify the reference plane.
* **FromView:** Uses the specified view plane as the reference plane.
* **WorldTop:** Uses the world x,y plane as the current reference plane.
* **WorldRight:** Uses the world y,z plane as the current reference plane.
* **WorldFront:** Uses the world x,z plane as the current reference plane.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/scale.htm#ScaleByPlane).
