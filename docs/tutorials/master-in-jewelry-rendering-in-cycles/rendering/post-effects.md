# Post Effects

The **Post Effects** panel allows you to apply and adjust various post-processing effects to enhance your rendered images. You can add, remove, enable, disable, and reorder these effects to achieve the desired look for your render.

![](https://www.rhinoartisan.com/wp-content/uploads/2024/08/image-1143-1024x905.png)

Managing Post Effects:

![](https://www.rhinoartisan.com/wp-content/uploads/2024/08/image-1144-142x300.png)

**Add a Post Effect**: Click the Add button to select and apply a new effect from the list.

\
**Remove a Post Effect**: Click the X button next to the effect you want to remove.

**Enable/Disable a Post Effect:** Use the checkbox in front of the effect to toggle it on or off.

**Reorder Post Effects:** Drag and drop effects to reorder them. Post effects are applied in the sequence they appear, from top to bottom.

**1- Bloom:**

Purpose: Simulates a glow around bright areas to enhance the appearance of lights in a dark scene.

\
**2- Glow:**

Purpose: Adds a bright, glowing effect around specific colors, ideal for neon lights or colored objects.

![](https://www.rhinoartisan.com/wp-content/uploads/2024/08/Denoise-1.jpg)

\
**3- Fog:**

Adds depth-dependent fog to create atmospheric effects or subtle depth cues.

**4- Depth of Field:**

Creates a blur effect based on the distance from the camera, simulating camera focus.

![](https://www.rhinoartisan.com/wp-content/uploads/2024/08/gLOW.jpg)

**5- Intel Denoiser and NVIDIA Denoiser:**

A CPU-based tool to reduce noise in renders. Compatible with both Windows and Mac.\
Max Memory: Sets the maximum amount of memory the denoiser can use.

Use the Intel denoiser for general purposes. Opt for the NVIDIA denoiser if you are on a Windows system with an NVIDIA GPU.

![](https://www.rhinoartisan.com/wp-content/uploads/2024/08/Denoise.jpg)

**Tone Mapping Tab**

Tone mapping is the process of converting an high-dynamic-range image into a low-dynamic-range image. HDR means the pixel values can have red, green, and blue values that can be represented by a 32-bit floating point number. These values can either be smaller than 1 which means there will be a quantizing error (fixed using dithering), or they can be above 1.0 which might mean they are brighter than the maximum value of the color channel on a monitor (for example, more than 255).

![](https://www.rhinoartisan.com/wp-content/uploads/2024/08/tONE-mAPPING-1024x216.png)

When values are "brighter than white," they will be burned out on the screen. They can be brought back into the screen/bitmap color gamut using tone mapping, which is the process of remapping the color in an image so that the brighter areas are better represented. The options offer a number of ways of doing this.

**Gamma**

Image files are color corrected so that they can be loaded byte-by-byte into the RGB pixels of a computer screen and look right on a monitor. This means that the color response of a standard image is non-linear, that is, it is gamma corrected. Gamma refers to the power function that is used to correct the image. The Gamma value changes, and therefore corrects the output of the image.<br>

<figure><img src="https://www.rhinoartisan.com/wp-content/uploads/2024/08/gamma-1024x285.jpg" alt=""><figcaption></figcaption></figure>

**Wireframe**

![](https://www.rhinoartisan.com/wp-content/uploads/2024/08/Wireframe-1024x245.png)
