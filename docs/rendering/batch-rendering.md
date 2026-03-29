# Batch Rendering

## <img src="../.gitbook/assets/G1_06_RENDER_BATCH_RENDER.png" alt="" data-size="line"> Batch Rendering

Batch rendering is a process where multiple rendered images are scheduled to occur automatically and sequentially. Instead of rendering one image at a time, a job queue is created with different configurations (such as different cameras, materials, lighting, etc.), and the software processes them one after the other without manual intervention.

### **Why is it useful?**&#x20;

Imagine you have a 3D model of a product and want to create images from various angles for a catalogue. Instead of rendering each angle separately, you can set up batch rendering to generate all the images simultaneously, saving time and effort.

### **Main advantages of batch rendering:**

* **Automation:** Eliminates the need to render each image manually and wait.
* **Efficiency:** Allows you to maximise computer resources, as the software can optimize the rendering process.
* **Flexibility:** Multiple rendering jobs can be configured with different parameters.
* **Time-saving:** Ideal for large projects or those requiring many images.

### How it works?

To select the files for rendering, the command prompts you to choose a folder, and it renders all the files within that folder.  The renders will have the same filename but with a .png extension.

