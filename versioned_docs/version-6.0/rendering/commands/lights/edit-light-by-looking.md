# Edit Light by Looking

### <img src="../../../.gitbook/assets/SPOTLIGHT_08_RENDERING_EDIT_LIGHT_BY_LOOKING.png" alt="" data-size="line"> Edit Light by Looking

The EditLightByLooking command sets a spotlight direction using view manipulation tools.

The spotlight acts like a camera where the camera location is the light cone apex and the target location is the center of the light cone base.

**Steps**

1. Select a spotlight.\
   Use Rendered[ ](https://docs.mcneel.com/rhino/8/help/en-us/options/view_displaymode_options.htm#Rendered)Viewport mode to see the effect of the light on the object.
2. Use standard view manipulation tools ( Pan, Zoom, etc.) change the orientation and shape of the spotlight cone.
3. When the light "sees" the desired part of the scene, press Enter.\
   The view reverts to what it was at before the command.\
   The light adjusts to shine on what the temporary light-camera was seeing at the end of the command.

#### Command-line options

-NewSpotlight: Creates a new light with the current view characteristics instead of modifying an existing light.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/editlightbylooking.htm#\(null\)).
