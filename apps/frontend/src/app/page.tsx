export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>{process.env.NEXT_PUBLIC_API_URL}</h1>
    </div>
  );
}
