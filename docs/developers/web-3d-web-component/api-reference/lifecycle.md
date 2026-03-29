---
description: >-
  This document describes the lifecycle of the rhinoartisan-web-3d web
  component, from initialization to cleanup.
---

# Lifecycle

### 📊 Lifecycle Overview

The web component follows a predictable lifecycle with several stages and corresponding events:

```
┌─────────────────────────────────────────────────────────────┐
│                    Component Created                         │
│                   (Custom Element Defined)                   │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  Component Mounted to DOM                    │
│              (connectedCallback triggered)                   │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                 React Component Initializes                  │
│            - State setup                                     │
│            - Options parsing                                 │
│            - Refs initialization                             │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Canvas & Scene Setup                       │
│            - Three.js renderer                               │
│            - Camera initialization                           │
│            - Controls setup                                  │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Model Loading Phase                       │
│            - Fetch GLTF/GLB file                            │
│            - Parse geometry                                  │
│            - Apply materials                                 │
│            - Compute bounding box                            │
│                                                              │
│            Progress: 0% → 100%                               │
│            Event: 'model-loaded' (on success)                │
│            Event: 'model-load-error' (on failure)            │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Viewer Ready State                         │
│            - All methods exposed                             │
│            - Interactive controls enabled                    │
│            - Event: 'ready' dispatched                       │
│                                                              │
│            ✅ FULLY OPERATIONAL                              │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Active/Interactive                        │
│            - User interactions                               │
│            - Material changes → 'material-changed'           │
│            - Selection changes → 'selection-changed'         │
│            - Method calls                                    │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  Component Unmounted                         │
│            (disconnectedCallback triggered)                  │
│            - Cleanup resources                               │
│            - Dispose geometries                              │
│            - Clear caches                                    │
└─────────────────────────────────────────────────────────────┘
```

***

### 🔄 Lifecycle Stages

#### 1. **Component Creation**

When the custom element is defined in the browser.

**What happens:**

* Custom element registered with `customElements.define()`
* Default styles injected into document head
* Component class ready for instantiation

**Code:**

```javascript
// Automatic when script loads
import "/dist/rhinoartisan-web-3d.es.js";
```

***

#### 2. **Component Mount**

When the element is added to the DOM.

**What happens:**

* React root created
* Web component connected to DOM
* Attribute parsing begins

**Code:**

```html
<rhinoartisan-web-3d id="viewer"></rhinoartisan-web-3d>
```

**Timing:** Immediate when element appears in DOM

***

#### 3. **Initialization**

Internal setup phase after mount.

**What happens:**

* Options parsed from attributes
* State initialized
* Refs created (camera, controls, experience, etc.)
* Version logged to console

**Console Output:**

```
RhinoArtisan Web 3D v1.0.0
```

**Timing:** \~10-50ms after mount

***

#### 4. **Scene Setup**

Three.js scene and renderer initialization.

**What happens:**

* Canvas element created
* WebGL context initialized
* Camera positioned
* Controls attached
* Environment loaded
* Lights created

**Timing:** \~50-200ms after mount

***

#### 5. **Model Loading**

The 3D model is fetched and processed.

**What happens:**

* GLTF/GLB file fetched from URL
* Geometry parsed and optimized
* Materials applied to meshes
* Bounding box computed
* Textures loaded (if needed)

**Events:**

* ✅ **Success:** `model-loaded` event fires
* ❌ **Failure:** `model-load-error` event fires

**Timing:** 200ms - 5s (depends on model size and network)

**Example:**

```javascript
viewer.addEventListener("model-loaded", (event) => {
  console.log("✅ Model ready:", event.detail.modelUrl);
  console.log("Items:", event.detail.items.length);
});
```

***

#### 6. **Ready State**

Viewer is fully operational and ready for interaction.

**What happens:**

* All methods exposed on the element
* Interactive controls enabled
* `ready` event dispatched

**Event:** `ready`

**Timing:** \~500ms after model loading completes

**Example:**

```javascript
viewer.addEventListener("ready", () => {
  console.log("✅ Viewer is ready!");
  // Now safe to call methods
  viewer.zoomExtents();
  viewer.setAutorotate(true);
});
```

***

#### 7. **Active State**

Normal operation - user interactions and API calls.

**What happens:**

* User can interact with the model
* Click to select items
* Methods can be called
* Materials can be changed
* Camera can be controlled

**Events:**

* `selection-changed` - When items are selected/deselected
* `material-changed` - When materials are updated
* `texture-load-error` - If texture loading fails

**Duration:** Until component unmounts or model changes

***

#### 8. **Model Change**

When a new model URL is set.

**What happens:**

