import path from "path";
import fs from 'fs'

const rootDirectory = path.join(process.cwd(),'content','posts')

export async function getPostBySlug(slug:string){
    const filePath = path.join(rootDirectory,`${slug}.mdx`)

    const fileContent = await fs.readFileSync(filePath, {encoding:'utf-8'})

    return fileContent
}

