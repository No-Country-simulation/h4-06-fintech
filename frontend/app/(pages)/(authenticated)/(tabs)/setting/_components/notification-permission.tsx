"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useHasMounted } from "@/hooks/use-hasmounted";

export function NotificationPermission() {
	const [permissionState, setPermissionState] =
		useState<NotificationPermission>("default");
	const hasMounted = useHasMounted();

	useEffect(() => {
		if ("Notification" in window) {
			setPermissionState(Notification.permission);
		}
	}, []);

	const requestPermission = async () => {
		try {
			const permission = await Notification.requestPermission();
			setPermissionState(permission);

			if (permission === "granted") {
				toast.success("Notificaciones activadas", {
					description: "Ahora recibirás notificaciones de nuestra aplicación",
				});
			} else {
				toast.error("Notificaciones desactivadas", {
					description: "Has elegido no recibir notificaciones",
				});
			}
		} catch (error) {
			console.error("Error al solicitar permiso de notificaciones:", error);
			toast.error("Error", {
				description: "Hubo un error al solicitar el permiso de notificaciones",
			});
		}
	};

	const disableNotifications = () => {
		toast.info("Cómo gestionar las notificaciones", {
			description: `Para cambiar la configuración de notificaciones:
   • Haz clic en el icono del candado 🔒 junto a la URL
   • Busca "Notificaciones" en el menú
   • Selecciona tu preferencia (Permitir/Bloquear)

`,
			duration: 10000,
		});
	};

	if (!hasMounted) return null;

	if (!("Notification" in window)) {
		return (
			<div className="p-4 text-center">
				<p>Las notificaciones no son compatibles con este navegador.</p>
			</div>
		);
	}

	return (
		<div className="p-4 text-center">
			<h2 className="text-lg font-semibold mb-4">
				Configuración de Notificaciones
			</h2>
			<p className="mb-4">
				Estado actual:{" "}
				<span className="font-medium">
					{permissionState === "default" && (
						<span className="text-yellow-600">No configurado</span>
					)}
					{permissionState === "granted" && (
						<span className="text-green-600">Activadas</span>
					)}
					{permissionState === "denied" && (
						<span className="text-red-600">Bloqueadas</span>
					)}
				</span>
			</p>
			{permissionState === "default" && (
				<div className="space-y-4">
					<p className="text-sm text-muted-foreground mb-4">
						Al activar las notificaciones podrás:
					</p>
					<ul className="list-disc text-left mt-2 ml-4">
						<li>Recibir alertas importantes</li>
						<li>Estar al día con las actualizaciones</li>
						<li>No perderte mensajes importantes</li>
					</ul>

					<Button onClick={requestPermission}>Activar Notificaciones</Button>
				</div>
			)}
			{permissionState === "denied" && (
				<div className="space-y-4">
					<p className="text-sm text-muted-foreground">
						Las notificaciones están bloqueadas. Para recibir actualizaciones
						importantes, necesitas habilitarlas en la configuración de tu
						navegador.
					</p>
					<Button
						variant="outline"
						onClick={disableNotifications}
						className="mt-2"
					>
						Ver instrucciones detalladas
					</Button>
				</div>
			)}
			{permissionState === "granted" && (
				<div className="space-y-4">
					<p className="text-sm text-green-600">
						¡Las notificaciones están activadas! Recibirás actualizaciones
						importantes.
					</p>
					<Button
						variant="outline"
						onClick={disableNotifications}
						className="mt-2"
					>
						Cambiar configuración de notificaciones
					</Button>
				</div>
			)}
		</div>
	);
}
