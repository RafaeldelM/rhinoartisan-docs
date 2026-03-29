# Edit Light by Highlight Location

### <img src="../../../.gitbook/assets/SPOTLIGHT_06_RENDERING_EDIT_HIGHLIGHT_LOCATION.png" alt="" data-size="line"> Edit Light by Highlight Location

The EditLightByHighlight command edits a light by placing the light highlight on an object.

This command is view dependent. The light is placed so that the highlight is at the pick location on the object for the view in which it is placed- any changes to the view will change the location of the highlight. For best results use this command in combination with saved[ ](https://docs.mcneel.com/rhino/8/help/en-us/commands/namedview.htm)views.

**Steps**

1. Select a light.\
   Use Rendered mode to see the effect of the light on the object.
2. Select a surface or polysurface for the light to shine on.
3. Pick a location on the selected object that the light will hit.\
   The light will be directed toward the surface at the selected spot.

"Tip": **To place and direct a new light or helper line**

1. Press Enter.
2. Specify a command line[ ](https://docs.mcneel.com/rhino/8/help/en-us/popup_actions/specifycommandlineoption.htm)option.

#### Command-line options

-NewLight: Creates a new light with the current view characteristics instead of modifying an existing light.

* Type: Specifies the type of light.
  * DirectionalLight: Places and directs a directional light.
  * PointLight: Places and directs a point light.
  * Spotlight: Places and directs a spotlight
  * Line: Places a helper line segment normal to the surface. Helper lines are useful for placing objects that show in reflections when the scene is raytraced.
  *   Color

      1.Click the option to open the Select Color dialog box.

      2.Type "C" to set the RGB numbers.



For more information, please refer to the [Rhino documentation](https://docs.mcneel.com/rhino/8/help/en-us/commands/editlightbyhighlight.htm#\(null\)).
