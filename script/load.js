const fsp = require('fs').promises
const path = require('path')
const {GoogleSpreadsheet} = require('google-spreadsheet')

;(async () => {
  const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
  await doc.useApiKey(process.env.GOOGLE_API_KEY)
  console.log(process.env.SHEET_ID.split(''))
  await doc.loadInfo()

  const works = await getData(doc.sheetsByTitle['works'])
  const workImages = await getData(doc.sheetsByTitle['workImages'])

  const res = works.reverse().filter(work => !Number(work.hidden)).map((work, i) => {
    const images = workImages.filter(image => image.workId === work.id).map(image => ({
      id: image.id,
      filename: image.filename,
      width: Number(image.width),
      height: Number(image.height)
    }))
    return {
      id: work.id,
      name: {
        ja: work.name_ja,
        en: work.name_en,
        zh: work.name_zh
      },
      description: {
        ja: work.description_ja,
        en: work.description_en,
        zh: work.description_zh
      },
      pickup: Boolean(Number(work.pickup)),
      pickupOrder: Number(work.pickupOrder),
      order: i,
      thumbnail: workImages.find(workImage => workImage.id === work.pickupImageId.toString()) ?? images[0],
      images: images
    }
  })

  await fsp.writeFile(path.join(__dirname, '../src/js/works.json'), JSON.stringify(res, null, '  '), 'utf8')
})()

async function getData(sheet){
  await sheet.loadHeaderRow()
  const rows = await (await sheet.getRows()).map(row => {
    return Object.fromEntries(sheet.headerValues.map(key => [key, row[key]]))
  })
  return rows
  
}