# Rhino 8 doesn't load RhinoArtisan. What can I do?

There are four reasons why Rhino 8 does not load RhinoArtisan:

## 1. Rhino 8 is not updated:

:::info
RhinoArtisan for Rhino 8 requires Rhino 8 SR5 or higher.
:::

Let's check what Rhino version we are using. To do this, we will open Rhino,  in the menu Help > Check for Updates...&#x20;

<figure><img src="../../.gitbook/assets/image (266).png" alt=""><figcaption></figcaption></figure>

As shown below, there is a version available. You can wait for the update to download, and when it closes, it will ask you to install the new version. Alternatively, you can click **Check now...** and download it manually.

<figure><img src="../../.gitbook/assets/image (267).png" alt=""><figcaption></figcaption></figure>

## 2. RhinoArtisan is not updated:

RhinoArtisan has an automatic update system like Rhino, however, you can install the latest version directly. You can download it from [www.RhinoArtisan.com/download](https://www.rhinoartisan.com/download)

## 3. .Net Runtime

In Rhino 8, they have updated the .NET 7 libraries. RhinoArtisan has been updated to run natively. Still, there is the possibility, although we do not recommend it, to switch to the old version to run older plugins.

If you have switched in the past, we recommend that you switch back to the new version. Run the SetDotNetRuntime command, and select NetCore.

<figure><img src="../../.gitbook/assets/image (268).png" alt=""><figcaption></figcaption></figure>

## 4. Rhino Installation Problem

In some cases, there may be problems installing Rhino, so at this point, we recommend uninstalling and reinstalling it. We will have a clean installation, which will make Rhino run much faster and be able to load plugins.

To uninstall Rhino, please check Rhinoceros documentation. [https://wiki.mcneel.com/rhino/uninstalling](https://wiki.mcneel.com/rhino/uninstalling)
