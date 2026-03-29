# Slide

## <img src="../../../.gitbook/assets/SLIDE.png" alt="" data-size="line"> Slide <a href="#profiles" id="profiles"></a>

The Slide command moves selected vertices (or vertices of selected edges) along adjacent edges.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide.gif" alt=""></div>

### Input:

* Mesh/SubD edge or edge loop
* Mesh/SubD vertex

### **Steps**

1. Select mesh/SubD edges, edge loops, or vertices.
2.  Move the mouse cursor and click.

    Or, type a value and press Enter.

    The arrows point out the positive direction that is used for value input.

### Command options

### **Edge selection mode**

**(Default):** Click selects a single edge. Double-click selects an edge loop.

Ctrl+click deselects a single edge. Ctrl+double-click deselects an edge loop.

**EdgeLoop:** Click an edge to select an edge loop.

The clicked edge displays a brighter highlight than the other edges in the loop.

Ctrl+click the same edge to deselect the loop.

### **OffsetMode**

**Proportional:** The amount is proportional to each crossing edge length. The input number should be between 0 and 1.0.

| <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide_absolute.gif" alt="" data-size="original"> |
| ------------------------------------------------------------------------------------------------------------------------------- |

**Absolute:** The amount is same for all edges. The input number is a distance in the model unit.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide_proportional.gif)

### **Smoothness (0 - 1.0)**

0 moves vertices linearly along the edges towards the next vertices. 1.0 moves vertices in the most curved path towards the next vertices.

| <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide_smoothness_0.png" alt="" data-size="original"> | <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide_smoothness_1.png" alt="" data-size="original"> |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 0                                                                                                                                   | 1.0                                                                                                                                 |

### **Direction=Across/Along**

Moves edges in the side direction (Across), or in the edge direction (Along).

| <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide_direction_across.gif" alt="" data-size="original"> | <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide_direction_along.gif" alt="" data-size="original"> |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Across                                                                                                                                  | Along                                                                                                                                  |
