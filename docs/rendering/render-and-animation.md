# Render & Animation

## <img src="../.gitbook/assets/G1_01_RENDERING_REBDER_AND_ANIMATION.png" alt="" data-size="line"> Render & Animation

The Render & Animation panel stores all the resources you need to create rendered images and animated videos from your designs. Inside, you will see five tabs containing materials and environments and a tab where you can set the parameters of your renders.

<figure><img src="../.gitbook/assets/Frame 4.png" alt=""><figcaption><p>Rendering Tabs</p></figcaption></figure>

The button at the top right corner of this panel opens the Rendering Studio, where you can create your images and videos. The button to the left previews how a rendered image would look with your selected parameters and configurations.

![](/img/v60/RA UI 5.jpg>)

To add a material to an object in your scene, you can either drag and drop the material on the object or select the object and then click on the material. This doesn't apply to floor materials, as these can only be used for the ground plane of your scene. To use them, you just need to click on the desired floor material.

:::info
To optimize space, we suggest docking this toolbar to the right side of your layout, especially within the same panel where you have other toolbars.
:::

### Metal Materials

It's the first tab from left to right.

This menu contains materials for metals such as gold, silver, and platinum. It also includes some textured materials and waxes.

![](/img/v60/image 37.png>)

### Gem Materials

It's the second tab from left to right.

This menu contains materials for gems such as diamonds, emeralds, sapphires, and many more. Additionally, you can also find some materials for pearls.

![](/img/v60/image 38.png>)

### Ground Materials

It's the third tab from left to right.

This menu contains materials for the floor of your scenario. You can apply them by simply clicking on them. Many ground materials are basically reflective or matte colors, but others have patterns and textures to them.

You can only have one Ground active at a time.

![](/img/v60/image 39.png>)

### Miscellaneous Materials

It's the fourth tab from left to right.

This menu contains materials for props and other decorative objects. You can apply these to busts, boxes, and other background objects.

![](/img/v60/image 40.png>)

### Environments

It's the fifth tab from left to right.

The different items you will find inside this category are called Environments. Each environment has its own lighting settings and unique HDRIs.

To apply an Environment to your scene, click on the Environment you want to use. You can't have more than one Environment active at a time.

![](/img/v60/image 41.png>)

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
