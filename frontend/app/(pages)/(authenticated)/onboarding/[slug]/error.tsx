"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import ErrorSvg from "./_svg/error-svg";

export default function ErrorOnboarding({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center gap-4 p-10 max-w-[1234px] mx-auto mt-20">
			<h2 className="text-4xl/[54px] text-center font-poppins-regular text-foreground w-full max-w-[1234px]">
				¡Tuvimos un problema al procesar los datos de tu resumen!
				<br />
				Haz clic en volver a intentar para cargar tus datos una vez más
			</h2>
			<span className="w-full max-w-[250px] h-[250px] mt-10">
				<ErrorSvg />
			</span>
			<Button
				variant={"outline"}
				type="button"
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
				className="w-full max-w-[360px] text-2xl/9 font-poppins-medium text-foreground h-[65px] rounded-lg drop-shadow-lg drop-shadow-black mt-20"
			>
				Volver a intentar
			</Button>
		</div>
	);
}
