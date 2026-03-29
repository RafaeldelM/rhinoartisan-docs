# &#x20;Apply Mesh

## <img src="../../../.gitbook/assets/APPLY_MESH.png" alt="" data-size="line"> Apply Mesh <a href="#profiles" id="profiles"></a>

The ApplyMesh command uses texture UV coordinates to map a mesh onto a surface.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/applymesh.gif)

* If the target surface is trimmed, the untrimmed surface is used.
* ApplyMesh only accepts meshes with UV coordinates embedded. Meshes imported from STL files do not work.
* ApplyMesh is sensitive to the u and v directions of a surface. Use the [Dir](https://docs.mcneel.com/rhino/8/help/en-us/commands/dir.htm) command to swap the u and v directions.

### **Steps**

1. Select a mesh.
2. Select the target surface.
