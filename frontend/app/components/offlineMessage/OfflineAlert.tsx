"use client";

import { Button } from "../ui/button";
import ErrorSvg from "@/(pages)/(authenticated)/onboarding/[slug]/_svg/error-svg";

export default function OfflineAlert() {
	return (
		<div className="w-full max-w-[1234px] flex flex-col items-center justify-center gap-4 p-20 ">
			<h1 className="text-4xl/[54px] text-center font-poppins-regular text-foreground w-full">
				¡Tuvimos un problema al procesar los datos de tu resumen!
			</h1>
			<h2 className="text-2xl/9 text-center font-poppins-regular text-foreground w-full">
				Parece que no tienes conexión a internet, asegurate que estes conectado
				a una red WiFi y luego haz clic en volver a intentar para cargar tus
				datos una vez más
			</h2>
			<span className="w-full max-w-[250px] h-[250px] mt-10">
				<ErrorSvg />
			</span>
			<Button
				variant={"outline"}
				type="button"
				onClick={() => window.location.reload()}
				className="w-full max-w-[360px] text-2xl/9 font-poppins-medium text-foreground h-[65px] rounded-lg drop-shadow-lg drop-shadow-black mt-20"
			>
				Volver a intentar
			</Button>
		</div>
	);
}
