# How to Apply 3D Textures

#### Learn how to apply, edit, and convert 3D textures into production-ready geometry in RhinoArtisan.



### ⚡ Quick Steps (esto es CLAVE)

* Create a ring from the **Shanks tab** (CL009)
* Select the **outer surface**
* Use **Texture 3D** from Accessories
* Choose a texture (e.g., Hammered)
* Adjust parameters (U/V, height, rotation, resolution)
* Click **Compute** to preview
* Accept the result
* (Optional) Convert to real geometry for production

***

### 🧠 Key Concepts (muy importante para soporte)

#### 🔹 Texture vs Geometry

* Texture = visual (render)
* Geometry = production (mesh)

***

### ⚙️ Parameters Explained

* **U / V Size** → controls repetition
* **Displacement** → moves texture
* **Height** → depth of geometry
* **Rotation** → orientation
* **Resolution** → level of detail

***

### 🛠️ Convert Texture to Production Geometry

1. Create a ring curve (e.g., size 56)
2. Run `ExtractRenderMesh`
3. Create a solid (extruded ring curve)
4. Convert solid to mesh
5. Run **Automatic Repair**
6. Use **Boolean Difference**

👉 Result: closed, production-ready mesh

***

### 🎨 Add Custom Textures

* Go to **File → User Folder**
* Open `Texture 3D` folder
* Add your textures
* Restart RhinoArtisan
* They will appear automatically in the command

***

### ⚠️ Common Issues

* **Pink texture** → use `Flip`
* **Mesh open** → use Automatic Repair
* **Wrong surface** → reselect outer face
