# Setting Up Assistant in RhinoArtisan

This guide walks you through the steps required to activate and configure Assistant on your computer. You’ll enable local Assistant, install Ollama, download the recommended AI model, and open the Assistant panel inside RhinoArtisan so everything is ready to run fully offline.



### 1. Enable Assistant in Local Mode

Open RhinoArtisan and go to the File tab → Settings.

<figure><img src="../.gitbook/assets/image (804).png" alt=""><figcaption></figcaption></figure>

Inside RhinoArtisan, navigate to Artisan → Integrations.

<figure><img src="../.gitbook/assets/image (805).png" alt=""><figcaption></figcaption></figure>

Locate the Assistant section. By default it is set to **Disabled**.\
Change the mode to **Local (Private, on your computer)** and click Accept to save the configuration.

This activates Assistant to run entirely on your machine, without any cloud connection.

### 2. Install Ollama

Assistant uses Ollama to run AI models locally on your computer. Ollama is an open-source runtime that allows large language models to operate entirely on your machine without any cloud connection. It is the local engine that powers Assistant’s intelligence.

Download Ollama for Windows here:\
[https://ollama.com/download](https://ollama.com/download)

Run the installer and follow the default installation steps.

Once installed, Ollama will run in the background and be ready to receive models from RhinoArtisan.

### 3. Download the AI Model

In RhinoArtisan, go to File → Ollama.

<figure><img src="../.gitbook/assets/image (806).png" alt=""><figcaption></figcaption></figure>

The first time you open it, a dialog will appear asking you to download the recommended AI model required for Assistant. Click Yes to start the download.

<figure><img src="../.gitbook/assets/image (807).png" alt="" width="287"><figcaption></figcaption></figure>

The model (qwen2.5:7b) is large — nearly 5GB — so the download time will depend on your internet connection.

<figure><img src="../.gitbook/assets/image (808).png" alt="" width="375"><figcaption></figcaption></figure>

Once the download finishes, the model will be installed locally and Assistant will be fully ready to run offline.

### 4. Open the Assistant Panel

In RhinoArtisan, go to File tab → Assistant.

<figure><img src="../.gitbook/assets/image (809).png" alt=""><figcaption></figcaption></figure>

You can dock the panel wherever you prefer, but we recommend anchoring it in a comfortable area that does not interfere with your main design workspace. It is not advisable to place it together with the standard right-side panels, as this can reduce visibility and usability during modeling.

<figure><img src="../.gitbook/assets/image (810).png" alt=""><figcaption></figcaption></figure>

A very good option is to dock Assistant next to the Curator panel. Simply drag the Assistant tab by its title and drop it in the Curator area — RhinoArtisan will automatically anchor it there.

<figure><img src="../.gitbook/assets/Dock.gif" alt=""><figcaption></figcaption></figure>

To verify that everything is working correctly, type: Hi!

Assistant should respond immediately, confirming the connection with the local AI model.
