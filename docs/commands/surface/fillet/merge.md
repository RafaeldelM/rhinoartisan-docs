# Merge

## <img src="../../../.gitbook/assets/G4_12_SURFACE_MERGE.png" alt="" data-size="line"> Merge

The MergeSrf command combines two surfaces into one surface at untrimmed edges.

### **Steps**

* Select two surfaces.\
  Both surfaces must be untrimmed and share an edge.

### Command-line options

**Smooth**: The resulting surface will be smooth. This makes the surface behave better for control point editing, but may alter the shape of both surfaces.

**Tolerance**: Surface edges must be within this tolerance for the two surfaces to merge. The Tolerance setting defaults to the Rhino global absolute toleranmce. Zero or a value less than the absolute tolerance is not acceptable.

**Roundness**: Defines the roundness (smoothness, dullness, bluntness, non-sharpness) of the merge. The default is 1 (full smoothing). Acceptable values are between 0 (sharp) and 1 (smooth).



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mergesrf.htm#\(null\)).
