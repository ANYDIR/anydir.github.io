# Installing Custom Songs in DJ Hero 2

Assuming you already have a jailbroken/modded console or an emulator set up, and all the DJH2 files extracted onto your PC.

Available customs: [DJ Hero Customs Spreadsheet](https://docs.google.com/spreadsheets/d/12-2cq5ghomO-UDt1xWEqXLt4\_f0gP1m7G4o-h4HW1\_c/)

## Tools needed

Notepad++: [notepad-plus-plus.org](https://notepad-plus-plus.org/)

djh\_text\_csv\_convert: [shockdude/djhtools](https://github.com/shockdude/djhtools/releases/tag/djh\_text\_csv\_convert\_v0.41)

## Formatting TrackListing.xml for easier editing

This is a one-time step.

* Locate TrackListing.xml and **make a backup**
  * TrackListing.xml location: [Wii, PS3, X360]/Audio/Audiotracks/TrackListing.xml
* Open TrackListing.xml in Notepad++
* Go to Plugins > Plugins Admin
* Click the checkbox next to “XML Tools”, then click Install. Click “yes” when asked.
* When Notepad++ reopens, go to Plugins > XML Tools > Pretty print (XML only - with Line Breaks)
* The file should become much easier to read.
* Save TrackListing.xml

## Installing the Custom

A custom should include the Song Folder(s), "Info for TrackListing.xml", and "Info for TRAC.csv."

See the README.txt included in the custom for more info.

### Setting up the Audiotracks folder

* Navigate to the Audiotracks folder
  * [Wii, PS3, X360]/Audio/Audiotracks/
* Copy the custom's Song Folder into the Audiotracks folder.
  * The Song Folder should contain files like "DJ.fsb" and "DJ\_Expert.xmk".
* Open TrackListing.xml in Notepad++
* Open the custom's "Info for TrackListing.xml" in Notepad++, and copy the contents into TrackListing.xml.
  * Between the first `<Track ...>` and the last `</Track>`. Don't copy the `<TrackList>` tags.
  * TrackListing.xml location: [Wii, PS3, X360]/Audio/Audiotracks/TrackListing.xml in Notepad++
  * A good place is at the top of the file, between `<TrackList>` and the first `<Track ingame="true" ...` line.

### Setting up the Text folder

* Navigate to the Text folder
  * [Wii, PS3, X360]/Text/
* If you haven't done so already, set up djh\_text\_csv\_convert
  * Save djh\_text\_csv\_convert.exe to the Text folder
  * Run djh\_text\_csv\_convert.exe, it should spit out several CSV files.
* Open TRAC.csv in Notepad++
  * **DO NOT OPEN THESE FILES IN MS EXCEL**, MS Excel can't save these files properly.
* Open the custom's "Info for TRAC.csv." in Notepad++, and copy the contents into the bottom of TRAC.csv
  * Adding newlines at the bottom of TRAC.csv is ok.
* Save TRAC.csv
* Drag-and-drop TRAC.csv onto djh\_text\_csv\_convert.exe
  * **Don't forget this step** or else the text files won't take effect!

## PS3-only required steps

There are a few additional steps required for PS3 console users, otherwise Customs won't work.

### Rename all files to be upper-case

The PS3 console requires all game filenames to be upper-case or else the game/customs won’t work. Fortunately, this is easily done with a script.

**Warning: Do not run this script outside of the DJ Hero folder. It will rename everything in the folder containing the script.**

Note: Renaming only works properly on NTFS formatted drives. If the script isn’t renaming anything, you’ll need to move your game files to an NTFS drive like your internal hard drive.

* Download TO\_UPPER.BAT to PS3\_GAME\USRDIR\
  * [Google Drive](https://drive.google.com/open?id=1ETZe4wT69L1scKskW-4KnLE7o0WycgLd)
  * [Source](https://stackoverflow.com/questions/43992595/recursively-rename-files-and-subfolders-in-a-folder-using-batch-script)
* Run TO\_UPPER.BAT

### Rename the v1.01 patch's TEXT folder

The v1.01 patch for DJ Hero 2 includes a TEXT folder that will override your customized Text strings. For custom strings to work, you'll need to rename the TEXT folder.

* Navigate to DJ Hero 2's Patch folder
  * NTSC: `/dev_hdd0/game/BLUS30526/PATCH/`
  * PAL: `/dev_hdd0/game/BLES00896/PATCH/`
* Rename the `TEXT` folder to something else, e.g. `TEXT_bak`