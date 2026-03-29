# Orient on Surface

## <img src="../../../.gitbook/assets/G6_06_TRANSFORMATION_ORIENT_ON_SURFACE.png" alt="" data-size="line"> Orient on Surface <a href="#profiles" id="profiles"></a>

The OrientOnSrf command moves or copies and rotates objects on a surface using the surface's normal direction for orientation.

### **Steps**

1. Select the objects.
2. Pick two reference points.\
   The first reference point defines the new origin of the reference plane.\
   The vector created by second and first reference points defines the reference plane's x axis.\
   In addition, the distance between the first and second reference points is used as input when scaling the objects.\
   The z direction of the current construction plane determines the "up" direction for the object. The up direction will then follow the surface normal direction on the target surface.
3. Select the surface.
4. Pick target points on the surface.
5. (Optional) "Tip": Infinite Plane: Type IP for Infinite POlane options.
6. As you move the cursor over the surface, you will see a dynamic preview image of the transformed objects being reoriented by the varying normal direction of the surface.

### Command-line options

-OnSurface: Sets the initial base point on the surface. This option is useful if the object is already on the target surface but must be copied or moved. The option uses initial base points on the target surface and uses the surface normal rather construction plane normal to determine the initial orientation of the object.

-Flip: Reverses the direction.

-Scale: Scales the object as it orients

* Prompt: Prompts to pick a scale a for each copy.
* Uniform: Sets the same scale for the x, y, and z directions.
* X/Y/Z: Sets a separate scale for each direction

-Rotation

* Prompt: Prompts to pick a rotation angle for each copy.
* Angle: Specify an angle of rotation. Rotation is around the surface normal at the target point.

-Copy: Specifies whether or not the objects are copied. A plus sign appears at the cursor when copy mode is on. The RememberCopyOptions command determines whether the selected option is used as the default.

-Rigid: Specifies that individual objects will not be deformed as they are transformed. The illustration shows the Rigid option with the Bend command.

* Yes: Individual objects will not change, only their positions will change.
* No: Individual objects are transformed as well as their positions.

<figure><img src="../../../.gitbook/assets/rigid_bend.png" alt=""><figcaption></figcaption></figure>

-ConstrainNormal: Appears if Rigid is not selected. The direction used is the CPlane normal of the view you used for placing the copy. If you place multiple copies you can do it in multiple viewports.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/orientonsrf.htm).
