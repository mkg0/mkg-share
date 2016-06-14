# mkg-share
Easy way to add costumizable social share buttons to website including facebook, twitter, google plus, reddit, pinterest, linkedin, whatsapp, sms and e-mail. It auto detects mobile browsers and displays sms and whatsapp share buttons.

[![npm version](https://badge.fury.io/js/mkg-share.svg)](https://badge.fury.io/js/mkg-share)
[![Bower version](https://badge.fury.io/bo/mkg-share.svg)](https://badge.fury.io/bo/mkg-share)


It's easy to use and pure js. if you prefer native apis, you can use native share buttons with switching one property.

# why should i use it?
1 - Social media icons based on inline svg! so you can easly change the visual style (or animate).  
2 - No need extra css or other asset files. just require 'mkg-share'.  
3 - Costumize share details easly from assigned element's attributes.  
4 - You don't need to update for changed social media logos and colors. Just keep up to date.  
5 - Used originally brand guides.  
6 - Auto detect social media meta datas from page. If it doesn't exist using title and desc meta tag. (hey you can still change from attr)
7 - If you are a front-end developer you can easily build your ui through incoming social share design from your designer.  

## Views

#### default view
![default view](https://raw.githubusercontent.com/mkg0/mkg-share/master/demo/assets/1.jpg)
#### pane mode
![default view](https://raw.githubusercontent.com/mkg0/mkg-share/master/demo/assets/3.gif)
#### native buttons are also optional
![default view](https://raw.githubusercontent.com/mkg0/mkg-share/master/demo/assets/4.jpg)


## Install
install with npm
```
npm install mkg-share --save
```
or install via bower
```
bower install mkg-share --save
```
or you can get the [latest release](https://github.com/mkg0/mkg-share/releases) of mkg-share from repo

import script file
```html
<script src="mkg-share.min.js"></script>
```

or just require it
```js
    //Commonjs way
    var mShare = require('mkg-share');
    new mShare('#targetDiv');

//es way
    import mShare from 'mkg-share';
    new mShare('#targetDiv');
```

## Styling

mshare-item classed item has color property. So you can use it with `currentColor` at child nodes. Here there are some example:

#### custom style sample 1
![custom style1]()
```scss
.mshare__container .mshare--expanded{
    .mshare-item{background: transparent; // Eaech custom social share button
        .mshare-item-text{color:#aaa;font-weight: bold;margin-left:5px;}  // text section of share button
        .mshare-item-icon{fill:#aaa;} // icon section of share button => its assigned to svg directly
        &:hover{
            .mshare-item-text, .mshare-item-icon{color:currentColor;fill:currentColor;}
        }
    }
}
```

#### custom style sample 2
![custom style2]()
```scss
.mshare__container .mshare--expanded{
    .mshare-item{background: transparent;border:1px solid currentColor;border-radius: 50%;padding:0;text-align: center;;width:40px;height:40px; // Eaech custom social share button
        .mshare-item-text{display:none}  // text section of share button
        .mshare-item-icon{fill:transparent;stroke:currentColor} // icon section of share button => its assigned to svg directly
        &:hover{background: currentColor;
            .mshare-item-text, .mshare-item-icon{color:#fff;fill:#fff;}
        }
    }
}
```

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


##### HTML Layout
```html
<div id="targetElement" class="mshare_container">
    <div class="mshare mshare--expanded mshare-nonative">
        <a href="#share" class="mshare-item mshare-item--popup mshare-item--facebook">
            <svg class="mshare-item-icon">#inlinesvg</svg>
            <span class="mshare-item-text">#Text</span>
        </a><!-- a social share item  -->
        ...
    </div><!-- final content after plugin triggered -->
</div><!-- targeted Element -->
```

##### CSS/SCSS Layout

```css
.mshare__container .mshare--expanded{
    .mshare-item{ // Eaech custom social share button
        .mshare-item-text{}  // text section of share button
        .mshare-item-icon{} // icon section of share button => its assigned to svg directly
    }
}
```

```css
.mshare__container .mshare--expanded {} /* container of buttons */
.mshare__container .mshare--expanded .mshare-item {} /* Eaech custom social share button */
.mshare__container .mshare--expanded .mshare-item .mshare-item-text {} /* text section of share button */
.mshare__container .mshare--expanded .mshare-item .mshare-item-icon {} /* icon section of share button => its assigned to svg directly */
```


## To do
- add new mode 'sidebar'
- add optional share counts
- add fluid buttons
- add vertical alignment property

## License

The code is released under the MIT License.
