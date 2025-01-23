import LoadingSvg from "../sumary/_svg/loading-svg";

function BodyLoading() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-10 max-w-[1234px] mx-auto mt-20">
			<h2 className="text-4xl/[54px] text-center font-poppins-regular text-foreground w-full max-w-[1234px]">
				Estamos definiendo tu perfil financiero...
			</h2>
			<span className="w-full max-w-[250px] h-[250px] mt-20">
				<LoadingSvg />
			</span>
		</div>
	);
}

export default function Loading() {
	return <BodyLoading />;
}
