
import './App.css'


const scholarship = [
  {
    title: "MengajiOnline.com",
    description:
      "Kini Lebih Mudah & Bersistematik Belajar Mengaji Al-Quran, Tajwid, Tadabbur Dan Lain-lain Dengan Aplikasi Mengaji Online Pertama Di Dunia.",
    websiteUrl: "https://mengajionline.com",
    logoUrl:
      "https://mengajionline.com/wp-content/uploads/2022/11/aplikasi-mengaji-online.png",
  },

];

function App() {

  return (
    <>
      <div className="mt-8 flex flex-col gap-4 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Available Scholarship For You
          </h1>
          <div className="mx-auto max-w-sm space-y-4 rounded-lg text-gray-500">
            <p className="text-sm italic">
              Study sampai ke negara china
            </p>
          </div>
        </div>
        <main className="mx-auto mt-8 flex w-full max-w-screen-lg flex-col gap-2">
          {scholarship.map((kelas) => (
            <a
              key={kelas.websiteUrl}
              target="_blank"
              href={`${kelas.websiteUrl}?ref=kelasmengaji.online`}
              className="flex cursor-pointer items-center space-x-4 rounded-lg border bg-white p-4 hover:bg-gray-50"
            >
              <img
                src={kelas.logoUrl}
                className="h-12 w-12 rounded border object-contain p-1"
                alt={`Logo ${kelas.title}`}
              />
              <div className="flex flex-col">
                <p className="font-semibold">{kelas.title}</p>
                <p className="text-sm text-gray-500">{kelas.description}</p>
              </div>
            </a>
          ))}
        </main>
    </>
  )
}

export default App
