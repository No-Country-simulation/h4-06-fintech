"use client";
import { Button } from "@/components/ui/button";
import { OnbordingSvg } from "../_svgs/onbording-svg";
import { useRouter } from "next/navigation";

export function WelcomeOnboarding() {
	const router = useRouter();
	return (
		<section className="flex flex-col items-center justify-center p-16 md:p-20 ">
			<h1 className="text-center text-foreground text-4xl/[3.375rem] font-poppins-semibold max-w-[1234px]">
				¡Te damos la bienvenida a{" "}
				<span className="font-poppins-semibold text-primary text-4xl/[3.375rem] ">
					IUPI
				</span>
				!
			</h1>
			<p className="text-center text-foreground text-4xl/[3.375rem] font-poppins-semibold leading-normal max-w-[1240px]">
				estamos emocionados de ser parte de tu viaje financiero
			</p>
			<div className="flex justify-end w-full my-16">
				<span className="scale-125">
					<OnbordingSvg />
				</span>
			</div>
			<span className="block w-full max-w-[1137px] text-center text-foreground text-[2.1875rem]/[3.25rem] font-poppins-regular leading-relaxed whitespace-normal mt-5 ">
				Antes de comenzar a vivir la experiencia{" "}
				<span className="font-poppins-semibold text-primary text-4xl/[3.375rem]">
					iUPi
				</span>
				, queremos hacerte unas rápidas preguntas, que nos ayudarán a definir tu
				perfil y brindarte las mejores recomendaciones personalizadas para que
				alcances tus objetivos financieros.
			</span>
			<p className="text-center text-foreground text-4xl/[3.375rem] font-poppins-semibold leading-relaxed">
				¿Empezamos?
			</p>
			<div className="flex flex-row gap-x-16 w-full justify-center mt-20">
				<Button
					className="w-full h-[65px] max-w-[360px] rounded-xl text-2xl/9 font-poppins-medium border-none hover:bg-gray-200"
					variant={"outline"}
					onClick={() => router.push("/home")}
				>

					Omitir
				</Button>
				<Button
					className="w-full h-[65px] max-w-[360px] bg-[#D8E0F2] rounded-xl text-2xl/9 font-poppins-medium text-primary hover:bg-[#D8E0F2]/80"
					variant={"secondary"}
					onClick={() => router.push("/onboarding/1")}
				>


					Continuar
				</Button>
			</div>
		</section>
	);
}
