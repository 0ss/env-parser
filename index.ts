import { readFileSync } from "fs"

export function envParser(FILE: string = ".env") {
  const env = readFileSync(FILE, "utf-8")
  const vars: Record<string, string> = {}
  env
    .split("\n")
    .filter((e) => e !== "" && !e.includes("#") && e !== "\r")
    .map((e) => e.replace("\r", ""))
    .forEach((e) => {
      const [key, value] = e.split("=") as any[]
      if (key && value) {
        let parsedValue: any = value
        if (!isNaN(value)) {
          parsedValue = Number(value)
        } else if (typeof value === "string") {
          parsedValue = String(value)
        } else if (typeof value === "boolean") {
          parsedValue = Boolean(value)
        }
        vars[key] = parsedValue
      }
    })
  for (const key in vars) {
    process.env[key] = vars[key]
  }
}
