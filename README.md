# anydir.github.io
Source files and built versions of the ⇄ANYDIR wiki.

## Layout

* Root is the built version

* Within ``source/`` is the MD files that are used for building.

## Reserved directories

Please do not attempt to create markdown files in the following directories:

* ``source/template`` - This will attempt to either overwrite or place files in the build template directory.

* ``source/source`` - This will put html files in the source folder.

These by default are ``.gitignore``'d, but I have no doubt someone at some point might decide to PR to them anyway.

## Formatting for source files

The source file structure is pretty simple, but for those who need it, here's a breakdown:

* ``source/`` builds to the root of the page, ie. ``source/index.md`` is equivalent to ``https://anydir.github.io/index.html``

* Files named ``index.md`` are converted straight to ``index.html`` in their directory.

* Files not named ``index.md`` are moved to a subdirectory and are made ``index.html`` of that, for instance:

  * ``subdir.md`` > ``subdir/index.html`` (As so it can be accessed at ``subdir/``)
  
  * ``special/subdir.md`` > ``special/subdir/index.html``
  
  * ``special/index.md`` > ``special/index.html`` (As it's named ``index.md``)

## Current contributors

This is a list of contributors that have made major efforts towards the wiki or are part of the ANYDIR organisation:

* [@LavenderTheGreat](https://github.com/LavenderTheGreat)
* [@MatteoGodzilla](https://github.com/matteogodzilla)
* [@shockdude](https://github.com/shockdude)
