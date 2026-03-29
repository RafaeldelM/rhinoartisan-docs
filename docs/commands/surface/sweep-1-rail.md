# Sweep 1 Rail

## <img src="../../.gitbook/assets/G1_02_SURFACE_SWEEP_1.png" alt="" data-size="line"> Sweep 1 Rail

The Sweep1 command fits a surface through a series of profile curves that define the surface cross-sections and one curve that defines a surface edge.

### **Steps**

1. [Select](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm) a single rail curve.
2. Select cross-section curves in the order that the surface will pass through them.\
   When multiple closed cross-section curves are selected, there will be an extra step for adjusting curve seams.

### **Tips**

* Cross-section curves with the same structure create a better sweep surface. Cross-section curves will have the same structure if they are all copied from the same curve.
* If the cross-section curves do not have the same structure, use the Rebuild cross sections or Refit cross sections options. The rebuilt or refitted copies of the cross-section curves will be used to sweep.
* When Refit rail is enabled, the refitting tolerance is controlled by [Document Properties -> Units -> Absolute tolerance](https://docs.mcneel.com/rhino/8/help/en-us/documentproperties/units.htm#AbsoluteTolerance).

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/sweep1.htm).

[<br>](https://docs.rhinoartisan.com/commands/drafting/text-and-dots)
