# Texture 3D

## <img src="../../.gitbook/assets/SMART_TEXTURE_3D (1).png" alt="" data-size="line"> Texture 3D <a href="#texture-3d" id="texture-3d"></a>

Using this command, you can select a surface and cover it with a fantastic Texture 3D, a three-dimensional interpretation of a 2D texture using it as a height map. It's especially useful for applying complex texturing to your designs.

![Textures 3D Examples](/img/v60/Texture 3d.jpg>)

This command requires two elements: an image and a surface.

You can choose which texture to use by clicking on the left selection square; this will open your available textures.&#x20;

<figure><img src="../../.gitbook/assets/image (545).png" alt=""><figcaption></figcaption></figure>

With the right selection button, you can choose which object to apply the Texture 3D.&#x20;

Below are the measurements of the texture, from its stretching in U and V to its displacement, height, and rotation. You also have the option to align the texture in its four corners or mirror it on two axes.&#x20;

The Resolution slider is at the bottom, letting you adjust the quality of the resulting texture.

<figure><img src="../../.gitbook/assets/image (546).png" alt=""><figcaption></figcaption></figure>

:::info
An important point is that the texture's appearance on the object is always shown, but the texture won't be fully calculated until we click the **Preview** button.
:::

Once the preview is displayed, click the Confirm button.

:::warning
This command is resource-intensive and requires heavy processing on your computer.&#x20;
:::

### How can I add my textures and images?

An exciting feature of this command is that it uses standard textures and images in JPG or PNG format, allowing us to add our own.  You can add more textures by placing them on your [User Folder](../../user-interface/user-folder.md) > Textures3D.

### Why is the texture larger than the surface?

We must distinguish between a surface and a trimmed surface to understand this concept. The command uses the entire surface, so if trimmed, it will display something similar to this example.

We will see the following if we use the Show Control Points command (F10).

<figure><img src="../../.gitbook/assets/image (547).png" alt=""><figcaption><p>Trimmed Torus</p></figcaption></figure>

This surface is a trimmed section of a torus. To address this, we have two options: the first is to create the texture with the surface and trim it, which may not be ideal; the second is to use the **Surface > ShrinkTrimmedSurface** command, which will recalculate a new surface adjusted to the trim.

<figure><img src="../../.gitbook/assets/image (548).png" alt=""><figcaption><p>Example of the same surface after using the ShrinkTrimmedSurface command</p></figcaption></figure>
