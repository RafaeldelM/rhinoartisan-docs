# Technical Chart

## &#x20;Technical Chart

:::info
Available in the next update 6.2
:::

The **Technical Chart** panel provides key details about our design created with **RhinoArtisan**.&#x20;

<figure><img src="../../.gitbook/assets/image (97).png" alt=""><figcaption></figcaption></figure>

The details are divided into three main sections:

### **Metal**

This section displays the weight of each metal used in the design. Elements linked to the **Metal 01** layer in our layer system will be assigned the first metal available in the **Outliner** panel, while elements within the **Metal 02** layer will be assigned the second metal listed in the **Outliner**.

The provided information includes:

* **Net weight** of each metal.
* **Loss percentage**, which can be defined in the **Breakdown Settings** section.
* **Total weight** of the metal, considering the loss.
* **Wax weight**, allowing quick conversion to another metal if needed.

<figure><img src="../../.gitbook/assets/image (99).png" alt=""><figcaption></figcaption></figure>

### **Gems**

This section displays a list of diamonds used in the design, sorted by size. Users can select the **setting type** for each line in the list, along with the **color coding** (defined in the [**Artisan Options**](https://docs.rhinoartisan.com/user-interface/options)). Additionally, it details:

* **Number of stones** per size.
* **Size of each stone**.
* **Corresponding sieve**.
* **Weight in carats (ct)** with diamond material.

<figure><img src="../../.gitbook/assets/image (100).png" alt=""><figcaption></figcaption></figure>

### **Processes**

This section provides information about the manufacturing and finishing processes required for the piece. It includes:

* **Volume of each element** within each metal, useful for 3D printing according to [**Breakdown Settings**](https://docs.rhinoartisan.com/commands/manufacturing/breakdown-settings) configurations.
* **Required processes**, such as:
  * **Rhodium plating** for white gold pieces.
  * **Sandblasted finish** for yellow gold parts.
* **Necessary setting types** and the total number of stones per setting type.
* **Options to add additional processes** and **extra components**, such as posts or pressure clasps for earrings.

<figure><img src="../../.gitbook/assets/image (102).png" alt=""><figcaption></figcaption></figure>

### **Data Export**

All information from the **Technical Chart** can be exported in **Excel** or **JSON** format, making it easy to use in other design and production workflows.

RhinoArtisan allows you to export **Cost Reports** and **Technical Charts** in multiple formats, making it easy to integrate them into different workflows and external systems.

#### Available Formats

* **Excel (.xlsx)**\
  Exports the report as a structured spreadsheet, ideal for analysis, tracking, or additional calculations.
*

    <figure><img src="../../.gitbook/assets/image (98).png" alt=""><figcaption></figcaption></figure>
* **JSON (.json)**\
  Generates a JSON file intended for integrations with external applications, automations, or backend processes.
* **Natural Language Export** _(new in 6.7 )_\
  Creates a natural-language document that describes the design data in a clear and readable way.\
  This format is intended for:
  * Training AI assistants with real information from your designs
  * Producing accessible descriptions for language-based systems
  * Supporting automated documentation processes

```
Here is a detailed cost summary of your jewelry design:

METALS
• The design includes 3,47 grams of gold white 18, priced at 70,12 per gram. This metal contributes a total of 243,46 EUR.
Total metal cost: 243,46 EUR.

GEMSTONES
• 10 gemstones of size 2,60 mm, totaling 0,64 carats. Price per carat: 620,00. Subtotal: 396,80 EUR.
Total gemstone cost: 396,80 EUR.

CERTIFIED DIAMONDS
• Certified diamond (1,50 ct, shape ROUND, clarity , color FANCY) priced at 1511,35 EUR.
Total certified diamond cost: 1511,35 EUR.

MANUFACTURING PROCESSES
• Metal processing: printing cost 15,00, CFP cost 173,60, finishing 0,00, rhodium 0,00.
• Setting 10 stones using Prongs: total 90,00 EUR.
Total process cost: 278,60 EUR.

EXTRAS
Extra components cost: 0,00 EUR.

OVERALL TOTAL
The complete piece has a final total cost of 2430,21 EUR. This price includes metals, gemstones, certified diamonds, all manufacturing processes, and any additional components
```

