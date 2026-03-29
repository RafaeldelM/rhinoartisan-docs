# System Requirements

Assistant is included in RhinoArtisan and runs entirely on your computer inside Rhino. It follows the same base requirements as RhinoArtisan, with additional hardware requirements because AI models are executed locally using Ollama (models around 5GB such as Llama 3.1 7B and similar).

Assistant works offline after installation. Internet is only required to install Ollama and download the AI model(s).

### Minimum Requirements

Your system must meet at least:

* Operating System: Windows 10 / Windows 11 (64-bit)
* Rhino Version: Rhino 7 or Rhino 8 installed
* RhinoArtisan Version: RhinoArtisan 6.7 or later
* Processor: Intel i5 (10th gen or newer) / AMD Ryzen 5 3600 or equivalent
* Memory (RAM): 16 GB minimum
* Graphics: Dedicated GPU recommended. For 7B models, GPU with at least 8 GB VRAM is the minimum practical target
* Storage: SSD recommended, with at least 15 GB free (models + cache)
* Internet Connection: Required only for installation and model download

### Recommended Requirements

For the best performance:

* Processor: Intel i7 / AMD Ryzen 7 or better
* Memory (RAM): 32 GB
* Graphics: NVIDIA RTX-series or equivalent with 12 GB+ VRAM
* Storage: NVMe SSD strongly recommended
* Internet Connectivity (Installation Only)

### Assistant does not rely on cloud computation.

This means:

* AI runs locally on your machine (via Ollama)
* No data is sent to 2Shapes or any external service
* A stable internet connection is only needed once (installation + model download)
* After installation, Assistant works fully offline

### AI Model Notes (Important)

Running large models like Llama 3.1 7B requires significant hardware resources:

* GPUs with 6 GB VRAM (e.g., GTX 1660) are not sufficient for reliable 7B performance
* 8 GB VRAM is the minimum viable baseline for quantized 7B models
* 12 GB+ VRAM is recommended for smooth and future-proof usage
* If hardware is limited, smaller models can be used, but responses may be slower and capabilities may be reduced

### Additional Notes

Assistant is included with RhinoArtisan (no separate subscription required).\
Performance depends on model size, design complexity, and your local hardware.\
System requirements may evolve as Assistant improves.

:::info
Hint: Please check that your computer meets the technical requirements to run Assistant.
:::

