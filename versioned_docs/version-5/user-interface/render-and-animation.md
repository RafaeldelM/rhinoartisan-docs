---
description: Available in Rhino and RhinoArtisan User Interface
---

# Render & Animation

The Render & Animation panel keeps all the resources to make rendered images and animated videos from your designs. Inside you will see 5 tabs containing materials and environments, and a tab where you can set the parameters of your renders.

![](/img/v54/image (189).png>)

The button on the top right corner of this panel allows you to open the Rendering Studio where you can create your images and videos. The button to its left allows you to preview how a rendered image would look with your selected parameters and configurations.

![](/img/v54/image (196).png>)

To add a material to an object in your scene, you can either drag and drop the material on the object, or select the object and then click on the material. This doesn't apply to floor materials, as these can only be used for the ground plane of your scene, to use them you just need to click on the desired floor material.

:::info
We suggest docking this toolbar to the right side of your layout, especially within the same panel where you have other toolbars, to optimize space.
:::

### Metal Materials

It's the first tab from left to right.

This menu contains materials for metals such as gold, silver, and platinum. Additionally, you can also find some textured materials and waxes.

![](/img/v54/image (189).png>)

### Gem Materials

It's the second tab from left to right.

This menu contains materials for gems such as diamond, emerald, sapphire, and many more. Additionally, you can also find some materials for pearls.

![](/img/v54/image (195).png>)

### Ground Materials

It's the third tab from left to right.

This menu contains materials for the floor of your scenario. You can apply them by simply clicking on them. Many ground materials are basically reflective or matte colors, but others have patterns and textures to them.

You can only have one Ground active at a time.

![](/img/v54/image (225).png>)

### Miscellaneous Materials

It's the fourth tab from left to right.

This menu contains materials for props and other decorative objects. You can apply these to busts, boxes, and other background objects.

![](/img/v54/image (171).png>)

### Environments

It's the fifth tab from left to right.

The different items you will find inside this category are called Environments. Each environment has its own lighting settings and unique HDRIs.

To apply an Environment to your scene, click on the Environment you want to use. You can't have more than one Environment active at a time.

![](/img/v54/image (44).png>)

### Settings

It's the sixth tab from left to right.

On this menu, you can set the different parameters to generate your rendered image or video:

* **Type**: Sets whether an Image, Turntable video, Snapshots video, or Curves video will be created. Note that videos take considerably longer to create as they are made out of multiple images in sequence.
* **Resolution**: Defines the output resolution of your render, the higher the resolution, the more time it will take to finish creating the render.
* **Quality**: With this parameter, you can decide the resulting quality of your rendered image (or images in the case of a video). Each unit represents a pass the render engine makes to smooth the image. We suggest settling for 500 passes by default.
* **Mode**: Only visible if Turntable, Snapshots, or Curves, is selected on the Type parameter. Can be set to Cycles to use Rhino's default raytracing rendering, or Current Display Mode to use the method you are using now.
* **Video**: Only visible if Turntable, Snapshots, or Curves, is selected on the Type parameter. This sets the duration in seconds and the frame rate of the resulting rendered video. Selecting Custom allows you to define the seconds and fps you want to achieve.
* **Snapshots**: Only visible if Snapshots is selected on the Type parameter. It will display the snapshots you have set, clicking on them will bring your viewport to that point.
* **Curves**: Only visible if Curves is selected on the Type parameter. Displays 2 buttons, Rail, which allows you to select the curve that will follow as a path, and Target, which allows you to select a target that will orient to.

:::info
The time it takes for an image to get rendered will highly depend on the hardware specifications of your device.
:::

![](/img/v54/image (190).png>)

#### How to create an Image Rendering

The first step when it comes to creating your rendering is to decide whether you want to have a static, rendered image or an animated, rendered video.

1\) In Type, choose Image.

2\) Choose the Resolution that you want to achieve. The higher the resolution, the more details you will be able to see in the image, and the longer it will take to generate the rendering.

:::info
If you are not sure what resolution to use, we suggest choosing 1920x1080 (16:9) HD for a standard, all-purpose rendered image.
:::

3\) Adjust the Quality value to the number of passes you want the render engine to do before finishing the rendering process. This will set the definition of your image. The higher the value the more time it will take to finish the process.

:::info
We suggest setting this value to 500 to achieve a good definition with usually not much time to render.
:::

4\) Apply the desired materials to your design, ground, and props if any.

5\) Choose the Environment you want to use for your video.

6\) Click on the Preview Render button, and drag an area over the scene you want to preview.

7\) If you like how it looks, click on the Render button.

8\) Once the rendering process ends, by default, the image will be saved in the same location as your design file.

#### How to create a Turntable rendering

1\) In Type, choose Turntable.

2\) Choose the Resolution that you want to achieve. The higher the resolution, the more details you will be able to see in the video, and the longer it will take to generate the rendering.

:::info
If you are not sure what resolution to use, we suggest choosing 1920x1080 (16:9) HD for a standard, all-purpose rendered video.
:::

3\) Adjust the Quality value to the number of passes you want the render engine to do before finishing the rendering process. This will set the definition of your video. The higher the value the more time it will take to finish the process.

:::info
We suggest setting this value to 500 to achieve a good definition with usually not much time to render.
:::

4\) Set the duration and frames per second you want your video to be made.

5\) Apply the desired materials to your design, ground, and props if any.

6\) Choose the Environment you want to use for your video.

7\) Click on the Preview Render button, and drag an area over the scene you want to preview.

8\) If you like how it looks, click on the Render button.

9\) Name your rendered video, choose the folder on which the video will be saved, and click on the Save button.
