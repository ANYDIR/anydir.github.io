# Intro to Charting

**WIP**

DJ Hero 2 is the current standard for DJ Hero charting, as it has more useful chart and gameplay features compared to DJ Hero 1, and it easily supports adding custom songs.

Though not required, a setup for playing custom DJ Hero 2 songs is highly recommended for testing charts.
See: [Installing custom songs for DJ Hero 2](https://anydir.github.io/guides/installingcustomsongsindjh2/)

For examples of custom charts, see [DJ Hero Customs Spreadsheet](https://docs.google.com/spreadsheets/d/12-2cq5ghomO-UDt1xWEqXLt4\_f0gP1m7G4o-h4HW1\_c/)

## Tools needed

[REAPER](https://www.reaper.fm/download.php)

[REAPER template projects](https://drive.google.com/open?id=1ttK9UGyoVSuLnopUjjXakJd5lm-CJSOZ)

[djh_mp3_to_fsb](https://github.com/shockdude/djhtools/releases/tag/djh_mp3_to_fsb_v1.0)

[Sharktooth](https://github.com/shockdude/Sharktooth/releases/tag/v0.2.2-djh2-vocals)

## Essential videos to watch

These videos will show at a high level how a DJ Hero chart looks and works in REAPER.
The rest of this guide covers more nitty-gritty charting details.

[DJ Hero 2 Chart in REAPER (feat. Put On vs Enuff)](https://www.youtube.com/watch?v=FrTsLmf0S5Y) - covers most charting details.

[DJ Hero 2 Battle Chart in REAPER (feat. Omen vs The Box)](https://www.youtube.com/watch?v=tEokuYXoshQ) - kinda shows how battle mixes work, and other charting details.

[Firestarter Megamix Transition in REAPER](https://www.youtube.com/watch?v=HzpNESt7A_s) - shows how megamix transitions work, plus variable BPM and other charting details.

## Specific charting details

Technical details of all DJ Hero note types: [XMK and FSGMUB](https://anydir.github.io/formats/official/xmkandfsgmub/)

From the REAPER templates, open `djh2_reaper_template.rpp`

* Audio
  * Having 3 separate audio stems is recommended. Make sure they don't peak too much (exceed 0dB volume) when mixed together.
  * If no stems are available, using a single track for all 3 stems is fine too.
    * **Drop the track's volume by -10dB** to avoid peaking when mixing the single tracks together. You can do this in REAPER by right-clicking the Volume dial next to the track name.
  * Add audio to the project by dragging-and-dropping the files into the correct tracks.
* Tempomapping
  * Set the BPM and tempomap before beginning any charting.
  * If your song has variable BPM, add new tempomarkers by right-clicking above the measure markers at the top of REAPER, then click "Insert tempo/time signature marker"
  * Ctrl-click and drag tempomarkers to adjust the beatlines to fit the track.

Open the MIDI editor by double-clicking on the "NOTES" track.

* Chart length limitations
  * No known limit on audio length
  * 2500 event limit in DJ Hero 2 charts (too many = game crash)
  * Unknown limit on crossfades in DJ Hero 2 charts (too many = game crash)
  * Length limitations can be worked around using megamixes.
* Taps and Scratches
  * Regular taps & scratches should be 1/32 in length. Anything shorter can cause playability issues in the DJH2 engine.
  * Scratches faster than 1/32 or unusual scratches should be charted with an anydir scratch.
  * Held taps/scratches are any tap/scratch longer than 1/16 in length.
  * There should be a 1/32 gap between the end of a hold (or anydir scratch) and the next note - a "gap" at the end of the hold. This usually means shortening the hold by 1/32.
  * All scratches must be associated with a scratch zone of the correct color.
  * Held upscratches are playable, but are not recommended as they are ugly to look at.
  * Green taps must not overlap blue scratches. Blue taps must not overlap green scratches. Red taps can overlap with scratches ok.
* Crossfades and Spikes
  * The chart must begin with a center crossfade, and must end with a center crossfade.
  * There must be a continuous chain of crossfades & spikes spanning the entire song.
  * Crossfades and spikes should not overlap.
  * Crossfades that are 1/16 in length or shorter should be a spike.
  * Spikes should usually be 1/32 to 1/16 in length.
  * "Crossfade force center" is a helper note for undercharting for lower difficulties. Any crossfade/spike note that overlaps with "crossfade force center" is ignored and the crossfade lanes will be centered in-game. Not needed for most Expert charts.
  * Don't put green taps/scratches during crossfade blue. Don't put blue taps/scratches during crossfade green.
* Checkpoints, Author, and other TextEvents
  * TextEvents are added to the space below the MIDI notes - just double-click that space.
  * There are multiple types of TextEvents.
    * "Rewind Checkpoints" (aka Section markers) are type "Text event". Ideally they should have a name describing the section. Try to keep most checkpoints 8 measures apart.
    * "Chart Author" is type "Copyright notice". Use it to credit yourself for making a chart!
    * "Chart BPM" is type "Cue". Optional if your BPM is constant, but required if your chart has variable BPM. It should match the BPM you set in the song's tracklisting.xml metadata (which is displayed in the QuickPlay song list).
    * There must be a "Track Name" TextEvent at the beginning called "NOTES". 
* Effects and Euphoria
  * Offical charts use roughly 1 euphoria section for every 50 seconds in a song.
  * If you're not using real stems, only use "effects all lanes"
  * "effects red" works but looks ugly in-game.
  * Set different effect types in the "EFFECT" track.
    * Draw notes on each effect type that fully cover your effect notes in the "NOTES" tracks.
    * shockdude's Effects tier list: flanger > filter > wahwah > stutter > beatroll autoadvance > delay > beatroll > robot > bitreduce > ringmod
* Freestyle crossfades
  * Freestyle crossfade markers should roughly line up with the audio. Refer to official charts for examples.
* Freestyle samples
  * Set the sample to use by right-clicking the note and setting the Note Velocity.
  * More details TODO
* Battle chunkremix
  * For 2P battle charts. Not to be used for single-player charts, else the game will crash.
  * More details TODO.
* Megamix transition.
  * Set the markers of where a megamix song should begin & end.
  * More details TODO.

## Exporting a chart

### Export the audio to MP3

* In REAPER, Ctrl-click and select the audio tracks you want to export.
  * For a single track, just select that one track.
  * For a 3-stem track, select all 3 tracks.
* Go to File --> Render
* Double-check the settings are correct
  * Set "Source" to "Stems (selected tracks)"
  * Set the "Output" directory, and set the "File name:" to `$track`
  * Set "Output Format" to "MP3 (encoder by LAME project)"
  * Under "Output Format",
    * Set "Mode" to "Constant bitrate (CBR)" "Maximum q=0 (slow)
    * Set "Bitrate"
      * For most songs, 320kbps is good.
      * For songs part of a megamix, a lower bitrate like 160kbps is more stable.
* Click "Render" 

### Converting MP3s to FSB

* Move your MP3s next to `djh_mp3_to_fsb.exe`
* Shift-rightclick the empty white space around `djh_mp3_to_fsb.exe`, and click "Open PowerShell Window here" or "Open Command Prompt Window here"
* Type in `.\djh_mp3_to_fsb.exe [greentrack] [bluetrack] [redtrack] DJ.fsb`
  * Where `[greentrack]`, `[bluetrack]`, `[redtrack]` are the filenames of your MP3s
  * e.g. `.\djh_mp3_to_fsb.exe green_track_0.mp3 blue_track_1.mp3 red_track_2.mp3 DJ.fsb`
* Press Enter to create your `DJ.fsb`

### Export the chart

* In REAPER, Ctrl-click both the NOTES and EFFECTS tracks
* Click File --> Export Project Midi...
* Double-check the settings are correct
  * Consolidate Time: Entire project
  * Consolidate MIDI items: Selected tracks only
  * Export to MIDI file: set the output directory
  * Multitrack MIDI file (type 1 MIDI file)
  * Check "Embed project tempo/time signature changes"
* Click "OK"
* Drag-and-drop the exported MIDI file to Sharktooth's `Mid2Mub.exe`. It will create a `fsgmub` file with the same filename as your MIDI
* Rename the file to `DJ_Expert.xmk`. Note the change in file extension from `fsgmub` to `xmk`
  * Filenames for other difficulties are `DJ_Hard.xmk`, `DJ_Medium.xmk`, `DJ_Easy.xmk`, and `DJ_Beginner.xmk`

### Setup tracklisting.xml and TRAC.csv

More details TODO. See any of the custom charts in the [DJ Hero Customs Spreadsheet](https://docs.google.com/spreadsheets/d/12-2cq5ghomO-UDt1xWEqXLt4\_f0gP1m7G4o-h4HW1\_c/) for examples.

## Installing and testing your custom

See [Installing custom songs for DJ Hero 2](https://anydir.github.io/guides/installingcustomsongsindjh2/)