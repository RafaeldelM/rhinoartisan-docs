# Reflect

## <img src="../../../.gitbook/assets/G3_05_SUBD_REFLECT.png" alt="" data-size="line"> Reflect <a href="#profiles" id="profiles"></a>

The Reflect command makes a SubD symmetrical across a reflection plane and merges both sides into a single SubD.

### **Steps**

1. Select a SubD.
2.  Pick two points to define the reflection plane.

    Or, select the XAxis or YAxis option to use the active CPlane x or y axis.

    The arrows indicate the side to keep.

    The vertices close to the reflection plane will be moved onto the reflection plane.
3. Edit the SubD.

### Command-line options

#### **XAxis / YAxis**

Reflects the SubD across the x or y axis of the active CPlane.

***

The reflection plane set by XAxis or YAxis options does not move with the object.

The reflection plane set by picking two points moves with the object.

***

#### **RemoveExistingReflectSymmetry**

Unlinks both sides of a Reflect SubD before creating the new symmetry.

#### **Flip**

Changes the side to keep for the Reflect symmetry.

#### **Two-direction reflection**

A second reflection can be added to an existing reflect symmetry.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/reflect_twodirections.gif" alt=""></div>

1. Select an existing reflected SubD.
2.  Move the mouse to decide the location and direction of the second reflection plane.

    The second reflection is perpendicular to the first reflection plane.

***

The Reflect command always records [History](https://docs.mcneel.com/rhino/8/help/en-us/commands/history.htm), but History related commands ([HistoryPurge](https://docs.mcneel.com/rhino/8/help/en-us/commands/historypurge.htm), [HistoryUpdate](https://docs.mcneel.com/rhino/8/help/en-us/commands/historyupdate.htm)) and settings ([Lock Children](https://docs.mcneel.com/rhino/8/help/en-us/commands/history.htm#Lock_Yes), [Update Children](https://docs.mcneel.com/rhino/8/help/en-us/commands/history.htm#HistoryUpdate)) do not affect the reflected part.

If you need edges along the reflection axis, use the [SetPt](https://docs.mcneel.com/rhino/8/help/en-us/commands/setpt.htm) command to align the edges before reflecting the SubD object.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/reflect_setpt.gif" alt=""></div>

Display of the reflected side and reflection plane can be changed. [Where?](https://docs.mcneel.com/rhino/8/help/en-us/options/view_display_mode_subd.htm#Symmetry)

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/reflect_appearance.gif" alt=""></div>

Only the faces and edges in the primary region can be extruded. The [extrude handles](https://docs.mcneel.com/rhino/8/help/en-us/commands/gumball.htm#ExtrudeHandles) of Gumball will not display when the faces and edges in a child region are selected.

The Reflect command removes the existing symmetry if the input is a Radiate or double-Reflect SubD.

***



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/subd_symmetry_commands.htm#Reflect).
