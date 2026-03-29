# ArrayPolar

## <img src="../../../../.gitbook/assets/G8_05_TRANSFORMATION_ARRAY_POLAR.png" alt="" data-size="line"> ArrayPolar <a href="#arraypolar" id="arraypolar"></a>

The ArrayPolar command copies objects around a central location.

#### **Steps**

1. Select the objects.
2. Pick the center of the array.\
   The rotation axis for the polar array is the z direction of the active construction plane at the chosen point.
3. Type the number of items and press Enter.
4. Enter a value of 2 or more.
5. Type the angle to fill.\
   Copies of the selected objects appear, rotated around the axis defined by the center point.

#### Command-line options

**Axis:** Defines an axis line for the array to rotate around.

**Axis steps**

1. Pick the start of polar axis.
2. Pick the end of polar axis.\
   The action is similar to the Rotate3D command.\
   Press Enter to rotate the array around the construction plane z axis.

**UseLastAxis:** Uses the previously selected axis direction for the rotation.

**Preview:** Displays a dynamic preview. You can change the options and the preview will update.

**StepAngle:** Enter the angle between objects.

**Rotate:** Rotates the objects as they are arrayed.

**ZOffset:** Moves each arrayed object in the z direction by the value specified.

* Type a negative value to offset objects in the negative CPlane-Z direction.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/array.htm#ArrayPolar).
