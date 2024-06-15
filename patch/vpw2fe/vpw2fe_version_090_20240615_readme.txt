Virtual Pro-Wrestling 2 freem Edition
2024/06/15 (June 15, 2024 Version)
a.k.a. "The 90% Release"
======================================
Hello, and welcome to the readme file for Virtual Pro-Wrestling 2 freem Edition.

This covers the most important information, such as how to patch, what ROM to
patch, and so on. You should also consider reading the Manual and Character
Guide, both of which are found in the "docs" directory.

================================================================================
Important Notes
================================================================================

* DO NOT BUY OR SELL REPRODUCTION COPIES OF THIS GAME/HACK.
  I do not get paid for working on this hack, and even if I did, that would open
  up a new can of worms with regards to licensing and copyright infringement.
  So please, please, PLEASE!!! do not buy or sell reproduction copies of this hack.

  The best way to play this hack on real hardware is by using a flash cartridge,
  such as the 64drive, EverDrive 64, or SummerCart64. There are also systems
  one can buy to have a re-flashable single-game cartridge, which allows for
  updates to the hack.

  In general, ROM hacking and fan translation projects eschew profitability for
  various reasons, most notably that hackers use someone else's game as a base
  to begin with.

  If you see anyone selling a cartridge of this hack, I am not responsible,
  nor do I get anything from the sale of said carts.

--------------------------------------------------------------------------------

* If you are going to play this hack on real hardware via a flash cartridge,
  please follow these steps to enable saving.

  [64drive]
  When loading the game, on the "Force Save" line, choose "256K" as the Save Type.

  [64drive via USB Upload]
  A few assumptions:
  - You have downloaded and extracted the USB Loader tool from the 64drive Support page:
    http://64drive.retroactive.be/support.php
	This is the "64drive_usb" program in the below commands.
  - Your patched ROM has the filename "vpw2freem.z64".
  - The save data has the filename "vpw2freem.sra".

  Loading the game for the first time:
  64drive_usb -c 1 -s 3 -l vpw2freem.z64

  Dumping the save data
  (DO THIS WHILE THE GAME IS STILL RUNNING, preferably on the main menu screen):
  64drive_usb -d vpw2freem.sra 2 0 8000

  Loading the game with save data:
  64drive_usb -c 1 -s 3 -l vpw2freem.z64 -l vpw2freem.sra 2

  [EverDrive 64]
  I don't own an EverDrive 64, so I haven't personally tested this solution,
  but it seems to work, as reported by multiple people, so...

  EverDrive 64 v3 or later is recommended, as it includes 256K SRAM on the cart,
  along with updating the save memory when the console shuts off. Those using
  older EverDrive 64 versions will need to remember to reset the console when
  you're done playing.

  Change the Save Type to "SRAM" (*not* "SRAM 768").
  If editing save_db.txt, the relevant information is:
  - Two letter character code: "VF"
  - Save type: 3

  Instructions for changing the Save Type can be found on
  http://micro-64.com/features/everdrive64.shtml

  [SummerCart64 via sc64deployer]
  I don't own a SummerCart64, but it appears you can use "sc64deployer" to write
  the ROM to the cart. See this page for general details; specific details may vary:
  https://github.com/Polprzewodnikowy/SummerCart64/blob/main/docs/00_quick_startup_guide.md

--------------------------------------------------------------------------------

