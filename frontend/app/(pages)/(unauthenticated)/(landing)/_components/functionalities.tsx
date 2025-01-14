const items = [
  'Definir objetivos personales y recibir recomendaciones de inversión personalizadas.',
  'Acceder a un portafolio de inversiones personalizado, adaptado al perfil del usuario y las dinámicas del mercado.',
  'Recomendaciones de inversión precisas y alineadas a sus metas.',
  'Formar parte de una comunidad en la cual miles de usuarios comparten recursos e información sobre el sistema financiero actual.',
  'Monitorear y controlar sus finanzas de manera segura y eficiente.',
];

export function Functionalities() {
  return (
    <section className='mx-auto flex max-w-screen-xl flex-col gap-6 p-6'>
      <h5 className='text-lg font-semibold'>Con iUPi, los usuarios pueden</h5>
      <ul className='grid grid-cols-3 gap-4'>
        {items.map((item) => (
          <li
            className='rounded-lg border p-4 text-primary/80 shadow-md'
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
