# Offset Mesh

## <img src="../../../.gitbook/assets/OFFSET_MESH.png" alt="" data-size="line"> Offset Mesh <a href="#profiles" id="profiles"></a>

The OffsetMesh command copies a mesh by moving the vertices a specified distance with different direction modes.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh.gif" alt=""></div>

### Command-line options

### **SetBasePoint**

Picks a point as the starting point of the offset distance.

### **DirectionMethod**

**UseVertexNormals**

Offsets a mesh based on vertex normals.

### **AverageNormals**

**Yes:** Offsets a mesh in the average direction of all vertex normals in the mesh. If the average vector is 0 (e.g., a mesh sphere), the CPlane normal will be used.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_averagenormal.png" alt=""></div>

**No:** Offsets a mesh by moving the vertices in their normal directions.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_vertexnormal.png" alt=""></div>

**Flip:** Changes the offsetting side of the picked mesh among the meshes being offset.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_flip.gif" alt=""></div>

### **FlipAll**

Changes the offsetting side of all the selected meshes.

### **UserSelectedDirection**

Picks the offset direction manually.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_picked.png" alt=""></div>

## **UseVectorLength**

**Yes:** The offset distance is picked by the mouse cursor.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_usevectorlength_yes.png" alt=""></div>

**No:** The offset distance is constrained to the previous distance. Input a number and press Enter to change the distance.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_usevectorlength_no.png" alt=""></div>

### **DeleteInput**

Deletes (Yes) or keeps (No) the input objects.

### **Solid**

Specifies if a wall will be added alongside to join the original and offset meshes.

**Yes**

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_solid_yes.png" alt=""></div>

**No**

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_solid_no.png" alt=""></div>

### **BothSides**

**Yes:** Offsets a mesh to both sides. Each side offsets the specified distance.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_bothsides_yes.png" alt=""></div>

**No:** Offsets a mesh to a single side.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_bothsides_no.png" alt=""></div>

### **AllowDisjoint**

**Yes:** The original and offset meshes will be a single object even though they do not touch.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_allowdisjoint_yes.png" alt=""></div>

**No:** The original and offset meshes will be separate.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetmesh_allowdisjoint_no.png" alt=""></div>

### **DynamicPreview**

**Yes :** The preview follows the mouse cursor.

* Left-click offsets the mesh to the preview location.
* Right-click offsets the mesh to the input distance.

**No:** The preview is static at the input distance. The cursor location does not affect to the result.

