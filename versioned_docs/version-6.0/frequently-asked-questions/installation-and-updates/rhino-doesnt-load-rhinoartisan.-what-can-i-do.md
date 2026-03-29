---
description: Rhino 8 doesn't load RhinoArtisan. What can I do?
---

# Rhino doesn't load RhinoArtisan. What can I do?

There are three reasons why Rhino does not load RhinoArtisan:

## 1. Rhino is not updated:

:::info
RhinoArtisan requires Rhino 7, 8 or 9.
:::

Let's check what Rhino version we are using. To do this, we will open Rhino,  in the menu Help > Check for Updates...&#x20;

<figure><img src="../../.gitbook/assets/image (475).png" alt=""><figcaption></figcaption></figure>

## 2. Diagnotics & Repair

Some updates or plugins may leave residual entries in Rhino's registry, which can lead to conflicts and unexpected behavior. Over time, these leftover settings might interfere with new versions of the software or cause instability when loading third-party extensions.

<figure><img src="../../.gitbook/assets/2025-09-27 17_13_46-RhinoArtisan Launcher.jpg" alt=""><figcaption></figcaption></figure>

**How to execture Diagnostics & Repair:**

Here are the steps:

1. Double-click the RhinoArtisan icon on your desktop.

<div align="left"><figure><img src="../../.gitbook/assets/desktop.jpg" alt=""><figcaption></figcaption></figure></div>

2. In the RhinoArtisan start menu, click **Diagnostics & Repair**, located on the lower left side.

<figure><img src="../../.gitbook/assets/2025-09-27 17_13_46-RhinoArtisan Launcher.jpg" alt=""><figcaption></figcaption></figure>

3. When asked _“Do you want to clean Windows registry of Rhino and Artisan?”_, answer **Yes**.
4. When asked _“Do you want to delete the Artisan user folder?”_, answer **Yes**.
5. When asked _“Do you want to check your connection to the Artisan license server?”_, answer **Yes**. (This step is to check if a firewall is blocking the license verification).

Once this process is complete, restart Rhino. It will launch as if it were a fresh installation, clearing any registry issues that might have prevented the RhinoArtisan plugin from loading properly.

## **3. Send Us Your System Information**



If the problem persists after following the steps above, please try typing **SetDotNetRuntime** in Rhino’s command line and select **NetCore**.

\
If the issue continues, run the same command again and change the **NetCoreVersion** from **v7** to **v8**, then restart Rhino.

<figure><img src="../../.gitbook/assets/image (70).png" alt=""><figcaption></figcaption></figure>

If the problem still persists after following the steps above, we recommend sending us your Rhino system information so we can analyze your configuration and identify the possible cause of the issue.

To extract this information, follow these steps:

1. Open Rhino and type **SystemInfo** in the command line.
2. Press **Enter**, and Rhino will generate a detailed report about your system configuration, including information about your graphics card, OpenGL settings, and other system parameters.
3. Copy or save this information and send it to us via email at **support@rhinoartisan.com**.

Our team will review your system details and help you find a solution to the issue.

## 4. Rhino Installation Problem

In some cases, there may be problems installing Rhino, so at this point, we recommend uninstalling and reinstalling it. We will have a clean installation, which will make Rhino run much faster and be able to load plugins.

To uninstall Rhino, please check Rhinoceros documentation. [https://wiki.mcneel.com/rhino/uninstalling](https://wiki.mcneel.com/rhino/uninstalling)
