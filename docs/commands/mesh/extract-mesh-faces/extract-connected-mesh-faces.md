# Extract Connected Mesh Faces

## <img src="../../../.gitbook/assets/ExtractConnectedMeshFaces.png" alt="" data-size="line"> Extract Connected Mesh Faces <a href="#profiles" id="profiles"></a>

The ExtractConnectedMeshFaces command separates mesh faces from the parent mesh object that are connected to a selected face.

The ExtractConnectedMeshFaces command extracts a set of mesh faces from a joined mesh object based on a specified break angle. This can be used to extract a series of mesh faces that make up a planar surface in a mesh object or to extract set of faces that make up a coherent feature in the mesh.

### **Steps**

1. Select mesh faces, and press Enter.
2. Adjust options to get the selection you want.

### Extract connected mesh faces options

**Extract faces connected with angle**

Sets the angle between mesh faces for selection.

**Less than / Greater than \_\_\_ degrees**

**Note**

* A setting of 0 will give you all the mesh faces that are connected and planar with the face you select.
* Sometimes planar meshes have a little noise in them, so a angle of 1 can help select planar faces.

**Increment**

Sets the amount the value is changed with each arrow click.

**Select faces to measure angle**

Select two mesh faces to specify the angle you want.

**Border only**

Makes polylines out of the edges of the selected mesh faces instead of extracting them from the parent mesh object.

**Extract a copy**

Makes a copy of the selected mesh faces rather than extracting them from the parent mesh object.

**Edit Selection**

Click to select a different mesh face.
