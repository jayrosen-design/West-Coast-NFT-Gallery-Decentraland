# West Coast NFT Exhibition @ Mirror Vision Gallery (Decentraland SDK)

Welcome to the repository for the **West Coast NFT Exhibition**, as showcased at the **Mirror Vision Gallery** in Decentraland. This project contains the necessary assets and scripts (TypeScript, GLB models) to deploy and experience this exhibition using the Decentraland SDK.

---

## Overview 🖼️

This repository allows you to recreate the West Coast NFT Exhibition that was hosted at Mirror Vision Gallery. It's designed for developers and creators working with the Decentraland SDK, providing a ready-to-deploy scene that captures the essence of the original showcase.

The exhibition highlighted the work of **West Coast NFT**, the creative minds behind several influential NFT projects, and brought a curated selection of digital art to the metaverse.

---

## About the Exhibition (October 2022) 🗓️

The original "West Coast NFT Exhibition" ran around **October 2022** at the Mirror Vision Gallery in Decentraland. It was a significant event featuring:

* A curated showcase by **West Coast NFT**, known for their foundational work with the **Doodles** NFT project.
* Prominent displays of **Doodles** NFTs.
* Reportedly, the exhibition also featured other iconic collections such as **Cryptopunks** and **Mfers**.
* A special highlight was a **custom Doodles illustration** created specifically for the gallery show.

This repository aims to preserve and share that metaverse experience.

---

## Repository Contents 📁

This repository includes the following key components for the Decentraland SDK:

* **TypeScript Files (`.ts`):** Scripts for scene logic, interactions, and dynamic behaviors within Decentraland.
    * `[e.g., src/game.ts, src/booth.ts - User to list primary script files or structure]`
* **3D Models (`.glb`):** Optimized 3D models for the gallery layout, individual art pieces, and exhibition assets.
    * `[e.g., models/gallery.glb, models/doodle_display.glb - User to list primary model files or structure]`
* **Scene Definition Files:** (`scene.json` and potentially other configuration files).
* **Other Assets:** Any additional textures, materials, or resources required by the scene.
    * `[e.g., materials/, textures/ - User to specify]`

---

## About Mirror Vision Gallery ✨

The **Mirror Vision Gallery**, owned by [Jay Rosen Design](https://jayrosen.design/) (replace with actual link if available), is an art gallery located in Decentraland's Crypto Valley. It's dedicated to showcasing innovative digital art and NFT projects, providing a unique immersive experience for visitors.

* **Location in Decentraland:** `[Insert Direct Decentraland Parcel Link Here if known - e.g., play.decentraland.org/?position=X,Y]`

---

## Prerequisites & Deployment 🚀

To use this project, you'll need:

1.  **Node.js and npm/yarn** installed.
2.  The **Decentraland SDK** installed globally or as a project dependency.
    ```bash
    npm install -g decentraland
    # or
    # yarn global add decentraland
    ```

### To Deploy or Preview the Scene:

1.  **Clone the repository:**
    ```bash
    git clone [URL_OF_THIS_REPOSITORY]
    cd [REPOSITORY_FOLDER_NAME]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
3.  **Preview the scene locally:**
    ```bash
    dcl start
    ```
4.  **Deploy to your Decentraland parcel:**
    Follow the Decentraland SDK instructions for deploying a scene:
    ```bash
    dcl deploy
    ```
    (Ensure your `scene.json` is configured with your parcel coordinates.)

_Please refer to the official [Decentraland SDK Documentation](https://docs.decentraland.org/sdk7/) for detailed guidance._

---

## Contributing 🤝

Contributions are welcome! If you have improvements, bug fixes, or new features to suggest:

* Please **fork the repository** and create a new branch for your changes.
* **Open an issue** to discuss your proposed changes or to report bugs.
* Submit a **pull request** with a clear description of your contributions.


---

_This README provides a template. Please update bracketed `[]` sections and example file paths with specific details relevant to your repository's contents._
