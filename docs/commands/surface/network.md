# Network

## <img src="../../.gitbook/assets/G2_13_SURFACE_NETWORK.png" alt="" data-size="line"> Network

The NetworkSrf command creates a surface from a network of crossing curves.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/networksrf.gif" alt=""></div>

* All curves in one direction must cross all curves in the other direction and cannot cross each other.
* The command always smooths out the output surfaces even if the input curves have kinks.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/networksrf_kink.gif" alt=""></div>

### Steps

*   Pick the curves in two directions that form a network.

    Or, use [Windows-selection](https://docs.mcneel.com/rhino/8/help/en-us/commands/selwindow.htm).

For more information about **NetworkSrf's Command-line Options**, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/networksrf.htm).
