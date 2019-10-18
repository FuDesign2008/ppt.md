# Vue 中使用 SVG

=====

## [file-loader](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/config/base.js)

-   `vue-cli` 默认
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

=====

1.  安装
1.  修改 webpack 配置
1.  使用

=====

### `npm i -D vue-svg-loader`

=====

### 修改 webpack 配置

```javascript
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

### 使用

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

# [TypeScript](https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript)

```typescript
declare module '*.svg' {
    const content: any
    export default content
}
```

=====

# SVG 按钮

=====

# [按钮状态](https://cloudfour.com/thinks/designing-button-states/)

-   `default`
-   `hover`
-   `disabled`

=====

# SVG 修改颜色

=====

# CSS

### `fill: #FF992C`


=====

```html
<template>
    <div class="component-name>
        <svg-camera
          class="svg-camera"
        />
    </div>
</template>

<script>
    import SvgCamera from './path/to/svg-camera-file.svg'

    export default {
        components: {
            SvgCamera,
        }
    }
<script>

```

=====

```scss
.svg-camera {
    $normal-color: #818998;
    $hover-color: #374151;
    $disable-color: #eef0f2;
    path, g, rect {
        fill: $normal-color;
    }
    &:hover {
        path, g, rect {
            fill: $hover-color;
        }
    }
    &.disabled {
        path, g, rect {
            fill: $disable-color;
        }
    }
}
```

=====

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg width="21px" height="21px" viewBox="0 0 21 21">
    <title>ic_uploading</title>
    <desc>Created with Sketch.</desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-524.000000, -610.000000)" fill="#33A3FF">
            <g id="mesg" transform="translate(367.000000, 131.000000)">
                <g id="作业图片" transform="translate(0.000000, 440.000000)">
                    <g id="Bitmap" transform="translate(117.000000, 0.000000)">
                        <g transform="translate(40.000000, 40.000000)">
                            <path
                                d="M10,7.42104262 C11.6574911,7.42104262 12.9999749,8.74004002 12.9999749,10.3684422 C12.9999749,11.9967457 11.6574911,13.3157678 10,13.3157678 C8.34250893,13.3157678 7.00002515,11.9968445 7.00002515,10.3684422 C7.00002515,8.74004002 8.34250893,7.42104262 10,7.42104262 Z M10,14.789475 C12.4826155,14.789475 14.5,12.8073967 14.5,10.3684497 C14.5,7.92942854 12.4826155,5.94742433 10,5.94742433 C7.51751018,5.94742433 5.5,7.92942854 5.5,10.3684497 C5.5,12.8073967 7.51751018,14.789475 10,14.789475 Z M17.2824848,5.94742433 C18.2801127,5.94742433 19,6.24205559 19,7.22205164 L19,15.2240351 C19,16.1968914 18.2801127,17 17.2824848,17 L2.8071868,17 C1.81775662,17 1,16.1968914 1,15.2240351 L1,7.22205164 C1,6.24205559 1.81775662,5.94742433 2.8071868,5.94742433 L4.98254011,5.94742433 C5.28243449,5.94742433 5.59744179,5.43141199 5.69518533,5.1590893 L6.24996228,3.7368252 C6.3401368,3.4569675 6.70015591,3 7.00002515,3 L12.9999749,3 C13.2999447,3 13.6525959,3.4569675 13.7500377,3.7368252 L14.3949137,5.10011858 C14.4923304,5.37997628 14.8149319,5.94742433 15.1148262,5.94742433 L17.2824848,5.94742433 Z"
                            ></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
```

=====

# QA

参考

-   [引子](https://gitlab.corp.youdao.com/homework/hw-web/merge_requests/576/diffs)
-   [GitHub - visualfanatic/vue-svg-loader: 🔨 webpack loader that lets you use SVG files as Vue components](https://github.com/visualfanatic/vue-svg-loader)
-   [ Change Color of SVG on Hover | CSS-Tricks ](https://css-tricks.com/change-color-of-svg-on-hover/)
-   [Designing Button States - Cloud Four](https://cloudfour.com/thinks/designing-button-states/)
