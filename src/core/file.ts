import fs from 'fs'

// 读取json文件
export const readerJson = async (fileName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const json = fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        console.log(`----- 读取${fileName}失败 ----- \n`)
        reject(err)
        return
      }

      console.log(`----- 读取${fileName}成功 ----- \n`)
      resolve(data)
    })
    return json
  })
}

// 写入json文件
export const writeJson = async (fileName: string, data: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, { encoding: 'utf-8', flag: 'w' }, (err) => {
      if (err) {
        console.log(`----- 写入${fileName}失败 ----- \n`)
        reject(err)
      }

      console.log(`----- 写入${fileName}成功 ----- \n`)
      resolve(data)
    })
  })
}
