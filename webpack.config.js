var webpack = require('webpack');

var argv = require('yargs').argv;
var path = require('path');
var parallel = require('parallel-webpack');
var isProduction = argv.build ? true: false;
var StringReplacePlugin = require("string-replace-webpack-plugin");
var open = require("open");


var baseOptions = {

};
var variants = isProduction?{
    target: ['commonjs2', 'var','var.min']
}:{
    target:['var']
};


function createConfig(options) {
    if (options.target === 'var.min') {
        options.target ='var';
        options.min=true;
    }else {
        options.min=false;
    }
    var ignoreNamedExports = StringReplacePlugin.replace({
                replacements: [
                    {
                        pattern: /export function /ig,
                        replacement: function (match, p1, offset, string) {
                            return 'function ';
                        }
                    }
                ]});
    plugins=[];
    plugins.push(new StringReplacePlugin());
    if (isProduction) plugins.push(new webpack.optimize.UglifyJsPlugin({
        output:{beautify: !options.min}
    }));

    return {
        debug: !isProduction,
        devtool: options.min? false: isProduction? "source-map" :'eval',
        entry: {
            'mkg-share': './src/mkg-share.js'
        },
        module:{
            loaders:[
                {test:/\.scss$/, loaders:['style','css','autoprefixer?browsers=last 2 version','sass']},
                {test: /mkg-share\.js/,loaders:['babel']},
                {test: /\.svg$/,loaders:['html','image-webpack']},
                {test: /\.min\.js$/,loaders:['uglify']}
            ]
        },
        devServer:{
            contentBase:'demo/',
            open:true
        },
        plugins:plugins,
        output: {
            libraryTarget: options.target,
            library: "mShare",
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: `[name]${options.target=== 'commonjs2'? '.npm':''}${options.min? '.min':''}.js`
        },
        imageWebpackLoader: {
            svgo:{
              plugins: [
                {
                  removeStyleElement : true
                },
                {
                    removeAttrs:{
                        attrs: ['id', 'class']
                    }
                },
                {
                    addClassesToSVGElement:{
                        className:'mshare-item-icon'
                    }
                }

              ]
            }
          }
      };
};
module.exports = parallel.createVariants(variants, createConfig);
// open('http://localhost:8080/');
