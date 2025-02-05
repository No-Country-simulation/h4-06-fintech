import Link from "next/link";

export function HeaderLogo() {
  return (
    <section>
      <Link href={'/home'}>
        <p className='text-3xl font-semibold text-primary'>iUpi</p>
      </Link>
    </section>
  )
}
