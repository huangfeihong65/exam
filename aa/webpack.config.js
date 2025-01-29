

module.exports = {
  entry: './serve.js',
  output: {
   path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
  },
 
  target: 'node', // 将项目的目标设置为node
  externals: [  {
   
            // 可以手动排除
            'package-name': 'commonjs package-name',
        }], 


 
    
}
