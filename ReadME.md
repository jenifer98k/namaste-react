😀 Episode 1

before push code to production 
-----------------------------
=> image optimization 
=> remove comments
=> compress
=> and so many on 


👊create own react production ready app , instead of npm 
👊react make app fast , alot need other need to make fast 

👊 NPM  => https://www.npmjs.com/
👊 NO expand for npm 
👊 NPM Manages packages
👊 npm is stanadard repo for all packages to container



>>>>>>>>>>>>>>> npm init
💟 asks fil the feild 
💟 got new file package.json

🐧 packages => dependency , 
npm take care of versions of packages 

----------------------------
====>Bundler is imp package 
----------------------------
🐧 whole code need to cleaned , compressed , optimized

webpack , parcel , vite

✈️ job of bundler => bundles the app 
✈️ create-react-app => creates webpack in 

✈️ parcel => bundler 
best library to ignite our app

any depency or package 
>>>>>>>>>>>>>>✈️npm install depencyname
>>>>>>>>>>>>>>✈️npm install -D parcel 

-D => 2 types od dependency 
1. dev     => development phase
2. normal 

fetch parcel from npm

npm install -D parcel 
check in package.json
"parcel": "^2.12.0"   => ^=> carret ~tilde


version => 2.12.0 
if 2mrow {
    new version released 
    if (^) {
         new version released  will be updated(minor version)
    }
    else if(~){
        major version only installed 
    }
}

when install parcel another file add package.lock.json

//40 mins vedio over 

------------------
package lock .json => locks the  latest version (keeps record of it )
  "parcel": "^2.12.0" shows exact version of parcel installed // exact version 

package.json => shows updated version // keeps approx version 


 "integrity": "sha512-9DNKPDHWgMnMtqqZIMiEj/R9PNWW16lpnlHjwK3ciRlMPgjPJ8+UNc255teZODhX0T17GOzPdGbU/O/xbxVPzA==",

 working on local but not on production ???? why 

 to avoid that package.lock.json get exact dev machine code =>=>=> give production 


node modules =>
=> containes all code fetch from npm 
=> it is like data base of dependency 
=> it is very heavy 

parcel install => with all why many folders why , transitive dependency 
parcel cannot work on its own so with that it also installed many dependcy , other packages 
parcel usees all the libraries 

every dependency has its package.json , lock.json , depdency 


put node modules in git => wrong 
put in gitigore

package.lock and pagake.json put in git =>/// ok 

👋 if pakage , package lock {
    we can recreate the node modules 
}

ignite our app
>>>>>>>>>>>>>> npx parcel init index.html

>>>>>>>>>>>>>>>>>>npx parcel  index.html(THIS IS NOT GOOD WAY )

http://localhost:1234/ this host out app to the server 
PARCEL CREATED SERVER HERE 
parecel goes to index.html and create server
-----
NPX 
-----
FOR INSTALL NPM 
FOR EXECUTION  PACKAGE NPX 

CDN link for react is not good way 





Server running at http://localhost:1234 parcel give server 
http://127.0.0.1:5500/index.html this is not right way 


npx parcel index.html
NPM => CALLING code of npm 
NPX => execute package

npx parcel index.html => executed parcel 

index.html is source => build devlopment => host 


cdn link => inject react or npm n get react 

=>cdn links preferrred way to bring react in your project ????
it make costly operation 
.
=>install like npm ite better ()

cdn content even thought react updates 
better install it as package 

install react 
>>>>>>>>>>>>>>>> npm install react 
>>>>>>>>>>>>>>>>npm  install react-dom
>>>>>>>>>>>>>>>>npm  i react-dom (small version )

now got and react dom install 

check 
------
 >>>>>> npx parcel index.html

 in console 
 "error " react not defined


 when given import react and react dom 
 error => 🚨 @parcel/transformer-js: Browser scripts cannot have imports or exports.

 in html injected in html , it treates react and react dom import as script file 

 normal js dont have imports 


 we need this import , we need to tell it is module not script file not noraml broswer file 


 error 
 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  C:\Users\jenifer\Desktop\namaste-react\1-inception\app.js:1:1
  > 1 | import React from "react";
  >   | ^^^^^^^^^^^^^^^^^^^^^^^^^^
    2 | import reactDOM from "react-dom"
    3 |

  C:\Users\jenifer\Desktop\namaste-react\1-inception\index.html:10:5
     9 |
  > 10 |     <script src="app.js"></script>
  >    |     ^^^^^^^^^^^^^^^^^^^^^^^^^ The environment was originally created here
    11 | </body>
    12 | </html>

  💡 Add the type="module" attribute to the <script> tag.
  📝 Learn more: https://parceljs.org/languages/javascript/#classic-scripts

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  after this =>{<script type="module" src="app.js"></script> so herre react from npm not cdn 
  
  react is from npm 

  return 

  (
    "error"
   You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
Connection to the HMR server was lost
  )
  }




  if some changes in ui {
    no need to refresh and see, live load all 
  }

  # parcel
  => dev build 
  => Local server
  => automatic refresh (HMR) => HOT MODULE REPLACEMENT
  => File watching algorithm - by c++(parcel keeps tracks on very file changes )
  => CACHIMG - FASTER BUILT  (Built in 55ms for every save)  =>
         GO TO PARCEL CACHER FOLDER =>BINARY FILE =>
          => IF (NO PARCEL CACHE FOLDER){
            MORE BUILT TIME 
          }
  => IMAGE optimization
  => Minification file (bundler)
  => Compress file 
  => consistant hashing
  => code splitting 
  => Diffrential Bundling (all  browser reach/ works smooth )
  => Diagnostic (good error , better error suggession)
  => HTTPS
  => tree shaking (remove unused code of  you )
  Go to [Parcels.org](https://parceljs.org/) => read more 
  => diffrent dev and production  bundle 
          >>>>> npx parcel build index.html 

          ERROR {
            "description": "this is namaste class",
  > 5 |   "main": "app.js",
  >   |           ^^^^^^^^ Did you mean "app.html"?
    6 |   "scripts": {
    7 |     "test": "jest"
          }
          //"main": "app.js",=> JUST REMOVE IN PACKAGE  JSON 
          // 




>>>>>>>>>>>>>>>>> npx parcel build index.html{
  dist\index.html               262 B    578ms
dist\index.8dbf820c.js    138.98 KB    317ms
}
        
 
(!dist){
 takes more time to load 
}
  (dist) {
    index.html code in single line 
    {
      main file(production ready code for your app) {
 dist\index.html               262 B    578ms
dist\index.8dbf820c.js    138.98 KB    317ms(search vanakam , you will see compressed js )
      }
    }
  }

parcel , dist , npm all are tempory uninstall reinstall 
=> npx parcel index.html
=> 