# Check

## <img src="../../../.gitbook/assets/CHECK.png" alt="" data-size="line"> Check <a href="#profiles" id="profiles"></a>

This command reports errors in the data structure of selected objects, providing a detailed report on potential geometry issues.\
**Steps to use:**

1. Select the objects to analyze.
2. Review the generated report for identified issues.
3. If errors are found, consider deleting or remodeling the problematic objects.

* **CheckNewObjects**\
  Detects errors in the data structure of objects as they are created or imported into the model.\
  **Details:**
  * Displays messages in the command history when bad objects are created while opening or importing files.
  * If a problem is detected during modeling, undo, export the problematic object, and report the issue for debugging.

***

**Diagnosing Common Issues**

**Detectable Issues and Solutions**

1. **Degenerate faces:**\
   Fix using the `CullDegenerateMeshFaces` command.
2. **Zero-length edges:**\
   Often associated with degenerate faces. Use the same command as above.
3. **Non-manifold edges:**\
   Identify with `ExtractNonManifoldMeshEdges` after removing degenerate faces.
4. **Naked edges:**\
   These can cause issues in rapid prototyping. Fix using commands like `FillMeshHole` or `MatchMeshEdge`.
5. **Duplicate faces:**\
   Remove duplicates with `ExtractDuplicateMeshFaces`.
6. **Disjoint pieces:**\
   Separate unconnected pieces using `SplitDisjointMesh`.

**Additional Issues and Best Practices**

* Avoid creating curves with tiny segments or self-intersections.
* Ensure adjacent parts align cleanly with simple edge-to-edge matching.
* Repair faulty structures by breaking down objects (`Explode`), untrimming, re-trimming, and rejoining.
