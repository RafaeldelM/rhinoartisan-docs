---
description: >-
  The rhinoartisan-web-3d web component exposes the following methods that can
  be called directly on the element.
---

# Methods

### 📋 Method Categories

* Materials
* Items
* Camera & Controls
* Capture
* Selection
* Model Loading & Cache
* Presets
* Configuration
* Material Customization

***

### Materials

#### `setMaterialByName(materialName)`

Sets the material for the currently selected item(s). If no item is selected, applies to the last selected item.

**Parameters:**

* `materialName` (string): Name of the material to apply (e.g., "gold-polished", "silver-polished", "diamond")

**Returns:** void

**Example:**

```javascript
const viewer = document.querySelector('rhinoartisan-web-3d');
viewer.setMaterialByName('rose-gold-polished');
```

***

#### `setMaterialByUuidAndName(uuid, materialName)`

Sets the material for a specific item by its UUID.

**Parameters:**

* `uuid` (string): UUID of the item
* `materialName` (string): Name of the material to apply

**Returns:** void

**Example:**

```javascript
viewer.setMaterialByUuidAndName('Body', 'platinum-polished');
```

***

### Items

#### `getItems()`

Returns an array of all items/parts in the loaded model.

**Returns:** Array of item objects with properties:

* `uuid` (string): Unique identifier
* `material` (string): Current material name
* `selected` (boolean): Selection state

**Example:**

```javascript
const items = viewer.getItems();
console.log('Total items:', items.length);
items.forEach(item => {
  console.log(`${item.uuid}: ${item.material}`);
});
```

***

#### `getSelectedItems()`

Returns an array of currently selected items.

**Returns:** Array of selected item objects

**Example:**

```javascript
const selected = viewer.getSelectedItems();
console.log('Selected items:', selected.length);
```

***

#### `getItemByUuid(uuid)`

Gets a specific item by its UUID.

**Parameters:**

* `uuid` (string): UUID of the item

**Returns:** Item object or undefined if not found

**Example:**

```javascript
const item = viewer.getItemByUuid('Body');
console.log('Item material:', item?.material);
```

***

### Camera & Controls

#### `zoomExtents()`

Fits the camera view to show the entire model with appropriate padding.

**Returns:** void

**Example:**

```javascript
viewer.zoomExtents();
```

***

#### `zoomIn()`

Zooms the camera in (closer to the model).

**Returns:** void

**Example:**

```javascript
viewer.zoomIn();
```

***

#### `zoomOut()`

Zooms the camera out (farther from the model).

**Returns:** void

**Example:**

```javascript
viewer.zoomOut();
```

***

#### `setAutorotate(enabled)`

Enables or disables automatic rotation of the model.

**Parameters:**

* `enabled` (boolean): True to enable, false to disable

**Returns:** void

**Example:**

```javascript
viewer.setAutorotate(true);
```

***

#### `getCameraView()`

Gets the current camera view configuration.

**Returns:** Object with:

* `position` (array): \[x, y, z] camera position
* `target` (array): \[x, y, z] look-at target
* `fov` (number): Field of view in degrees

**Example:**

```javascript
const view = viewer.getCameraView();
console.log('Camera position:', view.position);
console.log('Camera target:', view.target);
console.log('Field of view:', view.fov);
```

***

#### `setCameraView({ position, target, fov })`

Sets the camera view configuration.

**Parameters:**

* `position` (array): \[x, y, z] camera position
* `target` (array): \[x, y, z] look-at target
* `fov` (number): Field of view in degrees

**Returns:** void

**Example:**

```javascript
viewer.setCameraView({
  position: [-5, 2, 5],
  target: [0, 0, 0],
  fov: 45
});
```

***

### Capture

#### `getScreenshot(format, quality, width, height)`

Captures a screenshot of the current view.

**Parameters:**

* `format` (string, optional): Image format. Default: "image/png". Options: "image/png", "image/jpeg", "image/webp"
* `quality` (number, optional): Image quality (0-1). Default: 0.92
* `width` (number, optional): Output width in pixels. Default: 1920
* `height` (number, optional): Output height in pixels. Default: 1080

