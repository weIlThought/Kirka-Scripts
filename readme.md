JuiceClient Clock Script
This is a customizable clock script for JuiceClient that adds a digital clock to the top center of the screen. It also includes an optional toggle button for showing or hiding the clock, multiple themes, and adjustable font size using the mouse wheel.

Features
Clock Display: Shows the current time at the top center of the screen.

Toggle Button: A button in the top-right corner to show or hide the clock.

Themes: Choose between multiple themes (Dark, Light, Neon) by right-clicking the toggle button.

Font Size Adjustment: Adjust the clock's font size using the mouse wheel.

Positioning: The clock is positioned at the top-center of the screen by default, and you can easily toggle visibility.

Installation
Download the clock.js script file.

Place it in the appropriate folder in your JuiceClient directory, typically under scripts/.

Make sure the script is loaded in JuiceClient.

Once loaded, the clock should appear at the top center of the screen.

Usage
Toggle Clock: Click the clock toggle button (🕑) in the top-right corner to show or hide the clock.

Change Themes: Right-click the toggle button to cycle between themes (dark, light, neon).

Adjust Font Size: Use the mouse wheel while hovering over the clock to increase or decrease its font size.

Customization
You can modify the following settings in the script:

Themes: Customize the colors of the clock by editing the themes object in the script. Available themes include dark, light, and neon.

Position: The clock is positioned by default at the top center. You can change the top and left values in the clockContainer.style to reposition it.

Font Size: The default font size is 24px. You can change the default by modifying the fontSize value in the script.

Troubleshooting
Error: Cannot read property 'appendChild' of null
This error occurs if the document.body element is not yet available when the script runs. The script waits until the body is ready to append the clock container, but if you encounter issues, ensure that the script is loaded after the page content.

Clock doesn't appear
If the clock doesn't show up, check if JuiceClient's custom scripts are correctly configured to load at startup. Also, ensure there are no other conflicts with existing styles or scripts in the client.

License
This script is open-source and distributed under the MIT License. Feel free to modify and distribute it according to the terms of the license.