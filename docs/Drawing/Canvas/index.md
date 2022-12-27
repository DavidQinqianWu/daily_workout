# Canvas

## 教程

### 创建canvas

```js
const canvasDOM = document.createElement('canvas');
canvasDOM.getContext(contextType, contextAttributes);
```

参数说明：contextType 为绘制上下文的类型，类型参数有：

* 2d：用于创建一个 CanvasRenderingContext2D 2D绘制上下文。
* webgl：用于创建一个 WebGLRenderingContext 3D渲染上下文对象。且该类型只支持在实现WebGL版本1的浏览器上可用也就是 OpenGL ES 2.0。
* webgl2：用于创建一个 WebGL2RenderingContext 3D渲染上下文对象。且该类型只支持在实现WebGL版本2的浏览器上可用也就是 OpenGL ES 3.0。
* bitmaprenderer：用于创建一个只提供将 canvas 内容替换为指定ImageBitmap功能的ImageBitmapRenderingContext。

### canvas 绘制图形

在Canvas的绘制中，基本绘制形状主要有：直线、三角形、矩形、圆和圆弧、椭圆、贝塞尔曲线。

#### 直线

`moveTo`设置初始位置, `lineTo`设置终点位置, `lineJoin` 两个线交点位置样式, 等等设置的方法

#### 三角形

`stoke`的时候,需要考虑到最后的点就是第一个点. 而`fill`则不用回到初始点, 直接可以调用`fill()`进行颜色填充

#### 矩形

`strokeRect()` 方法来直接绘制矩形的边框, `fillRect()` 则是可以直接填充一个矩形

#### 圆弧和圆

`arc(x,y,radius,startAngle, endAngle, anticlockwise)`, 角度转弧度的公式为：`弧度 = 角度 * Math.PI / 180`.

#### 绘制图像到canvas

`createPattern(image, type)` 参数为:

* Image 参数可以是一个 Image 对象，也可以是一个 canvas 对象
* Type 为图案绘制的类型，可用的类型分别有：`repeat`,`repeat-x`,`repeat-y` 和 `no-repeat`。

```js
 // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 创建一个 image对象
      var img = new Image();
      img.src = "./image.png";
      img.onload = function() {
        // 图片加载完以后
        // 创建图案
        var ptrn = ctx.createPattern(img, 'no-repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, 500, 500);
      }
    }
```
