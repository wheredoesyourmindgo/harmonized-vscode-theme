
import useSWR from "swr";

// Wowee Zowee
export default function Profile() {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div className="foobar">hello {data.name}!</div>;
}
