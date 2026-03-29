# MultiPipe

## <img src="../../../.gitbook/assets/G3_03_SUBD_MULTIPIPE.png" alt="" data-size="line"> MultiPipe <a href="#profiles" id="profiles"></a>

The MultiPipe command creates a SubD pipe frame with smooth conjunctions from intersected curves.

### **Steps**

1.  Select curves that form a frame.

    Overlapped segments result in a single pipe segment.
2. Enter the radius.
3.  Specify the Cap and Struts options.

    0 is suggested when the input curves are not linear.

![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/multipipe.gif)

### Command-line options

#### **Radius**

The approximate radius of the SubD pipe frame.

#### **Cap (On/Off)**

On adds a face at each opening. Off does not.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/multipipe_cap.gif" alt=""></div>

#### **Struts**

Lines are divided at intersections into "struts", and then the SubD pipe frame is created with the specified divisions on each strut.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/multipipe_strut_divisions.gif" alt=""></div>

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/multipipe.htm#\(null\)).
