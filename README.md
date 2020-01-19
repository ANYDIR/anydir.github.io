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
