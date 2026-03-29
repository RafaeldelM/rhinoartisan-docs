---
description: >-
  The RhinoArtisan Viewer is framework-agnostic and can be integrated into any
  modern frontend application, including Angular, Vue, React, Svelte, or plain
  JavaScript. Depending on your architecture, th
---

# Framework integration

#### React

```jsx
import { useRef, useEffect } from "react";
import "rhinoartisan-web-3d";

function ViewerComponent() {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.options = {
        model: {
          url: "path/to/your/model.glb",
        },
      };
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <rhinoartisan-web-3d ref={viewerRef} />
    </div>
  );
}
```

#### Vue 3

```vue
<template>
  <div style="width: 100%; height: 600px;">
    <rhinoartisan-web-3d ref="viewerRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "rhinoartisan-web-3d";

const viewerRef = ref(null);

onMounted(() => {
  if (viewerRef.value) {
    viewerRef.value.options = {
      model: {
        url: "path/to/your/model.glb",
      },
    };
  }
});
</script>
```

#### Angular

```typescript
// app.component.ts
import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import "rhinoartisan-web-3d";

@Component({
  selector: "app-root",
  template: `
    <div style="width: 100%; height: 600px;">
      <rhinoartisan-web-3d #viewer></rhinoartisan-web-3d>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild("viewer") viewerElement!: ElementRef;

  ngAfterViewInit() {
    this.viewerElement.nativeElement.options = {
      model: {
        url: "path/to/your/model.glb",
      },
    };
  }
}
```

### Basic Configuration

#### Minimal Structure

```javascript
viewer.options = {
  // 3D Model (required)
  model: {
    url: "https://example.com/model.glb",
  },

  // Environment HDR (recommended)
  environmentFile: "https://example.com/environment.hdr",

  // Background colors
  backgroundTopColor: "#ffffff",
  backgroundBottomColor: "#f0f0f0",
};
```

#### Complete Basic Configuration

```javascript
viewer.options = {
  // === MODEL ===
  model: {
    url: "https://example.com/model.glb",
    items: [
      { uuid: "Metal_01", material: "YELLOW_GOLD", selected: false },
      { uuid: "Gem_01", material: "DIAMOND", selected: false },
    ],
  },

  // === ENVIRONMENT ===
  environmentFile: "https://ejemplo.com/hdr/studio.hdr",
  environmentIntensity: 1.0,
  environmentRotationOffset: 0,
  environmentBlur: 0.5,

  // === BACKGROUND ===
  backgroundTopColor: "#ffffff",
  backgroundBottomColor: "#e0e0e0",

  // === CAMERA ===
  camera: {
    position: [0, 1, 3],
    fov: 35,
    near: 0.1,
    far: 100,
  },

  // === GENERAL OPTIONS ===
  showStats: false,
  objectSelectionEnabled: true,
  fitPadding: 2.0,
};
```

### Key Concepts

#### 1. Web Component

RhinoArtisan Web 3D is a **Web Component**, which means:

* Works with any framework (React, Vue, Angular, Svelte, etc.)
* Used as a normal HTML tag
* Has its own encapsulated shadow DOM

#### 2. Options vs API

There are two ways to control the viewer:

**Options** (Initial configuration):

```javascript
viewer.options = {
  model: { url: "..." },
  camera: { position: [0, 1, 3] },
};
```

**API** (Programmatic control):

```javascript
viewer.setMaterialByName("YELLOW_GOLD");
viewer.zoomExtents();
viewer.downloadImage("photo.png");
```

#### 3. UUIDs and Materials

3D objects are identified by their **UUID** (unique name in the model):

```javascript
// Set initial material
viewer.options = {
  model: {
    items: [
      { uuid: "Metal_01", material: "YELLOW_GOLD" },
      { uuid: "Gem_01", material: "DIAMOND" },
    ],
  },
};

// Change material later
viewer.setMaterialByUuidAndName("Metal_01", "WHITE_GOLD");
```

#### 4. Events

The viewer emits events to notify changes:

```javascript
const viewer = document.getElementById("viewer");

viewer.addEventListener("modelLoaded", (e) => {
  console.log("Model loaded:", e.detail);
});

viewer.addEventListener("objectSelected", (e) => {
  console.log("Object selected:", e.detail.uuid);
});

