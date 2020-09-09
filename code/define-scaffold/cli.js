#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer.prompt([
    {
        type:'input',
        name:'name',
        message:'Project name?'
    }
])
.then(anwsers => {
    console.log(anwsers)
    const tmplDir = path.join(__dirname, 'templates')

    const destDir = process.cwd()

    fs.readdir(tmplDir, (err, files) => {
        if(err) throw err
        files.forEach(file => {
            ejs.renderFile(path.join(tmplDir, file), anwsers, 
            (err, result) => {
                if(err) throw err

                console.log(result)
                fs.writeFileSync(path.join(destDir, file), result)
            })
        })
    })
})