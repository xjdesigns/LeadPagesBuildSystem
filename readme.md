#Build System

This Build System will work for both existing or new LeadPages&trade; templates. If you are concern that this will overwrite your existing project, don't worry. The following installation script will check if you have an existing 'leadpages-template' folder, if it does, it'll leave your `leadpages-template` alone and just grab the necessary build system files. Otherwise, it'll grab a new skeleton `leadpages-template` for you.

##Installation

1. `cd` into your **root** directory where you have the `leadpages-template` folder
2. `git clone https://github.com/LeadPages/LeadPagesBuildSystem.git`
 * Or download a [zip file here](https://github.com/LeadPages/LeadPagesBuildSystem/archive/master.zip) and unzip to **outside** of `leadpages-template` folder
3. `cd LeadpagesBuildSystem` and run `./install`
5. Done!

##Available Gulp Tasks

1. `gulp` (default) : `connect` & `watch`
2. `gulp concat` : Concatenate files
3. `gulp html` : Minify html & watch with LiveReload
4. `gulp sass` : Compile SASS files and output to `/leadpages-template/css/` folder
4. `gulp less` : Compile LESS files and output to `/leadpages-template/css/` folder
5. `gulp watch` : Watch files, compile SASS, minify html and watch for changes with LiveReload
6. `gulp zip` : Zip up the `leadpages-template` folder for easy upload!