viewer.addEventListener("materialChanged", (e) => {
  console.log("Material changed:", e.detail);
});
```

#### 5. Async Loading

The model loads asynchronously:

```javascript
// Wait for model to be ready
viewer.addEventListener("modelLoaded", () => {
  // Now you can use the API
  viewer.zoomExtents();
  viewer.setMaterialByName("YELLOW_GOLD");
});
```

### Common Examples

#### Example 1: Simple Viewer

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Viewer</title>
    <script
      type="module"
      src="https://tu-cdn.com/rhinoartisan-web-3d.js"
    ></script>
    <style>
      body {
        margin: 0;
      }
      #viewer {
        width: 100vw;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <rhinoartisan-web-experience id="viewer"></rhinoartisan-web-experience>

    <script>
      document.getElementById("viewer").options = {
        model: {
          url: "https://example.com/ring.glb",
        },
      };
    </script>
  </body>
</html>
```

#### Example 2: Control Buttons

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Viewer with Controls</title>
    <script
      type="module"
      src="https://tu-cdn.com/rhinoartisan-web-3d.js"
    ></script>
    <style>
      #viewer {
        width: 100%;
        height: 600px;
      }
      .controls {
        padding: 20px;
      }
      button {
        margin: 5px;
        padding: 10px 20px;
      }
    </style>
  </head>
  <body>
    <div class="controls">
      <button onclick="changeToGold()">Yellow Gold</button>
      <button onclick="changeToSilver()">Silver</button>
      <button onclick="takePhoto()">Capture Photo</button>
      <button onclick="viewer.zoomExtents()">Fit View</button>
    </div>

    <rhinoartisan-web-experience id="viewer"></rhinoartisan-web-experience>

    <script>
      const viewer = document.getElementById("viewer");

      viewer.options = {
        model: {
          url: "https://example.com/ring.glb",
          items: [{ uuid: "Metal_01", material: "YELLOW_GOLD" }],
        },
      };

      function changeToGold() {
        viewer.setMaterialByUuidAndName("Metal_01", "YELLOW_GOLD");
      }

      function changeToSilver() {
        viewer.setMaterialByUuidAndName("Metal_01", "SILVER");
      }

      function takePhoto() {
        viewer.downloadImage("my-jewelry.png");
      }
    </script>
  </body>
</html>
```

#### Example 3: Materials Gallery (React)

```jsx
import { useRef, useEffect, useState } from "react";
import "rhinoartisan-web-experience";

const materials = [
  { name: "YELLOW_GOLD", label: "Yellow Gold" },
  { name: "WHITE_GOLD", label: "White Gold" },
  { name: "ROSE_GOLD", label: "Rose Gold" },
  { name: "SILVER", label: "Silver" },
  { name: "PLATINUM", label: "Platinum" },
];

function JewelryViewer() {
  const viewerRef = useRef(null);
  const [currentMaterial, setCurrentMaterial] = useState("YELLOW_GOLD");

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.options = {
        model: {
          url: "https://example.com/ring.glb",
          items: [{ uuid: "Metal_01", material: currentMaterial }],
        },
      };
    }
  }, []);

  const changeMaterial = (materialName) => {
    viewerRef.current?.setMaterialByUuidAndName("Metal_01", materialName);
    setCurrentMaterial(materialName);
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        {materials.map((mat) => (
          <button
            key={mat.name}
            onClick={() => changeMaterial(mat.name)}
            style={{
              margin: "5px",
              padding: "10px 20px",
              backgroundColor:
                currentMaterial === mat.name ? "#007bff" : "#fff",
              color: currentMaterial === mat.name ? "#fff" : "#000",
              border: "1px solid #007bff",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {mat.label}
          </button>
        ))}
      </div>

      <div style={{ width: "100%", height: "600px" }}>
        <rhinoartisan-web-experience ref={viewerRef} />
      </div>
    </div>
  );
}

export default JewelryViewer;
```

### Next Steps

Now that you have your viewer working, you can explore:

1. **API Reference** - All available methods
2. **Configuration** - Detailed configuration options
3. **Materials** - Complete materials catalog
4. **Examples** - More examples and use cases
5. **Presets** - Predefined configurations

### Common Troubleshooting

#### Model doesn't show

```javascript
// Verify model URL
viewer.addEventListener("error", (e) => {
  console.error("Error:", e.detail);
});

// Make sure format is GLB or GLTF
viewer.options = {
  model: {
    url: "https://example.com/model.glb", // ✅ Correct
    // url: 'model.obj' // ❌ Not supported
  },
};
```

#### Materials don't change

```javascript
// Wait for model to load
viewer.addEventListener("modelLoaded", () => {
  // Now you can change materials
  viewer.setMaterialByName("YELLOW_GOLD");
});
```

#### Slow performance

```javascript
// Reduce effects quality
viewer.options = {
  effectComposer: {
    ssao: { enabled: false }, // Disable SSAO
    bloom: { enabled: false }, // Disable Bloom
  },
};
```

### Support

Need help? Contact us:

* Email: support@rhinoartisan.com
* Documentation: [https://docs.rhinoartisan.com](https://docs.rhinoartisan.com)
