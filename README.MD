# ⇌ANYDIR

Welcome to the ANYDIR repository! This repository operates *heavily* on branches. These branches are the following:

- ``master`` - What you're probably looking at, this is used for Github Pages and is not made to be PR'd to. (If we could name it better we would)

- ``base`` - This is the base of master, this has resources, style sheets and this readme.

- ``wiki`` - This is the markdown files that get built with [ANYDIR/ANYDIRbuilder](https://github.com/ANYDIR/ANYDIRbuilder). If you want to edit a page, PR to this.

- ``legacy`` - Before the overhaul, this was the file structure, kept for historical reasons.

## Build process

1. Have Python3 installed on your system with the libraries python-slugify and markdown2 installed.

2. Clone ANYDIRbuilder to anywhere of your desire

3. Clone base into a folder next to ANYDIRbuilder

4. Clone wiki into a folder next to ANYDIRbuilder

5. Using python, run ``python3 ANYDIRbuilder/build.py -i wiki -o base``

6. Push base to the master branch of ANYDIR.

7. Wait for Github Pages to build and then done.