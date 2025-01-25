

  

const HeroSection = () => {
  const scholarship = [
      {
        title: "GREP Programe",
        sponsor: "MARA",
        description:
          "Graduate Excellence Programme 2020. In empowering the nation's human capital capacity, MARA is offering postgraduate courses to excellent graduates at many leading institutions in the world",
        dateApplication: "17 October 2020",
          websiteUrl: "https://www.mara.gov.my/en/grep-count-down-bi/",
        logoUrl:
          "https://mara.b-cdn.net/wp-content/uploads/2019/05/logo.png",
      },{
        title: "Kijang Scholarship 2024",
        sponsor: "Bank Negara Malaysia",
        description:
          "The Kijang Scholarship is awarded to eligible individuals to pursue pre-university programmes at BNM's approved pre-university colleges. This scholarship provides tuition fees, subsistence allowance, as well as related scholarship allowances.",
        dateApplication: "1 December 2024",
          websiteUrl: "https://www.bnm.gov.my/careers/scholarships",
        logoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-lZoVibARjViX2ArMMzqzrDyK4xGbaQ_hg&s",
      },
      {
        title: "GREP Programe",
        sponsor: "MARA",
        description:
          "Graduate Excellence Programme 2020. In empowering the nation's human capital capacity, MARA is offering postgraduate courses to excellent graduates at many leading institutions in the world",
        dateApplication: "17 October 2020",
          websiteUrl: "https://www.mara.gov.my/en/grep-count-down-bi/",
        logoUrl:
          "https://mara.b-cdn.net/wp-content/uploads/2019/05/logo.png",
      }
      ,{
        title: "Kijang Scholarship 2024",
        sponsor: "Bank Negara Malaysia",
        description:
          "The Kijang Scholarship is awarded to eligible individuals to pursue pre-university programmes at BNM's approved pre-university colleges. This scholarship provides tuition fees, subsistence allowance, as well as related scholarship allowances.",
        dateApplication: "1 December 2024",
          websiteUrl: "https://www.bnm.gov.my/careers/scholarships",
        logoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-lZoVibARjViX2ArMMzqzrDyK4xGbaQ_hg&s",
      }
    ]
return (
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
        <p className="font-semibold">{kelas.title} by {kelas.sponsor}</p>

        <p className="text-sm text-gray-500">{kelas.description}</p>
        <p className="text-sm text-gray-500">Last Date to Apply: {kelas.dateApplication}</p>

      </div>
    </a>
  ))}
</main>
)
}

export default HeroSection