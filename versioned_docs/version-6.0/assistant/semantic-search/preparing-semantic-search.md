# Preparing Semantic Search

Below, we describe the steps required to create the training and train the AI. The first step is to define the data source from which the AI will learn. This process is designed to scale efficiently and supports thousands, or even hundreds of thousands, of files.

### Step 1: Define the training folder

The first step is to define the folder that contains the files to be used for Semantic Search training. This folder should include the RhinoArtisan, Rhino, or any other rhino plugin, files you want the system to analyze and use as its knowledge base.

:::warning
Important note: No changes are made to the original files. All data is read-only and used only for information extraction.
:::

To select the training folder, go to **Settings > Artisan > Integrations** and click the **…** button to browse and select the desired directory.

<figure><img src="../../.gitbook/assets/image (813).png" alt=""><figcaption></figcaption></figure>

Please note that the **Assistant** button includes a sub-toolbar with multiple tools.

<figure><img src="../../.gitbook/assets/image (812).png" alt=""><figcaption></figcaption></figure>

### Step 2: Create the training files

In this step, RhinoArtisan analyzes each file individually and generates the training files used by Semantic Search. The relevant information is extracted from each design and stored as training data.

Once the training files are created, they are not regenerated unless necessary. If this command is executed regularly (for example, once per day), only new or modified files are analyzed and updated, while existing training files remain unchanged. This ensures an efficient and scalable training process, even when working with large numbers of files.

<figure><img src="../../.gitbook/assets/image (815).png" alt=""><figcaption></figcaption></figure>

### Step 3: Run Training

In this step, RhinoArtisan uses the previously created training files to train the AI for Semantic Search.

During this process, the system processes the existing training data and prepares the AI to understand and search the designs semantically. No original files are modified.

To start the process, simply click **Run Training**. Once completed, Semantic Search is ready to use.

<figure><img src="../../.gitbook/assets/image (816).png" alt=""><figcaption></figcaption></figure>

:::info
Important note: After completing Step 3, it is recommended to close and restart Rhino or RhinoArtisan.
:::
