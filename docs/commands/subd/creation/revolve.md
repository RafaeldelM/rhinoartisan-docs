# Revolve

## <img src="../../../.gitbook/assets/G3_07_SUBD__REVOLVE.png" alt="" data-size="line"> Revolve <a href="#profiles" id="profiles"></a>

The Revolve command creates a surface or SubD by revolving a profile curve that defines the surface shape around an axis.

### **Steps**

1. Select curves.
2. Pick the start of the revolve axis.
3.  Pick the end of the revolve axis, or press Enter to use CPlane-Z direction.

    The start and end of the revolve axis can be attached to existing objects using object snaps when History is recorded.
4. Specify options.

### Command-line options

#### **Output (Surface/SubD)**

Specifies to create a NURBS surface or SubD.

#### **DeleteInput**

Deletes (Yes) or keeps (No) the input objects.

#### **FullCircle**

Revolves the input curve 360 degrees as a shortcut for specifying 360 degrees as the revolve angle.

#### **AskForStartAngle**

* **Yes:** Allows setting the angle (a degree away from the current input curve location) the revolve will start.
* **No:** Starts the revolve from 0 (the input curve location).

#### **Deformable**

This option is only available when Output=Surface.

* **Yes:** The surface is rebuilt in the revolving direction to a degree-3 non-rational surface. Specify how many points in that direction. Deformable revolves can be deformed smoothly with point editing.
* **No:** The resulting revolved surface is an exact revolve: a rational surface with fully-multiple knots at the quadrants. This kind of surface is not easy to deform smoothly by point editing.

#### **PointCount**

Specifies the number of control points in the revolving direction when Output=Surface and Deformable=Yes.

#### **SegmentCount**

Specifies the number of faces in the revolving direction when Output=SubD.

#### **SplitAtTangents**

Revolves tangent points on the input curve into joined edges (Yes) or creases (No) when Output=Surface.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/revolve_splitattagnets.gif" alt=""></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/revolve.htm#\(null\)).<br>
