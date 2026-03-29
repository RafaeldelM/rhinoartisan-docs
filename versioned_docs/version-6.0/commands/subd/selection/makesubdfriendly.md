# MakeSubDFriendly

## <img src="../../../.gitbook/assets/G8_01_SUBD_MAKE_SUBD_FRIENDLY.png" alt="" data-size="line"> MakeSubDFriendly&#x20;

The MakeSubDFriendly command makes any curves SubD compatible.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/curve_zerocurvature.png" alt=""></div>

* A SubD friendly curve is a degree 3 uniform curve.
* The second control points on both ends are constrained and locked. These points display with the locked object color.
* The first and last three control points are always collinear to maintain zero curvature at both ends.
* Moving or deleting Control Points or Edit Points will not destroy the SubD friendly characteristic.
* SubD creation commands (SubDLoft, SubDSweep1, SubDSweep2...) create a better SubD object from SubD friendly curves.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/makesubdfriendly.htm?Highlight=makesubdfriendly).