* Loading state reactivated
* Previous model cleared from memory
* New model loading begins
* Returns to **Stage 5** (Model Loading)

**Trigger:**

```javascript
viewer.setModelUrl("https://example.com/new-model.glb");
```

***

#### 9. **Component Unmount**

When the element is removed from the DOM.

**What happens:**

* React cleanup effects run
* Three.js resources disposed
* Event listeners removed
* Memory freed

**Timing:** When element removed from DOM

***

### 📍 Key Lifecycle Events

#### Event Timeline

```
Time     Event               Description
────────────────────────────────────────────────────────────
0ms      [mount]             Component added to DOM
50ms     [init]              React initialization
200ms    [scene]             Three.js setup complete
500ms    model-loaded        Model successfully loaded
1000ms   ready               All systems operational
         ├─ ready for interaction
         └─ methods available
...      selection-changed   User selects item
...      material-changed    Material updated
...      [unmount]           Component removed from DOM
```

***

### 🎯 Best Practices

#### 1. Wait for Ready State

Always wait for the `ready` event before calling methods:

```javascript
const viewer = document.querySelector("rhinoartisan-web-3d");

// ❌ BAD - might be called too early
viewer.zoomExtents();

// ✅ GOOD - wait for ready
viewer.addEventListener("ready", () => {
  viewer.zoomExtents();
});
```

***

#### 2. Handle Loading States

Show appropriate UI during loading:

```javascript
const viewer = document.querySelector("rhinoartisan-web-3d");
const loadingUI = document.getElementById("loading");
const errorUI = document.getElementById("error");

viewer.addEventListener("model-loaded", () => {
  loadingUI.style.display = "none";
});

viewer.addEventListener("model-load-error", (event) => {
  loadingUI.style.display = "none";
  errorUI.textContent = `Error: ${event.detail.error}`;
  errorUI.style.display = "block";
});
```

***

#### 3. Cleanup on Unmount

If you're dynamically creating/destroying the component:

```javascript
function removeViewer() {
  const viewer = document.querySelector("rhinoartisan-web-3d");

  // Optional: Clear cache before removing
  viewer.clearModelCache();

  // Remove from DOM (triggers cleanup automatically)
  viewer.remove();
}
```

***

#### 4. Preload for Better UX

Preload models before showing them:

```javascript
const viewer = document.querySelector("rhinoartisan-web-3d");

// Preload while user browses
await viewer.preloadModel("https://example.com/ring2.glb");

// Instant switch when user selects
viewer.setModelUrl("https://example.com/ring2.glb");
```

***

### ⚠️ Common Pitfalls

#### Calling Methods Too Early

```javascript
// ❌ BAD - viewer might not be ready
const viewer = document.querySelector("rhinoartisan-web-3d");
viewer.getItems(); // Returns []

// ✅ GOOD
viewer.addEventListener("ready", () => {
  const items = viewer.getItems(); // Returns actual items
});
```

***

#### Not Handling Model Load Errors

```javascript
// ❌ BAD - no error handling
viewer.setModelUrl("https://broken-url.com/model.glb");

// ✅ GOOD
viewer.addEventListener("model-load-error", (event) => {
  console.error("Failed to load:", event.detail.error);
  // Show error UI or load fallback model
});

viewer.setModelUrl("https://broken-url.com/model.glb");
```

***

#### Memory Leaks

```javascript
// ❌ BAD - creates new viewer repeatedly without cleanup
function showNewViewer() {
  document.body.innerHTML += "<rhinoartisan-web-3d></rhinoartisan-web-3d>";
}

// ✅ GOOD - reuse or properly remove old viewer
function showNewViewer() {
  const existing = document.querySelector("rhinoartisan-web-3d");
  if (existing) {
    existing.remove();
  }
  document.body.innerHTML += "<rhinoartisan-web-3d></rhinoartisan-web-3d>";
}
```

***

### 🔗 Related Documentation

* Events - All available lifecycle and interaction events
* Methods - Available methods (ready after `ready` event)
* Configuration - Initial configuration options
* Examples - Complete usage examples

***

### 📊 Lifecycle State Diagram

```
                    ┌──────────────┐
                    │   Created    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Mounted    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Initializing │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
              ┌────▶│   Loading    │◀────┐
              │     └──────┬───────┘     │
              │            │             │
              │            ▼             │
              │     ┌──────────────┐    │
              │     │    Ready     │    │
              │     └──────┬───────┘    │
              │            │             │
              │            ▼             │
              │     ┌──────────────┐    │
              │     │    Active    │────┘
              │     └──────┬───────┘ (model change)
              │            │
              │            ▼
              │     ┌──────────────┐
              └─────│  Unmounted   │
                    └──────────────┘
```
