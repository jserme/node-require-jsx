import * as math from './feature1.jsx'
import React from 'react'

export var PI = math.pi

export var tpl = `
  hello,world
  good body
`
export var component = class Photo extends React.Component {
  render() {
    let debugScript
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/style/style.css?v=@version" type="text/css" />
        </head>
        <body>
          {this.props.children}
          {debugScript}
          <iframe id="uploadHolder" name="uploadHolder" style={{width: 0, height: 0, border: 'none'}}></iframe>
        </body>
      </html>
    )
  }
}
