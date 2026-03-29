# Hinge

## <img src="../../.gitbook/assets/Vectorizadohinge-2.png" alt="" data-size="line"> Hinge <a href="#hinge" id="hinge"></a>

Using this command, you can generate a hinge mechanism on almost any solid object to allow it to open and close. This is beneficial for making closed bracelets and other pieces that require this motion.

<figure><img src="../../.gitbook/assets/image (537).png" alt=""><figcaption></figcaption></figure>

On its parameters, you can find the selection square that allows you to choose which object you want to make the hinge on, and then select the point where to generate the hinge. Below, you can find the various measurements, the number of male inserts, the opening angle, the direction it opens, and also an option to flip the direction it is facing currently.

:::warning
Rhino does not allow boolean split operations on the same object.&#x20;
:::

Rhino does not allow boolean split operations on the same object.  For example, creating a hinge on a torus is not possible due to the limitations of the split command. Therefore, we recommend creating a geometry to split the object, make the hinge, and then rejoin it using a boolean union operation.

<figure><img src="../../.gitbook/assets/image 52 (1).png" alt=""><figcaption></figcaption></figure>
