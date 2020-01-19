# XMK and FSGMUB
FSGMUB is the format for DJ Hero charts devised by Freestylegames (FSG). It consists of a fixed size binary header which says version, the hash, the amount of entries in the chart and the length of the extra string at the end. It then has notes which cover the entire chart and then ends on the extra string.

## General Structure

- Header
    - `version` - int32 number that says the version. (Should be 2)
    - `crc32` - 4 byte hash of everything from byte 8 to the last valid byte. Valid byte refers to any byte that is within the length of the chart defined by entry count and string length, you can get where the final actual byte is from the calculation: `15+(16*entry count)+stringlength`
    - `entry count` - int32 of how many events/notes there are in the chart.
    - `string length` - int32 of how long the final string is
- Notes
    - `note` - 16 byte entry, these can go on forever.
        - `measureposition` - `float`, how many measures the event is in.
        - `type` - `int32`, what type of note it is
        - `length` - `float`, as far as I know, this is the length in measures a note goes on for. Used for holds, long scratches and Effectors.
        - `extra` - `4 bytes`, varies on what the note type is.
- Extra string - Has chart author info and sections.

## Note types

| Type Number | DJ Hero 1 | DJ Hero 2 | Description/Extra Notes | Visual (DJH1) | Visual (DJH2)
| :---------: | --------- | --------- | ----------------------- | :---------: | :---------: |
| 0 | Green Tap | Green Tap | | ⌾ | ⌾ |
| 1 | Blue Tap | Blue Tap | | ⌾ | ⌾ |
| 2 | Red Tap | Red Tap | | ⌾ | ⌾ |
| 3 | Green Scratch Up | Green Scratch Up | Scratch notes must be placed in a Scratch Zone. | 🜂 | ⇑/🜂 |
| 4 | Blue Scratch Up | Blue Scratch Up | Scratch notes must be placed in a Scratch Zone. | 🜂 | ⇑/🜂 |
| 5 | Green Scratch Down | Green Scratch Down | Scratch notes must be placed in a Scratch Zone. | 🜄 | ⇓/🜄 |
| 6 | Blue Scratch Down | Blue Scratch Down | Scratch notes must be placed in a Scratch Zone. | 🜄 | ⇓/🜄 |
| 7 | Green Scratch Any Direction | Green Scratch Any Direction | Scratch notes must be placed in a Scratch Zone. | ⥮ | ⥮ |
| 8 | Blue Scratch Any Direction | Blue Scratch Any Direction | Scratch notes must be placed in a Scratch Zone. | ⥮ | ⥮ |
| 9 | Crossfade Right | Crossfade Right | | ││┌ | ││┌ |
| 10 | Crossfade Center | Crossfade Center | | │││ | │││| 
| 11 | Crossfade Left | Crossfade Left | | ┐││ | ┐││
| 12 | Green Effector | Green Effector | Defaults to Filter if no Effector Type is used before it. | ⛣ | ⛣ |
| 13 | Blue Effector | Blue Effector | | ⛣ | ⛣ |
| 14 | Red Effector | Red Effector |  | ⛣ | ⛣ |
| 15 | Euphoria | Euphoria | | | |
| 16 | Sample Zone | Sample Zone (Configurable) | Sample zones in DJ Hero 2 are configurable using extra data, picking samples defined in the track listing.
| 17 | 🚫 | Freestyle Crossfading Zone | | | |
| 18 | Nothing? | 🚫  | Appears in old/unused DJ Hero charts, maybe a placeholder for an old mechanic that didn't make it into final. | | |
| 19 | | | | | |
| 20 | 🚫 | Green Scratchzone | | | ⥮ |
| 21 | 🚫 | Blue Scratchzone | | | ⥮ |
| 22 | 🚫 | All Lane Effector | | | ⛣ |
| 23 | 🚫 | Force center crossfade | Useful for low difficulty charts. | | │││ |
| 24 | | | | | |
| 25 | | | | | |
| 26 | 🚫 | Battle chart special event | Used for switching players or finishing checkpoints as defined in `ChunkRemix.xml`.| | |
| 27 | 🚫 | Green Crossfade Spike | | | ⧏ | |
| 28 | 🚫 | Blue Crossfade Spike | | | ⧐ | |
| 29 | 🚫 | Center Crossfade Spike | | | ⧏/⧐ | |
| 30 | 🚫 | Megamix Transition | Must be used on a centered crossfade.| | |
| 31 | 🚫 | Crossfade Freestyle Marker Green | For clarification: These are presumably the markers which act like waveforms to show when each track is playing or having beats on a freestyle crossfade. | | |
| 32 | 🚫 | Crossfade Freestyle Marker Blue | For clarification: These are presumably the markers which act like waveforms to show when each track is playing or having beats on a freestyle crossfade. | | |
| ... | ... | ... | ... | ... | ... |
| 44 | Nothing? (Chart end?) | 🚫 | Presumably found near the end of some charts. |
| 45 | Nothing? (Chart end?) | 🚫 | Presumably found near the end of some charts. |
| 46 | | | | | |
| 47 | | | | | |
| 48 | Green Scratchzone | 🚫 | | ⥮ | |
| 49 | Blue Scratchzone | 🚫 | | ⥮ | |
| 50 | All Lane Effector | 🚫 | | ⛣ | |
| 51 | Force center crossfade | 🚫 | Useful for low difficulty charts.| │││ | |
| ... | ... | ... | ... | ... | ... |
| `0x05FFFFFF` | 🚫 | Effector Type: Filter | Changes the current effector type.
| `0x06000000` | 🚫 | Effector Type: Beat Roll | Changes the current effector type.
| `0x06000001` | 🚫 | Effector Type: Bit Reduction | Changes the current effector type.
| `0x06000002` | 🚫 | Effector Type: Wah Wah | Changes the current effector type.
| `0x06000003` | 🚫 | Effector Type: Ring Mod | Changes the current effector type.
| `0x06000004` | 🚫 | Effector Type: Stutter | Changes the current effector type.
| `0x06000005` | 🚫 | Effector Type: Flanger | Changes the current effector type.
| `0x06000006` | 🚫 | Effector Type: Robot | Changes the current effector type.
| `0x06000007` | 🚫 | Effector Type: Beat Roll (Auto Advance) | Changes the current effector type.
| `0x06000008` | 🚫 |  Effector Type: Unused (Filter) | Changes the current effector type.
| `0x06000009` | 🚫 | Effector Type: Delay | Changes the current effector type.
| `0x0AFFFFFF` | 🚫 | Charter Name | Extra data is an address pointing to where this is stored. Used on the song select of DJ Hero 2.
| `0x0B000001` | 🚫 | Beat Marker Distance | Extra data is an Int32 defining the amount of microseconds (1/1000th of a millisecond) between each marker, equivalent to 60,000,000 / bpm.
| `0x0B000002` | 🚫 | BPM Change (Unused) | Does nothing, might've been used in development to go near Beat Marker Distance to make it clearer.
| `0x09FFFFFF` | 🚫 | Section/Rewind Checkpoint | Extra data defines the address of which string to use for this section.

## Notes

### DJ Hero 2

DJ Hero 2 (as far as we know) has a note limit of 2500, however it also has Megamixes, which have a limit of 20 songs. We are currently unaware of any limits on Crossfades or Scratch Zones however.

## Further reading

* [https://pastebin.com/Q4ZT9xj2](https://pastebin.com/Q4ZT9xj2) - Original source of which this information was mainly taken from

* [DJHTools](https://anydir.github.io/tools/djhtools/)