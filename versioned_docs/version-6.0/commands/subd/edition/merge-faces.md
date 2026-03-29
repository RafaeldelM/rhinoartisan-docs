# Merge Faces

## <img src="../../../.gitbook/assets/G5_08_SUBD_MERGE_COPLANAR_FACE.png" alt="" data-size="line"> Merge Faces

The MergeFaces command merges a connected set of SubD or mesh faces into a single face.

<div align="left"><figure><img src="../../../.gitbook/assets/image (645).png" alt="" width="299"><figcaption></figcaption></figure></div>

<div align="left"><figure><img src="../../../.gitbook/assets/image (646).png" alt="" width="297"><figcaption></figcaption></figure></div>

### **Input**

* SubD Face, Edge, Vertex
* Mesh Face, Edge, Vertex

How faces are merged:

* If a vertex is selected, the faces around the vertex are merged into a single face.
* If an edge is selected, the faces on either side of the edge are merged into a single face.
* If a collection of faces is selected, they are partitioned into subsets. Each subset is merged into a single face.
* Faces separated by a SubD crease or an unwelded mesh edge cannot be merged. Use the [RemoveCrease](https://docs.mcneel.com/rhino/8/help/en-us/commands/removecrease.htm) command to remove the crease or unwelded edge before merging the faces.
* Use Ctrl(CMD)+Shift+Click to select vertices or edges and press Delete to merge the surrounding faces into a single face. Deleting faces with Delete will leave holes.

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mergefaces.htm?Highlight=Merge%20Faces).
