"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function OnboardingCompleted() {
	const router = useRouter();
	const searchParams = useSearchParams();

	return (
		<div className=" flex flex-col items-center justify-center gap-4 p-20">
			<h1 className=" text-center font-poppins-regular text-2xl/[30px]">
				¡
				<span className="font-poppins-semibold text-4xl/[54px]">
					Felicidades
				</span>
				! Ya analizamos tus respuestas y tu perfil tiene un enfoque{" "}
				<span className="font-poppins-semibold text-4xl/[54px]">Dinámico</span>
			</h1>
			<div className="flex flex-row gap-20 mt-10">
				<Card className="w-full max-w-[447px] h-[323px] flex flex-col justify-around items-center bg-[#D8E0F2]">
					<h2 className="text-[25px]/[37.5px] text-center font-poppins-regular">
						Si querés revisar tus respuestas, haz click en el botón{" "}
						<span className="font-poppins-medium text-3xl/5">Resumen</span>
					</h2>
					<Button
						className="w-full max-w-[360px] h-[65px] rounded-lg"
						variant="outline"
						onClick={() => router.push(`/onboarding/sumary/1?${searchParams}`)}
					>
						Resumen
					</Button>
				</Card>
				<Card className="w-full max-w-[447px] h-[323px] flex flex-col justify-around items-center bg-[#D8E0F2]">
					<h2 className="text-[25px]/[37.5px] text-center font-poppins-regular text-foreground">
						Si querés revisar tus respuestas, haz click en el botón{" "}
						<span className="font-poppins-medium text-3xl/5">Mi Perfil</span>
					</h2>
					<Button
						className="w-full max-w-[360px] h-[65px] rounded-lg"
						variant="outline"
					>
						Mi Perfil
					</Button>
				</Card>
			</div>
			<Button
				className="mt-20 w-full max-w-[360px] h-[65px] rounded-lg text-foreground font-poppins-medium text-2xl/[30px]"
				variant="secondary"
				onClick={() => router.push("/home")}
			>
				Siguiente
			</Button>
		</div>
	);
}
