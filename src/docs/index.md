# Angus Macminn Portfolio Documentation

## Contents
1. [HTML](#html)
2. [CSS](#css)
3. [JS](#js)
4. [Resources](#resources)

### HTML
```html
<video playsinline class="wv1" autoplay loop muted>
    <source src ="//cdn-cf-east.streamable.com/video/mp4/anit45.mp4?Expires=1708207964119&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=SlEuuqq6aCBxP3x7x0nq8SJjUjCW~Zq-E02-dVCdneF~X64d~xNInC0i2X4WphSdTC2bv8Z4VEE7tlK3K-p0Ly2iDqlu7EYnFWbdDqt8IO4XC8MVV4qBzXwpbQrnGC24G72m9pButrJl87-vem3eIaB5gh5r0f84FkEtVCzNak0mDZacEEjz~MBDoys0eoki~e3masYBlPOZZhMvS0pLud4~BBCVYzzDkACVc3c61Nho54GLu~c6WodcriepAySXlZLYA68sRTMOE78m-0eClgBQdwL-aDfk20lKl-EkC7mFzmJbUhrGXtQkqVF8BB7ExUR~2irTEr0wpqj6kAChig__">
    Your browser does not support mov videos, change browsers!
</video>
```
I decided to host videos online and use a direct link to attach to the source tag.

Tha way, we can acheive a high quality and good performance on all devices.
### CSS
1. Two parts page
```css
display: grid;
grid-template-columns: 1fr 1fr;
```
We use `grid-template-columns: 1fr 1fr;` to declar how many columns will there be, for our case it's two columns.

You can learn more about micro-layout responsivness [here](https://web.dev/learn/design/macro-layouts?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fdesign%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fdesign%2Fmacro-layouts)

2. Values
```css
.weather-content {
    display: block;
    width: 100%;
}
```
To have responsive spcaes I decided to use `%, vh, vw` instead of `px` that is only assigned to fixed value.
To have responsive fonts I decided to use `em, rem` instead of `px`.

To lean more about responsive fonts you can check [here](https://web.dev/learn/design/typography?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fdesign%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fdesign%2Ftypography)

### JS
```js
function resizeCamera() {
        if (window.innerWidth <= 700 && window.innerWidth > 510) {
            camera.position.z = 2.2
        } else if (window.innerWidth <= 510 && window.innerWidth > 390) {
            camera.position.z = 3.5
        } else if (window.innerWidth <= 390) {
            camera.position.z = 4.5
        } else {
            camera.position.z = 0
        }
    }
```
To make three.js scene responsive, I positioned the camera z position based on the width.

```js
if (window.innerWidth >= 1600) {
    ContactMeText.position.y = -41
}
```
I also decided to add specific condition when it comes to positioning some 3D texts based on width.

### Resources
To learn more about Website responsivness you can visit [web.dev](https://web.dev/learn/design#article-https://web.dev/learn/design/welcome)
