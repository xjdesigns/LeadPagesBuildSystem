#Build System

##Installation

1. On your **root** directory outside of `leadpages-template` folder
2. `git clone git@github.com:LeadPages/LeadPagesBuildSystem.git .`
 * Or download a [zip file here](https://github.com/LeadPages/LeadPagesBuildSystem/archive/master.zip) and unzip to **outside** of `leadpages-template` folder
3. `npm install`
4. Done!

##Available Gulp Tasks

1. `gulp` (default) : `connect` & `watch`
2. `gulp concat` : Concatenate files
3. `gulp html` : Minify html & watch with LiveReload
4. `gulp sass` : Compile SASS files and output to `/leadpages-template/css/` folder
4. `gulp less` : Compile LESS files and output to `/leadpages-template/css/` folder
5. `gulp watch` : Watch files, compile SASS, minify html and watch for changes with LiveReload
6. `gulp zip` : Zip up the `leadpages-template` for easy upload!
