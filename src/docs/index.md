# Angus Macminn Portfolio Documentation

## Contents
1. [HTML](#html)
2. [CSS](#css)
3. [JS](#js)
4. [Github](#github)
5. [Resources](#resources)

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

### Github

![Capture d’écran 2024-02-20 165241](https://github.com/angusmacminn/angus_macminn_portfolio/assets/99765449/17aef4fd-2460-49f9-b1bf-c3f89242eb5a)

![Capture d’écran 2024-02-20 165613](https://github.com/angusmacminn/angus_macminn_portfolio/assets/99765449/74a29157-645c-4889-918d-9896a1f229fd)

`git clone` plus the url of repository we copied in our case it's `https://github.com/angusmacminn/angus_macminn_portfolio.git`.

After cloning the repository we will be directed automatically to main branch.

![Capture d’écran 2024-02-20 170007](https://github.com/angusmacminn/angus_macminn_portfolio/assets/99765449/a3a4f687-88ea-4090-bda9-ecbfee24c3c0)

Now we can edit the code and save it then apply these commands in order.
1. `git add .`
2. `git commit -m "Message"`
3. `git push`

We can also make a new branch to edit the code so it doesn't impact source code till we merge the pull request.

![Capture d’écran 2024-02-20 170247](https://github.com/angusmacminn/angus_macminn_portfolio/assets/99765449/b861607c-ee32-4591-9cc8-8a62180768c7)

After creating the issue we will click on create a branch specific for that issue.

![Capture d’écran 2024-02-20 170445](https://github.com/angusmacminn/angus_macminn_portfolio/assets/99765449/af917a84-5440-4f78-a147-0e3c5e534d3d)

After creating the new branch we will copy the commands and past them on terminal.

![Capture d’écran 2024-02-20 170639](https://github.com/angusmacminn/angus_macminn_portfolio/assets/99765449/0659be66-1140-4731-91ef-ba2df82a63be)

We can see the we are on a new branch on terminal.

![Capture d’écran 2024-02-20 170805](https://github.com/angusmacminn/angus_macminn_portfolio/assets/99765449/9a165052-6aa5-4de7-85f1-043a7d790ace)

Now we can edit code without affecting the main branch, and after finishing our changes we will push them using the 3 commands I shared earlier.

Then we will have to merge the pull request on github.

After that we can visit the repository online and we will fin this notification. then we will click on `Compare & pull request`.

![Capture d’écran 2024-02-20 171113](https://github.com/angusmacminn/angus_macminn_portfolio/assets/99765449/2f9ac3df-ffd4-49a9-a75d-240399f20b5d)

After that we will be directed to another page where will will select `create pull request` then directed to a second page where we will select `merge pull request`.




### Resources
To learn more about Website responsivness you can visit [web.dev](https://web.dev/learn/design#article-https://web.dev/learn/design/welcome)
