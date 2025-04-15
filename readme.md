JuiceClient Clock Script

Welcome to the JuiceClient Clock Script repository! This script adds a customizable digital clock to the top-center of the screen in JuiceClient. It features an optional toggle button for showing or hiding the clock, multiple themes, and adjustable font sizes using the mouse wheel.

🚀 Getting Started

Follow these steps to set up the script on your local machine:

1. Install Dependencies

Ensure you have JuiceClient set up on your machine and are able to run custom scripts within it. If you're unsure, follow the official JuiceClient installation guide.

2. Download the Script

Download the clock.js file from the repository.

Place the script in the scripts/ directory within your JuiceClient installation folder.

3. Load the Script in JuiceClient

Open JuiceClient and load the clock.js script.

Once the script is loaded, a clock will appear at the top-center of the screen.

🔧 Customization

4. Toggle Clock Visibility

Click the clock toggle button in the top-right corner (🕑) to show or hide the clock.

5. Change Themes

Right-click the toggle button to cycle through available themes:

Light: A bright and clean theme.

Dark: A more subdued and dark theme for low-light environments.

Neon: A vibrant neon-themed clock.

6. Adjust Font Size

Use your mouse wheel while hovering over the clock to increase or decrease the font size.

🛠️ Development Setup

7. Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/your-username/juiceclient-clock-script.git

8. Open in Code Editor

Navigate to the project folder and open it in your preferred code editor (e.g., VSCode).

9. Modify Script (Optional)

You can easily modify the script to suit your needs:

Themes: Customize the clock's colors in the themes object within the script.

Position: By default, the clock is centered at the top. Adjust the top and left values in clockContainer.style to reposition it.

Font Size: Change the default font size in the script by modifying the fontSize value.

🐞 Troubleshooting

Error: Cannot read property 'appendChild' of nullThis occurs if the document.body element is not available when the script runs. The script waits until the body is fully loaded to append the clock. Ensure the script is being loaded after the page content.

Clock Not AppearingIf the clock doesn't show up, ensure JuiceClient is correctly configured to load custom scripts. Check for any style or script conflicts that may be affecting the display.

📄 License

This script is open-source and distributed under the MIT License. Feel free to modify and distribute it according to the terms of the license.
