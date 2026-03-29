# Join and Unjoin

### <img src="../../.gitbook/assets/G8_01_SOLID_JOIN.png" alt="" data-size="line"> Join Edge <a href="#profiles" id="profiles"></a>

The JoinEdge command joins two naked edges that are out of tolerance.

**Steps**

* Select two naked surface or polysurface edges that are coincident or close together.\
  If the edges overlap (run somewhat parallel) along at least part of their length (an interval), but are not coincident, the Edge Joining dialog box reports, "Joining these edges requires a join tolerance of \<distance>. Do you want to join these edges?". The surfaces will extend to join along the intervals.

### <img src="../../.gitbook/assets/G8_02_SOLID_UNJOIN.png" alt="" data-size="line"> Unjoin Edge <a href="#profiles" id="profiles"></a>

The UnjoinEdge command separates selected polysurface edges.

Seams in closed surfaces will not separate.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mesh.htm).
