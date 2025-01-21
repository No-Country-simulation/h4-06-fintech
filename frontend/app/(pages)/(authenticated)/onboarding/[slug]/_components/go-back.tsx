"use client";

import { useRouter } from "next/navigation";
import { GoBackSvg } from "../../_svgs/onbording-svg";

export function GoBack() {
	const router = useRouter();
	return (
		<div className="fixed left-8 top-8 z-50">
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
