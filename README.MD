![alt text](gridzy.png)

# Grid like a bear with Gridzy.
Super Fresh and Lightweight SCSS Grid Powered By Sassy & CSS3. Tech stacks to produce the stylesheets for older and newer versions: SaSS, Grunt & Terminal

### Installation
- Clone Project `git clone https://github.com/Insanen/Gridzy.git`
- Upload folder `src/gridzy.min.css` on your project dependency folder.
- Include it on your html `<head>` by adding `<link rel="stylesheet" href="src/gridzy.min.css">`

### Usage
- Columns Range from 1 to 12 in sizes.
- Use the HTML markup to get the rows started for the columns.
- Create a 1 Column, Single Row

```
<div class="row">
    <div class="column-3">
      This is Column 3
    </div>
</div>
```


- Create a 3 Column, Single Row
```
<div class="row">
    <div class="column-3">
      This is Column 3
    </div>

    <div class="column-3">
      This is Column 3
    </div>

    <div class="column-3">
      This is Column 3
    </div>
</div>
```

### Default Designs

Gridzy is packed with three templates.

#### Colors

##### Light Tones: `ndanger-li`, `ninfo-li`, `ngray-li`

##### Darker Tones: `ndanger`, `ninfo`, `ngray`

- Add Colors to Columns.

```
<div class="row">
    <div class="column-3 ndanger-li">
        Column 1
    </div>
    <div class="column-3 ngray">
        Column 2
    </div>
    <div class="column-3 ninfo-li">
        Column 3
    </div>
</div>
```

### Development / Customization

Gridzy is packed with flexibles functions, that are fully customizable, and we highly recommend building from the tools we have left set for you.

- Compass (Ruby), Ruby Dependencies required for installation, we will utilize this to compile our SCSS.
- Grunt (Javascript), Grunt is utilize has a Task Manager and we will utilize it has well to serve our demo.
-  NPM or YARN, will be utilize to download project dependecies to host the demo site.

### Compass
Source: `http://compass-style.org/`


Compass runs on any computer that has ruby installed.
For more advanced users you may want to install `rvm`.

#### Setting up the ruby environment
If you are on mac, Most likely your mac will include Ruby installed per OS. If this is the case, you might need to use `sudo` in order to overwrite folder with updates.

`$ gem update --system`

same goes for installation... If your having trouble updating, please use `sudo`.

`$ gem install compass`


#### Grunt
Source: `https://gruntjs.com/installing-grunt`

In order to get started, you'll want to install Grunt's command line interface (CLI) globally. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

`npm install -g grunt-cli`

#### NPM
Source: `https://docs.npmjs.com/getting-started/installing-node`


Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

`npm install npm@latest -g`

#### YARN
Source: `https://yarnpkg.com/lang/en/docs/install/`

##### Homebrew
Source: `https://brew.sh/`

You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.

`brew install yarn`

#### Development
After all packages been installed please direct to clone project, and start by downloading NPM/YARN dependencies by doing...

`npm install`

or

`yarn`
