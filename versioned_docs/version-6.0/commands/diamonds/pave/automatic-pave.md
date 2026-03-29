# Automatic Pave

## <img src="../../../.gitbook/assets/RIBBON_DIAMOND_AUTOPAVE (1).png" alt="" data-size="line"> Automatic Pave



:::info
This feature will be availabe in the 6.2 Update
:::

The **Automatic Pavé** command efficiently distributes gemstones of predefined sizes onto a surface. This distribution can be executed in two distinct modes:

1. **Origin-Based Mode** – Users select a starting point on the surface from which the pavé pattern expands.
2. **Edge-Based Mode** – The distribution begins from the outer edges of the surface and progresses inward.

Additionally, the command provides the option to automatically generate the necessary **prongs** to secure the stones within the pavé, as well as **drill holes** to accommodate each gemstone in the desig

<figure><img src="../../../.gitbook/assets/image (111).png" alt=""><figcaption></figcaption></figure>

### How it Works

When clicking on the **Automatic Pavé** icon, the command opens in the Artisan panel. The first step is to select the object where the pavé will be applied. This can be a **surface, polysurface, mesh, or SubD object**.

<div data-full-width="true"><figure><img src="../../../.gitbook/assets/image (720).png" alt="" width="278"><figcaption></figcaption></figure></div>

The command is divided into three different tabs:

**Gems** – Provides tools to create the pavé and set the parameters for gemstone sizes.

**Prongs** – Includes tools for generating the prongs that will secure the gemstones.

**Drills** – Allows the creation of drill holes for each gemstone in the pavé.

### <img src="../../../.gitbook/assets/BEZEL.png" alt="" data-size="line"> Gems&#x20;

Within this tab, the first options available are the two gemstone distribution modes:

#### &#x20;<img src="../../../.gitbook/assets/AUTO_PAVE_CENTER (1).png" alt="" data-size="line"> **Point-Based Distribution**&#x20;

The pavé starts from a specific point defined by the user within the object's surface.&#x20;

Once the starting point is specified, a set of circles will appear, indicating where the gemstone distribution will begin and the direction of construction. A **dark dot** will be visible, which can be moved to adjust the distribution direction.

After setting the desired direction, right-clicking will confirm the adjustment and initiate the distribution calculations.

<figure><img src="../../../.gitbook/assets/image (723).png" alt=""><figcaption></figcaption></figure>

Once the mathematical distribution of the pavé is complete, users can begin the refinement process. It's important to note that the automatic calculation and geometric distribution may not always align with aesthetic preferences.

To achieve a customized pavé, users can:

* **Adjust gemstone sizes** – <img src="../../../.gitbook/assets/AUTO_PAVE_INCREASE.png" alt="" data-size="line"> Increase or  <img src="../../../.gitbook/assets/AUTO_PAVE_DECREASE.png" alt="" data-size="line"> decrease the size of specific stones.
* **Lock selected gemstones** –  <img src="../../../.gitbook/assets/AUTO_PAVE_LOCK.png" alt="" data-size="line"> Fix the position of certain stones and recalculate the distribution while preserving them, allowing adjacent stones to adjust accordingly.  Click on  <img src="../../../.gitbook/assets/AUTO_PAVE_UNLOCK (2).png" alt="" data-size="line"> to unlock .
* **Move gemstones** – Shift individual stones, pushing neighboring ones to adapt to the new placement.
* **Delete gemstones** –  <img src="../../../.gitbook/assets/AUTO_PAVE_DELETE.png" alt="" data-size="line"> Remove specific stones to fine-tune the design, or to add others.



<figure><img src="../../../.gitbook/assets/image (724).png" alt=""><figcaption></figcaption></figure>

Additionally, users can manually add gemstones by selecting one of the predefined sizes from the **Gem Sizes** panel and clicking on a point on the surface to place it. If a newly placed gemstone **intersects** with another, both gemstones will turn **red**, signaling areas that need adjustment. To resolve these intersections, users can:

* **Move or resize gemstones** to create more space.
* **Refresh the command** to recalculate and reposition the gemstones automatically.

At any point during the automatic pavé construction process, users can **stop** the process by clicking the **Stop** button, located at the top of the panel next to the **Refresh** button.

There are also tools available to apply **symmetry** in the construction of the pavé, and a button to **activate or deactivate the editor**.

Users can define the **minimum distance** that gemstones should maintain between each other, as well as the distance from the outermost gemstones to the edge of the surface.

A small panel is also available, showing the **total number of gemstones** in the pavé and the **total diamond material volume**. Another small panel allows users to **toggle the visibility** of gemstones and their respective sizes.

These features give users full control over the design process, allowing for both precise technical adjustments and aesthetic customization.

#### <img src="../../../.gitbook/assets/AUTO_PAVE_BORDER.png" alt="" data-size="line"> **Edge-Based Distribution**&#x20;

In some cases, it is preferable to start the pavé construction by placing the **outermost gemstones** along the edge of the surface first. If users select this option, **RhinoArtisan will first calculate the distribution of gemstones along the border** and then progressively expand the pavé inward, maximizing surface coverage while maintaining the predefined spacing between stones.

Just like with **Point-Based Distribution**, users can:

* **Pause the process at any time** to manually add, block, or move gemstones before continuing with the distribution.
* **Refine the pavé after the calculation** by adjusting gemstone sizes, shifting individual stones, or adding new ones.
* **Recalculate the distribution** after making manual modifications to achieve an optimized layout.

