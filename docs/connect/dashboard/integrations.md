# Integrations

### **Nivoda** Integration

The **Nivoda integration** allows you to seamlessly connect your RhinoArtisan Connect environment with Nivoda’s diamond inventory through their GraphQL API.

This integration enables your AI agents to query live diamond data, including availability, pricing, and specifications—streamlining the workflow and enhancing customer interactions.

<figure><img src="../../.gitbook/assets/Integrations.png" alt=""><figcaption></figcaption></figure>

### **What is Nivoda?**

**Nivoda** is a global **B2B (business-to-business) marketplace** that connects jewelry retailers, manufacturers, and designers with a vast network of diamond and gemstone suppliers. Built specifically for the jewelry trade, Nivoda simplifies and accelerates the sourcing process by offering a unified, digital platform where professionals can **search, compare, and purchase** stones from multiple vendors around the world—all in one place.

**Benefits:**

Nivoda eliminates the need to browse multiple supplier websites or communicate through fragmented channels. Instead, users gain centralized access to a wide-ranging, constantly updated inventory of natural and lab-grown diamonds, as well as colored gemstones.

Whether you are sourcing a stone for a custom engagement ring or replenishing stock for your store, Nivoda empowers you to make informed decisions quickly and confidently.

* Real-time access to global inventory.
* Side-by-side price and quality comparison.
* Advanced filters by 4Cs (Carat, Cut, Color, Clarity), certification, origin, and more.

### How to Set Up the Integration

* **Navigate to the Integrations Section**
  * From the **left-hand menu**, go to **Dashboard > Integrations**.
* **Enter the API Endpoint**
  *   In the `URL` field, the default endpoint is pre-filled:

      ```
      https://integrations.nivoda.net/api/diamonds-graphiql
      ```
  * This is the public GraphQL API endpoint provided by Nivoda for accessing diamond data.
* **Provide Authentication Credentials**
  * Enter your **Username** and **Password** associated with your Nivoda API account.
  * These credentials are required to authenticate your requests and access live data.
* **Save the Configuration**
  * Click the **Save** button at the top right of the screen to apply your settings.
  * Once saved, the AI agents will be able to fetch diamond information via GraphQL queries.
