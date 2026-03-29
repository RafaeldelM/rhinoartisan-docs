---
description: >-
  Complete reference for all configuration options available in RhinoArtisan Web
  3D Viewer.
---

# Properties / Options

### General Settings

| Property          | Type      | Default | Description                                                 |
| ----------------- | --------- | ------- | ----------------------------------------------------------- |
| `showStats`       | `boolean` | `false` | Show FPS monitor (development)                              |
| `autoRotate`      | `boolean` | `false` | Enable automatic camera rotation                            |
| `autoRotateSpeed` | `number`  | `-0.2`  | Rotation speed in rad/s (positive = right, negative = left) |

**Examples:**

```javascript
autoRotateSpeed: -2.0; // Fast left
autoRotateSpeed: -0.5; // Slow left
autoRotateSpeed: 0.5; // Slow right
autoRotateSpeed: 2.0; // Fast right
```

***

### Interaction Guide

Lottie-based animated guide to help users understand how to interact with the 3D viewer.

| Property                    | Type      | Default         | Description                                                                |
| --------------------------- | --------- | --------------- | -------------------------------------------------------------------------- |
| `interactionGuideEnabled`   | `boolean` | `false`         | Show interaction guide                                                     |
| `interactionGuideLottieUrl` | `string`  | `"https://..."` | URL of Lottie JSON file                                                    |
| `interactionGuidePosition`  | `string`  | `"center"`      | Position: "center", "bottom-right", "bottom-left", "top-right", "top-left" |
| `interactionGuideSize`      | `number`  | `200`           | Size in pixels (width/height)                                              |

**Example:**

```javascript
{
  interactionGuideEnabled: true,
  interactionGuideLottieUrl: "https://lottie.host/your-animation.json",
  interactionGuidePosition: "bottom-right",
  interactionGuideSize: 150
}
```

***

### Object Selection

| Property                 | Type      | Default | Description                        |
| ------------------------ | --------- | ------- | ---------------------------------- |
| `objectSelectionEnabled` | `boolean` | `false` | Enable object selection by default |

***

### Auto Fit Settings

| Property         | Type      | Default | Description                                                              |
| ---------------- | --------- | ------- | ------------------------------------------------------------------------ |
| `autoFitOnLoad`  | `boolean` | `true`  | Automatically zoom to model on load                                      |
| `autoFitPadding` | `number`  | `1.0`   | Padding for zoom fit (1.0 = tight fit, 2.0 = double space, 3.0 = triple) |

***

### Camera Settings

| Property         | Type        | Default     | Description               |
| ---------------- | ----------- | ----------- | ------------------------- |
| `cameraPosition` | `[x, y, z]` | `[2, 5, 5]` | Initial camera position   |
| `cameraTarget`   | `[x, y, z]` | `[0, 0, 0]` | Point the camera looks at |
| `cameraNear`     | `number`    | `0.1`       | Near clipping plane       |
| `cameraFar`      | `number`    | `100`       | Far clipping plane        |
| `cameraFov`      | `number`    | `30`        | Field of view in degrees  |

**Example:**

```javascript
{
  cameraPosition: [3, 4, 6],
  cameraTarget: [0, 1, 0],
  cameraFov: 45
}
```

***

### Camera Controls

| Property                      | Type      | Default   | Description                                     |
| ----------------------------- | --------- | --------- | ----------------------------------------------- |
| `controlsEnableZoom`          | `boolean` | `true`    | Enable/disable zoom                             |
| `controlsEnablePan`           | `boolean` | `true`    | Enable/disable panning (drag)                   |
| `controlsEnableRotate`        | `boolean` | `true`    | Enable/disable rotation                         |
| `controlsMinDistance`         | `number`  | `0.5`     | Minimum zoom distance                           |
| `controlsMaxDistance`         | `number`  | `50`      | Maximum zoom distance                           |
| `controlsMinPolarAngle`       | `number`  | `0`       | Minimum vertical angle (0 = from top)           |
| `controlsMaxPolarAngle`       | `number`  | `Math.PI` | Maximum vertical angle (Math.PI = from bottom)  |
| `controlsDampingFactor`       | `number`  | `0.05`    | Movement smoothness (0.05 = smooth, 0.3 = fast) |
| `controlsMouseWheelZoomSpeed` | `number`  | `1.0`     | Mouse wheel zoom speed                          |

**Example:**

```javascript
{
  controlsEnableZoom: true,
  controlsMinDistance: 1,
  controlsMaxDistance: 20,
  controlsDampingFactor: 0.1
}
```

***

### Material Transitions

| Property             | Type      | Default | Description                               |
| -------------------- | --------- | ------- | ----------------------------------------- |
| `enableTransitions`  | `boolean` | `true`  | Smooth animations when changing materials |
| `transitionDuration` | `number`  | `400`   | Transition duration in milliseconds       |

