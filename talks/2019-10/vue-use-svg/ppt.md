# Vue 中使用 SVG

=====

## [file-loader](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/config/base.js)

-   默认
-   https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/config/base.js

=====

```html
<template>
    <div>
        <img :src="svgFile" />
    </div>
</template>

<script>
    import SvgIcon from './path/to/svg-icon-file.svg'

    export default {
        data() {
            return {
                svgFile: SvgIcon
            }
        }
    }
<script>

```

=====

# [vue-svg-loader](https://github.com/visualfanatic/vue-svg-loader)

### SVG 作为 Vue 组件使用

=====

```javascript
// webpack 配置
module: {
    rules: [
        {
            test: /\.svg$/,
            loader: 'vue-svg-loader',
        },
    ]
}
```

=====

```html
<template>
    <div>
        <svg-icon class="svg-icon" />
    </div>
</template>

<script>
    import SvgIcon from './path/to/svg-icon-file.svg'

    export default {
        components: {
            SvgIcon,
        }
    }
<script>

```

=====