This method provides greater control when designing pavé settings, ensuring that the most visible gemstones along the edges are positioned precisely before expanding the pattern into the surface’s interior.

### <img src="../../../.gitbook/assets/PRONGS.png" alt="" data-size="line"> Prongs

The **Prongs Tab** provides tools for creating and adjusting prongs to secure gemstones within the pavé. It works **just like the** [**Dynamic Prongs**](https://docs.rhinoartisan.com/commands/diamonds/gemsets/dynamic-prongs) **command**, offering both manual and automatic placement options.

Prong Placement Modes

1. <img src="https://docs.rhinoartisan.com/~gitbook/image?url=https%3A%2F%2F3375153115-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F5uhW8FwQpXQj8tHUULMo%252Fuploads%252FUEFemwiEhdDBnvKc3VM6%252FADD.png%3Falt%3Dmedia%26token%3D515db2f8-64a8-46cd-9ff4-55125dad0bb2&#x26;width=40&#x26;dpr=4&#x26;quality=100&#x26;sign=39eba42e&#x26;sv=2" alt="" data-size="line"> **Add Prongs**: This mode allows you to manually place prongs with your mouse, using a specified diameter. While RhinoArtisan provides guidance, you have full control over the exact placement of each prong.
2. <img src="https://docs.rhinoartisan.com/~gitbook/image?url=https%3A%2F%2F3375153115-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F5uhW8FwQpXQj8tHUULMo%252Fuploads%252Fc5vMADsKPKQ4rDZ0NpQH%252FDELETE.png%3Falt%3Dmedia%26token%3D4ad42a01-6e07-48ed-a203-c2628627b6e3&#x26;width=40&#x26;dpr=4&#x26;quality=100&#x26;sign=fb9a3609&#x26;sv=2" alt="" data-size="line"> **Delete Prongs**: In this mode, you can easily remove any prongs you don’t want by simply selecting them.
3. <img src="https://docs.rhinoartisan.com/~gitbook/image?url=https%3A%2F%2F3375153115-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F5uhW8FwQpXQj8tHUULMo%252Fuploads%252FGVx6fzl1k7Y3IO9qECiF%252FAUTOMATIC.png%3Falt%3Dmedia%26token%3Dc88c1d43-82f8-41e6-adcf-8518f4f98f3a&#x26;width=40&#x26;dpr=4&#x26;quality=100&#x26;sign=bb017606&#x26;sv=2" alt="" data-size="line"> **Automatic**: Yes, you read that right! In Automatic mode, RhinoArtisan will place all the prongs for you, such as those in a pavé setting. Just specify the part of the gem to be covered using the Girdle Inside parameter, along with the minimum diameter, prong length, and the portion under the girdle. RhinoArtisan will handle the rest, placing the prongs with precision.
4. <img src="https://docs.rhinoartisan.com/~gitbook/image?url=https%3A%2F%2F3375153115-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F5uhW8FwQpXQj8tHUULMo%252Fuploads%252FAHXjAqfzZqDBqqttSAPn%252FMOVE.png%3Falt%3Dmedia%26token%3D4b5fe80c-dfd0-4d70-ab7e-1e757467ca6d&#x26;width=40&#x26;dpr=4&#x26;quality=100&#x26;sign=6fd4d72b&#x26;sv=2" alt="" data-size="line"> **Move Prongs**: As the name suggests, this mode allows you to adjust the position of the prongs as needed.

Additionally, **symmetry options** can be extremely useful for pieces that allow it, ensuring a balanced and aesthetically pleasing prong layout.

⚠ **Note:** Prongs will **not** be added along the outer edge of the pavé, as their placement depends on how the user wants to integrate them with the border. These prongs should be defined manually to suit the specific design needs.

<figure><img src="../../../.gitbook/assets/image (109).png" alt=""><figcaption></figcaption></figure>

### <img src="../../../.gitbook/assets/CUTTERS.png" alt="" data-size="line"> Cutters

The **Cutters Tab** provides advanced tools for drilling and shaping the necessary holes to accommodate gemstones within the pavé. It works similarly to our dedicated [**Cutters**](https://docs.rhinoartisan.com/commands/diamonds/gemsets/cutter#cutter) tool, offering precise control over the drilling process.

**Cutter Configuration Parameters**

Users can define how the cutter interacts with different parts of the gemstones, including the **Crown, Pavilion, and Girdle**. The parameters available allow for complete customization:

* **Height Top** – Adjusts the height of the cutter at the uppermost part of the gemstone.
* **Size Top** – Defines the width of the cut at the top, controlling how much material is removed.
* **Height Crown** – Specifies the cutter height in the **crown** area (above the girdle), determining how deep the cut extends into this section.
* **Gem Inside** – Enables or disables the cutter’s penetration inside the gemstone, allowing for extended cuts if needed.
* **Height Girdle** – Controls the cutter’s interaction with the girdle (the widest part of the gemstone), adjusting how it shapes this section.
* **Size Drill** – Defines the drill size, affecting the overall diameter of the cut.
* **Height Pavilion** – Sets the cutter’s height in the **pavilion** (the lower portion of the gemstone), allowing for precise shaping.
* **Size Bottom** – Determines the width of the cut at the **bottom** of the gemstone, important for modifying the pavilion.
* **Height Drill** – Adjusts the drill’s height, fine-tuning the cut depth.

**Drill Shape Options**

To accommodate different design requirements, users can choose from three drill shapes:

* **Round**
* **Square**
* **Hexagonal**

These flexible settings allow for highly customizable cuts, whether for functional adjustments or aesthetic refinements in the pavé structure.

