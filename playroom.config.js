module.exports = {
  baseUrl: '/playroom/',
  components: './playroom/components.ts',
  outputPath: './site/out/playroom',
  title: 'Newton UI',
  snippets: './playroom/snippets.ts',
  frameComponent: './playroom/FrameComponent.tsx',
  scope: './playroom/useScope.ts',
  widths: [320, 768, 1024, 1400],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Box>
      Hello Playroom!
    </Box>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }),
};