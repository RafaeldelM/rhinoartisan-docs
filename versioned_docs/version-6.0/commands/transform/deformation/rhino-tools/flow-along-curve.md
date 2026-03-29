# Flow Along Curve

### <img src="../../../../.gitbook/assets/G9_10_TRANSFORMATION_FLOW_CURVE.png" alt="" data-size="line"> Flow Along Curve <a href="#profiles" id="profiles"></a>

The **Flow** command re-aligns objects from a base curve to a target curve, making it useful for mapping flat or straight shapes to curved ones.

Command-line options:

* **TargetSurface**: Uses a surface to orient objects along a target curve based on surface normals.
* **Copy**: Creates a copy of the objects during the flow operation.
* **Rigid**: Moves objects along the target curve without deforming them.
* **RigidGroups**: Applies the Rigid option to groups when enabled.
* **Line**: Defines a line as the base curve for the flow operation.
* **Local**: Defines a "tube" of influence around the input curve, affecting only objects within this tube.
* **Stretch**: Stretches or compresses objects along the target curve to match their relationship to the base curve.
* **PreserveStructure**: Maintains the knot structure of curves and surfaces during deformation.
* **Roadlike**: Uses frames to calculate 3D rotation when objects are mapped to a 3D target curve.

These options allow for versatile transformations and precise control when aligning objects to curves.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/flow.htm#\(null\)).
