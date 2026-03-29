# Curve Piping

## <img src="../../../.gitbook/assets/G7_01_RENDERING_CURVE_PIPING.png" alt="" data-size="line"> Curve Piping

Curve piping constructs a render mesh pipe around a curve. Linetypes are supported to create stitches on leatherware or footwear models.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/curvepiping-002.png) ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/curvepiping-a01.png)

### **Steps**

1. Select objects to apply curve piping to.
2. In the Properties panel, click the Curve Piping button.\
   ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/curvepiping-001.png)\
   &#xNAN;_&#x43;urves with curve piping in wireframe view (left) and shaded view (right)._
3. Specify the curve piping properties.

***

### **Curve piping properties**

Manages curve piping properties for the selected objects.

**On**\
Switches the curve piping display on and off.

#### Settings

**Radius**\
The measure from the curve to the surface of the mesh pipe.\
The radius of the curve piping is multiplied by linetype width and taper values.

**Segments**\
The number of mesh faces that surround the curve. For example with three segments, the cross-section of the pipe looks like an equilateral triangle. The more segments there are, the rounder the pipe is.

**Faceted**\
Toggles between a smoothly shaded pipe and a flat-shaded pipe. This setting only affects the normals of the pipe mesh.

**CapType**\
Assigns one of the following cap types to both ends of the pipe.

**None**\
Leaves pipe ends open.

**Flat**\
Plugs the pipe ends with flat caps perpendicular to the curve at each end.

**Flat, Extended**\
Extends the pipe by length of the Radius value and plugs it with flat caps.

**Dome**\
Plugs the pipe ends with spherical caps centered at the curve end points.

**Accuracy Low / High**\
Changes the visual fidelity of the pipe along the curve. Higher value means that the center of the pipe is closer to the curve. By increasing the accuracy, the mesh will get more faces along the curve.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/curvepiping.htm?Highlight=Curve%20Piping).
