import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        linkToOriginal: z.string().url(),
        source: z.string(),
        description: z.string(),
        date: z.date(),
        isDraft: z.boolean(),
    }),
});

const bookCollection = defineCollection({
    type: 'content',
    // example schema
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        tags: z.array(z.string()),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        content: z.string(),
        link: z.string().url(),
        language: z.enum(['en', 'es', "zh"]),
        author: z.string(),
        date: z.date(),
        isDraft: z.boolean(),
    }),
});

const videoCollection = defineCollection({
    type: 'content',
    schema: z.object({
        isDraft: z.boolean(),
    }),
});

const podcastCollection = defineCollection({
    type: 'content',
    schema: z.object({
        isDraft: z.boolean(),
    }),
});

const courseCollection = defineCollection({
    type: 'content',
    schema: z.object({
        isDraft: z.boolean(),
    }),
});

const eventCollection = defineCollection({
    type: 'content',
    schema: z.object({
        isDraft: z.boolean(),
    }),
});


// Export a single `collections` object to register collections
export const collections = {
    'articles': articleCollection,
    'books': bookCollection,
    'videos': videoCollection,
    'podcasts': podcastCollection,
    'courses': courseCollection,
    'events': eventCollection,
};