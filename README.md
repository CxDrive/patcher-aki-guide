# patcher.aki.guide

[https://patcher.aki.guide](https://patcher.aki.guide)

patcher.aki.guide hosts online, web-based ROM patchers for AKI rom hacks and patches of all shapes and sizes.

Primarily, these patchers are for rom hacks that change the base games of many of the AKI Corporation's original Nintendo 64 classics, such as:

* WCW vs. nWo - World Tour
* Virtual Pro Wrestling 64
* WCW-nWo Revenge
* WWF WrestleMania 2000
* Virtual Pro Wrestling 2 - Oudou Keishou
* WWF No Mercy

Into all-new experiences:

* La Fin Du Tour - Virtual Pro Wrestling Alpha
* *somebody needs to make a Virtual Pro Wrestling 64 hack...*
* WCW-nWo Revenji
* ECW House Party Mixtape
* Virtual Pro Wrestling 2 - Royal Road
* Project Outsider Plus

And those examples above are just the tip of the iceberg.

## A Litle Technical Info

I redesigned the site in July 2025 so that I could update a single file, add some images and a single HTML page, and pretty much the pages update themselves. If someone is ever to take over responsiblity of the site, you'll just need to update the akipatchdb.csv file under assets > js. While there's a few more steps (those images, html, coming up with unique code/acronym for each patch, etc), just convert that .csv to a JSON file and put it in the same directory, with the file name akipatchdb.js. This setup is also designed so that when updates to existing patches happen, update the CSV/JSON with a new line for the newest update, load the new patch in the proper directory and with the proper naming, and the patch page itself loads up with the latest patch.

## Special Thanks

patcher.aki.guide wouldn't be possible without two things:

* [Marco Robledo's](https://www.marcrobledo.com/) [Rom Patcher JS](https://github.com/marcrobledo/RomPatcher.js)
* Every single one of the AKI rom hackers out there, some who have worked for decades to crack the secrets of the AKI Wrestling game series and make every one of these patches possible.