***

### Loader Configuration

Settings for the loading screen displayed while the 3D model loads.

| Property                  | Type     | Default       | Description                              |
| ------------------------- | -------- | ------------- | ---------------------------------------- |
| `loaderBackgroundColor`   | `string` | `"#ffffffff"` | Loader background color (hex with alpha) |
| `loaderBackgroundOpacity` | `number` | `0.8`         | Loader background opacity (0-1)          |
| `loaderSpinnerColor`      | `string` | `"#202020ff"` | Loader spinner color (hex with alpha)    |
| `loaderDotColor`          | `string` | `"#202020ff"` | Loader dot color (hex with alpha)        |

***

### Background

| Property                | Type     | Default     | Description                               |
| ----------------------- | -------- | ----------- | ----------------------------------------- |
| `backgroundTopColor`    | `string` | `"#ffffff"` | Gradient top color                        |
| `backgroundBottomColor` | `string` | `"#f0f0f0"` | Gradient bottom color                     |
| `backgroundImage`       | `string` | `undefined` | Background image URL (overrides gradient) |

**Example:**

```javascript
{
  backgroundTopColor: "#87CEEB",  // Sky blue
  backgroundBottomColor: "#F0F8FF"  // Alice blue
}
```

***

### Environment

| Property                    | Type     | Default         | Description                                    |
| --------------------------- | -------- | --------------- | ---------------------------------------------- |
| `environmentPreset`         | `string` | `undefined`     | Environment preset name                        |
| `environmentFile`           | `string` | `"https://..."` | Custom HDR environment file URL                |
| `environmentIntensity`      | `number` | `1.0`           | Environment lighting intensity                 |
| `environmentRotationOffset` | `number` | `0`             | Environment rotation in radians                |
| `environmentBlur`           | `number` | `1`             | Environment blur (0 = sharp, 1 = very blurred) |

**Available Environment Presets:**

* `"studio"`
* `"sunset"`
* `"dawn"`
* `"night"`
* `"warehouse"`
* `"forest"`
* `"apartment"`
* `"city"`
* `"park"`
* `"lobby"`

**Example:**

```javascript
{
  environmentPreset: "sunset",
  environmentIntensity: 1.5,
  environmentRotationOffset: Math.PI / 4
}
```

***

### Reflective Floor

| Property                           | Type        | Default          | Description                             |
| ---------------------------------- | ----------- | ---------------- | --------------------------------------- |
| `reflectiveFloorEnabled`           | `boolean`   | `false`          | Enable reflective floor                 |
| `reflectiveFloorColor`             | `string`    | `"#b8b8b8"`      | Floor color                             |
| `reflectiveFloorMetalness`         | `number`    | `0.0`            | Floor metalness (0-1)                   |
| `reflectiveFloorRoughness`         | `number`    | `0.8`            | Floor roughness (0-1)                   |
| `reflectiveFloorBlur`              | `[h, v]`    | `[800, 250]`     | Reflection blur \[horizontal, vertical] |
| `reflectiveFloorMixBlur`           | `number`    | `1.0`            | Blur mixing factor                      |
| `reflectiveFloorMixStrength`       | `number`    | `0.15`           | Reflection mixing strength              |
| `reflectiveFloorResolution`        | `number`    | `1024`           | Reflection texture resolution           |
| `reflectiveFloorMirror`            | `number`    | `0.08`           | Mirror reflection strength              |
| `reflectiveFloorDepthScale`        | `number`    | `0.0`            | Depth scale for parallax effect         |
| `reflectiveFloorMinDepthThreshold` | `number`    | `0.9`            | Minimum depth threshold                 |
| `reflectiveFloorMaxDepthThreshold` | `number`    | `1.0`            | Maximum depth threshold                 |
| `reflectiveFloorPosition`          | `[x, y, z]` | `[0, -0.015, 0]` | Floor position                          |

**Example:**

```javascript
{
  reflectiveFloorEnabled: true,
  reflectiveFloorMirror: 0.5,
  reflectiveFloorRoughness: 0.2
}
```

***

### Lighting & Shadows

| Property       | Type     | Default         | Description        |
| -------------- | -------- | --------------- | ------------------ |
| `lightPreset`  | `string` | `"soft-studio"` | Light preset name  |
| `shadowPreset` | `string` | `"soft"`        | Shadow preset name |

***

### 3D Model

| Property      | Type     | Default     | Description                         |
| ------------- | -------- | ----------- | ----------------------------------- |
| `model.url`   | `string` | `undefined` | 3D model URL (.glb or .gltf)        |
| `model.items` | `array`  | `[]`        | Array of model items with materials |

**Model Item Structure:**

