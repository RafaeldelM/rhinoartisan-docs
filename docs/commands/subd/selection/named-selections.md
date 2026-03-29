# Named Selections

## <img src="../../../.gitbook/assets/G8_13_SUBD_NAMED_SELECTIONS.png" alt="" data-size="line"> Named Selections

The NamedSelections command opens the Named Selections panel that saves selection sets.

<div align="left"><img src="https://docs.mcneel.com/rhino/8/help/en-us/image/topic_illustrations/namedselections.gif" alt=""></div>

***

### Named Selections panel

#### ![](https://docs.mcneel.com/rhino/8/help/en-us/image/localization/namedselections_panel.png)

#### **To save a selection set**

1. Select objects or sub-objects.
2. Click <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/namedselections_add.png" alt="" data-size="line">.
3.  Type a name for the selection, click OK.

    The objects are listed by types under the named selection item.

    Selection sets are saved in the 3dm file.

**To delete a selection set**

1. Select a selection set.
2. Click <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/delete.png" alt="" data-size="line"> .

**To replace, or add more objects to, a selection set**

1. Select objects or sub-objects.
2. Click <img src="https://docs.mcneel.com/rhino/8/help/en-us/image/icons/namedselections_add.png" alt="" data-size="line">.
3. Enter the name of an existing selection set.
4. When prompted, click Replace or Add.

**To use a selection set**

* Select a selection set before starting a command, or when a command prompts for selecting objects.

**To sort selection sets**

* Click the Selection column header to sort the parent items in ascending or descending order.
* Drag and drop a parent item name to a new location in the list.
* Duplicating all objects in a selection set also duplicates the selection set.
* Deleting all objects in a selection set also deletes the selection set.
* Subobject selection sets duplicate with their top object.
* Objects made into a block will be removed from selection sets.
* When all objects in a selection set are made into a block, the selection set will be removed.

**To access command-line options**

* Type a hyphen in front of the command name: -NamedSelections.

### Command-line options

**List**\
Outputs the selection set list to the command history window.

**Save**\
Creates a new selection set for selected objects.

**Select**\
Specifies a selection set to select objects.

**To script named selections**\
The scriptable -NamedSelections command can be run (nested) in other commands.

* Use :: (two colons) to separate the top and child levels.
* Names containing spaces have to be placed in double quotes.\
  **Example:** -\_Move -\_NamedSelections \_Select "Selection 01::Extrusion" \_Enter 0 10,20\
  This macro moves the Extrusion objects in the selection set of Selection 01 10 units in the x-axis and 20 units in the y-axis.

**Delete**\
Specifies a selection set to remove from the model.\
Objects in the selection set will not be deleted.

**Rename**\
Changes the name of an existing selection set.

**TabVisibility**\
Controls visibility of the Named Selections panel.

**TabVisible (Yes/No/Toggle)**\
Turns on, turns off, the Named Selections panel, or changes its visibility state.

**Replace (On/Off)**\
When the saved name exists, replace the existing named selection (On), or add more objects to it (Off).

***

For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/namedselections.htm?Highlight=namedsel).
