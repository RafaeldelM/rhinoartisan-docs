# How to Resolve Loading Issues

**Checking AppData Folders**

Having all necessary folders properly loaded is crucial for the smooth functioning of RhinoArtisan. Here's how to ensure that all required folders are correctly loaded on your computer:

1. **Open the %appdata% Folder:**
   * Press the Windows key and type `%appdata%` in the search bar.
   * Press Enter to open the folder.

<figure><img src="https://t9015773455.p.clickup-attachments.com/t9015773455/3c7382cf-f793-412b-992c-2cb1de716f74/Imgen%201.png" alt=""><figcaption></figcaption></figure>

2. **Navigate to the Following Path:**

* Go to `AppData`, then `Roaming`, then `Artisan`, and finally `6.0`.

In this folder, you should see the folders shown in the image below.

<figure><img src="https://t9015773455.p.clickup-attachments.com/t9015773455/c210de59-468c-4c46-8fa2-d717478964e1/Imgen%202.png" alt=""><figcaption></figcaption></figure>

**Checking RhinoArtisan Installation Folders**

Next, verify the contents of the RhinoArtisan installation folder:

1. **Navigate to the Installation Folder:**
   * The default path is `C:\Program Files\RhinoArtisan 6 for Rhino 8\contents`. Note that this path may vary depending on your Rhino installation location.

<figure><img src="../../.gitbook/assets/Imgen 3 (1).png" alt=""><figcaption></figcaption></figure>

2. **Compare Folders:**

* In the `contents` folder, you should see the same folders as those in the `6.0` folder of Artisan.

**Copying Folders**

If the folders in the `contents` folder are different or missing compared to the `6.0` folder of Artisan:

1. **Close RhinoArtisan.**
2. **Copy the Folders:**
   * Copy the folders from the `contents` folder to the `6.0` folder of Artisan.

<figure><img src="../../.gitbook/assets/Imgen 4.png" alt=""><figcaption></figcaption></figure>

**Restart RhinoArtisan:**

* After copying the folders, restart RhinoArtisan. The issue should be resolved.
