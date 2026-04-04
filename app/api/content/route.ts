import { NextResponse } from 'next/server';

interface ContentData {
  title: string;
  message: string;
  endpoint: string;
}

export async function GET(request: Request): Promise<NextResponse<ContentData>> {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  const content: { [key: string]: ContentData } = {
    home: {
      title: 'Fallen Souls',
      message: 'Roguelike FPS Dark Fantasy - Experiencia indie de accion y horror psicologico',
      endpoint: '/api/content?type=home',
    },
    desarrollo: {
      title: 'Development Timeline',
      message: 'Seguimiento semanal del progreso',
      endpoint: '/api/content?type=desarrollo',
    },
    media: {
      title: 'Media Gallery',
      message: 'Galeria de imagenes y videos',
      endpoint: '/api/content?type=media',
    },
  };

  if (type && content[type]) {
    return NextResponse.json(content[type]);
  }

  return NextResponse.json(
    { error: 'Content type not found' },
    { status: 404 }
  );
}
