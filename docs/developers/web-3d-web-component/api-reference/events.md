---
description: >-
  The rhinoartisan-web-3d web component emits the following custom events that
  you can listen to in order to react to changes and user actions.
---

# Events

### 📋 Event List

#### `ready`

Fired when the viewer is fully initialized and all methods are exposed and ready to use.

**Details:** None

**Example:**

```javascript
const viewer = document.querySelector("rhinoartisan-web-3d");
viewer.addEventListener("ready", () => {
  console.log("Viewer is ready!");
  // Now you can safely call viewer methods
  viewer.zoomExtents();
});
```

***

#### `model-loaded`

Fired when a 3D model has been successfully loaded.

**Details in `event.detail`:**

* `modelUrl` (string): URL of the loaded model
* `items` (array): List of items/parts of the model with their properties

**Example:**

```javascript
viewer.addEventListener("model-loaded", (event) => {
  console.log("Model loaded:", event.detail.modelUrl);
  console.log("Items:", event.detail.items);

  // Example: Change material of the first item
  const firstItem = event.detail.items[0];
  if (firstItem) {
    viewer.setMaterialByUuidAndName(firstItem.uuid, "gold-polished");
  }
});
```

***

#### `selection-changed`

Fired when the user selects or deselects an item/part of the 3D model.

**Details in `event.detail`:**

* `selectedItems` (array): List of currently selected items
* `itemUuid` (string): UUID of the item that changed
* `isSelected` (boolean): `true` if selected, `false` if deselected

**Example:**

```javascript
viewer.addEventListener("selection-changed", (event) => {
  const { itemUuid, isSelected, selectedItems } = event.detail;

  console.log(`Item ${itemUuid} was ${isSelected ? "selected" : "deselected"}`);
  console.log("Total selected items:", selectedItems.length);

  // Example: Show item info in the UI
  if (isSelected) {
    showItemDetails(itemUuid);
  }
});
```

***

#### `material-changed`

Fired when the material of one or more items is changed.

**Details in `event.detail`:**

* `uuid` (string): UUID of the item whose material changed
* `oldMaterial` (string): Name of the previous material
* `newMaterial` (string): Name of the new material

**Example:**

```javascript
viewer.addEventListener("material-changed", (event) => {
  const { uuid, oldMaterial, newMaterial } = event.detail;

  console.log(
    `Item ${uuid} material changed from ${oldMaterial} to ${newMaterial}`
  );

  // Example: Save changes to server
  saveMaterialChange(uuid, newMaterial);

  // Example: Update UI
  updateMaterialSelector(newMaterial);
});
```

***

#### `model-load-error`

Fired when loading a 3D model fails.

**Details in `event.detail`:**

* `modelUrl` (string): URL of the model that failed to load
* `error` (string): Error message
* `timestamp` (number): Error timestamp

**Example:**

```javascript
viewer.addEventListener("model-load-error", (event) => {
  const { modelUrl, error } = event.detail;

  console.error(`Failed to load model ${modelUrl}:`, error);

  // Example: Show error message to user
  showErrorMessage(`Could not load model: ${error}`);

  // Example: Try loading a fallback model
  viewer.setModelUrl("https://example.com/fallback-model.glb");
});
```

***

#### `texture-load-error`

Fired when loading one or more textures fails.

**Details in `event.detail`:**

* `textures` (array): List of texture names that failed to load
* `error` (string): Error message
* `timestamp` (number): Error timestamp

**Example:**

```javascript
viewer.addEventListener("texture-load-error", (event) => {
  const { textures, error } = event.detail;

  console.error(`Failed to load textures [${textures.join(", ")}]:`, error);

  // Example: Load lower quality textures as fallback
  textures.forEach((textureName) => {
    loadLowQualityTexture(textureName);
  });
});
```

***

### 🎯 Complete Usage

Complete example with all events:

```javascript
const viewer = document.querySelector("rhinoartisan-web-3d");

// Wait for the viewer to be ready
viewer.addEventListener("ready", () => {
  console.log("✅ Viewer ready");
});

// When the model loads
viewer.addEventListener("model-loaded", (event) => {
  console.log("📦 Model loaded:", event.detail.modelUrl);
  console.log("Items:", event.detail.items.length);
});

// When selection changes
viewer.addEventListener("selection-changed", (event) => {
  console.log("🎯 Selection changed:", event.detail);
});

// When a material changes
viewer.addEventListener("material-changed", (event) => {
  console.log("🎨 Material changed:", event.detail);
});

// Error handling
viewer.addEventListener("model-load-error", (event) => {
  console.error("❌ Model load error:", event.detail);
});

viewer.addEventListener("texture-load-error", (event) => {
  console.error("⚠️ Texture load error:", event.detail);
});
```

***

### 💡 Notes

* All events are **CustomEvent** with `bubbles: true` and `composed: true` properties
* Event details are always available in `event.detail`
* Events are fired asynchronously (using `setTimeout`) to avoid blocking the render
* You can remove listeners using `removeEventListener()` in the standard way

### 🔗 See Also

* API Reference - Available viewer methods
* Configuration - Configuration options
* Examples - Usage examples
