import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Song() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Link href="/">
      <a>
        <div>Song: {id}</div>
      </a>
    </Link>
  );
}
