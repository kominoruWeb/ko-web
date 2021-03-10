const fsp = require('fs').promises
const works = require('./works.json')
const workImages = require('./images.json')

;(async () => {
  const res = works.reverse().filter(work => !work.hidden).map((work, i) => {
    const images = workImages.filter(image => image.workId === work.id).map(image => ({
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
      pickup: Boolean(work.pickup),
      pickupOrder: Number(work.pickupOrder),
      order: i,
      thumbnail: images[0],
      images: images
    }
  })

  await fsp.writeFile('../src/js/works.json', JSON.stringify(res, null, '  '), 'utf8')
})()