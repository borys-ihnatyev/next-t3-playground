const imageUrls = Array<string>(40)
  .fill("https://picsum.photos/512/256")
  .map((url, index) => ({
    id: index + 1,
    url: url + "?q=" + index,
  }));

export default function HomePage() {
  return (
    <section className="flex flex-wrap">
      {imageUrls.map(({ id, url }) => (
        <div key={id} className="w-80 p-2">
          <img src={url} alt="image" />
        </div>
      ))}
    </section>
  );
}
