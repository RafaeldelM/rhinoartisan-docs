# Align

## <img src="../../.gitbook/assets/G7_01_TRANSFORM_ALIGN.png" alt="" data-size="line"> Align <a href="#profiles" id="profiles"></a>

The Align command lines up the bounding boxes of objects and object grips.

* When SubD faces, edges, or vertices are selected (with Ctrl+Shift), the associated control points are aligned.

### **Steps**

1. Select the objects to align, and press Enter.
2. Specify an alignment option.
3. Pick a location, or press Enter to align based on the overall bounding box of all selected objects.

### Command-line options

**AlignTo**

* **CPlane:** Aligns objects using construction plane coordinates.
* **World:** Aligns objects using world coordinates.

<img src="../../.gitbook/assets/ALIGN_BOTTOM.png" alt="" data-size="line"> **Bottom:** Aligns objects by the bottom-most locations of their bounding boxes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_bottom.gif" alt=""></div>

<img src="../../.gitbook/assets/ALIGN_CENTERS.png" alt="" data-size="line"> **Concentric:** Aligns objects by the horizontal and vertical centers of their bounding boxes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_concentric.gif" alt=""></div>

<img src="../../.gitbook/assets/ALIGN_HORIZONTAL_CENTERS.png" alt="" data-size="line"> **HorizCenter:** Aligns objects by the horizontal centers of their bounding boxes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_horizcenter.gif" alt=""></div>

<img src="../../.gitbook/assets/ALIGN_LEFT.png" alt="" data-size="line"> **Left:** Aligns objects by the left-most locations of their bounding boxes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_left.gif" alt=""></div>

<img src="../../.gitbook/assets/ALIGN_RIGHT.png" alt="" data-size="line"> **Right:** Aligns objects by the right-most locations of their bounding boxes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_right.gif" alt=""></div>

<img src="../../.gitbook/assets/ALIGN_TOP.png" alt="" data-size="line"> **Top:** Aligns objects by the left-most locations of their bounding boxes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_left.gif" alt=""></div>

<img src="../../.gitbook/assets/ALIGN_VERTICAL_CENTERS.png" alt="" data-size="line"> **VertCenter:** Aligns objects by the vertical centers of their bounding boxes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_vertcenter.gif" alt=""></div>

**Steps**

1. Select the objects to align, and press Enter.
2. Specify an alignment option.
3. Pick a[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/pick_location.htm)location, or press Enter to align based on the overall bounding box of all selected objects.

#### Command-line options

-AlignTo

* CPlane

Aligns objects using construction plane coordinates.

* World

Aligns objects using world coordinates.

-Bottom

Aligns objects by the bottom-most locations of their bounding boxes.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_bottom.gif)

-Concentric

Aligns objects by the horizontal and vertical centers of their bounding boxes.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_concentric.gif)

-HorizCenter

Aligns objects by the horizontal centers of their bounding boxes.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_horizcenter.gif)

-Left

Aligns objects by the left-most locations of their bounding boxes.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_left.gif)

-Right

Aligns objects by the right-most locations of their bounding boxes.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_right.gif)

-Top

Aligns objects by the left-most locations of their bounding boxes.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_left.gif)

-VertCenter

Aligns objects by the vertical centers of their bounding boxes.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_vertcenter.gif)

-ToCurve

Pulls points to the selected curve.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_tocurve.gif)

-ToLine

Pulls points to a line defined by picking two points.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_toline.gif)

-ToFitPlane

Pulls points to the best fitting plane of the points.

At least four points are required for this alignment type.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_tofitplane.gif)

-ToPlane

Pulls points to a plane defined by picking two points and the CPlane or World z-axis based on the AlignTo option. The selected objects or grips will not move in the z-axis.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/align_toplane.gif)

-3Points

Pick three points to define the alignment plane.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/align.htm#\(null\)).
