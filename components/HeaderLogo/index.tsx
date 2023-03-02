import Link from "next/link";
import Image from "next/image";

function HeaderLogo() {
  return (
    <>
      <Link href="/" title="Home" className="hover:opacity-75">
        <Image width={40} height={40} src="/static/logo.png" alt="logo" />
      </Link>
    </>
  );
}

export default HeaderLogo;
