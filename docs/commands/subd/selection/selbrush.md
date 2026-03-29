# SelBrush

## <img src="../../../.gitbook/assets/G8_12_SUBD_SEL_BRUSH.png" alt="" data-size="line"> SelBrush <a href="#profiles" id="profiles"></a>

The SelBrush command selects objects based on painting a thick brush stroke.

### **Steps**

*   Click and drag or click repeatedly to draw the stroke.

    By default it uses crossing select: objects touched by the stroke are selected.

    Use Selection Filters to change what types of objects/sub-objects are selectable.

### Command-line options

#### **Curve**

Select an existing curve that represents the brush stroke.

#### **Polyline**

* **Yes -** Draw straight stroke between clicks.
* **No -** Draw strokes by freehand.

#### **SelectionMode**

*   **Window**

    Selects objects completely inside the brush stroke.
*   **Crossing**

    Selects objects completely or partially inside the brush stroke.
*   **InvertWindow**

    Selects objects completely outside the brush stroke.
*   **InvertCrossing**

    Selects objects completely or partially outside the brush stroke.

#### **BrushWidth**

Specifies the brush width in pixels.

Or, hold Shift and move the cursor up (increase size) or down (decrease size) to change the brush size dynamically.

#### **SelectThroughObjects**

* **Yes -** Selects objects/sub-objects regardless of their visibility.
* **No -** Only selects visible objects/sub-objects.

**RealTimeSelection**

*   **Yes -** Select instantly when the brush circle touches objects. Brush strokes do not display.

    &#x20;\- Hold Ctrl(CMD) to deselect objects.

    &#x20;\- Hold Ctrl(CMD) + Shift to select sub-objects.
* **No -** Select objects under strokes when the command ends.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/selection_commands.htm#SelBrush).
