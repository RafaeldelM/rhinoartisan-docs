# OffsetSubD

## <img src="../../../.gitbook/assets/G3_04_SUBD_OFFSET.png" alt="" data-size="line"> OffsetSubD <a href="#profiles" id="profiles"></a>

The OffsetSubD command makes a copy of a [SubD](https://docs.mcneel.com/rhino/8/help/en-us/seealso/sak_subd.htm) by moving its vertices towards the normal direction with the specified distance.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetsubd.gif" alt=""></div>

### Command-line options

#### **Distance**

Sets the offset distance.

***

Arrows indicate the positive direction. Enter a negative number to offset to the other direction.

***

#### **Solid**

Adds faces to fill the gap between the boundaries to create a closed SubD.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetsubd_solid.png)

***

The boundaries will turn into creases.

To change creases into smooth edges, use the RemoveCrease command.

***

#### **BothSides**

Offsets the SubD towards the positive and negative sides at the same time.

&#x20;![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/offsetsubd_bothsides.png)

#### **DeleteInput**&#x20;

Deletes (Yes) or keeps (No) the input objects.

***

Set DeleteInput=No to record History.

***

#### **FlipAll**

Flips the offset direction of all selected SubDs.

***

Click on SubDs to flip respectively.

***



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/offsetsubd.htm#\(null\)).
