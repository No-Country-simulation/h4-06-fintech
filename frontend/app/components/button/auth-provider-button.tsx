import Image from 'next/image';
import envs from '../../../config/envs';
import { Button } from '../ui/button';

interface Props {
  provider: 'Google' | 'Apple';
}

export function AuthProviderButton({ provider }: Props) {
  const iconPath =
    provider === 'Google' ? '/svg/google-icon.svg' : '/svg/apple-icon.svg';

  const redirectLink = provider === 'Google' ? '/auth/google/login' : '/apple';

  return (
    <a href={envs.BACKEND_URL + redirectLink}>
      <Button className='relative w-full bg-background text-foreground hover:bg-input'>
        <Image
          src={iconPath}
          alt={`${provider} icon`}
          width={20}
          height={20}
        />
        {provider}
      </Button>
    </a>
  );
}