* N64 emulators handle cartridge save data differently. Some emulators also
  need configuration or other information in order to run the hack.
  I can not test all emulators, but my research leads to the following:

  [Project64 v2.4.0]
  This is the primary emulator the hack is tested with. This version of
  Project64 is able to detect save type and react accordingly, meaning you
  need to do nothing special to get saving to work.

  Later versions of Project64 work similarly to v2.4, so you should also be good
  if you're using v3.x or later.

  To my knowledge, there is nothing you can do to get this hack working on
  Project64 v1.7 or earlier. Given the exploits found in v1.6 and v1.7, you
  should probably update to at least v2.4.0.

  PJ64 v2.4.0 is the confirmed minimum "working" version.

  ------------------------------------------------------------------------------

  [Cen64]
  Command line usage for cen64 should use the -sram parameter, for example:
  cen64 -sram vpw2freem.srm pifdata.bin vpw2freem.z64

  ------------------------------------------------------------------------------

  [Bizhawk, OpenEmu, Retroarch (Mupen64 Core)]
  See "Mupen64Plus" section. Information and steps required may be different.
  Check your emulator's documentation for further details.

  ------------------------------------------------------------------------------

  [Retroarch (Parallel N64 Core)]
  Though this emulator is based on Mupen64Plus, I could not confirm if it uses
  the same save type detection as regular Mupen64Plus.

  ------------------------------------------------------------------------------

  [Mupen64Plus]
  Mupen uses a ROM database dependent on ROM file hashes. This works well for
  commercial games, which will typically not change once released, but not so
  much for hacks that are a work in progress (but distributed publicly)...

  You will need to find the "Mupen64plus.ini" file, open it, and paste this
  (non-indented) section at the bottom of the file:

[(hash1)]
GoodName=Virtual Pro Wrestling 2 freem Edition
CRC=(hash2) (hash3)
Players=4
SaveType=SRAM
Mempak=Yes
Rumble=Yes

  Then, you then need to replace the three hash placeholders.
  (hash1) is the MD5 of the ROM, which is given in the "Patching" section
  as "MD5 hash".

  The values for (hash2) and (hash3) were not documented in previous versions,
  as I did not realize the need for them in the hack's documentation. Oops.

  As of this release, this information is also found in the "Patching" section.
  Replace (hash2) (hash3) with the "CRC ROM checksum hashes" value.

  Don't forget to save your changes (and restart the emulator, if necessary).

  When the hack is updated, you can either choose to add a new entry via the
  above steps, or edit the previous entry to have the new values. If you are
  keeping multiple copies of the hash data in the database, it is best to append
  the date to the GoodName parameter (20xx-yy-zz format).

  ------------------------------------------------------------------------------

  [MAME]
  Open the "n64.xml" file in the "hash" directory with a text editor and paste
  the following at the end of the file, before the closing </filelist> tag:

<software name="vpw2freem">
	<description>Virtual Pro Wrestling 2 freem Edition</description>
	<year>2024</year>
	<publisher>Asmik Ace Entertainment</publisher>
	<info name="release" value="20240615"/>
	<part name="cart" interface="n64_cart">
		<dataarea name="rom" size="33554432">
			<rom name="virtual pro wrestling 2 freem edition.bin" size="33554432" crc="(hash1)" sha1="(hash2)" offset="000000" />
		</dataarea>
	</part>
</software>

  Then, you need to replace the two hash placeholders.
  (hash1) is the CRC32 hash of the full ROM file, which is not the same value as the
  "CRC ROM checksum hashes" values used for Mupen64Plus saves. This value was
  also not documented in previous versions.

  (hash2) is the SHA-1 hash, which is given in the "Patching" section as
  "SHA-1 hash".

  When the hack is updated, you must edit the existing values in order to avoid
  duplicate entries. Updating the "release" and "year" values is also recommended.

  ------------------------------------------------------------------------------

  [Other Emulators]
  Any N64 emulator without a section above is missing information.
  Help and information is welcomed. If the emulator in question has trouble
  running the unhacked version of Virtual Pro-Wrestling 2, then there's not much
  that can be done.

--------------------------------------------------------------------------------

* With regards to requesting changes:

  This project is called Virtual Pro-Wrestling 2 *freem* Edition.
  As the "freem" mentioned in the title, I have all final say over changes, and
  have a very specific way of wanting to go about things. While not everything
  is final, please be advised that there *ARE* plans to replace some unreplaced
  items. However, it is likely that they will not match with your hopes, and for
  that, I apologize.

  If you would like the above paragraph summed up in someone else's words,
  here's an excerpt from mikekchar's Code of Conduct:

  "This is not a community project. This is my project. I know that will
  disappoint some people, but I do this for fun in my own spare time. If it stops
  being fun, I will stop working on it, which will pretty much kill the project.
  There are millions of projects in the world and the only reason they continue
  (if they actually do) is because the maintainers stubbornly stick at it."

  source: https://news.ycombinator.com/item?id=19535137

  A nicer way of putting it might be:
  "Suggestions are allowed, but I reserve the right to refuse them."

  Also, I am not looking for other projects to work on, as I have tons of them
  in the works. (This includes VPW Studio.)

