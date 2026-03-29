# Clipping Sections

## <img src="../../.gitbook/assets/24_DRAFTING_CLIPPING_SECTIONS.png" alt="" data-size="line"> Clipping Sections

The ClippingSections command creates clipping planes that cut through selected objects with settings to define direction, depth, label, and save section views as Named Views.

<figure><img src="../../.gitbook/assets/Clipping Sections.jpg" alt=""><figcaption><p>Clipping Section Example</p></figcaption></figure>

#### **Steps**

1. Select objects to clip (press Enter to section through all objects).
2.  Place one or more clipping sections in viewports.

    During placement, the clipping widget turns red if it does not intersect eligible objects' overall bounding box in World coordinates.

    Command-line options for each clipping section can be set before placing it.

### Command-line options

**Dir:** Sets the clipping section direction.

**CPlane** <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/command_icons/clippingsectionscplane.png" alt="" data-size="line">: The clipping section is parallel to the current CPlane.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/clippingsections_cplane.png" alt=""></div>

**X** <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/command_icons/clippingsectionsx.png" alt="" data-size="line">: The clipping section is vertical to the current CPlane and parallel to the X-axis.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/clippingsections_x.png" alt=""></div>

**Y** <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/command_icons/clippingsectionsy.png" alt="" data-size="line">: The clipping section is vertical to the current CPlane and parallel to the Y-axis.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/clippingsections_y.png" alt=""></div>

**Custom** <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/command_icons/clippingsectionscustom.png" alt="" data-size="line">: The clipping section is vertical to the current CPlane and parallel to the direction defined by two points.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/clippingsections_custom.png" alt=""></div>

**CustomDepth**

When set to No, the clipping plane depth is infinite. If set to Yes, the Depth option appears at the command line, allowing the user to set the depth.

<div align="left"><img src="../../.gitbook/assets/image 91.png" alt="" width="375"></div>

**Depth:** Defines the thickness of the visible portion of the clipped object. The default depth is zero.

**Clip:** This option enables or disables clipping of the view that is active when the command starts. The views to be clipped can be set or modified at any time in the clipping plane properties.

**Name:** Sets the prefix used for the section names. Section names are incremented. For example, if you set the Name=SEC, sections are named SEC\_01, SEC\_02, SEC\_03, etc.

**LabelMode:** Sets how to display section names in viewports. The default label mode is Text.

* **None:** Do not display the name.
* **Dot:** Displays the name as a Dot.

There is no control over the font and size of the dot labels.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/clippingplanedotlabel.png" alt=""></div>

**Text:** Displays the name as Text near the direction indicators.

The text label size is proportional to the widget size. The font of the current annotation style on Clipping Plane creation is applied.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/clippingplanetextlabel.png" alt=""></div>

**SaveToNamedView:** Creates a [named view](https://docs.mcneel.com/rhino/8/help/en-us/commands/namedview.htm) that corresponds to a view of the section.

:::info
Note: Sections placed in a perspective viewport will generate named views in perspective projections, not parallel ones.
:::

**Flip:** Swaps the clipping section direction.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/clippingsections_flip.gif" alt=""></div>

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/clippingplane.htm#ClippingSections).
