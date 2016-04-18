# mkg-share
easy way to add social share buttons to website including whatsapp, sms, e-mail. It's easy to use and vanilla js. You can costumize easly.

## Install
Get the latest release of mkg-share from repo or install with bower cli => `bower install mkg-share`

import the stylesheet to head of the page
`<link rel="stylesheet" href="mkg-share.min.css" />`

Import the script file
`<script src="mkg-share.min.js"></script>`

## Usage

expanded share buttons without texts:
```js
new mShare('#demo1',{text:false});
```

expanded share buttons:
```js
new mShare('#demo2',{});
```

social share buttons with assigned pane:
```js
new mShare('#demo3',{style:'pane',googleplus:false,reddit:false,pinterest:false});
```

assign seperated share data with html attributes:
```js
new mShare('#demo4',{style:'pane'});
```

# License

The code and the documentation are released under the MIT License.
