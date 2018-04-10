# тест


##### краткий патчноут последнего коммита 
- Добавлено несколько пакетов потому обязательно нужно обновить через npm install
- Заменен шаблонизатор HTML с rigger на nunjucks ( теперь подключение кусков файлов нужно делать через 
{% include "partials/footer.html" %}
а не 
//= footer.html
), 
так же можно выключить nunjucks в gulp/config/options.js там в обьекте options.config.nunjucksOn заменить на false тогде html будет собиратьс старым rigger'ом

- Вся сборка теперь собирается в прод с src 
- Добавлен базовый шаблон .htaccess файла 
- Добавлен data.json для возможности разпаралеливания даных и разметки с помощью nunjucks шаблонизатора
- Сборщик вырезает все консоль логи и предупреждения в прод версии, теперь нету необходимости после девелопа чистить консоль логи

## What this gulp can do : 
- compile scss/sass to one css , add prefixes , expand short input by postcss short
- bundle js from modules to one bundled js file , minimize to production stage 
- lint php , minimize to production
- build sprite image prof icons ( one default version and one sprite for retina displays that automaticaly uses by media rule in generated sprite.css )
- minimize images to production stage
- transoprts vendor files from src to dev/ and prod/ witout no need to touch this folders manualy 
- build html from parts and minify to prod stage

---
## Getting Started :
Install NPM packages , from folder where located package.json run in terminal :
`npm i`  
To stard development run in terminal command :
`gulp`  
Default dev url : [http://localhost:9451](http://localhost:9451)

All development are ment to be done in `src` folder, no need to do manipulations in dev or prod 

To build production version run: `gulp prod`

In 'gulp\config\options.js' configurate variable `options.config` accordinly to a preferable build methods 

---
##### Instalation new plugins/packages via npm
Install new package for development :  
`npm i *package-name* --save-dev`

Install new plugin or lib :  
`npm i *package-name* --save-dep`

---
#### Folder structure: 
###### html 
'src/templates' - html pages  
'src/templates/partials' - for repetitive parts like header footer.
###### styles 
'src/style' - main compiled file  
'src/style/vendor' - non changable css from libs, reset.css etc.  
'src/style/partials' - scss for pages, repetitive parts like buttons, header, footer    
'src/style/base' - scss with basic template , scss variables of colors, fonts, media-width variables
###### js 
'src/js' - main compiled js files  
'src/js/vendor' - lib js files  
'src/js/modules' - module js parts exported to main js file(s)  
###### media elements
'src/img' - images , idealy there no images except folders  
'src/img/svg' - svg images   
'src/img/sprite' - png for sprite image   
'src/img/ui' - ui images like arrows, buttons, dropdown arrows (idealy all that staff take in sprite)   
'src/img/content' - content images, like backgrounds, images   
'src/img/favicon' - favicon image(s)  
'src/vendor' - for media files like videos, pdf, docs etc. Everything that goid to dev/prodbut wont be compressed or optimised via gulp.   
'src/fonts' - all fonts
###### php
'/src' - all php linted and minify to prod from there 

---
##### HTML Template


To include html partial  ( for example footer ) , insert in html next line of code `{% include "partials/footer.html" %}`  
###### old method if nunjucks off in config
To include html partial  ( for example footer ) , insert in html next line of code `//= footer.html`

---
##### Sprite usage instruction :
source sprite images should be in 'src/img/sprite' directory 

For retina support should be 2 versions of image , for examlpe :   
'example.png' and 'example@2x.png' with '@2x' sufix for retina display. 

To use sprite in development in html add class .icon-example to element or in scss @export .icon-example

---

![Image of hedgehog](http://res.cloudinary.com/ds3tq91lc/image/upload/v1510330451/fav_icon_180x180_white_i0smni.png)

###### Hedgehog be with u