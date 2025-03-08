# Obsidian MermaidJS Pan and Zoom Plugin

## Overview

Obsidian plugin for MermaidJS diagrams that adds pan and zoom features. `svg-pan-zoom` library does all the job, so most of the credits go to their author(s).

## Features

- **Pan and Zoom**: With the mouse and with some control buttons.
- **Mouse Wheel Zoom**: Scroll to zoom in and out when the mouse is over the diagram.
- **Drag to Pan**: Click and hold the mouse button to drag the diagram around.
- **Hand Cursor**: Cute little hand cursor appears when hovering over the diagram, providing visual feedback. The cursor changes to a closed hand when the mouse button is pressed, which is a nice touch (pun intended).

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/MarcoUmpierrez/obsidian-mermaid-pan-and-zoom.git
   ```

2. Navigate to the plugin directory:
   ```bash
   cd obsidian-mermaid-pan-and-zoom
   ```

3. Install the required dependencies:
   ```bash
   npm i
   ```

4. Build the plugin:
   ```bash
   npm run build
   ```

5. Copy the plugin to your Obsidian plugins folder.

## Usage

1. Open your Obsidian vault and create or edit a note containing a MermaidJS snippet.
2. Hover over the diagram to see the hand cursor.
3. Use the mouse wheel to zoom in and out while the cursor is over the diagram.
4. Click and hold the mouse button to drag the diagram around.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Obsidian](https://obsidian.md) for creating such a great tool.
- [MermaidJS](https://mermaid-js.github.io/mermaid/#/) for creating the diagramming tool.
- [svg-pan-zoom](https://github.com/ariutta/svg-pan-zoom) for the pan and zoom functionality.
