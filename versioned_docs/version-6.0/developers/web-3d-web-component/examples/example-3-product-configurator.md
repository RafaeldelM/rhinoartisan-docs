---
description: >-
  This example shows how to build a simple product configurator using the
  RhinoArtisan Web 3D Web Component.
---

# Example 3: Product configurator

The configurator allows the user to change:

* The **metal** of the model (White Gold, Rose Gold, Yellow Gold)
* The **main gemstone** (Ruby, Emerald, Sapphire)

All material changes are applied programmatically using the Web Component API.

***

#### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RhinoArtisan Web Component · Changing materiales</title>

  <script type="module"
    src="https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/dist/rhinoartisan-web-3d-1.1.2.js">
  </script>
</head>

<body>

<div class="layout">
  <aside class="panel">
    <h1>Product configurator</h1>

    <h2>Metal</h2>
    <div class="grid">
      <button data-metal="WHITE_GOLD">White Gold</button>
      <button data-metal="ROSE_GOLD">Rose Gold</button>
      <button data-metal="YELLOW_GOLD">Yellow Gold</button>
    </div>

    <h2>Main gem</h2>
    <div class="grid">
      <button data-gem="RUBY">Ruby</button>
      <button data-gem="EMERALD">Emerald</button>
      <button data-gem="SAPPHIRE">Sapphire</button>
    </div>
  </aside>

  <div class="stage">
    <rhinoartisan-web-3d id="ra-viewer"></rhinoartisan-web-3d>
  </div>
</div>

  <script src="app.js"></script>
</body>

</html>
```

#### JavaScript&#x20;

```javascript
const viewer = document.getElementById("ra-viewer");

const MODEL_URL =
  "https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/models/CONF_1753872717_9MwiNGnAtS.glb";

// Replace these UUIDs with the real ones from your model
const METAL_ITEM_UUID = "Metal_01";
const MAIN_GEM_UUID = "Gem_01";

const METALS = {
  WHITE_GOLD: "WHITE_GOLD",
  ROSE_GOLD: "ROSE_GOLD",
  YELLOW_GOLD: "YELLOW_GOLD",
};

const GEMS = {
  RUBY: "RUBY",
  EMERALD: "EMERALD",
  SAPPHIRE: "SAPPHIRE",
};

function applyMetal(key) {
  viewer.setMaterialByUuidAndName(METAL_ITEM_UUID, METALS[key]);
}

function applyMainGem(key) {
  viewer.setMaterialByUuidAndName(MAIN_GEM_UUID, GEMS[key]);
}

// Init viewer
viewer.setAttribute(
  "options",
  {
    autoRotate: true,
    objectSelectionEnabled: true,
    model: {
                 url:  "https://artisan-cdn.fra1.digitaloceanspaces.com/test/Shank0_01.glb"}
    ,
  }
);

// Optional default configuration
viewer.addEventListener("viewer-ready", () => {
  viewer.addModel({ id: "ring", url: MODEL_URL, visible: true})
  applyMetal("WHITE_GOLD");
  applyMainGem("SAPPHIRE");
});

// Button handling
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const metal = btn.getAttribute("data-metal");
  const gem = btn.getAttribute("data-gem");

  if (metal) applyMetal(metal);
  if (gem) applyMainGem(gem);
});

```

#### Styling (optional)


```css
/* ===== RESET & BASE ===== */
html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
               Roboto, Inter, system-ui, sans-serif;
  background: #0f0f12;
  color: #f5f5f7;
}

/* ===== LAYOUT ===== */
.layout {
  display: grid;
  grid-template-columns: 340px 1fr;
  height: 100vh;
}

/* ===== PANEL ===== */
.panel {
  padding: 28px 24px;
  background: linear-gradient(180deg, #141418, #0f0f12);
  border-right: 1px solid rgba(255,255,255,0.06);
  box-shadow: inset -1px 0 0 rgba(255,255,255,0.03);
}

/* ===== TITLES ===== */
h1 {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin: 0 0 24px;
}

h2 {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  margin: 24px 0 12px;
}

/* ===== GRID ===== */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

/* ===== BUTTONS ===== */
button {
  position: relative;
  width: 100%;
  padding: 12px 14px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;

  background: rgba(255,255,255,0.04);
  color: #f5f5f7;

  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;

  cursor: pointer;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.15s ease,
    box-shadow 0.25s ease;
}

/* Hover */
button:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.18);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.35);
}

/* Active / pressed */
button:active {
  transform: translateY(0);
  box-shadow: 0 3px 10px rgba(0,0,0,0.4) inset;
}

/* Selected state (añade esta clase desde JS) */
button.is-active {
  background: linear-gradient(135deg, #ffffff, #dcdcdc);
  color: #0f0f12;
  border-color: transparent;
  box-shadow: 0 8px 30px rgba(255,255,255,0.25);
}

/* ===== STAGE ===== */
.stage {
  position: relative;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(1200px 600px at 50% 20%, #1b1b22, #0b0b0e);
}

/* subtle vignette */
.stage::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    80% 80% at 50% 50%,
    rgba(0,0,0,0) 60%,
    rgba(0,0,0,0.55) 100%
  );
}

/* ===== VIEWER ===== */
rhinoartisan-web-3d {
  display: block;
  width: 100%;
  height: 100%;
}

```


### Explanation

In this example:

* The viewer is added to the page as a **custom HTML element** (`<rhinoartisan-web-3d>`), making it easy to embed the Web 3D viewer in any HTML layout.
* All **configuration options** are defined in JavaScript, allowing dynamic control over the viewer behavior and the loaded model.
* The options are passed to the viewer using the **`options` attribute**, encoded as a JSON string.
* When the `options` attribute is set, the viewer **reacts automatically** by initializing the scene, loading the model, and applying the configuration without requiring any additional method calls.

This approach is ideal for **e-commerce product configurators**, where specific parts of the model must always be updated consistently.



#### Targeting specific model parts

In this example, materials are applied using **item UUIDs** instead of user selection.\
This guarantees that:

* Metal buttons always update the metal parts
* Gem buttons always update the main gemstone

To find the correct UUIDs for your model, you can log all items after the model is loaded:

```javascript
viewer.addEventListener("model-loaded", () => {
  console.log(viewer.getItems());
});
```

Copy the `uuid` of the desired items and assign them to `METAL_ITEM_UUID` and `MAIN_GEM_UUID`.

#### When to use this approach

This pattern is recommended when:

* You are building a **product configurator**
* You need deterministic control over which parts are modified
* The configuration should not depend on user selection

For selection-based workflows, see Example 2.