================================================================================
Requirements
================================================================================
* Virtual Pro-Wrestling 2 ROM in Z64 format.
* xdelta patcher.
* (optional, but recommended) an xdelta patcher front-end.

If your ROM file is not in Z64 format, use a tool to convert it. Options include:
* uCON64 - http://ucon64.sourceforge.net/
* Tool64 - https://www.zophar.net/utilities/n64aud/tool-n64.html
* Hack64 web-based ROM swapper - https://hack64.net/tools/swapper.php

xdelta is available from http://xdelta.org/ but is only recommended for people
who are familiar with building programs from source code. Most people will want
to use a front-end instead.

Some of the recommended front-ends:
* Windows - xdelta UI (https://www.romhacking.net/utilities/598/)
* Mac OS X/macOS - MultiPatch (https://projects.sappharad.com/tools/multipatch.html)
* Android - UniPatcher (https://github.com/btimofeev/UniPatcher)
* Web - Hack64's Patcher (https://hack64.net/tools/patcher.php)
* Web - Rom Patcher JS (https://www.romhacking.net/patch/)

Please read the Manual (found in the "docs" directory) for more information,
including patching instructions.

The patch expects a ROM with these values:
* Product Code: NA2J
* ROM size: 32.0 MB (33,554,432 bytes)
* CRC32 hash: 8e33c3af
* MD5 hash: 90002501777e3237739f5ed9b0e349e2
* SHA-1 hash: 82dd25a044689eab57ab362fe10c0da6388c217a
* CRC ROM checksum hashes: CD094235 88074B62

================================================================================
Patching
================================================================================

After patching the ROM, you should have the following values:
* Product Code: NVFE
* ROM size: 32.0 MB (33,554,432 bytes)
* CRC32 hash: 165b52c5
* MD5 hash: 2e6421dfe1e23dbfb17c41e836a978ad
* SHA-1 hash: 2d7cfd5396c07aee566bf394537961f027e5e8e7
* CRC ROM checksum hashes - CF55CFB2 86F2DFC5

================================================================================
Other Notes
================================================================================
The Manual, found in the "docs" folder, contains more information than this
readme file. It is also available online at https://vpw.ajworld.net/vpw2freem/Manual/

For extended credits, please see "credits.txt" in the "docs" directory.

Changes between versions can be found in "changelog.txt" in the "docs" directory.

================================================================================
Parting Words from the Past (now a few years old)
================================================================================
We must create the change we want to see in the pro wrestling video game genre.
There is no other way to do it and get the same quality that we desire out of
wrestling games today.

This is not particularly a call to arms, but it is a short manifesto of what
I would like to accomplish in the future.

VPW2 freem Edition is a stepping stone towards this direction, but without a
full decompilation of the original game, hacking it to perfection is unfeasable.
Then you would have to do the same process for WWF No Mercy, somehow combine the
two games, and work from there, running into the limits of the Nintendo 64 hardware.

While I would love to attempt this, I can not reasonably spend more time on
a full reverse engineering effort if I want to reach new goals.
Therefore, solutions have to exist outside of hacking the N64 AKI games...
and I don't mean hacking the Def Jam or Kinnikuman/Ultimate Muscle games.

I can't give details yet, but some people are aware of what I'm up to.
There's a large chance I'll fail, like what happened with the original version
of this hack ("VPW2000"). Recreating the world from scratch is not an easy task.

However, if you are still interested in hacking the N64 AKI games,
VPW Studio is being worked on. Certain people who I trust already have
it and have managed to do great things, even with incomplete versions.
There is no planned release date at the moment, sadly, but if you're working
on a project that could use it, let me know and I *MIGHT* throw you a copy.

-freem
July 31, 2019
