# DeleteFaces

## <img src="../../../.gitbook/assets/G6_04_SUBD_DELETE_FACE.png" alt="" data-size="line"> DeleteFaces <a href="#profiles" id="profiles"></a>

The DeleteFaces command removes selected faces from a mesh, SubD or Polysurface.

It is most effective in a shaded display mode since you can see and directly pick faces.

<div align="left"><figure><img src="../../../.gitbook/assets/Group 7342.png" alt="" width="563"><figcaption></figcaption></figure></div>

### Supported input

Mesh/SubD/Polysurface faces

### **Steps**

Select mesh, SubD or polysurface faces.

### Mesh/SubD face loop selection (Post-selection)

#### **To select an entire face loop**

1. Click a face.
2. Double-click the next face that decides the loop direction.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/doubleclickfaceloop.gif" alt=""></div>

#### **To select a face loop range**

1. Click two faces in a loop.
2. Double-click a face in between and next to one of the selected faces.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/doubleclickfacelooprange.gif" alt=""></div>

#### **To deselect a single face**

* Ctrl+click a selected face.

#### **To deselect a face loop**

* Ctrl+double-click a face in a selected loop.

_Note:_

&#x20;    -Some STL/SLA printers have problems if meshes contain many long, thin facets. These facets can                                  slow the printer down, produce odd results, or run the printer out of memory.

&#x20;    -The MeshRepair command may be useful when tuning up meshes for STL/SLA printing.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/deletefaces.htm#\(null\)).
