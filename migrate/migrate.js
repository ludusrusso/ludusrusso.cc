const path = require("path")
const os = require("os")
const fs = require("fs")
const parseMD = require("parse-md")
const YAML = require("json-to-pretty-yaml")

function toMD(metadata, content) {
  const meta = YAML.stringify(metadata)
  const res = `---\n${meta}---\n${content}`
  return res
}

function getMdFile(folder, f) {
  const mdFile = path.join(folder, f, "index.md")
  if (fs.existsSync(mdFile)) {
    return mdFile
  }
  return path.join(folder, f, "index.mdx")
}

const migrateAllFiles = async (folder, dest, section) => {
  const files = fs
    .readdirSync(folder)
    //   .filter(f => ["md", "markdown"].includes(f.split(".").pop()))
    .map(f => [f, getMdFile(folder, f)])
  const destDir = path.join(dest, section)
  fs.mkdirSync(destDir, { recursive: true })
  //   files.forEach(file => migratePost(file, "..", destDir, section))
  files.forEach(dd => parseFile(...dd))
}

const reg = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)/

function parseFile(path, name) {
  const md = fs.readFileSync(name).toString()
  const data = parseMD.default(md)
  delete data.metadata.redirect_from
  const tag = data.metadata.tag || []
  const tags = data.metadata.tags || []
  data.metadata.tags = [...tags, ...tag]
  delete data.metadata.tag

  const date = new Date(data.metadata.date)
  const dateSlug = path.replace(reg, (match, _, __, ___, tt) => {
    const yy = date.getFullYear()
    const mm = `${date.getMonth() + 1}`.padStart(2, 0)
    const dd = `${date.getDate()}`.padStart(2, 0)
    return `/${yy}/${mm}/${dd}/${tt}/`
  })
  const originalSlug = path.replace(reg, (match, yy, mm, dd, tt) => {
    return `/${yy}/${mm}/${dd}/${tt}/`
  })
  if (originalSlug != dateSlug) {
    console.log(originalSlug, dateSlug)
  }
  data.metadata.path = dateSlug
  const oMD = toMD(data.metadata, data.content)
  fs.writeFileSync(name, oMD)
}

const dest = "./output"
try {
  fs.rmSync(dest, { recursive: true, force: true })
} catch {}

migrateAllFiles("../content/blog/it/", dest, "hbr")
