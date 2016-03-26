![alt text](gridzy.png)

# Grid like a bear with Gridzy.
Simple CSS Grid for Quick-Projects.

### Install
- Download CSS file from src (gridzy.min.css)
- Include it into your project `<link rel="stylesheet" href="src/gridzy.min.css">`

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

    <div class="column-3 ndanger-li">test</div>
    <div class="column-3 ngray">test 2</div>
    <div class="column-3 ninfo-li">test 3</div>

</div>
```
