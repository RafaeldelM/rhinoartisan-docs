# Match

## <img src="../../../.gitbook/assets/G4_10_SURFACE_MATCH.png" alt="" data-size="line"> Match

The MatchSrf command adjusts the edge of a surface to have position, tangent, or curvature continuity with another surface.

**Steps**

1. Select an untrimmed surface edge.
2. Select a surface edge or curve to match.\
   Pick the two surfaces near same ends. This surface can be either trimmed or untrimmed.
3. Choose options.

### Command-line options

**MultipleMatches**: Allows selection of more than one edge to match.

**OnSurface**: When the OnSurface option is on, you can select a curve that is on or near a surface as the target, and then a surface to match to at that curve. The curve is pulled to the surface.

<div align="left"><figure><img src="../../../.gitbook/assets/matchsrf_curvenearsurface.png" alt=""><figcaption></figcaption></figure></div>

**ChainEdges**: Selects surface edges that are touching the selected curve.

**SubCrv**: Type subcrv to select part of a curve as input.

### Match Surface Options

**Continuity**: Sets the continuity for the match.

* Position: Location only.
* Tangency: Position and direction.
* Curvature: Position, direction, and radius of curvature.

**Preserve other end**: Change the surface structure to prevent modification of the curvature at the edge opposite the match.

* None: No constraint.
* Prosition: Location only.
* Tangency: Position and curve direction.
* Curvature: Position, direction, and radius of curvature
* Average surfaces: Both surfaces are modified to an intermediate shape. If the target surface is also untrimmed, the surfaces match by averaging the two.
* Match edges by closest points: Align the surface being changed to the target edge in two ways => Stretches or compresses the surface to match the entire edge end to end, or pulls each point object on the edge to the closest point object on the other edge.
* Refine match: Determines if the match results should be tested for accuracy and refined so the faces match within tolerance. If necessary, Rhino adds knot lines to the modified surface or surfaces until the surfaces are within tolerance.
  * Distance \_\_ units: Position matching in model units.
  * Tangency \_\_ degrees: Tangency matching.
  * Curvature \_\_ percent: Curvature matching, in percent of the radius of curvature.
  * Flip (OnSurface Only): Changes the direction of the surface.

**Isocurve direction adjustment**: Specifies the way the parameterization of the matched surfaces is determined.

* Automatic: If the target edge is not trimmed, it works like the Match target isocurve direction option. If the target edge is trimmed, it works like the Make perpendicular to the target edge option.
* Preserve isocurve direction: Does not change the existing isoparametric curves directions.
* Match target isocurve direction: The isoparametric curves of the surface will be parallel to those of the target surface.
* Make perpendicular to target edge: The isoparametric curves of the surface will be perpendicular to the target surface edge.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/matchsrf.htm#\(null\)).
