export default async function Home() {
  let data = await fetch("http://localhost:3000/hello");
  let message = await data.text();

  return (
    <div>
      <h1>Hello! {message}</h1>
    </div>
  );
}
