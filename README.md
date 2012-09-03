jQuery Search
====================
By: Spencer Neese [https://github.com/th3uiguy/](https://github.com/th3uiguy/)   
Version: 1.5   
Requires: jQuery UI 1.7+ and jQuery 1.3.2+   
Demo: [http://jsfiddle.net/th3uiguy/TDaHj/](http://jsfiddle.net/th3uiguy/TDaHj/)   
Git: [https://github.com/th3uiguy/jquery-search.git](https://github.com/th3uiguy/jquery-search.git)   


Description
---------------------
Converts an input into a search field that can run off a normal form submit or AJAX load.




Example
---------------------
```js
$('input#search').search({
	placeholder: "Search Here"
});
```



Options
---------------------
#### placeholder ####
*type: String*   
*default: Keyword Search*

#### submitButton ####
*type: jQuery Object or Selector*   
*default: 'input[type=submit], button[type=submit]'*

#### autoSubmit ####
*type: Boolean*   
*default: false*

#### delay ####
*type: Integer*   
*default: 300*

#### onClear ####
*type: function*   
*default: null*

#### onSubmit ####
*type: function*   
*default: null*




<br /><br />
Copyright (c) 2012, Spencer Neese [https://github.com/th3uiguy/](https://github.com/th3uiguy/)   
Dual licensed under the 
[MIT](https://raw.github.com/th3uiguy/jquery-search/master/MIT-LICENSE.txt) or 
[GPL](https://raw.github.com/th3uiguy/jquery-search/master/GPL-LICENSE.txt) Version 2 licenses. 
