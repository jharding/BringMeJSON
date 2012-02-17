#BringMeJSON

##What does it do?
Sometime client-side code needs to access JSON on a page load for bootstrapping purposes. BringMeJSON provides an easy way of doing just that.

##How to use BringMeJSON
###Step 1: Load BringMeJSON

```html
<script type='text/javascript' scr='bmj.js'></script>
```

###Step 2: Embed your JSON

```html
<script name='cities' type='application/json'>
{
    "Ann Arbor": {
        "state": "MI",
        "yearFounded": "1824",
        "population": 113934
    },
    "San Jose": {
        "state": "CA",
        "yearFounded": "1777",
        "population": 945942
    }
}
</script>
```

###Step 3: Access your JSON

```javascript
var cities = bmj.cities;
console.log('Ann Arbor was founded in ' + cities['Ann Arbor'].yearFounded + '.');
```
