# Variable Offset

## <img src="../../../.gitbook/assets/G4_11_SURFACE_OFFSET_VARIABLE.png" alt="" data-size="line"> Variable Offset

The VariableOffsetSrf command copies a surface in the normal direction with different distances at specified locations.

<div align="left"><figure><img src="../../../.gitbook/assets/variableoffsetsrf.gif" alt=""><figcaption></figcaption></figure></div>

### **Steps**

1. Select a surface.
2. Click the AddHandle option to add more handles on the surface.
3. Move handle points to adjust the offset distance.

### Command-line options

**Tolerance**: Sets the tolerance for the command.

**Flip**: Reverses the direction.

**SetAll**: Sets all distances to the same value.

**LinkHandles**: When editing the offset distance of a handle, all the other handles increase or decrease with the same ratio.

**AddHandle**: Adds adjusting handle by picking locations on the surface

<div align="left"><figure><img src="../../../.gitbook/assets/variableoffsetsrf_addhandle.gif" alt=""><figcaption></figcaption></figure></div>

**SideTangency**: Maintains the tangency direction of the original surface at an edge.

<div align="left"><figure><img src="../../../.gitbook/assets/variableoffsetsrf_sidetangency.gif" alt=""><figcaption></figcaption></figure></div>

**Solid**: Makes a closed solid from the input and offset surfaces by adding the side surfaces.

<div align="left"><figure><img src="../../../.gitbook/assets/variableoffsetsrf_solid.gif" alt=""><figcaption></figcaption></figure></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/variableoffsetsrf.htm#\(null\)).
