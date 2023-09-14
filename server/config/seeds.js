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
        "A pack of 3 sleepsuits that ensures your little one has a snug night's sleep. 100% cotton.",
      image: 'sleepsuit-pack.jpg',
      category: categories[0]._id,
      price: 14.99,
      quantity: 500
    },
    {
      name: 'Pink Sleepsuit',
      description:
        'A pink sleepsuit with a white crown pattern for your little princess. 100% cotton.',
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
        "Ensure that your baby has a great night's sleep with this prestine cot that not only looks modern, but offers a comfortable, padded dreaming experience.",
      image: 'cot.jpg',
      price: 135.99,
      quantity: 60
    },
    {
      name: 'Storage Drawers',
      category: categories[2]._id,
      description:
        "Need somewhere to store your little one's clothes, toys, or care products? This compact, but roomy, set of storage drawers ensures that no mess is left around the room. Easily contructed with instructions. Comes with all necessary screws and brackets.",
      image: 'drawers.jpg',
      price: 150.99,
      quantity: 45
    },
    {
      name: 'Alphabet Learning Book',
      category: categories[3]._id,
      description:
        "It's important for your little one to learn and grow, and this alphabet book is the a must-have for any alphabet teaching. Includes fun bookmarks and stickers.",
      image: 'book.jpg',
      price: 7.99,
      quantity: 1000
    },
    {
      name: 'Abacus',
      category: categories[3]._id,
      description: "It's sometimes good to rely on the classics! This prestine, well-built, abacus will help your child with basic mathematical learning in an enjoyable manner.",
      image: 'abacus.jpg',
      price: 8.99,
      quantity: 200
    },
    {
      name: 'Elephant Plush',
      category: categories[4]._id,
      description:
        "This adorable, high-quality elephant plush is guaranteed to become your baby's cuddle companion whether out and about, or sleeping tight. Machine Washable. Suitable from birth.",
      image: 'elephant-plush.jpg',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Bear Plush',
      category: categories[4]._id,
      description:
        'This cuddly, high-quality bear plush provides a soft and huggable experience for you little one. Machine Washable. Suitable from birth.',
      image: 'bear-plush.jpg',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Rabbit Plush',
      category: categories[4]._id,
      description:
        'This soft rabbit plush has a velvety feel and floppy ears that your little one will love and cherish for years to come! Machine Washable. Suitable from birth.',
      image: 'rabbit-plush.jpg',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Baby Monitor',
      category: categories[5]._id,
      description:
        'Keep an eye on your baby at night with this state of the art baby monitor with connecting camera and small screen. You never have to worry again about your little one crying or climbing out of their cot without you knowing.',
      image: 'baby-monitor.jpg',
      price: 79.99,
      quantity: 150
    },
    {
      name: 'Baby Thermometer',
      category: categories[5]._id,
      description:
        "Check your child's temperature with ease with this oral thermometer with accurate results. This safe-to-use thermometer contains a non-mercury liquid. Keep away from children.",
      image: 'thermometer.jpg',
      price: 25.99,
      quantity: 750
    },
    {
    name: 'Toy Chest',
      category: categories[2]._id,
      description:
        "Toys all over the floor and nowhere to put them? This toy chest will fix that for you. With a large capacity and well-built wooden material, this chest is guaranteed to last you and your baby years upon years.",
      image: 'ToyChest.jpg',
      price: 84.99,
      quantity: 125
    }, 
    {
    name: 'Locomotive Animal Sounds Toy',
      category: categories[3]._id,
      description:
        "With light and sound effects, this toy allows your baby to learn animal sounds while also moving these animals on a wheelable train. Your little one is guranteed to love every second playing and learning with this animal sound toy. AA batteries not included.",
      image: 'animal-sounds.jpg',
      price: 84.99,
      quantity: 800
    },
    {
      name: 'Baby proof tablet',
        category: categories[5]._id,
        description:
          "This tablet will open up a world of adventures for your baby, allowing them to watch their favourite tv shows, videos, and movies, while also containing educational games to keep thier mind constanly working.",
        image: 'tablet.jpg',
        price: 250.99,
        quantity: 500
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
