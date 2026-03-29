# Smooth

## <img src="../../../.gitbook/assets/G5_05_SUBD_SMOOTH.png" alt="" data-size="line"> Smooth

The Smooth command averages the positions of object points or vertices. This command is useful for removing unwanted detail, and for removing loops in objects.

When mesh vertices are selected, you may have to use the WeldVertices command before smoothing in order to prevent the mesh from pulling apart.

<figure><img src="../../../.gitbook/assets/Group 7340.png" alt=""><figcaption></figcaption></figure>

### Input

* Curves, surfaces, meshes and SubDs
* Control points, edit points and mesh vertices
* SubD control net points and edges
* SubD surface points (Turned on by EditPtOn)
* Mesh vertices, edges and faces (select with Ctrl+Shift)
* SubD surface points, edges and faces (select with Ctrl+Shift

### **Steps**

*   Select supported object types and press Enter.

    The selected objects will appear to melt, losing detail due to the averaging of the positions of the object points.

#### **To smooth part of a curve or surface**

1.  Make a supported object type points on.

    Or, select object points, edges or faces with Ctrl+Shift.
2. Start the Smooth command.
3. Click the check boxes for the coordinate directions and adjust the Smooth factor.\
   The selected object points will move slightly to smooth the object.

#### **To set one check box and clear the others**

* Right-click the check box you want to check.

### Smooth Options

#### **Smooth X / Y / Z**

Smooths only in the specified x, y, or z direction.

_Shortcuts:_

&#x20;  -Right-click a checkbox once to set one direction option and clear all others.

&#x20;  -Right-click a checkbox twice to set all direction options.

#### **Fix Boundaries**

Prevents naked edges or endpoints from being moved.

**Meshes**: Vertices along naked edges will not be modified.

**Curves**: End control points will not be modified.

**Surfaces**: The control points along the boundaries of the surface will not be modified. The edges and trims of trimmed surfaces will be modified if they do not coincide with the surface boundary.

**SubD**: Surface points or control net points along the boundaries will not be modified.

_Note:_

&#x20;      \- If all of the object points are selected, Rhino perceives this as the whole object being selected.

&#x20;      \- Fix Boundaries may cause undesirable seams or singularities in closed curves and surfaces.

#### **World / CPlane / Object coordinates**

Use world or construction plane or object u, v, and n coordinates to determine the direction of the smoothing.

#### **Smooth factor per step**

Sets an amount of smoothing.

*   **0 to 1**

    Object points move toward the average.
*   **Greater than 1**

    Object points move past the average.
*   **Negative**

    Object point move away from the average (roughing).

#### **Number of smooth steps**

Specifies the number of steps to iterate the smoothing factor through.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/smooth.htm#\(null\)).
