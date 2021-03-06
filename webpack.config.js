const path= require('path');

module.exports={
    entry: './src/index.js',
    output: {
       filename: 'main.js',
       path: path.resolve(__dirname, 'dist'),
    },
    devSerber:{
        contentBase: path.join(__dirname, 'dist'),
        compress:true,
        port:3000,
    }
}