# By Aspect Ratio

## <img src="../../../.gitbook/assets/ExtractMeshFacesByAspectRatio.png" alt="" data-size="line"> Extract Mesh Faces By Aspect Ratio <a href="#profiles" id="profiles"></a>

The ExtractMeshFacesByAspectRatio command separates mesh faces from the parent mesh object that are greater than the specified aspect ratio limit.

ExtractMeshFacesByAspectRatio finds mesh faces that are very long compared to their width. A ratio of 25:1 or above is considered long.

In the image, the extracted red faces have an aspect ratio of 9:1 or more.\
![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/stlrepair_080.png)

### Extract mesh faces by aspect ratio options

**Aspect ratio \_\_\_ to 1**

Set the target aspect ratio.

**Increment**

Sets the amount the value is changed with each arrow click.

**Select aspect ratio from face**

Select a mesh face to specify the Aspect Ratio value.

**Border only**

Makes polylines out of the edges of the selected mesh faces instead of extracting them from the parent mesh object.

**Extract a copy**

Makes a copy of the selected mesh faces rather than extracting them from the parent mesh object.
