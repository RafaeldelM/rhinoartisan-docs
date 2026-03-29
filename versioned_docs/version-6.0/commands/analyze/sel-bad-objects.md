# Sel Bad Objects

## <img src="../../.gitbook/assets/ANALYZE_SEL_BAD_OBJECTS.png" alt="" data-size="line"> Sel Bad Objects

The SelBadObjects command selects all objects that do not pass Check.

### When do we encounter "Bad Objects" in Rhino and why?

"Bad Objects" in Rhino are elements within a 3D model that have irregularities or inconsistencies that can affect their visualization, editing, or export. These irregularities can arise for various reasons, from modelling errors to issues with imported files.

### **Common Causes of "Bad Objects":**

#### **Modelling Errors:**

* **Self-intersecting curves:** When a curve crosses itself, creating undefined geometry.
* **Invalid surfaces:** Surfaces with holes, open edges, or incorrect orientations.
* **Non-planar curves on surfaces:** When a curve is not entirely on the plane of a surface.
* **Mismatched nodes:** Junction points between curves or surfaces that do not share the same location.

#### **Problems When Importing Files:**

* **Incompatible file formats:** When importing files from other programs, conversion issues may arise, leading to damaged objects.
* **File corruption:** Damaged or incomplete files may contain erroneous objects.
* **Failed Boolean operations:** When performing Boolean operations (union, subtraction, intersection) between objects, errors may occur if the objects are not properly aligned or have complex intersections.
* **Accidental modifications:** Errors that damage the object's geometry can occur while editing a model.

#### **Consequences of "Bad Objects":**

* **Incorrect visualization:** Damaged objects may appear distorted or have holes on the screen.
* **Editing problems:** Editing tools may not work properly on damaged objects.
* **Corrupt files:** "Bad Objects" can cause a file to become corrupt and impossible to open in the future.
* **Unexpected results in renders or simulations:** Damaged objects may produce erroneous results in subsequent processes.

#### **Preventing "Bad Objects":**

* **Careful modeling:** Pay attention to accuracy and consistency in geometry during modeling.
* **Regular checks:** Perform periodic checks of the model to detect and correct any issues early.
* **Proper use of tools:** Use Rhino tools correctly and avoid operations that might damage the geometry.
* **Save backups:** Regularly create backup copies of the model to be able to restore a previous version in case of problems.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/selection_commands.htm#SelBadObjects).
