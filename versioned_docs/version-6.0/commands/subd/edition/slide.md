# Slide

## <img src="../../../.gitbook/assets/G5_06_SUBD_SLIDE_EDGE.png" alt="" data-size="line"> Slide

The Slide command moves selected vertices (or vertices of selected edges) along adjacent edges.

### Input:

* Mesh/SubD edge or edge loop
* Mesh/SubD vertex

#### **Steps**

1. Select mesh/SubD edges, edge loops, or vertices.
2.  Move the mouse cursor and click.

    Or, type a value and press Enter.

    The arrows point out the positive direction that is used for value input.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide.gif)

### Command options

#### **Edge selection mode**

*   **(Default)**

    Click selects a single edge. Double-click selects an edge loop.

    Ctrl+click deselects a single edge. Ctrl+double-click deselects an edge loop.
*   **EdgeLoop**

    Click an edge to select an edge loop.

    The clicked edge displays a brighter highlight than the other edges in the loop.

    Ctrl+click the same edge to deselect the loop.

#### **OffsetMode**

*   **Proportional**

    The amount is proportional to each crossing edge length. The input number should be between 0 and 1.0.
*   **Absolute**

    The amount is same for all edges. The input number is a distance in the model unit.<br>

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>   </td><td>                  <img src="../../../.gitbook/assets/image (607).png" alt="" data-size="original"></td><td></td></tr><tr><td><p></p><p>               <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide_proportional.gif" alt="" data-size="original"></p></td><td></td><td></td></tr></tbody></table>

#### **Smoothness (0 - 1.0)**

0 moves vertices linearly along the edges towards the next vertices. 1.0 moves vertices in the most curved path towards the next vertices.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>                <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/slide_smoothness_0.png" alt="" data-size="original"></td><td></td></tr><tr><td>              <img src="../../../.gitbook/assets/image (609).png" alt=""></td><td></td></tr></tbody></table>

#### **Direction=Across/Along**

Moves edges in the side direction (Across), or in the edge direction (Along).

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>                       <img src="../../../.gitbook/assets/image (610).png" alt=""></td><td></td></tr><tr><td>                        <img src="../../../.gitbook/assets/image (611).png" alt=""></td><td></td></tr></tbody></table>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/slide.htm#\(null\)).
