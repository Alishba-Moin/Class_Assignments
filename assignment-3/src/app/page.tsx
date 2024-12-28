export default function Home() {
  return (
    <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-3 min-h-screen overflow-hidden">
      <div className="bg-yellow-400 row-span-5 text-[36px] text-center">Nav</div>
      <div className="bg-yellow-400 col-span-2 text-[36px] text-center">Header</div>
      <div className="bg-yellow-400 row-span-3 text-[36px] text-center">Article</div>
      <div className="bg-yellow-400 row-span-4  text-[36px] text-center">Ads</div>
      <div className="bg-yellow-400  text-[36px] text-center">Footer</div>
    </div>
  );
}
