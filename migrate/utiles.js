import YAML from "json-to-pretty-yaml"

export function toMD(metadata, content) {
  const meta = YAML.stringify(metadata)
  const res = `---\n${meta}---\n${content}`
  return res
}
