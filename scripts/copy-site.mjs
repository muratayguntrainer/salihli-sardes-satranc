import { cpSync } from 'node:fs'
cpSync('site', 'dist', { recursive: true })
console.log('site/ -> dist/ kopyalandı')
