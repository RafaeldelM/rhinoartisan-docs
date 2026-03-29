# Shutlining

## <img src="../../../.gitbook/assets/G7_02_RENDERING_SHUTLINING.png" alt="" data-size="line"> Shutlining

Shut lining constructs a shut-line (parting line) display mesh for surfaces, polysurfaces, or meshes.

<div align="left"><figure><img src="../../../.gitbook/assets/applyshutlining-002.png" alt=""><figcaption><p><em>Simple car model without shut lining (left) and with shut lining (right).</em></p></figcaption></figure></div>

### **Note**

* A shut line is the clearance gap between two adjacent surfaces such as between the door opening and body panel of an automobile or where a lid fits into the body of a tea kettle.
* Shut Lining settings appears as an object property of the surface.
* Surfaces inside blocks cannot be selected.

### **Steps**

1. Select objects to shut line and press Enter.
2. Select curves that define the shut line and press Enter.
3. Press Enter to apply shut lining.

***

### **Shutlining properties**

Manages shut lining (parting line) properties for the selected objects.

**On**\
Turns the shut lining on and off.

#### &#x20;**Curves**

**Name**\
Specifies the names of the shut lining curves on the selected surface.

See:  [Naming conventions in Rhino](https://docs.mcneel.com/rhino/8/help/en-us/information/namingconventions.htm)

**Add**\
Adds additional shut line curves.

**Remove**\
Removes curves from shut line process.

\
**Curve properties**

**Radius**\
Specifies the thickness of the shut line radius. The radius is the measured from the curve to the surface of the shut line.

\
**Profile**

* **RoundGroove**: Displays the shut line as a round groove.\
  ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/shutlineprofile-001.png)
* **Filleted**: Displays the shut line as a filleted groove.\
  ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/shutlineprofile-002.png)
* **SharpGroove**: Displays the shut line as a sharp groove.\
  ![](https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/shutlineprofile-003.png)
* **Pull curve to object**: Curves are pulled onto the object before making a shut line.
* **Raised**: Raises the profile instead of making an indented line.

**Faceted**\
Toggles between smoothly shaded shut line and a flat-shaded shut line.

**AutoUpdate**\
All changes to Shut Lining settings are instantly applied to object. Clear the check box to make multiple changes without having to wait for shut lining process to finish.

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/properties/shutlining.htm?Highlight=Shutlining).
