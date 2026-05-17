# tachyons-colors 5.3.6

Default CSS color variables for Tachyons

### Stats

584 | 1 | 61
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-colors
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons-colors
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons-colors.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-colors";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/tachyons-colors@5.3.6/css/tachyons-colors.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-colors">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*

   Tachyons
   COLOR VARIABLES

   Grayscale
   - Solids
   - Transparencies
   Colors

*/
:root { --black: #000; --near-black: #111; --dark-gray: #333; --mid-gray: #555; --gray: #777; --silver: #999; --light-silver: #aaa; --moon-gray: #ccc; --light-gray: #eee; --near-white: #f4f4f4; --white: #fff; --transparent: transparent; --black-90: rgba( 0, 0, 0, .9 ); --black-80: rgba( 0, 0, 0, .8 ); --black-70: rgba( 0, 0, 0, .7 ); --black-60: rgba( 0, 0, 0, .6 ); --black-50: rgba( 0, 0, 0, .5 ); --black-40: rgba( 0, 0, 0, .4 ); --black-30: rgba( 0, 0, 0, .3 ); --black-20: rgba( 0, 0, 0, .2 ); --black-10: rgba( 0, 0, 0, .1 ); --black-05: rgba( 0, 0, 0, .05 ); --black-025: rgba( 0, 0, 0, .025 ); --black-0125: rgba( 0, 0, 0, .0125 ); --white-90: rgba( 255, 255, 255, .9 ); --white-80: rgba( 255, 255, 255, .8 ); --white-70: rgba( 255, 255, 255, .7 ); --white-60: rgba( 255, 255, 255, .6 ); --white-50: rgba( 255, 255, 255, .5 ); --white-40: rgba( 255, 255, 255, .4 ); --white-30: rgba( 255, 255, 255, .3 ); --white-20: rgba( 255, 255, 255, .2 ); --white-10: rgba( 255, 255, 255, .1 ); --white-05: rgba( 255, 255, 255, .05 ); --white-025: rgba( 255, 255, 255, .025 ); --white-0125: rgba( 255, 255, 255, .0125 ); --dark-red: #e7040f; --red: #ff4136; --light-red: #ff725c; --orange: #ff6300; --gold: #ffb700; --yellow: #ffd700; --light-yellow: #fbf1a9; --purple: #5e2ca5; --light-purple: #a463f2; --dark-pink: #d5008f; --hot-pink: #ff41b4; --pink: #ff80cc; --light-pink: #ffa3d7; --dark-green: #137752; --green: #19a974; --light-green: #9eebcf; --navy: #001b44; --dark-blue: #00449e; --blue: #357edd; --light-blue: #96ccff; --lightest-blue: #cdecff; --washed-blue: #f6fffe; --washed-green: #e8fdf5; --washed-yellow: #fffceb; --washed-red: #ffdfdf; }
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC

