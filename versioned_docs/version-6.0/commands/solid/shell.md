# Shell

## <img src="../../.gitbook/assets/G3_02_SOLID__SHELL.png" alt="" data-size="line"> Shell <a href="#profiles" id="profiles"></a>

The Shell command creates a hollowed out shell from a solid.

Shell only operates on simple, solid, manifold polysurfaces. These surfaces are removed and the remainder is offset inward, using the outer parts of the removed surfaces to join the inner and outer parts.

<div align="left"><figure><img src="../../.gitbook/assets/shell.gif" alt=""><figcaption></figcaption></figure></div>

**Steps**

1. Select faces to remove from closed polysurface.\
   Leave at least one face unselected.
2. Press Enter when done\
   This step specifies which surfaces will be removed to make the shelled object.

#### Command-line options

-Thickness: Specify the thickness for the shell.

-DeleteInput: Specify if the input object will be deleted.

-EditThickness: Select a shelled object with History recorded to change the thickness.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/mesh.htm).
