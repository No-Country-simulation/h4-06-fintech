// Esta funcion checkea si el backend esta activo o no

import envs from '../../config/envs';

export async function isActive() {
  const url = envs.BACKEND_URL + '/';

  return fetch(url)
    .then((response) => response.ok)
    .catch(() => false);
}
