# Sweep 2 Rail

## <img src="../../.gitbook/assets/G1_03_SURFACE_SWEEP_2.png" alt="" data-size="line"> Sweep 2 Rail

The Sweep2 command fits a surface through a series of profile curves that define the surface shape and two curves that define the surface edges.

### **Steps**

1. [Select](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/select_objects.htm) two curves as the rails.
2. Select cross-section curves in the order in which the surface will pass through them.
3. Select open curves near the same ends. For closed curves, adjust the curve seams.

### **Tips**

* Make the degree and structure of the rail curves match each other.
* Place cross-section curves so the endpoints are on the ends of the rails or on edit points of the rails.
* Turn on [edit points](https://docs.mcneel.com/rhino/8/help/en-us/commands/editpton.htm) and use [Point](https://docs.mcneel.com/rhino/8/help/en-us/user_interface/object_snaps.htm#Osnap_Point) object snap to place the section curves between matching edit points on the rails.
* If only one section curve is used, the entire length of the rails are used for the surface, regardless of the settings.
* Section curves can have differing structures. The surface takes the complexity of the most complex one.
* To use same shape curve in the whole sweep, with control over where the sweep ends, use the [Orient](https://docs.mcneel.com/rhino/8/help/en-us/commands/orient.htm) commands to create a scaled copy of the shape curve and place its ends at the places on the rail curves where you want the sweep to stop.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/sweep2.htm).
