# Bevel

## <img src="../../../.gitbook/assets/G5_01_SUBD_BEVEL.png" alt="" data-size="line"> Bevel

The Bevel command chamfers/fillets mesh or SubD edges with the specified segments.

### Input

* Mesh and SubD edge

#### **Steps**

1. Select one or more edges and press Enter.
2. Move the cursor to decide the bevel amount and click.\
   Or, enter a number and press Enter.\
   The number can be an absolute distance or a proportional value based on the OffsetMode setting.

### Command-line options

**Edge selection mode**

*   **(Default)**

    Click selects a single edge. Double-click selects an edge loop.

    Ctrl+click deselects a single edge. Ctrl+double-click deselects an edge loop.
*   **EdgeLoop**

    Click an edge to select an edge loop.

    The clicked edge displays a brighter highlight than the other edges in the loop.

    Ctrl+click the same edge to deselect the loop.

#### **Segments**

The number of new faces added over the beveled edge.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/bevel_segments.gif)

#### **OffsetMode**

*   **Proportional**

    The bevel amount is proportional to each crossing edge length. The input number should be between 0 and 1.0.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/bevel_proportional.png)

*   **Absolute**

    The bevel amount is same for all edges. The input number is a distance in the model unit.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/localization/bevel_abolute.png)

#### **Straightness (0-1.0)**

0 creates the most rounded bevel. More segments are required.

1.0 creates a flat bevel.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/bevel_straightness.gif)

#### **WeldAngle (Mesh only)**

The tolerance in degrees for welding mesh edges.

#### **RetainShape (Mesh only)**

All new vertices added to the mesh will be on the original mesh edges.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/bevel_retainshape.png)

#### **KeepCreases (SubD only)**

Specifies if creased edges will be retained.

| <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/bevel_keepcreases_1.png" alt="" data-size="original"> | <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/bevel_keepcreases_2.png" alt="" data-size="original"> | ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/bevel_keepcreases_3.png) |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/bevel.htm#\(null\)).
