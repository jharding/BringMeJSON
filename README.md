# vertebrae.js

## Introduction

I wrote vertebrae.js so I'd have a clean way of initializing my backbone.js models/collections.  It is very similar to ICanHaz.js, however instead of grabbing templates, it'll grab embedded JSON.

## How to Use vertebrae.js

### Step 1: Include vertebrae.js
```html
<script type='text/javascript' scr='vertebrae.js' />
```

### Step 2: Embed your JSON
```html
<script id='cities' type='text/vertebrae'>
    [
        {
            name: 'Ann Arbor',
            state: 'MI',
            population: 113934
        },
        {
            name: 'San Jose',
            state: 'CA',
            population: 945942
        }
    ]
</script>
```

### Step 3: Retreive your Data
```javascript
var cities = vertebrae.cities;
```
