---
description: >-
  This example shows how to configure the RhinoArtisan Web Component dynamically
  using JavaScript.
---

# Example 2: Setting options using JavaScript

Instead of passing the configuration directly in the HTML, the options are defined and applied programmatically.

***

### **HTML**

The Web Component is added to the page without any initial configuration:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RhinoArtisan Web Component · Options via JS</title>

  <script type="module"
    src="https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/dist/rhinoartisan-web-3d-1.1.2.js">
  </script>
</head>

<body>

  <rhinoartisan-web-3d id="viewer"></rhinoartisan-web-3d>

  <script src="app.js"></script>
</body>

</html>
```

***

### **JavaScript**

The viewer is selected from the DOM and configured using a JavaScript object:

```js
const viewer = document.getElementById('viewer');

const options = {
  backgroundTopColor: '#ff88cc',
  backgroundBottomColor: '#dce8f6',
  objectSelectionEnabled: true,
  autoRotate: true,
  model: {
    url: "https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/models/CONF_1753872717_9MwiNGnAtS.glb"
  }
};

viewer.setAttribute('options', JSON.stringify(options));
```

***



### Explanation

In this example:

* The viewer is added to the page as a custom HTML element
* Configuration options are defined in JavaScript
* The options are passed to the viewer using the `options` attribute
* The viewer reacts automatically when the options are set

This approach allows:

* Dynamic configuration based on application state
* Runtime updates to viewer settings
* Easier integration with frameworks like Angular, Vue or React

***



### Applying options after initialization

When configuring the RhinoArtisan Web Component programmatically, it is important to ensure that the component has been fully initialized before applying any options.

Depending on your setup, there are different ways to wait for the viewer to be ready. The following examples show the recommended approach and a simpler alternative, along with guidance on when to use each one.

#### Recommended: waiting for the `ready` event

The RhinoArtisan Web Component emits a `ready` event when it has finished initializing and is ready to receive configuration.

This is the recommended way to apply options programmatically.

```js
const viewer = document.getElementById('viewer');

viewer.addEventListener('ready', () => {
  const options = {
    backgroundTopColor: '#ff88cc',
    backgroundBottomColor: '#dce8f6',
    objectSelectionEnabled: true,
    autoRotate: true,
    model: {
      url: "https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/models/CONF_1753872717_9MwiNGnAtS.glb"
    }
  };

  viewer.setAttribute('options', JSON.stringify(options));
});
```

Using the `ready` event ensures that the viewer is fully initialized before applying any configuration.

***

#### Alternative: waiting for the DOM

In simpler scenarios, it may be sufficient to wait until the DOM is fully loaded before setting the viewer options.

```js
window.addEventListener('DOMContentLoaded', () => {
  const viewer = document.getElementById('viewer');
  viewer.setAttribute('options', JSON.stringify(options));
});
```

This approach can work for basic examples, but it is only safe if the Web Component script is loaded before this code runs.

#### Notes

* The `options` attribute expects a JSON string
* Options can be updated at any time by setting the attribute again
* This pattern is recommended when viewer configuration depends on user interaction or application logic
