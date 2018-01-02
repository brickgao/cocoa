# Cocoa

A simple theme for [Hexo].

## Installation

### Install

``` bash
$ git clone git@github.com:brickgao/cocoa.git themes/cocoa
```

**Cocoa requires Hexo 3.4.4 and above.** If you would like to enable the RSS, the [hexo-generate-feed] plugin is also required.

### Enable

Modify `theme` setting in `_config.yml` to `cocoa`.

### Update

``` bash
cd themes/cocoa
git pull
```

## Configuration

``` yml
# Content
fancybox: true
```

- **rss** - RSS link
- **fancybox** - Enable [Fancybox]
- **favicon** - Favicon path

[Hexo]: https://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[hexo-generate-feed]: https://github.com/hexojs/hexo-generator-feed