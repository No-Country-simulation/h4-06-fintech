"use client";

import { useRouter } from "next/navigation";
import { GoBackSvg } from "../../_svgs/onbording-svg";

export function GoBack() {
	const router = useRouter();
	return (
		<div className="absolute -left-2 top-4 md:-left-2/4 md:top-2">
			<span
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						router.back();
					}
				}}
				className="flex cursor-pointer items-center justify-center rounded-lg p-1 transition-colors hover:bg-gray-100"
				onClick={() => router.back()}
			>
				<GoBackSvg />
			</span>
		</div>
	);
}
