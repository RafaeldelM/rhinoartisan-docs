# Report

### <img src="../../.gitbook/assets/FILE_PANEL_REPORT.png" alt="" data-size="line"> **Report Panel**

The **Report Panel** provides a complete report with all the details of the design created in **RhinoArtisan**.

<figure><img src="../../.gitbook/assets/image (742).png" alt=""><figcaption></figcaption></figure>

### **Entering Data**

When opening the **Report Panel**, you can enter key information such as:

* Client Id
* PO
* Style
* CAD Designer
* Description

<figure><img src="../../.gitbook/assets/image (83).png" alt="" width="370"><figcaption></figcaption></figure>

All these details will be included in the final report.

### **Template Selection**

In the **Templates** section of the panel , you can choose between two default templates. Later, we will see how to customize them or create new ones according to our needs.

### **Generating the Report**

At the top of the panel, there is a **Create** button. When activated, it will generate a report based on the selected template. This report will include:

* The data entered in the panel
* Views of the design
* Design details, including the weight of the metals used

### Creating My Own Templates

In RhinoArtisan, we can build our own report template by modifying an existing one or creating a completely new one. Below are the steps to create a template from scratch.

#### Accessing the Creation of a New Layout

Just below the viewport, you will see four tabs labeled **Perspective, Top, Front, and Right**, along with a **+** symbol. These tabs serve as quick access buttons to activate a specific viewport when multiple views are open or to navigate between views when working with a single viewport.

<figure><img src="../../.gitbook/assets/image (84).png" alt=""><figcaption></figcaption></figure>

If we click the **+** button, a dropdown menu will appear with different options, the first two being:

* New Layout
* Import Layout

#### Creating a New Template

:::info
When creating a new template and setting up views, it is advisable to have a model loaded in RhinoArtisan, such as a ring. This allows you to properly check the proportions and orientation of the views, ensuring a well-structured and visually accurate report.
:::

To create a new template, select the **New Layout** option, which will open a small window where you can define:

* **Viewport name**
* **Initial view** (which can be modified later)
* **Default printer assignment** (if the goal is to print the viewport content)
* **Size and orientation**
* **Measurement units**

<figure><img src="../../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>

Once these parameters are confirmed, a new viewport will be generated with the specified name and size, inside a gray background representing the print area.

#### Customizing the Template

In this new viewport, you can:

* **Add multiple views**
* **Modify existing views**
* **Include report details**

By default, the viewport will occupy almost the entire template space with a border frame. If you click on the frame, edit points will activate, allowing you to:

* **Resize the view** by selecting and moving the edges of the frame.
* **Reposition the view** by dragging it within the template.

<figure><img src="../../.gitbook/assets/image (89).png" alt=""><figcaption></figcaption></figure>

To modify the viewport display:

* **Double-click inside the view** to activate it as a normal viewport.
* You can **zoom in with the mouse wheel** and change the display mode to **Shaded, Rendered, Wireframe**, etc.
* Once adjusted, **double-click anywhere outside the view** to exit the edit mode.
* .
*

    <figure><img src="../../.gitbook/assets/image (91).png" alt=""><figcaption></figcaption></figure>

#### Copying and Editing Views

To create multiple views within the template:

* **Select the view frame** to activate its editing mode.
* **Hold the ALT key** and drag the view to duplicate it.
* **Reposition the copy** within the template.
* **Enter the new view** by double-clicking and modifying its settings (e.g., change to **Perspective** or adjust the display mode)

### Adding Design Details to the Report

Within the template, we can draw **boxes** that will contain the information to be included in the report. These boxes can be placed anywhere within the template and serve as structured sections to organize design details such as:

* **Material specifications**
* **Stone details (type, size, weight, etc.)**
* **Technical notes**
* **Branding or logos**

We can incorporate all available information from the **Technical Chart** and the details we enter in the **Report Panel**. Each piece of information is stored in a specific field, which can be inserted into the report template using predefined tags. We just have to writte those tags using the text command that is the the Drafting menu and place them in the template.

The data entered in the **Report Panel** is stored in the following fields:

* **\[DATE]** – Technical Report creation date
* **\[METAL\_LIST]** – List of metals used
* **\[PROCESS\_LIST]** – List of processes involved
* **\[GEM\_LIST]** – List of gemstones included

Additionally, the detailed fields from the **Report Panel** are stored in:

* **\[CLIENT\_ID]** – Client identification
* **\[PO]** – Purchase order number
* **\[STYLE]** – Design style
* **\[CAD\_DESIGNER]** – CAD designer's name
* **\[DESCRIPTION]** – Description of the design

We can also add the field \[GEM\_MAP] to include an image showing the distribution of the gems with color coding based on their sizes.

<figure><img src="../../.gitbook/assets/image (94).png" alt=""><figcaption></figcaption></figure>

### Creating Custom Fields in the Report Panel

We can create **new fields** in the Report Panel to add any additional information needed for a personalized report. To do this:

* Click on the **+** symbol in the header of the Report Panel.
* A prompt will appear asking for the **name of the new field**.
* Once created, the field will appear in the **details list** of the panel.
* Hovering the mouse over the title of the new field will display its **tag** (in brackets, e.g., **\[SUPERVISOR]**), which can then be incorporated into the report template.

Once we have finished configuring our new template, it is advisable to remove the ring model used to check proportions and proceed to save the template. To ensure that it appears alongside the other templates when generating a report, we need to save it in our user folder. To find the correct path, we can check it by accessing it from the File menu and clicking on the user folder icon. Once saved, the template will be available in the Templates list within the Report panel in our next RhinoArtisan session.

<figure><img src="../../.gitbook/assets/image (96).png" alt=""><figcaption></figcaption></figure>



This way, you can create as many views as needed, adjust them, and customize them to suit your requirements, ensuring your report is clear and functional.



