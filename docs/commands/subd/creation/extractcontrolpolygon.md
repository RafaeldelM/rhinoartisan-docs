# ExtractControlPolygon

## <img src="../../../.gitbook/assets/G3_09_SUBD_EXTRACT_CONTROL_POLYGON.png" alt="" data-size="line"> ExtractControlPolygon <a href="#profiles" id="profiles"></a>

The ExtractControlPolygon command fits a polyline through the control points of a curve or a polygon mesh through the control points of a surface.

### **Steps**

1. Select curves or surfaces.\
   This creates polylines and/or meshes that have vertices at the original objects' control points.

### Supported input

* Curves, Polycurves, Surfaces
* SubDs

### Command-line option

*   OutputLayer:&#x20;

    Specifies the layer for the results of the command.

    1. **Current**: Places the results on the current layer.
    2.  **Input:** Places the results on the same layer as the input curve.

        _Note: If the input object is in a model that is attached using Worksession, the object will be                 placed on the current layer._
    3. **TargetObject:** Places the results on the same layer as the target surface.
*   SubCrv:&#x20;

    Type subcrv to select part of a curve as input.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/extractcontrolpolygon.htm#\(null\)).
