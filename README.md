# gatsby-plugin-facebook-multi-pixels

Easily add Facebook Pixel to your Gatsby site. At this time, 'ViewContent' event is triggered (optionaly) via onRouteUpdate.

## Install
`npm install --save gatsby-plugin-facebook-multi-pixels`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-facebook-multi-pixels`,
    options: [
      {
        dev: false,
        alias: 'pixelA',
        pixelId: 'pixel id here',
        viewContent: true,
        pageView: false,
      },
      {
        dev: true,
        alias: 'pixelB',
        pixelId: 'pixel id here',
        viewContent: false,
        pageView: true,
      },
    ],
  },
]
```