```javascript
{
  uuid: "Metal_01",        // Unique identifier
  material: "WHITE_GOLD",  // Material name
  selected: false          // Selection state
}
```

**Example:**

```javascript
{
  model: {
    url: "https://example.com/model.glb",
    items: [
      { uuid: "Metal_01", material: "WHITE_GOLD", selected: false },
      { uuid: "Gem_01", material: "DIAMOND", selected: true }
    ]
  }
}
```

***

### Post-Processing Effects

#### SSAO (Screen Space Ambient Occlusion)

| Property                               | Type      | Default   | Description                   |
| -------------------------------------- | --------- | --------- | ----------------------------- |
| `effectComposerSsaoEnabled`            | `boolean` | `true`    | Enable SSAO effect            |
| `effectComposerSsaoSamples`            | `number`  | `64`      | Number of samples for quality |
| `effectComposerSsaoRadius`             | `number`  | `1`       | Sampling radius               |
| `effectComposerSsaoIntensity`          | `number`  | `2`       | Effect intensity              |
| `effectComposerSsaoLuminanceInfluence` | `number`  | `1`       | Luminance influence factor    |
| `effectComposerSsaoColor`              | `string`  | `"black"` | SSAO color                    |

#### SSR (Screen Space Reflections)

⚠️ **Note:** SSR is not currently available in @react-three/postprocessing

| Property                        | Type      | Default | Description                       |
| ------------------------------- | --------- | ------- | --------------------------------- |
| `effectComposerSsrEnabled`      | `boolean` | `false` | Enable SSR effect                 |
| `effectComposerSsrIntensity`    | `number`  | `0.45`  | Reflection intensity              |
| `effectComposerSsrMaxRoughness` | `number`  | `1`     | Maximum roughness for reflections |

#### Brightness/Contrast

| Property                                     | Type      | Default | Description                           |
| -------------------------------------------- | --------- | ------- | ------------------------------------- |
| `effectComposerBrightnessContrastEnabled`    | `boolean` | `false` | Enable brightness/contrast adjustment |
| `effectComposerBrightnessContrastBrightness` | `number`  | `0`     | Brightness adjustment (-1 to 1)       |
| `effectComposerBrightnessContrastContrast`   | `number`  | `0.1`   | Contrast adjustment (-1 to 1)         |

#### Bloom

| Property                                | Type      | Default | Description                        |
| --------------------------------------- | --------- | ------- | ---------------------------------- |
| `effectComposerBloomEnabled`            | `boolean` | `true`  | Enable bloom effect                |
| `effectComposerBloomLuminanceThreshold` | `number`  | `1`     | Luminance threshold for bloom      |
| `effectComposerBloomIntensity`          | `number`  | `0.6`   | Bloom intensity                    |
| `effectComposerBloomLevels`             | `number`  | `9`     | Number of blur levels              |
| `effectComposerBloomMipmapBlur`         | `boolean` | `true`  | Use mipmap blur for better quality |

#### Depth of Field

| Property                                  | Type      | Default | Description                  |
| ----------------------------------------- | --------- | ------- | ---------------------------- |
| `effectComposerDepthOfFieldEnabled`       | `boolean` | `false` | Enable depth of field effect |
| `effectComposerDepthOfFieldFocusDistance` | `number`  | `0.08`  | Focus distance               |
| `effectComposerDepthOfFieldFocalLength`   | `number`  | `0.015` | Focal length                 |
| `effectComposerDepthOfFieldBokehScale`    | `number`  | `0.4`   | Bokeh blur scale             |
| `effectComposerDepthOfFieldHeight`        | `number`  | `720`   | Effect resolution height     |

#### Tone Mapping

| Property                                | Type      | Default | Description                  |
| --------------------------------------- | --------- | ------- | ---------------------------- |
| `effectComposerToneMappingEnabled`      | `boolean` | `true`  | Enable tone mapping          |
| `effectComposerToneMappingAdaptive`     | `boolean` | `true`  | Use adaptive tone mapping    |
| `effectComposerToneMappingResolution`   | `number`  | `256`   | Luminance texture resolution |
| `effectComposerToneMappingMiddleGrey`   | `number`  | `4`     | Middle grey value            |
| `effectComposerToneMappingMaxLuminance` | `number`  | `16`    | Maximum luminance            |
| `effectComposerToneMappingMinLuminance` | `number`  | `0.01`  | Minimum luminance            |

#### Vignette

| Property                         | Type      | Default | Description                 |
| -------------------------------- | --------- | ------- | --------------------------- |
| `effectComposerVignetteEnabled`  | `boolean` | `false` | Enable vignette effect      |
| `effectComposerVignetteOffset`   | `number`  | `0.1`   | Vignette offset from edges  |
| `effectComposerVignetteDarkness` | `number`  | `0.92`  | Vignette darkness intensity |

#### Chromatic Aberration

