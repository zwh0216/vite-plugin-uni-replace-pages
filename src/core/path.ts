import path from 'path'
import { fileURLToPath } from 'url'

// 当前path.js文件路径
const __filename = fileURLToPath(import.meta.url)

// 当前path.js文件所处目录路径
const __dirname = path.dirname(__filename)

export const getFullPath = (filePath: string) => {
  return path.resolve(__dirname, filePath)
}
