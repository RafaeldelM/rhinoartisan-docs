# SubDExpandEdges

## <img src="../../../.gitbook/assets/G4_03_SUBD_EXPAND_EDGES.png" alt="" data-size="line"> SubDExpandEdges

The SubDExpandEdges command expands selected SubD edges into faces.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdexpandedges.gif" alt=""></div>

### Command-line options

#### **Offset**

The offset settings determine the width of the inserted quad faces. The width is the proportional amount of the crossing edge length in the [flat SubD](https://docs.mcneel.com/rhino/8/help/en-us/commands/subddisplaytoggle.htm).

*   **Small / Medium / Large**

    Slides each vertex along the crossing edge with a proportional amount of 0.125 (small), 0.25 (Medium), or 0.5 (Large).

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdexpandedges_offset1.gif" alt=""></div>

*   **Custom**

    Allows entering any number between 0.05 and 0.95 for the proportional amount.
*   **Variable**

    This option is only available when a single edge chain is selected. It allows setting different widths at both ends of the edge chain.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdexpandedges_offset2.gif" alt=""></div>

**Style**

*   **Single**

    Replaces each input edge with a quad face.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdexpandedges_single.png" alt=""></div>

*   **Double**

    Adds two quad faces adjacent to each input edge.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdexpandedges_double.png" alt=""></div>

*   **Ahalf / Bhalf**

    Adds quad faces on the (A) or (B) side of input edges.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/subdexpandedges_abhalf.gif" alt=""></div>



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/index.htm#commands/subdexpandedges.htm#\(null\)).
