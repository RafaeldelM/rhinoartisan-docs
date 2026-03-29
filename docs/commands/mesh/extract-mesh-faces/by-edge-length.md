# By Edge Length

## <img src="../../../.gitbook/assets/ExtractmeshFacesByEdgeLength 1.png" alt="" data-size="line"> Extract Mesh Faces By Edge Length <a href="#profiles" id="profiles"></a>

The ExtractMeshFacesByEdgeLength command separates mesh faces from the parent mesh object that have an edge length greater or less than a specified value.

ExtractMeshFacesByEdgeLength removes small or large mesh faces that do not belong in the mesh object.

In the example image, the extracted red faces have an edge length shorter than 0.1.\
![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/stlrepair_081.png)

### Command - line

**Edge length:** Sets the mesh edge length to compare.

* **Select edge:** Pick a mesh edge to specify the edge length you want.

**Increment:** Sets the amount the value is changed with each arrow click.

**Select edges:**

* **Shorter than edge length:** Selects mesh faces with an edge length shorter than the Edge length setting.
* **Longer than edge length:** Selects mesh faces with an edge length longer than the Edge length setting.

**Border only:** Makes polylines out of the edges of the selected mesh faces instead of extracting them from the parent mesh object.

**Extract a copy:** Makes a copy of the selected mesh faces rather than extracting them from the parent mesh object.
