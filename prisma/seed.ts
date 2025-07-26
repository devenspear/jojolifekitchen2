import { PrismaClient } from '@prisma/client';
import { sampleVideos, sampleProducts } from '../lib/data';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Clear existing data
  await prisma.post.deleteMany();
  await prisma.product.deleteMany();

  // Seed posts
  for (const video of sampleVideos) {
    await prisma.post.create({
      data: {
        title: video.title,
        platform: video.platform,
        videoUrl: video.videoUrl,
        thumbnail: video.thumbnail,
        datePosted: new Date(video.datePosted),
        views: video.views,
        likes: video.likes,
        tags: video.tags || [],
      },
    });
  }

  // Seed products
  for (const product of sampleProducts) {
    await prisma.product.create({
      data: {
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        description: product.description,
        productUrl: product.productUrl,
        featured: product.featured || false,
      },
    });
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }); 