**Returns:** Data URL string of the image

**Example:**

```javascript
const screenshot = viewer.getScreenshot('image/png', 0.95, 2560, 1440);
// Use the data URL
const img = document.createElement('img');
img.src = screenshot;
document.body.appendChild(img);
```

***

#### `downloadImage(filename)`

Downloads a screenshot of the current view.

**Parameters:**

* `filename` (string, optional): Name of the file. Default: "screenshot.png"

**Returns:** void

**Example:**

```javascript
viewer.downloadImage('my-ring-design.png');
```

***

#### `startVideoRecording(duration)`

Starts recording a video of the viewer (turntable animation).

**Parameters:**

* `duration` (number, optional): Duration in seconds. Default: 5

**Returns:** void

**Example:**

```javascript
viewer.startVideoRecording(10); // Record 10 seconds
```

***

#### `stopVideoRecording()`

Stops the current video recording and downloads the file.

**Returns:** void

**Example:**

```javascript
viewer.stopVideoRecording();
```

***

### Selection

#### `setObjectSelectionEnabled(enabled)`

Enables or disables the ability to select objects by clicking.

**Parameters:**

* `enabled` (boolean): True to enable, false to disable

**Returns:** void

**Example:**

```javascript
viewer.setObjectSelectionEnabled(false); // Disable selection
```

***

### Model Loading & Cache

#### `setModelUrl(url)`

Loads a new 3D model from the specified URL.

**Parameters:**

* `url` (string): URL of the GLTF/GLB model to load

**Returns:** boolean - True if successful, false on error

**Example:**

```javascript
const success = viewer.setModelUrl('https://example.com/ring.glb');
if (success) {
  console.log('Model loading...');
}
```

***

#### `preloadModel(url)`

Preloads a model into cache without displaying it.

**Parameters:**

* `url` (string): URL of the model to preload

**Returns:** Promise

**Example:**

```javascript
await viewer.preloadModel('https://example.com/ring2.glb');
console.log('Model preloaded and cached');
```

***

#### `clearModelCache(url)`

Clears a specific model from the cache.

**Parameters:**

* `url` (string, optional): URL of the model to clear. If not provided, clears all models.

**Returns:** void

**Example:**

```javascript
viewer.clearModelCache('https://example.com/ring.glb');
```

***

### Presets

#### `loadPreset(presetName)`

Loads a predefined visual preset (combination of lights, shadows, environment, etc.).

**Parameters:**

* `presetName` (string): Name of the preset to load

**Returns:** boolean - True if successful, false if preset not found

**Available Presets:**

* `studio-bright` - Bright studio lighting
* `studio-soft` - Soft, diffused studio lighting
* `outdoor-sunset` - Warm sunset lighting
* `outdoor-overcast` - Cloudy day lighting
* `dramatic-dark` - High contrast, dramatic lighting
* `minimal-clean` - Minimal, clean aesthetic

**Example:**

```javascript
viewer.loadPreset('studio-bright');
```

***

#### `getAvailablePresets()`

Gets a list of all available presets.

**Returns:** Array of preset objects with:

* `name` (string): Preset identifier
* `displayName` (string): Human-readable name
* `description` (string): Preset description
* `category` (string): Preset category

**Example:**

```javascript
const presets = viewer.getAvailablePresets();
presets.forEach(preset => {
  console.log(`${preset.displayName}: ${preset.description}`);
});
```

***

#### `getCurrentPreset()`

Gets the currently active preset (if any).

**Returns:** Preset object or null if no preset matches current configuration

**Example:**

```javascript
const current = viewer.getCurrentPreset();
if (current) {
  console.log('Current preset:', current.displayName);
}
```

***

### Configuration

#### `exportConfiguration()`

Exports the current viewer configuration as a JSON object.

**Returns:** Configuration object containing:

* `version` (string): Configuration format version
* `timestamp` (string): ISO timestamp
* `items` (array): All items with their materials
* `camera` (object): Camera view configuration
* `viewerOptions` (object): Viewer settings

