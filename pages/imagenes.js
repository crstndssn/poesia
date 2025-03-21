import Image from 'next/image';
import '../src/app/globals.css';
import Navigation from '@/components/Navigation';

const Imagenes = () => {
  const secciones = [
    {
      titulo: 'Imágenes lindas',
      imagenes: [
        { src: '/imagenes/imagenes-lindas/3.jpg', descripcion: 'Es hermoso crear, pero no tanto como crear con otras y otros. Estudiantes crean colectivamente un poema.' },
        { src: '/imagenes/imagenes-lindas/5.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/8.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/9.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/11.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/12.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/13.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/14.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/18.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/20.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/23.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/24.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/25.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/26.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/28.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/30.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/31.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/32.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/33.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/34.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/36.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/38.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/39.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-lindas/40.jpg', descripcion: '' },
      ],
    },
    {
      titulo: 'Imágenes mas lindas',
      imagenes: [
        { src: '/imagenes/imagenes-mas-lindas/2.jpg', descripcion: 'Martes de poesía en el Programa Huila Lee y escribe, año 2018.' },
        { src: '/imagenes/imagenes-mas-lindas/6.jpg', descripcion: '' },
        { src: '/imagenes/imagenes-mas-lindas/7.jpg', descripcion: 'Abrazos y poesía en Martes de Poesía' },
        { src: '/imagenes/imagenes-mas-lindas/10.jpg', descripcion: 'Sede la Esperanza, Institución Educativa Roberto Suaza Marquinez, año 2013' },
        { src: '/imagenes/imagenes-mas-lindas/15.jpg', descripcion: 'Merienda poética a la hora del descanso, año 2016.' },
        { src: '/imagenes/imagenes-mas-lindas/17.jpg', descripcion: 'Cuba, 2015. Jornadas de literatura Infantil y Juvenil . Por primera vez Martes de Poesía fuera del país. ' },
        { src: '/imagenes/imagenes-mas-lindas/22.jpg', descripcion: 'Algún encuentro con la poesía, en la  I.E. Roberto Suaza Marquinez' },
        { src: '/imagenes/imagenes-mas-lindas/27.jpg', descripcion: 'Foro educativo municipal, de la Institución Educativa Roberto Suaza Marquinez. 2014.' },
      ],
    },
    {
      titulo: 'Grupo Focal',
      imagenes: [
        { src: '/imagenes/grupo-focal/1.jpeg', descripcion: 'Taller de Grupo Focal, investigación beca del ministerio de las culturas, el arte y los saberes 2024' },
        { src: '/imagenes/grupo-focal/2.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/3.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/4.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/5.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/6.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/7.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/8.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/9.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/10.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/11.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/12.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/13.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/14.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/15.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/16.jpeg', descripcion: '' },
        { src: '/imagenes/grupo-focal/17.jpeg', descripcion: '' },
      ],
    },
    {
      titulo: 'Entrevista Quesada',
      imagenes: [
        { src: '/imagenes/entrevista-quesada/1.jpeg', descripcion: '' },
        { src: '/imagenes/entrevista-quesada/2.jpeg', descripcion: '' },
        { src: '/imagenes/entrevista-quesada/3.jpeg', descripcion: '' }
      ],
    },

  ];

  return (

    <div className="bg-[#fffff3] bg-[url('/27.png')] bg-contain bg-center">
      <Navigation />
  
      <div className="container mx-auto px-4 py-8 pt-[11rem]">
      <div className='mb-14 text-center'>
          <h1 className='font-bold text-4xl mb-3'>MEMORIA VISUAL</h1>
          <p className='text-xl'>Fotografías de las actividades pedagógicas y de promoción de la Experiencia</p>
      </div>
        {secciones.map((seccion, index) => (
          <div key={index} className="mb-12">
            {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">{seccion.titulo}</h2> */}
            {/* Diseño Masonry en móviles y una sola fila en escritorio */}
            <div className="columns-1 md:columns-2 gap-4">
              {seccion.imagenes.map((imagen, i) => (
                <div key={i} className="break-inside-avoid rounded-lg overflow-hidden">
                  <Image
                    src={imagen.src}
                    alt={imagen.descripcion}
                    width={2000}
                    height={1000}
                    className="rounded-lg w-full"
                  />
                  <p className="mt-2 text-black text-center">{imagen.descripcion}</p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>

  );
};

export default Imagenes;
