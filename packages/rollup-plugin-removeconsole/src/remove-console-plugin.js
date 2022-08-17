const { createFilter } = require('rollup-pluginutils')
// const path = require('path')
// const matter = require('gray-matter')
const showdown = require('showdown')

showdown.setFlavor('github')

const removeConsolePlugin = (options = {}) => {
    const {
        include,
        exclude,
        showdownOptions: showdownOpts = {},
        showdownExtensions: showdownExtns = [],
        allowImports = true,
        parseFrontMatterAsMarkdown = false,
    } = options

    showdownExtns.forEach(extension => {
        showdown.extension(extension.name, extension)
    })

    const converter = new showdown.Converter({
        metadata: true,
        ...showdownOpts,
    })

    const filter = createFilter(include, exclude)

    return {
        name: 'rollup-plugin-removeconsole',
        transform(code, id) {
            // if (!filter(id) === -1) return

            // const extension = path.extname(id)

            // if (extension !== '.md') return

            // const matterResult = matter(code)
            // const html = converter.makeHtml(matterResult.content)

            // if (parseFrontMatterAsMarkdown) {
            //     const parseFrontMatterNested = frontMatter => {
            //         Object.entries(frontMatter).forEach(([key, value]) => {
            //             // recurse
            //             if (value && typeof value === 'object') parseFrontMatterNested(value)
            //             // convert markdown and remove <p>
            //             else frontMatter[key] = converter.makeHtml(value).replace(/<\/?p[^>]*>/g, '')
            //         })
            //     }

            //     parseFrontMatterNested(matterResult.data)
            // }

            // const exportFromModule = JSON.stringify({
            //     html,
            //     metadata: matterResult.data,
            //     filename: path.basename(id),
            //     path: id,
            // })

            // return {
            //     code: allowImports ? `export default ${exportFromModule}` : exportFromModule,
            //     map: { mappings: '' },
            // }

            var consoleName = ["console", "window.console"];
            var consoleType = ["log", "info"];
            const source = code
            let regConsole = new RegExp("(" + consoleName.join("|") + ")" + ".(?:" + consoleType.join("|") + ")\\s{0,}\\([^;]*\\)(?!\\s*[;,]?\\s*\\/\\*\\s*NotClearConsole\\s*\\*\\/)\\s{0,};?", "gi");

            // console.log('rConsole', source, code, regConsole)

            // source = source.replace(rConsole, function () {
            //     return source.replaceWith || "";
            // });

            // source.replace(regConsole, "")

            const Reg = /console\.log\(.*\)/ig;
            return code.replace(Reg, "")
        },
    }
}

module.exports = removeConsolePlugin

