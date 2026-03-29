# Radiate

## <img src="../../../.gitbook/assets/G3_06_SUBD_RADIATE.png" alt="" data-size="line"> Radiate <a href="#profiles" id="profiles"></a>

The Radiate command creates a radial-symmetrical SubD with specified segments. Editing of one segment applies to all the others.

### **Steps**

1. Select a SubD.
2. Enter the segment number.
3.  Pick a point for the radial center.

    Press Enter to use the current CPlane origin.
4. Edit any one of the segments.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/radiate.gif)

### Command-line options

#### **RemoveExistingReflectSymmetry**

Unlinks both sides of a Reflect SubD before creating the new symmetry.

#### **UseLastAxis**

Uses the previous axis to create the radial symmetry.

#### **Axis**

Pick two points to define the radial center and axis direction.

*   **Basepoint**

    Pick two points on existing objects as the reference of axis direction.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/subd_symmetry_commands.htm#Radiate).
