---
hidden: true
---

# Web-3D - Shopify Integración

This guide explains how to embed the **RhinoArtisan Web-3D Viewer** into a Shopify Online Store 2.0 product page using:

* A **product metafield** to store the GLB URL
* Standard Shopify **variant options** (Metal)
* A single **theme snippet** containing the viewer + variant sync logic
* A small modification to the product section (`product-information.liquid`) to mount the viewer in the media area

<figure><img src="../.gitbook/assets/Shopify_v1.gif" alt=""><figcaption></figcaption></figure>

***

### Requirements

* Shopify Online Store 2.0 theme
* Product with at least one variant option (Metal)
* A publicly accessible `.glb` file URL
* Theme code access

***

### Step 1 — Create a product metafield for the GLB URL

Go to:

**Shopify Admin → Settings → Custom data → Products → Add definition**

Create a metafield:

| Field             | Value            |
| ----------------- | ---------------- |
| Name              | GLB URL          |
| Namespace and key | `custom.url_glb` |
| Type              | URL              |

This metafield will hold the GLB model URL per product.

***

### Step 2 — Create a product and assign the GLB URL

1. Create (or open) a product in Shopify Admin
2. In the product editor, scroll to **Metafields**
3. Find **GLB URL**
4. Paste the public GLB URL

Example:

* `https://.../your-model.glb`

***

### Step 3 — Add Metal variants in Shopify

Create a variant option named (recommended):

* **Metal**

Add values such as:

* White Gold
* Rose Gold
* Yellow Gold

Important:

* The integration auto-detects the “Metal” option by name.
* It also supports “Material” as an alternative option name.

***

### Step 4 — Create the viewer snippet

Create a new snippet file:

**`snippets/ra-viewer-minimal.liquid`**

Paste the following code:

```liquid
<script type="module" src="https://artisan-cdn.fra1.digitaloceanspaces.com/web3d/dist/rhinoartisan-web-3d-1.1.2.js"></script>

<div class="ra-viewer-stage">
  <rhinoartisan-web-3d id="ra-viewer"></rhinoartisan-web-3d>
</div>

<style>
  .ra-viewer-stage{ width:100%; aspect-ratio:1/1; min-height:420px; }
  .ra-viewer-stage rhinoartisan-web-3d{ display:block; width:100%; height:100%; }
</style>

<script id="ra-product-json" type="application/json">{{ closest.product | json }}</script>

<script>
(() => {
  const viewer = document.getElementById("ra-viewer");
  const productEl = document.getElementById("ra-product-json");
  if (!viewer || !productEl) return;

  const product = JSON.parse(productEl.textContent);
  const MODEL_URL = "{{ product.metafields.custom.url_glb }}";
  const METAL_UUID = "Metal_01";

  const opt = (s)=>String(s||"").toLowerCase();
  let metalIdx = product.options.findIndex(o => opt(o).includes("metal"));
  if (metalIdx === -1) metalIdx = product.options.findIndex(o => opt(o).includes("material"));
  metalIdx = metalIdx === -1 ? 1 : metalIdx + 1; // option1 fallback

  const norm = (s)=>String(s||"").trim().toLowerCase().replace(/\s+/g," ");
  const mapMetal = (label) => {
    const v = norm(label);
    if (v.includes("WG") || v.includes("white gold")) return "WHITE_GOLD";
    if (v.includes("RG")   || v.includes("rose gold"))  return "ROSE_GOLD";
    if (v.includes("YG")|| v.includes("yellow gold")) return "YELLOW_GOLD";
    return null;
  };

  const getVariantId = () => {
    const vParam = new URL(location.href).searchParams.get("variant");
    if (vParam) return Number(vParam);
    const input = document.querySelector('form[action*="/cart/add"] input[name="id"]') || document.querySelector('input[name="id"]');
    return input?.value ? Number(input.value) : null;
  };

  const applyMetalForCurrentVariant = () => {
    const id = getVariantId();
    const v = product.variants.find(x => Number(x.id) === Number(id));
    if (!v) return;
    const mat = mapMetal(v["option" + metalIdx]);
    if (mat) viewer.setMaterialByUuidAndName(METAL_UUID, mat);
  };

  // init viewer
  viewer.setAttribute("options", JSON.stringify({
    autoRotate: true,
    objectSelectionEnabled: true,
    model: { url: MODEL_URL }
  }));

  viewer.addEventListener("model-loaded", applyMetalForCurrentVariant);

  const form = document.querySelector('form[action*="/cart/add"]');
  if (form) form.addEventListener("change", (e) => {
    if (e.target?.matches('select, input[type="radio"], input[type="checkbox"]')) {
      setTimeout(applyMetalForCurrentVariant, 100);
    }
  });
})();
</script>

```

***

### Step 5 — Mount the snippet in the product media area

Edit your product section:

**`sections/product-information.liquid`**

Capture the native gallery and replace it by rendering the viewer snippet:

```liquid

  



  

```

Notes:

* The key objective is that `media_gallery` (your captured content) is the one used by the section layout in place of the native gallery.
* `native_gallery` is captured for compatibility, but the minimal viewer snippet does not need to render it.

***

### Result

After completing the steps:

* The RhinoArtisan viewer renders in the product media area
* The GLB model loads from the product metafield
* Changing the Metal variant updates the viewer materials
