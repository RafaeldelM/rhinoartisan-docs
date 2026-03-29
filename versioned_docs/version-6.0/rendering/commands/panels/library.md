# Library

## <img src="../../../.gitbook/assets/G3_06_RENDER_PANEL_LIBRARY.png" alt="" data-size="line"> Library

The Libraries command opens the Libraries panel, to manage libraries of materials, textures, and environments.

* Render content can be saved to files creating external libraries that can be shared between models.
* The Libraries panel displays a view into the content folders you have set up.
* Drag and drop content items into the model to embed the content items.
* Content items can also be dragged between Rhino sessions or into a folder.
* Set up content libraries in Options > Render Libraries.
* When a material or an environment is added to a model from the Libraries panel, and the material or environment contains texture images that do not exist on the local computer, Rhino will download the texture images from the Internet. The [DownloadLibraryTextures](https://docs.mcneel.com/rhino/8/help/en-us/commands/downloadlibrarytextures.htm) command downloads all online contents to the computer for offline use.
* Materials (\*.rmtl), textures (\*.rtex), and environments (\*.renv) are stored in the Render Content folder by default. You can copy the files in the folder from a version of Rhino to another. Render contents may not be fully compatible between different versions.

The Render Libraries panel only lists render content and image files. For other file types, use the [File Explorer](https://docs.mcneel.com/rhino/8/help/en-us/commands/fileexplorer.htm#FileExplorerPanel) panel.

<img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/gear.png" alt="" data-size="line">[Container options](https://docs.mcneel.com/rhino/8/help/en-us/toolbarsandmenus/customize_containers.htm)

<img src="../../../.gitbook/assets/Frame 14.png" alt="" data-size="line">**Go back**

Go to the previously selected folder.

<img src="../../../.gitbook/assets/Frame 15.png" alt="" data-size="line">**Go forward**

Go to the next folder after using "Go back".

**Search box**

Enter a query string to filter items in the current folder and its sub-folders.

<img src="../../../.gitbook/assets/Frame 10.png" alt="" data-size="line">**Quick search**

Shows a list of query strings. The list is split into two sections.

* The upper section contains the search query records.
* The lower section collects the words from the names of the currently selected items. For example, when a material named "Matte Silver" is selected, "Matte" and "Silver" will be listed.

<img src="../../../.gitbook/assets/Frame 16.png" alt="" data-size="line">**Clear search history**

Deletes the search query records in the upper section.

<img src="../../../.gitbook/assets/Frame 17.png" alt="" data-size="line">**Filters**

**Show materials**

Lists material files (\*.rmtl) in the selected folder and its sub-folders.

**Show environments**

Lists environment files (\*.revn) in the selected folder and its sub-folders.

**Show textures**

Lists texture files (\*.jpg, \*.bmp, etc) in the selected folder and its sub-folders.

**Use regular expression**

Allows using [Regular expressions](https://www.google.com/search?q=regular+expression) in the search query string.

**Thumbnail size slider**

The thumbnail size slider is located at the bottom of the Libraries panel. Moving the slider to 0% lists the items without thumbnails.

<img src="../../../.gitbook/assets/Frame 18.png" alt="" data-size="line">**Grid view**

Shows items in rows and columns.

<img src="../../../.gitbook/assets/Frame 19.png" alt="" data-size="line">**List view**

Stacks items vertically in a single column.

