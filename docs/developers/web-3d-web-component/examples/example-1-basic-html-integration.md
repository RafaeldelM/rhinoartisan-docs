---
description: >-
  This guide will help you integrate RhinoArtisan Web 3D into your project in
  minutes.
---

# Example 1: Basic HTML integration

This section shows the simplest ways to embed the RhinoArtisan Viewer using plain HTML and JavaScript. These examples work in any modern browser and are framework-agnostic.

#### Example 1: Basic HTML integration

This example demonstrates the most basic integration of the RhinoArtisan Viewer using the Web Component.

The integration consists of two simple steps:

***

**1. Load the Web Component script**

The viewer is distributed as a Web Component.\
To use it, you only need to import the JavaScript module in your HTML page:

```html
<script type="module"
  src="https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/dist/rhinoartisan-web-3d-1.1.2.js">
</script>
```

This script registers the `<rhinoartisan-web-3d>` custom element in the browser.

No framework, build process or additional dependencies are required.

***

**2. Add the viewer component to the page**

Once the script is loaded, you can use the viewer as a standard HTML element:

```html
<rhinoartisan-web-3d
  id="viewer"
  options='{ "model": { "url": "https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/models/CONF_1753872717_9MwiNGnAtS.glb" } }'>
</rhinoartisan-web-3d>
```

In this basic example:

* The viewer is added directly to the page
* A 3D model is loaded using a public `.glb` file
* Configuration is passed through the `options` attribute as a JSON string

That’s all that is required to render a 3D model.

***

#### Notes

* The Web Component works in any modern browser.
* It can be used in plain HTML or inside any framework (Angular, Vue, React, etc.).
* More advanced configurations (environment, materials, interaction, events) can be added progressively.



<pre class="language-html"><code class="lang-html"><strong>&#x3C;!DOCTYPE html>
</strong>&#x3C;html lang="en">

&#x3C;head>
    &#x3C;meta charset="UTF-8" />
    &#x3C;meta name="viewport" content="width=device-width, initial-scale=1.0" />
    &#x3C;title>RhinoArtisan Web Component · Basic Example&#x3C;/title>
    
    &#x3C;script type="module" src="https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/dist/rhinoartisan-web-3d-1.1.2.js">&#x3C;/script>
&#x3C;/head>

&#x3C;body>
    &#x3C;rhinoartisan-web-3d id="viewer"
        options='{ "model": {
            "url":"https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/models/CONF_1753872717_9MwiNGnAtS.glb"
            }}'>&#x3C;/rhinoartisan-web-3d>
&#x3C;/body>

&#x3C;/html>
</code></pre>

### Table of Contents

* Installation
* First Use
* Basic Configuration
* Key Concepts
* Next Steps

### Installation

#### Option 1: CDN (Recommended for quick testing)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My 3D Viewer</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
      }
      #viewer {
        width: 100vw;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <rhinoartisan-web-experience id="viewer"></rhinoartisan-web-experience>

    <!-- Load the component -->
    <script
      type="module"
      src="https://tu-cdn.com/rhinoartisan-web-3d.js"
    ></script>

    <script>
      // Wait for DOM to be ready
      document.addEventListener("DOMContentLoaded", () => {
        const viewer = document.getElementById("viewer");

        // Configure the viewer
        viewer.options = {
          model: {
            url: "https://caj.fra1.cdn.digitaloceanspaces.com/viewer/TestJoan.glb",
          },
          environmentFile:
            "https://caj.fra1.cdn.digitaloceanspaces.com/viewer/hdr/defaultmetal.hdr",
        };
      });
    </script>
  </body>
</html>
```

#### Option 2: NPM/Yarn (For projects with bundler)

```bash
npm install rhinoartisan-web-experience
```

```javascript
// In your main file (main.js, index.js, etc.)
import "rhinoartisan-web-experience";

// You can now use the component in your HTML
```

### First Use

#### Basic HTML

```html
<div style="width: 800px; height: 600px;">
  <rhinoartisan-web-experience id="myViewer"></rhinoartisan-web-experience>
</div>

<script>
  const viewer = document.getElementById("myViewer");

  // Configure model
  viewer.options = {
    model: {
      url: "path/to/your/model.glb",
    },
  };
</script>
```

#### React

```jsx
import { useRef, useEffect } from "react";
import "rhinoartisan-web-experience";

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
      <rhinoartisan-web-experience ref={viewerRef} />
    </div>
  );
}
```

#### Vue 3

```vue
<template>
  <div style="width: 100%; height: 600px;">
    <rhinoartisan-web-experience ref="viewerRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "rhinoartisan-web-experience";

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
import "rhinoartisan-web-experience";

@Component({
  selector: "app-root",
  template: `
    <div style="width: 100%; height: 600px;">
      <rhinoartisan-web-experience #viewer></rhinoartisan-web-experience>
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
* GitHub Issues: [https://github.com/tu-usuario/rhinoartisan-web-3d/issues](https://github.com/tu-usuario/rhinoartisan-web-3d/issues)
