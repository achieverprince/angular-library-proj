# angular-library-proj
Sample Angualr(4) Library Project 

**How to Take a clone and buils a angular library project:** 

Just take clone/download this project.

Add needed 
Model, Service, Component into your library Project.

Build and test if there is any dependency issue.

You also need to add the class references for all the newly created files in "index.ts" files in all folders "service", "model", "component" etc.

**Publishing / Exposing your library project for use:**

You can expose your angular library project as a npm module in following ways

1.Through https://www.npmjs.com/package

Read here (https://docs.npmjs.com/cli/publish)

2.Through github repository

3.Through SVN repository

**Consuming Library Project:** 

you can consume all the above mentioned methods through npm install

(https://docs.npmjs.com/cli/install)

GIT Ex : 

    npm install "https://github.com/achieverprince/angular-library-proj.git" --save-dev

    "devDependencies":{
    "angular-library-proj": "git+https://github.com/achieverprince/angular-library-proj.git"
    }

For SVN you may need to use NPM module "npm svn" (https://www.npmjs.com/package/npm-svn)
