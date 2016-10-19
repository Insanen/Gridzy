![alt text](gridzy.png)

# Grid like a bear with Gridzy.
Super Fresh & LightWeight CSS Grid Powered By CSS3. To produce the Stylesheets we used SaSS, along with Compass and Grunt.

### Install
- Download/Clone Project and make sure to upload `src/gridzy.min.css` on your project dependency folder.
- Include it on your html `<head>` by adding `<link rel="stylesheet" href="src/gridzy.min.css">`

### Usage
- Range of Columns from 1 to 12.
- Use the HTML markup to get the columns started.
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

Insanen Solutions, packed this with three most used colors for your convenience.

Light Tones: `ndanger-li`, `ninfo-li`, `ngray-li`

Darker Tones: `ndanger`, `ninfo`, `ngray`

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
