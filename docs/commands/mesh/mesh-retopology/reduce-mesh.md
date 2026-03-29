# Reduce Mesh

## <img src="../../../.gitbook/assets/REDUCE_MESH.png" alt="" data-size="line"> Reduce Mesh <a href="#profiles" id="profiles"></a>

The ReduceMesh command decreases the polygon mesh face count while minimizing geometric and texture distortion.\
![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/reducemesh-001.png)

**Note**

* The mesh is first triangulated, its polygon count is reduced, and the resulting triangular mesh is quadrangulated again.
* Nonmanifold meshes (meshes whose edges are shared by more than two faces) may produce undesirable results in some cases.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/non-manifoldedges-001a.png)

### **Steps**

1. Select mesh objects.
2. Set the mesh reducing options.
