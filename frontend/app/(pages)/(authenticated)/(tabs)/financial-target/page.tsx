import { backend } from '@api';
import { TargetsEmpty } from './_components/targets-empty';
import { TargetsList } from './_components/targets-list';

export default async function page() {
  const { target: targets } = await backend.authApi.getProfile();
  console.log({ targets });

  return targets.length ? <TargetsList targets={targets} /> : <TargetsEmpty />;
}
