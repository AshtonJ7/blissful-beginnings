const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Clothes' },
    { name: 'Care Products' },
    { name: 'Furniture' },
    { name: 'Educational Toys' },
    { name: 'Plushies' },
    { name: 'Electronics'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Sleepsuit 3-pack',
      description:
        "A pack of 3 sleepsuits that ensures your little one has a snug night's sleep. 100% cotton",
      image: 'sleepsuit-pack.jpg',
      category: categories[0]._id,
      price: 14.99,
      quantity: 500
    },
    {
      name: 'Pink Sleepsuit',
      description:
        'A pink sleepsuit with a white crown pattern for your little princess (maracas not included). 100% cotton',
      image: 'sleepsuit-girl.jpg',
      category: categories[0]._id,
      price: 7.99,
      quantity: 400
    },
    {
      name: 'Socks 3-pack',
      description:
        'A 3-pack of luxurious socks which come in dark grey, light grey, and beige. Perfect to keep feet warm and snug. 50% wool, 50% cotton.',
      image: 'socks-3-pack.jpg',
      category: categories[0]._id,
      price: 7.99,
      quantity: 300
    },
    {
      name: 'Grey Knitted Jumper',
      description:
        'For when the weather gets cold, this knitted jumper is guranteed to keep your little one warm. 100% wool',
      image: 'baby-jumper.jpg',
      category: categories[0]._id,
      price: 14.99,
      quantity: 298
    },
    {
      name: 'Animal Baby Bottle',
      category: categories[1]._id,
      description:
        'A baby bottle decorated with animals that is suitable for milk or any other cold or warm liquid. Not suitable for hot liquids.',
      image: 'baby-bottle.jpg ',
      price: 4.99,
      quantity: 550
    },
    {
      name: 'Pushchair',
      category: categories[1]._id,
      description:
        'This pushchair is suitable from birth to 10kg, ensuring a safe and pleasant experience for both your baby and you. Includes a storage compartment and reclinable seat.',
      image: 'pushchair.jpg',
      price: 199.99,
      quantity: 76
    },
    {
      name: 'Baby Powder',
      category: categories[1]._id,
      description:
        'Helps protect from rubbing and chafing and leaves skin soft, dry and feelng healthy. Purified talc fully evaluated by scientists and medical experts to ensure the safety and satisfaction for you and your baby',
      image: 'baby-powder.jpg',
      price: 7.99,
      quantity: 500
    },
    {
      name: 'Nursery Cot',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'cot.jpg',
      price: 135.99,
      quantity: 60
    },
    {
      name: 'Storage Drawers',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'drawers.jpg',
      price: 150.99,
      quantity: 45
    },
    {
      name: 'Alphabet Learning Book',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'book.jpg',
      price: 7.99,
      quantity: 1000
    },
    {
      name: 'Abacus',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'abacus.jpg',
      price: 8.99,
      quantity: 200
    },
    {
      name: 'Elephant Plush',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'elephant-plush.jpg',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Bear Plush',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'bear-plush.jpg',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Rabbit Plush',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'rabbit-plush.jpg',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Baby Monitor',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'baby-monitor.jpg',
      price: 79.99,
      quantity: 150
    },
    {
      name: 'Baby Thermometer',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'thermometer.jpg',
      price: 25.99,
      quantity: 750
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
