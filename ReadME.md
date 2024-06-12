Episode 1

before push code to production 
-----------------------------
=> image optimization 
=> remove comments
=> compress
=> and so many on 


create own react production ready app , instead of npm 
react make app fast , alot need other need to make fast 

NPM  => https://www.npmjs.com/
NO expand for npm 
NPM Manages packages
npm is stanadard repo for all packages to container



>>>>>>>>>>>>>>> npm init
asks fil the feild 
got new file package.json

packages => dependency , 
npm take care of versions of packages 

----------------------------
====>Bundler is imp package 
----------------------------
whole code need to cleaned , compressed , optimized

webpack , parcel , vite

job of bundler => bundles the app 
create-react-app => creates webpack in 

parcel => bundler 
best library to ignite our app

any depency or package 
>>>>>>>>>>>>>>npm install depencyname
>>>>>>>>>>>>>>npm install -D parcel 

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






