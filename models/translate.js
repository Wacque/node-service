const { google } = require('translation-jsapi')

exports.translate = (req, res, next) => {
  if(req.query.text === '') {
    res.json('Erro: empty request');
  }

  google.translate(req.query.text).then(result => {
    console.log(result)
    res.json({
      res: result.result,
      msg: 'success'
    }) // result 的数据结构见下文
  })
} 


