# vue-arg
https://kudokk.github.io/vue-arg/dist/

## function

- Search
  - area search
  - freeword search
- Pagination
  - choose page from 5pages
  - 10page forward,back
- Multi device(responsive)
  - pc
  - sp
- Add application to home

## development overview

- HTML: ejs
- CSS: CSS in js
- JS: babel
- Build: webpack
- Framework: Vue
- State management: Vuex
- API: GURUNAVI WEB SERVICE
  - restaurantAPI
  - prefAPI
  - areamAPI
- Asynchronous: axios
- Test: jest
- ServieWorker: sw.js
- Add application to home: manifest.json

## development detail

### Vue

### jest as test

### Webpack plugin and setting

#### plugin  

- HtmlWebpackPlugin
- VueLoaderPlugin
- OfflinePlugin
  - function: provide an offline experience for webpack projects
- MiniCssExtractPlugin
  - function: separate css file from js
- optimize-css-assets-webpack-plugin
  - function: minimize css file

#### setting  

- resolve(extensions, alias)

``` json:webpack.config.js
{
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            scss: path.resolve(__dirname, 'src/scss')
        }
    }
}
```

extensions:  import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)  
(which is what enables users to leave off the extension when importing)  

alias: import時などに、相対パスの代わりに、パスのaliasを登録・使用できる  
(Create aliases to import or require certain modules more easily. For example)  

参考: <https://webpack.js.org/configuration/resolve>

- vue-loader's options  

``` json:webpack.config.js
{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
        loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
        }
    }
}
```

loaders: *.vue files内の custom blocks(<\style>などの言語ブロック)のlangに対応できるようになる  
(Allows custom blocks in a .vue file that can have custom loader chains applied to them)  
参考: <https://vue-loader-v14.vuejs.org/ja/options.html#loaders>  

- OfflinePlugin

``` json:webpack.config.js
{
  plugins: [
    new OfflinePlugin()
  ]
}
```

``` js: index.js
import OfflinePlugin from "offline-plugin/runtime";
OfflinePlugin.install();

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```
参考: <https://github.com/NekR/offline-plugin/blob/master/docs/caches.md>

- MiniCssExtractPlugin  

``` json:webpack.config.js
{
  module: {
    rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}
```

jsファイルに含まれたcssを別ファイルとして抽出する  
(This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.)  
参考: <https://github.com/webpack-contrib/mini-css-extract-plugin>  

- OptimizeCSSAssetsPlugin

``` json:webpack.config.js
optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin]
}
```

cssファイルの最適化・最小化を行う  
(This plugin will optimize \ minimize the CSS (by default it uses cssnano but a custom CSS processor can be specified))  
*ベンダープレフィックス要確認  
参考: <https://github.com/NMFR/optimize-css-assets-webpack-plugin>
