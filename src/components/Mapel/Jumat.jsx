const Jumat = () => {
	return (
		<>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Mtk Lanjut</div>
				<div className="flex justify-center items-center text-sm">07.00-08.30</div>
			</div>
			<div
				className=" flex justify-between py-[0.50rem] w-72 px-3 opacity-60"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Bahasa Indonesia</div>
				<div className="flex justify-center items-center text-sm">8.31-09.15</div>
			</div>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="700">
				<div className="w-[50%] text-base  font-medium">Seni Budaya</div>
				<div className="flex justify-center items-center text-sm">09.16-11.05</div>
			</div>
			<div
				className=" border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="800">
				<div className="w-[50%] text-base  font-medium">Matematika Wajib</div>
				<div className="flex justify-center items-center text-sm">11.06-13.10</div>
			</div>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="1000">
				<div className="w-[50%] text-base font-medium">Fiqih</div>
				<div className="flex justify-center items-center text-sm">13.11-14.30</div>
			</div>
		</>
	)
}

export default Jumat;
