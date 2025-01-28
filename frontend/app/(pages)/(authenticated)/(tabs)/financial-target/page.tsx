import { backend } from '@api';
import { AddTargetButton } from './_components/add-target-button';
import { TargetsEmpty } from './_components/targets-empty';
import { TargetsList } from './_components/targets-list';

export default async function page() {
  const { target: targets } = await backend.authApi.getProfile();

  return targets.length ? (
    <>
      <TargetsList targets={targets} />
      <AddTargetButton />
    </>
  ) : (
    <TargetsEmpty />
  );
}
