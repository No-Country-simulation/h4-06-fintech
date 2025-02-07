import { Comment } from 'client-api/backend/modules/community/news/interface/getOne';

export const fakeComments: Comment[] = [
  {
    content:
      'Este tipo de subidas en el dólar blue solo generan más incertidumbre. ¿Qué medidas tomará el gobierno?',
    dateComment: new Date(),
    userId: 'user_123',
    newsId: 'news_1',
    createdAt: new Date(),
    id: crypto.randomUUID(),
    updatedAt: new Date(),
  },
  {
    content:
      'Bitcoin sigue demostrando su fuerza como activo de inversión. ¡Aposté por él hace meses y no me arrepiento!',
    dateComment: new Date(),
    userId: 'user_456',
    newsId: 'news_2',
    createdAt: new Date(),
    id: crypto.randomUUID(),
    updatedAt: new Date(),
  },
  {
    content:
      'La FED mantiene las tasas, pero la inflación sigue afectando a las familias. ¿Hasta cuándo seguirán con esta política?',
    dateComment: new Date(),
    userId: 'user_789',
    newsId: 'news_3',
    createdAt: new Date(),
    id: crypto.randomUUID(),
    updatedAt: new Date(),
  },
  {
    content:
      'Apple sigue creciendo, pero ¿hasta cuándo podrá mantener este ritmo? La competencia en IA se está poniendo fuerte.',
    dateComment: new Date(),
    userId: 'user_321',
    newsId: 'news_4',
    createdAt: new Date(),
    id: crypto.randomUUID(),
    updatedAt: new Date(),
  },
  {
    content:
      'El FMI siempre advirtiendo, pero poco hace para ayudar a los países en crisis. Ojalá América Latina encuentre su propio camino.',
    dateComment: new Date(),
    userId: 'user_654',
    newsId: 'news_5',
    createdAt: new Date(),
    id: crypto.randomUUID(),
    updatedAt: new Date(),
  },
];
