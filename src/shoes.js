// Import all images in image folder
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(gif|jpe?g|svg|webp)$/));

const shoes = {
  'aj1-amm': {
    'model': 'A Ma Maniére x Air Jordan 1 High OG',
    'color': 'Airness',
    'image': images['AJ1-amamaniere.webp'],
    'price': '$220'
  },
  'aj1-bredtoe': {
    'model': 'Air Jordan 1 Retro High OG',
    'color': 'Bred Toe',
    'image': images['AJ1-bredtoe.webp'],
    'price': '$220'
  },
  'aj1-chicago': {
    'model': 'Air Jordan 1 Retro High OG',
    'color': 'Chicago Lost & Found',
    'image': images['AJ1-chicago.webp'],
    'price': '$220'
  },
  'aj1-shadow2': {
    'model': 'Air Jordan 1 Retro High OG',
    'color': 'Shadow 2.0',
    'image': images['AJ1-shadow2.webp'],
    'price': '$220'
  },
  'aj1-unc': {
    'model': 'Air Jordan 1 Retro High OG',
    'color': 'University Blue',
    'image': images['AJ1-unc.webp'],
    'price': '$220'
  },
  'aj1l-black': {
    'model': 'Travis Scott x Air Jordan 1 Low OG SP',
    'color': 'Black Phantom',
    'image': images['AJ1L-blackphantom.webp'],
    'price': '$150'
  },
  'aj1l-reversemocha': {
    'model': 'Travis Scott x Air Jordan 1 Low OG SP',
    'color': 'Reverse Mocha',
    'image': images['AJ1L-reversemocha.webp'],
    'price': '$150'
  },
  'aj1l-chicago': {
    'model': 'Air Jordan 1 Low OG',
    'color': 'Chicago',
    'image': images['AJ1L-chicago.webp'],
    'price': '$130'
  },
  'aj1l-neutralgrey': {
    'model': 'Air Jordan 1 Low OG',
    'color': 'Neutral Grey',
    'image': images['AJ1L-neutralgrey.webp'],
    'price': '$130'
  },
  'aj1l-starfish': {
    'model': 'Air Jordan 1 Low OG',
    'color': 'Starfish',
    'image': images['AJ1L-starfish.webp'],
    'price': '$130'
  },
  'aj1l-unc': {
    'model': 'Air Jordan 1 Low OG',
    'color': 'University Blue',
    'image': images['AJ1L-unc.webp'],
    'price': '$130'
  },
  'nb530-whiteindigo': {
    'model': 'NB 530',
    'color': 'White Natural Indigo\'',
    'image': images['NB530-whiteindigo.webp'],
    'price': '$150'
  },
  'nb550-whitegrey': {
    'model': 'NB 550',
    'color': 'White Grey\'',
    'image': images['NB550-whitegrey.webp'],
    'price': '$150'
  },
  'nb990v3-seasalt': {
    'model': 'Teddy Santis x NB 990v3 Made in USA',
    'color': 'Sea Salt',
    'image': images['NB990v3-whitegrey.webp'],
    'price': '$150'
  },
  'nb2002r-calmtaupe': {
    'model': 'NB 2002R',
    'color': 'Calm Taupe',
    'image': images['NB2002r-calmtaupe.webp'],
    'price': '$150'
  },
  'nb9060-raincloud': {
    'model': 'NB 9060',
    'color': 'Rain Cloud',
    'image': images['NB9060-raincloud.webp'],
    'price': '$150'
  }
}

export default shoes;