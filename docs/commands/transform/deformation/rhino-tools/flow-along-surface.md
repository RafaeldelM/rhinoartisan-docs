# Flow Along Surface

### <img src="../../../../.gitbook/assets/G9_11_TRANSFORMATION_FLOW_SURFACE.png" alt="" data-size="line"> Flow Along Surface <a href="#profiles" id="profiles"></a>

The **FlowAlongSrf** command deforms objects by morphing them from a source surface to a target surface. This command is useful for adapting objects to complex surfaces while maintaining their overall shape.

#### Key Steps:

1. Select the objects to morph.
2. Choose the edge of the base surface near a corner.
3. Select the corresponding edge of the target surface near a matching corner.

#### Command-Line Options:

* **Copy**: Creates a copy of the objects when morphing.
* **Rigid**: Moves objects to the target surface without deforming them if set to "Yes." If "No," objects are relocated and deformed.
* **RigidGroups**: Applies the Rigid option to groups of objects when enabled.
* **Plane**: Allows using a plane instead of an existing surface as the base.
* **ConstrainNormal**: Controls how the normal direction of the base surface maps onto the target surface.
* **AutoAdjust**: Ignores UV directions, using the corner and edge of the surfaces to define the mapping, or uses the existing UV directions to determine the mapping.
* **PreserveStructure**: Maintains the control-point structure of curves or surfaces for accuracy.

These options allow for flexible and precise morphing of objects between surfaces while controlling deformation and maintaining structural integrity.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/flowalongsrf.htm#\(null\)).
