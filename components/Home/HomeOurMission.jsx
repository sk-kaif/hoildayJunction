import Image from 'next/image';

const HomeOurMission = () => {
  return (
    <main className=" max-w-[1200px] mx-auto w-[90%] py-12 lg:py-16">
      <div className="">
        <div className=" md:flex justify-center ">
          <h1 className="flex-1 text-4xl md:text-[48px] md:leading-14 font-bold pb-5 md:pb-0">
            Our Mission & Values
          </h1>

          <p className="flex-1 text-sm leading-6 md:text-lg md:leading-snug lg:pb-5">
            TrustedRide has been serving the community with reliable and safe
            transportation solutions for over a decade. Our dedicated team of
            experienced drivers and staff are committed to ensuring a
            comfortable, secure, and friendly journey for every passenger,
            emphasizing safety, punctuality, and customer satisfaction.
          </p>
        </div>

        <Image
          src="/home/ourmissonBanner.webp"
          alt="Our Mission"
          width={1200}
          height={800}
          className="mt-8 w-full h-auto object-cover  shadow-lg"
        />
      </div>
    </main>
  );
};

export default HomeOurMission;
