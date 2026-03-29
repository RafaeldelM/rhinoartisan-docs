# Shrink Trimmed Surface

## <img src="../../.gitbook/assets/G5_08_SURFACE_ADVANCED_SHRINK_TRIMMED.png" alt="" data-size="line"> Shrink Trimmed Surface

The ShrinkTrimmedSrf command contracts the underlying untrimmed surface close to trimming boundaries.

Shrinking a surface is like extending smoothly, only backwards. knot of full multiplicity are added where you want the surface to be cut off. Then the remaining control points are thrown away.

**Steps**

1. Select trimmed surfaces.\
   Trimmed surfaces are represented by an untrimmed surface with trimming boundaries. When textures are applied to surfaces, the textures map to the underlying untrimmed surface. Sometimes the underlying untrimmed surface is much larger than the trimmed surface, resulting in only a small portion of the texture showing up in the rendering.\
   To fix this, the ShrinkTrimmedSrf command shrinks the underlying untrimmed surface in order to make it as small as possible, resulting in the maximum amount of the texture map displaying in the rendering.\
   You will see no visible change in the surface. Only the underlying untrimmed surface alters.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/shrinktrimmedsrf.htm#\(null\)).
