module.exports = {
    // 页面配置
    page: {
        // 首页
        index: {
            // 入口文件
            entry: './src/index/index.js',
            // 模板文件
            template: './src/index/index.html',
            // 生成文件名
            filename: 'index.html',
            // 文件参数
            params: [
                { key: 'title', value: '周启航个人博客' }
            ],
            // 引用打包文件
            chunks: ['index']
        },
        article: {
            entry: './src/article/index.js',
            template: './src/article/index.html',
            filename: 'article.html',
            params: [
                { key: 'title', value: '文章详情' }
            ],
            chunks: ['article']
        }
    },
    // 输出配置
    output: {
        // 输出打包文件夹名
        dirname: 'dist',
        // 输出文件名
        filename: '[name].js',
        // 公开路径
        publicPath: '/'
    },
    // CSS文件名
    cssFileName: 'styles.css',
    // 公共模块文件名
    chunkFilename: '[name].js',
    // 公共文件打包重复数量
    minChunks: 2
}