**Example:**

```javascript
const config = viewer.exportConfiguration();
console.log(JSON.stringify(config, null, 2));

// Save to file
localStorage.setItem('myDesign', JSON.stringify(config));
```

***

#### `importConfiguration(config)`

Imports a previously exported configuration.

**Parameters:**

* `config` (object): Configuration object from `exportConfiguration()`

**Returns:** boolean - True if successful, false on error

**Example:**

```javascript
const savedConfig = JSON.parse(localStorage.getItem('myDesign'));
viewer.importConfiguration(savedConfig);
```

***

#### `downloadConfiguration(filename)`

Downloads the current configuration as a JSON file.

**Parameters:**

* `filename` (string, optional): Name of the file. Default: "viewer-config.json"

**Returns:** void

**Example:**

```javascript
viewer.downloadConfiguration('my-design-config.json');
```

***

### Material Customization

#### `updateMaterialProperties(uuid, properties)`

Updates specific material properties for an item.

**Parameters:**

* `uuid` (string): UUID of the item
* `properties` (object): Properties to update:
  * `color` (string): Hex color (e.g., "#ff0000")
  * `metalness` (number): 0-1
  * `roughness` (number): 0-1
  * `emissive` (string): Hex color
  * `emissiveIntensity` (number): 0-1+
  * `normalScale` (number): Normal map intensity
  * `envMapIntensity` (number): Environment reflection intensity
  * `opacity` (number): 0-1

**Returns:** boolean - True if successful

**Example:**

```javascript
viewer.updateMaterialProperties('Body', {
  color: '#ffd700',
  metalness: 0.9,
  roughness: 0.2,
  envMapIntensity: 1.5
});
```

***

#### `getMaterialProperties(uuid)`

Gets the current material properties of an item.

**Parameters:**

* `uuid` (string): UUID of the item

**Returns:** Object with material properties or null

**Example:**

```javascript
const props = viewer.getMaterialProperties('Body');
console.log('Current color:', props.color);
console.log('Metalness:', props.metalness);
```

***

#### `saveCustomMaterial(name, properties)`

Saves custom material properties to localStorage for later use.

**Parameters:**

* `name` (string): Name for the custom material
* `properties` (object): Material properties (same as `updateMaterialProperties`)

**Returns:** boolean - True if successful

**Example:**

```javascript
viewer.saveCustomMaterial('my-gold', {
  color: '#ffcc00',
  metalness: 0.95,
  roughness: 0.15
});
```

***

#### `getCustomMaterials()`

Gets all saved custom materials from localStorage.

**Returns:** Array of custom material objects

**Example:**

```javascript
const customMaterials = viewer.getCustomMaterials();
customMaterials.forEach(mat => {
  console.log(`${mat.name}:`, mat);
});
```

***

#### `deleteCustomMaterial(name)`

Deletes a saved custom material from localStorage.

**Parameters:**

* `name` (string): Name of the custom material to delete

**Returns:** boolean - True if successful

**Example:**

```javascript
viewer.deleteCustomMaterial('my-gold');
```

***

### 💡 Usage Tips

#### Accessing Methods

All methods are directly accessible on the web component element:

```javascript
const viewer = document.querySelector('rhinoartisan-web-3d');

// Wait for the viewer to be ready
viewer.addEventListener('ready', () => {
  // Now you can safely call any method
  viewer.zoomExtents();
  viewer.setAutorotate(true);
});
```

#### Method Chaining

Some methods return values, but most return void. You can still execute multiple operations:

```javascript
viewer.addEventListener('ready', () => {
  viewer.setAutorotate(true);
  viewer.zoomExtents();
  viewer.setMaterialByName('gold-polished');
});
```

#### Error Handling

Methods that can fail (like `setModelUrl`, `loadPreset`) return boolean values:

```javascript
const success = viewer.setModelUrl('https://example.com/ring.glb');
if (!success) {
  console.error('Failed to load model');
}
```

***

### 🔗 See Also

* Events - Available events
* Configuration - Configuration options
* Examples - Usage examples
