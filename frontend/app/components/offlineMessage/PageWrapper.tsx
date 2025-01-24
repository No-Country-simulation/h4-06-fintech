"use client";

import { useEffect, useState } from "react";
import OfflineAlert from "../offlineMessage/OfflineAlert";

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isOffline, setIsOffline] = useState(false);

	useEffect(() => {
		// Check initial online status
		setIsOffline(!navigator.onLine);

		// Add event listeners for online/offline events
		const handleOnline = () => setIsOffline(false);
		const handleOffline = () => setIsOffline(true);

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		// Cleanup event listeners
		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	if (isOffline) {
		return <OfflineAlert />;
	}

	return <>{children}</>;
}
