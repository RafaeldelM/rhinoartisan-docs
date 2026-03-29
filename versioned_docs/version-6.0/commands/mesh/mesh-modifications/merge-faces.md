# Merge Faces

## <img src="../../../.gitbook/assets/MERGE_FACES.png" alt="" data-size="line"> Merge Faces <a href="#profiles" id="profiles"></a>

The MergeFaces command merges a connected set of SubD or mesh faces into a single face.

A SubD (left) and a mesh (right).



**Input**

* SubD Face, Edge, Vertex
* Mesh Face, Edge, Vertex

How faces are merged:

* If a vertex is selected, the faces around the vertex are merged into a single face.
* If an edge is selected, the faces on either side of the edge are merged into a single face.
* If a collection of faces is selected, they are partitioned into subsets. Each subset is merged into a single face.
* Faces separated by a SubD crease or an unwelded mesh edge cannot be merged. Use the RemoveCrease command to remove the crease or unwelded edge before merging the faces.
* Use Ctrl(CMD)+Shift+Click to select vertices or edges and press Delete to merge the surrounding faces into a single face. Deleting faces with Delete will leave holes.
