# Refit Surface to Tolerance

## <img src="../../.gitbook/assets/G5_05_SURFACE_ADVANCED_TOLERANCE.png" alt="" data-size="line"> Refit Surface to Tolerance

The FitSrf command tries to reduce the number of surface control points while maintaining the surface's same general shape.

**Steps**

1. Select surfaces.
2. Type a new tolerance value or press Enter to accept the default.
3. Type 0 (zero) to use the current absolute tolerance.

### Command-line options

**DeleteInput**

* Yes: Deletes the original geometry.
* No: Retains the original geometry.

**ReTrim**: Trims the new fit surface with the original trimming curves.

**UDegree/VDegree**: The degree of the surface in the u or v direction

**OutputLayer**: Specifies the layer for the results of the command.

* Current: Places the results on the current layer.
* Input: Places the results on the same layer as the input curve.
* TargetObject: Places the results on the same layer as the target surface.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/fitsrf.htm#\(null\)).
