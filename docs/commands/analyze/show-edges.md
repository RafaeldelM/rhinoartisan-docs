# Show Edges

## <img src="../../.gitbook/assets/ANALYZE_SHOW_EDGES (1).png" alt="" data-size="line"> Show Edges

The ShowEdges command highlights naked, non-manifold or all edges of the selected surface, mesh and SubD objects.

### **Steps**

1. Select objects.\
   The edges highlight and the ends of edges are marked with point display markers in the color you selected.

## **Edge Analysis options**

### Show:

* All edges: Display the edges of objects, including:
  * All edges of surfaces, polysurfaces, and Extrusions.
  * Naked, creased, and soft crease edges of SubDs.
  * Naked and unwelded edges of meshes

<figure><img src="../../.gitbook/assets/showedges_all.png" alt=""><figcaption></figcaption></figure>

* Naked edges: Displays open edges in surfaces, polysurfaces, meshes, and SubDs. A surface, polysurface, mesh, SubD edge that is not connected to another edge. Solid objects have no naked edges.

<figure><img src="../../.gitbook/assets/nakededges.png" alt=""><figcaption></figcaption></figure>

* Non-manifold edges: Displays the edges of polysurfaces or meshes shared by more than two faces.

<figure><img src="../../.gitbook/assets/showedges_nonmanifold.png" alt=""><figcaption></figcaption></figure>

### Zoom:&#x20;

Zoom to include the selected edges.

* Zoom options
  * All: Zooms to include all naked edges.
  * Current: Zooms to the first edge in the selection. This useful if you zoom out with the mouse and want to zoom back in.
  * Next: Zooms to the next edge in the selection. If the selected objects have only one naked edge, this option is not displayed
  * Previous: Zooms to the previous edge in the selection. If the selected objects have only one naked edge, this option is not displayed.
  * Mark: Marks ends of the edge with point objects. If the All option was previously selected, all naked edges are marked.

### **Edge color:**&#x20;

Sets the display color for the edges.

* Add Objects: Adds objects to the edge display.
* Remove Objects: Removes objects from the edge display.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/showedges.htm#\(null\)).