| Property                                   | Type      | Default | Description                 |
| ------------------------------------------ | --------- | ------- | --------------------------- |
| `effectComposerChromaticAberrationEnabled` | `boolean` | `false` | Enable chromatic aberration |
| `effectComposerChromaticAberrationOffset`  | `number`  | `0.01`  | Color channel offset        |

#### Noise (Film Grain)

| Property                     | Type      | Default | Description             |
| ---------------------------- | --------- | ------- | ----------------------- |
| `effectComposerNoiseEnabled` | `boolean` | `false` | Enable film grain noise |
| `effectComposerNoiseOpacity` | `number`  | `0.1`   | Noise opacity           |

#### Autofocus

| Property                               | Type      | Default | Description                     |
| -------------------------------------- | --------- | ------- | ------------------------------- |
| `effectComposerAutofocusEnabled`       | `boolean` | `false` | Enable autofocus depth of field |
| `effectComposerAutofocusFocusDistance` | `number`  | `0.08`  | Focus distance                  |
| `effectComposerAutofocusFocalLength`   | `number`  | `0.015` | Focal length                    |
| `effectComposerAutofocusBokehScale`    | `number`  | `0.4`   | Bokeh blur scale                |

#### Hue/Saturation

| Property                                | Type      | Default | Description                      |
| --------------------------------------- | --------- | ------- | -------------------------------- |
| `effectComposerHueSaturationEnabled`    | `boolean` | `false` | Enable hue/saturation adjustment |
| `effectComposerHueSaturationHue`        | `number`  | `0`     | Hue rotation (-1 to 1)           |
| `effectComposerHueSaturationSaturation` | `number`  | `0`     | Saturation adjustment (-1 to 1)  |
| `effectComposerHueSaturationLightness`  | `number`  | `0`     | Lightness adjustment (-1 to 1)   |

#### Pixelation

| Property                              | Type      | Default | Description                         |
| ------------------------------------- | --------- | ------- | ----------------------------------- |
| `effectComposerPixelationEnabled`     | `boolean` | `false` | Enable pixelation effect            |
| `effectComposerPixelationGranularity` | `number`  | `1`     | Pixel size (higher = larger pixels) |

#### Scanline

| Property                          | Type      | Default | Description            |
| --------------------------------- | --------- | ------- | ---------------------- |
| `effectComposerScanlineEnabled`   | `boolean` | `false` | Enable scanline effect |
| `effectComposerScanlineDensity`   | `number`  | `1`     | Scanline density       |
| `effectComposerScanlineLineWidth` | `number`  | `1`     | Scanline width         |
| `effectComposerScanlineJitter`    | `number`  | `0.5`   | Scanline jitter amount |

#### Sepia

| Property                        | Type      | Default | Description              |
| ------------------------------- | --------- | ------- | ------------------------ |
| `effectComposerSepiaEnabled`    | `boolean` | `false` | Enable sepia tone effect |
| `effectComposerSepiaIntensity`  | `number`  | `1`     | Sepia intensity          |
| `effectComposerSepiaSaturation` | `number`  | `0.5`   | Sepia saturation         |
| `effectComposerSepiaSepia`      | `number`  | `0.5`   | Sepia color amount       |

***

### Complete Example

```javascript
const viewerOptions = {
  // General
  showStats: false,
  autoRotate: true,
  autoRotateSpeed: -1.0,

  // Camera
  cameraPosition: [3, 4, 5],
  cameraFov: 45,

  // Controls
  controlsEnableZoom: true,
  controlsMinDistance: 1,
  controlsMaxDistance: 20,

  // Background
  backgroundTopColor: "#87CEEB",
  backgroundBottomColor: "#F0F8FF",

  // Environment
  environmentPreset: "studio",
  environmentIntensity: 1.2,

  // Effects
  effectComposerBloomEnabled: true,
  effectComposerBloomIntensity: 0.8,
  effectComposerSsaoEnabled: true,

  // Model
  model: {
    url: "https://example.com/jewelry.glb",
    items: [
      { uuid: "Metal_01", material: "WHITE_GOLD", selected: false },
      { uuid: "Gem_01", material: "DIAMOND", selected: true },
    ],
  },
};
```

***

### Dynamic Configuration

You can update viewer options at runtime using the `setOption` method:

```javascript
// Get viewer reference
const viewer = document.querySelector("rhinoartisan-web-3d");

// Change single option
viewer.setOption("autoRotate", true);
viewer.setOption("cameraFov", 50);
viewer.setOption("effectComposerBloomIntensity", 1.0);

// Change multiple options
viewer.setOption("backgroundTopColor", "#FF6B6B");
viewer.setOption("backgroundBottomColor", "#4ECDC4");
```

***

### See Also

* API Reference
* Getting Started
* Examples
